"use client";

import Navbar from "@/components/Navbar";
import LandingPage from "./landing/page";

export default function Home() {

  return (
    <main className="h-full w-full">
      <Navbar />
      <LandingPage />
    </main>
  );
}
