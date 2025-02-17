import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="text-center max-w-3xl mx-auto mb-24">
      <h1 className="text-4xl md:text-6xl font-bold mb-6">
        Discover & Collect
        <br />
        Extraordinary NFTs
      </h1>
      <p className="text-[#9ca3af] mb-8">
        Enter the world of digital art and collectibles. Explore unique NFTs
        created by artists worldwide.
      </p>
      <div className="flex gap-4 justify-center">
        <Button className="bg-gradient-to-r from-pink-500 to-[#8b5cf6] text-white hover:opacity-90">
          <Image
            src={"/button-logo/start-creating.png"}
            objectFit="contain"
            width={15}
            height={15}
            alt={"logo"}
          />{" "}
          Start Creating
        </Button>
        <Button
          variant="outline"
          className="text-white border-white hover:bg-white/10"
        >
          <Image
            src={"/button-logo/watch-demo.png"}
            objectFit="contain"
            width={15}
            height={15}
            alt={"logo"}
          />{" "}
          Watch Demo
        </Button>
      </div>
    </div>
  );
};

export default Hero;
