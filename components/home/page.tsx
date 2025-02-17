"use client";
import React, { useState } from "react";
import Navbar from "@/components/nav/Navbar";
import Hero from "@/components/home/Hero";
import MintForm from "@/components/home/MintForm";
import NftGallery from "@/components/home/NFTGallery";

const HomePage = () => {
  const [refreshGallery, setRefreshGallery] = useState(false);

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
        <MintForm onMintSuccess={handleMintSuccess} />

        {/* NFT Gallery */}
        <NftGallery refreshGallery={refreshGallery} />
      </main>
    </div>
  );
};

export default HomePage;
