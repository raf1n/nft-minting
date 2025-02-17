import React from "react";
import { Card } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import { NFTData } from "@/components/home/MintForm";
import Image from "next/image";
import NoNftFound from "@/components/home/NoNFTFound";

type NftGalleryProps = {
  refreshGallery: boolean;
  walletAddress: `0x${string}` | undefined;
};

const NftGallery = ({
  refreshGallery,
  walletAddress,
}: NftGalleryProps): React.JSX.Element => {
  const fetchNFTGallery = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/gallery?userWalletAddress=${walletAddress}`,
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.statusText}`);
    }

    return response.json();
  };

  const { data, isLoading } = useQuery({
    queryKey: ["nftGallery", refreshGallery],
    queryFn: fetchNFTGallery,
  });

  console.log("data", data);
  return (
    <section>
      <h2 className="text-2xl font-bold mb-6">Your NFT Gallery</h2>

      {isLoading ? (
        <div className="flex justify-center">
          <LoadingSpinner size="2xl" />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data?.length > 0 ? (
            data?.map((nft: NFTData, i: number) => (
              <Card
                key={i}
                className="bg-gray-900/50 overflow-hidden border-gray-800"
              >
                <div className={`aspect-video relative `}>
                  <Image
                    src={nft.logoUrl}
                    alt={nft.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-white font-semibold mb-2">{nft.name}</h3>
                  <p className="text-gray-400 text-sm">{nft.description}</p>
                </div>
              </Card>
            ))
          ) : (
            <NoNftFound />
          )}
        </div>
      )}
    </section>
  );
};

export default NftGallery;
