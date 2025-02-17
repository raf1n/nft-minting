"use client";

import { WagmiProvider } from "wagmi";
import { getDefaultConfig, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import React from "react";
import { mainnet, sepolia } from "wagmi/chains";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

type ClientProvidersProps = {
  children: React.ReactNode;
};

const config = getDefaultConfig({
  appName: "My RainbowKit App",
  projectId: "3b26653a5165b310319675326bd3ef2a",
  chains: [mainnet, sepolia],
  ssr: true,
});

const queryClient = new QueryClient();

export function ClientProviders({ children }: ClientProvidersProps) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>{children}</RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
