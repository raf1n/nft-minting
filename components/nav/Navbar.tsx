import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-6">
      <div className="flex items-center gap-2">
        <Image
          src={"/logo.png"}
          objectFit="contain"
          width={20}
          height={20}
          alt={"logo"}
        />
      </div>
      <Button className="bg-gradient-to-r from-pink-500 to-[#8b5cf6] text-white hover:opacity-90 rounded-2xl">
        <Image
          src={"/button-logo/connect.png"}
          objectFit="contain"
          width={20}
          height={20}
          alt={"logo"}
        />{" "}
        Connect Wallet
      </Button>
    </nav>
  );
};

export default Navbar;
