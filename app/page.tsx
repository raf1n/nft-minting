import React from "react";

import HomePage from "@/components/home/page";

export default function Home() {
  return (
    <>
      <div className="min-h-screen border-2 rounded-[8px] bg-gradient-to-r from-black to-[#111827] text-white relative before:absolute before:inset-0 before:bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PGRlZnM+PHBhdHRlcm4gaWQ9ImEiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PHBhdGggZD0iTTAgMGg1djVIMHptMjAgMGg1djVoLTV6TTAgMjBoNXY1SDB6bTIwIDIwaDV2NWgtNXoiIGZpbGwtb3BhY2l0eT0iLjAyIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2EpIi8+PC9zdmc+')] before:opacity-20 before:pointer-events-none">
        <HomePage />
      </div>
    </>
  );
}
