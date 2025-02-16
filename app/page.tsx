import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import Navbar from "@/components/nav/Navbar";

export default function Home() {
  return (
    <>
      <div className="min-h-screen border-2 rounded-[8px] bg-gradient-to-r from-black to-[#111827] text-white relative before:absolute before:inset-0 before:bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PGRlZnM+PHBhdHRlcm4gaWQ9ImEiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PHBhdGggZD0iTTAgMGg1djVIMHptMjAgMGg1djVoLTV6TTAgMjBoNXY1SDB6bTIwIDIwaDV2NWgtNXoiIGZpbGwtb3BhY2l0eT0iLjAyIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2EpIi8+PC9zdmc+')] before:opacity-20 before:pointer-events-none">
        <Navbar />

        {/* Hero Section */}
        <main className="container mx-auto px-6 py-12">
          <div className="text-center max-w-3xl mx-auto mb-24">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Discover & Collect
              <br />
              Extraordinary NFTs
            </h1>
            <p className="text-[#9ca3af] mb-8">
              Enter the world of digital art and collectibles. Explore unique
              NFTs created by artists worldwide.
            </p>
            <div className="flex gap-4 justify-center">
              <Button className="bg-gradient-to-r from-pink-500 to-[#8b5cf6] text-white hover:opacity-90">
                Start Creating
              </Button>
              <Button
                variant="outline"
                className="text-white border-white hover:bg-white/10"
              >
                Watch Demo
              </Button>
            </div>
          </div>

          {/* Minting Form */}
          <Card className="max-w-md mx-auto mb-24 bg-[#1f2937]/50 border-0">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-6">Mint Your NFT</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm mb-2">NFT Name</label>
                  <Input
                    placeholder="Enter NFT name"
                    className="bg-[#1f2937] border-0 text-white placeholder:text-gray-400"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2">Description</label>
                  <Textarea
                    placeholder="Describe your NFT"
                    className="bg-[#1f2937] border-0 text-white placeholder:text-gray-400 min-h-[100px]"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2">Image URL</label>
                  <Input
                    placeholder="Enter image URL"
                    className="bg-[#1f2937] border-0 text-white placeholder:text-gray-400"
                  />
                </div>
                <Button className="w-full bg-gradient-to-r from-pink-500 to-[#8b5cf6] text-white hover:opacity-90">
                  Mint NFT
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* NFT Gallery */}
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
        </main>
      </div>
    </>
  );
}
