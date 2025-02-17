import React from "react";
import { Card, CardContent } from "@/components/ui/card";

type NftGalleryProps = {
  refreshGallery: boolean;
};

const NftGallery = ({ refreshGallery }: NftGalleryProps): React.JSX.Element => {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-6">Your NFT Gallery</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-[#1f2937]/50 border-0 overflow-hidden">
          <div className="aspect-video bg-gradient-to-r from-pink-500 to-purple-500" />
          <CardContent className="p-4">
            <h3 className="font-bold mb-1">Cosmic Dreams #001</h3>
            <p className="text-sm text-[#9ca3af]">
              A journey through digital dimensions
            </p>
          </CardContent>
        </Card>
        <Card className="bg-[#1f2937]/50 border-0 overflow-hidden">
          <div className="aspect-video bg-[url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/NFT_Minting_Page__Copy_-pvOdslEgxl2swplBAVV8A2RT78aEGb.png')] bg-cover bg-center" />
          <CardContent className="p-4">
            <h3 className="font-bold mb-1">Neo Genesis #002</h3>
            <p className="text-sm text-[#9ca3af]">
              Digital evolution manifested
            </p>
          </CardContent>
        </Card>
        <Card className="bg-[#1f2937]/50 border-0 overflow-hidden">
          <div className="aspect-video bg-gradient-to-r from-purple-500 to-blue-500" />
          <CardContent className="p-4">
            <h3 className="font-bold mb-1">Digital Horizon #003</h3>
            <p className="text-sm text-[#9ca3af]">
              Where reality meets digital art
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default NftGallery;
