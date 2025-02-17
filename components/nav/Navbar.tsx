"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import WalletConnectButton from "@/components/nav/WalletConnections";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-6">
      <div className="flex items-center gap-2">
        <Image
          src={"/logo.png"}
          objectFit="contain"
          width={15}
          height={15}
          alt={"logo"}
        />
      </div>
      <ConnectButton.Custom>
        {({ account, chain, openConnectModal, mounted }) => {
          // If the component isn't mounted or the user is not connected, show your custom button.
          if (!mounted || !account) {
            return (
              <Button
                onClick={openConnectModal}
                className="bg-gradient-to-r from-pink-500 to-[#8b5cf6] text-white hover:opacity-90 rounded-2xl flex items-center gap-2"
              >
                <Image
                  src={"/button-logo/connect.png"}
                  alt="logo"
                  width={20}
                  height={20}
                  style={{ objectFit: "contain" }}
                />
                Connect Wallet
              </Button>
            );
          }
          // If connected, you can display the account information or a disconnect option
          return (
            <Button
              onClick={openConnectModal}
              className="bg-gradient-to-r from-green-500 to-green-700 text-white hover:opacity-90 rounded-2xl"
            >
              {account.displayName}
            </Button>
          );
        }}
      </ConnectButton.Custom>
    </nav>
  );
};

export default Navbar;
