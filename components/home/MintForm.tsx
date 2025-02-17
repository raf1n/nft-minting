"use client";
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useAccount } from "wagmi";
import { ethers } from "ethers";
import { BrowserProvider, JsonRpcSigner } from "ethers";
import { useMemo } from "react";
import type { Account, Chain, Client, Transport } from "viem";
import { type Config, useConnectorClient } from "wagmi";
import nftMintABI from "@/abis/NFT_ABI.json";
import { Check } from "lucide-react";
import { showToast } from "@/components/ui/custom-toast";

export function clientToSigner(client: Client<Transport, Chain, Account>) {
  const { account, chain, transport } = client;
  const network = {
    chainId: chain.id,
    name: chain.name,
    ensAddress: chain.contracts?.ensRegistry?.address,
  };
  const provider = new BrowserProvider(transport, network);
  const signer = new JsonRpcSigner(provider, account.address);
  return signer;
}

/** Hook to convert a viem Wallet Client to an ethers.js Signer. */
export function useEthersSigner({ chainId }: { chainId?: number } = {}) {
  const { data: client } = useConnectorClient<Config>({ chainId });
  return useMemo(() => (client ? clientToSigner(client) : undefined), [client]);
}

type MintFormProps = {
  onMintSuccess: () => void;
};

type NFTData = {
  name: string;
  description: string;
  logoUrl: string;
  nftId: number;
  userWalletAddress: `0x${string}` | undefined;
};

const MintForm = ({ onMintSuccess }: MintFormProps): React.JSX.Element => {
  const { address, isConnected } = useAccount();

  const [mintedNFT, setMintedNFT] = useState<NFTData | null>(null);

  console.log({ address, isConnected });

  const signer = useEthersSigner();

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    imageUrl: "",
  });
  const [loading, setLoading] = useState(false);

  // Replace with your deployed contract address
  const contractAddress = "0x743F49311A82fe72eb474c44e78Da2A6e0AE951c";

  // Generates a unique token id by calling checkId on the contract
  const generateUniqueTokenId = async (): Promise<number> => {
    if (!signer) throw new Error("No signer available");
    const contract = new ethers.Contract(contractAddress, nftMintABI, signer);
    for (let i = 0; i < 10; i++) {
      const tokenId = Math.floor(Math.random() * 1000000);
      try {
        const exists: boolean = await contract.checkId(tokenId);
        if (!exists) return tokenId;
      } catch (error) {
        console.error("Error checking token ID", error);
        showToast("Error checking token ID", "error");
        return tokenId;
      }
    }
    throw new Error("Unable to generate a unique token ID.");
  };

  // Store NFT metadata in your backend
  const storeNFTData = async (nftData: NFTData) => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/store-nft`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(nftData),
      },
    );
    if (!response.ok) throw new Error("Failed to store NFT data in backend.");
    return await response.json();
  };

  // Fetch NFT details from your backend using the minted tokenId.
  const fetchNFTData = async (tokenId: number): Promise<NFTData> => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/${tokenId}`,
    );
    if (!response.ok) throw new Error("Failed to fetch NFT data.");
    return await response.json();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (!signer) {
      showToast("Signer not available", "error");
      setLoading(false);
      return;
    }

    try {
      const tokenId = await generateUniqueTokenId();
      const nftMetadata = {
        name: formData.name,
        description: formData.description,
        logoUrl: formData.imageUrl,
        nftId: tokenId,
        userWalletAddress: address,
      };

      // Call your backend API to store metadata
      await storeNFTData(nftMetadata);

      // Construct the metadata URL for the contract mint call
      const metadataUrl = `${process.env.NEXT_PUBLIC_API_URL}/${tokenId}`;

      // Create a contract instance with ethers using the signer
      const contract = new ethers.Contract(contractAddress, nftMintABI, signer);
      const tx = await contract.mint(tokenId, metadataUrl);
      showToast(
        "Minting transaction sent. Awaiting confirmation...",
        "success",
      );
      await tx.wait();

      console.log("tx", tx);
      showToast("NFT minted successfully!", "success");

      // Fetch NFT details after minting.
      const nftData = await fetchNFTData(tokenId);
      setMintedNFT(nftData);
      onMintSuccess(); // Trigger gallery refresh
    } catch (error) {
      //@ts-expect-error error.message
      showToast(`Error: ${error?.message}`, "error");
    }
    setLoading(false);
  };

  return (
    <>
      {mintedNFT ? (
        <Card className="max-w-md mx-auto bg-gray-900/50 border-[#10b981] border mb-16 p-6">
          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 rounded-full bg-[#10b981]/20 flex items-center justify-center">
              <Check className="w-6 h-6 text-[#10b981]" />
            </div>
          </div>
          <h3 className="text-[#10b981] text-xl font-semibold mb-2">
            NFT Minted Successfully!
          </h3>
          <p className="text-gray-400 mb-4">
            Your NFT has been created and added to your collection
          </p>
          <div className="aspect-video relative mb-4 bg-[#8b5cf6] rounded-lg overflow-hidden">
            <Image
              src={mintedNFT.logoUrl}
              alt="NFT Preview"
              fill
              className="object-cover"
            />
          </div>
          <div className="text-left mb-4">
            <div className="text-sm text-gray-400">NFT Name</div>
            <div className="text-white">{mintedNFT.name}</div>
            <div className="text-sm text-gray-400 mt-2">Description</div>
            <div className="text-white">{mintedNFT.description}</div>
            <div className="text-sm text-gray-400 mt-2">NFT ID</div>
            <div className="text-[#8b5cf6]">#{mintedNFT.nftId}</div>
          </div>
          <div className="flex gap-4">
            <Button variant="outline" className="flex-1 text-white">
              Share
            </Button>
            <Button
              onClick={() => {
                setMintedNFT(null);
                setFormData({ name: "", description: "", imageUrl: "" });
              }}
              className="flex-1 bg-[#8b5cf6] hover:bg-[#7c3aed] text-white"
            >
              Mint Another
            </Button>
          </div>
        </Card>
      ) : (
        <Card className="max-w-md mx-auto mb-24 bg-[#1f2937]/50 border-0">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-6">Mint Your NFT</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm mb-2">NFT Name</label>
                <Input
                  placeholder="Enter NFT name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="bg-[#1f2937] border-0 text-white placeholder:text-gray-400"
                />
              </div>
              <div>
                <label className="block text-sm mb-2">Description</label>
                <Textarea
                  placeholder="Describe your NFT"
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                  className="bg-[#1f2937] border-0 text-white placeholder:text-gray-400 min-h-[100px]"
                />
              </div>
              <div>
                <label className="block text-sm mb-2">Image URL</label>
                <Input
                  placeholder="Enter image URL"
                  value={formData.imageUrl}
                  onChange={(e) =>
                    setFormData({ ...formData, imageUrl: e.target.value })
                  }
                  className="bg-[#1f2937] border-0 text-white placeholder:text-gray-400"
                />
              </div>
              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-pink-500 to-[#8b5cf6] text-white hover:opacity-90"
              >
                <Image
                  src={"/button-logo/mint.png"}
                  objectFit="contain"
                  width={15}
                  height={15}
                  alt={"logo"}
                />{" "}
                Mint NFT
              </Button>
            </form>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default MintForm;
