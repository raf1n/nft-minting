"use client";
import React, { useState } from "react";
import Navbar from "@/components/nav/Navbar";
import Hero from "@/components/home/Hero";
import MintForm from "@/components/home/MintForm";
import NftGallery from "@/components/home/NFTGallery";
import { useAccount } from "wagmi";

const HomePage = () => {
  const [refreshGallery, setRefreshGallery] = useState(false);

  const { address, isConnected } = useAccount();

  const handleMintSuccess = () => {
    setRefreshGallery((prev) => !prev);
  };

  return (
    <div>
      <Navbar />

      <main className="container mx-auto px-6 py-12">
        {/* Hero Section */}
        <Hero />

        {/* Minting Form */}
        <MintForm onMintSuccess={handleMintSuccess} address={address} />

        {/* NFT Gallery */}

        {isConnected ? (
          <NftGallery walletAddress={address} refreshGallery={refreshGallery} />
        ) : (
          <div className="col-span-full text-center py-12 bg-[#1f2937]/50 rounded-lg">
            <p className="text-lg text-[#9ca3af]">
              Please connect your wallet to see NFT Gallery.
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default HomePage;
