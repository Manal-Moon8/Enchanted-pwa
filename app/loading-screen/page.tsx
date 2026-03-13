"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function LoadingScreenPage() {
  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => {
      router.push("/intro");
    }, 5000);

    return () => clearTimeout(timeout);
  }, [router]);

  return (
    <main className="min-h-screen bg-[#1E1E1E] flex items-center justify-center px-4 py-10">
      <div
        className="relative w-[280px] h-[610px] overflow-hidden rounded-[36px] shadow-2xl"
        style={{
          background: "linear-gradient(180deg, #8B238E 0%, #5232B5 52%, #2D3DCC 100%)",
        }}
      >
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-8 left-10 w-1 h-1 rounded-full bg-white" />
          <div className="absolute top-14 right-12 w-1 h-1 rounded-full bg-white" />
          <div className="absolute top-24 left-20 w-1 h-1 rounded-full bg-white" />
          <div className="absolute top-36 right-16 w-1 h-1 rounded-full bg-white" />
          <div className="absolute bottom-28 left-10 w-1 h-1 rounded-full bg-white" />
          <div className="absolute bottom-20 right-8 w-1 h-1 rounded-full bg-white" />
        </div>

        <div className="absolute inset-0 flex flex-col items-center justify-center px-6">
          <video
            className="w-[190px] h-[190px] rounded-2xl object-cover shadow-lg"
            autoPlay
            muted
            playsInline
            onEnded={() => router.push("/intro")}
          >
            <source src="/images/Video.mp4" type="video/mp4" />
            Votre navigateur ne supporte pas la lecture vidéo.
          </video>

          <div className="mt-8 w-[180px] h-[6px] rounded-full bg-white/25 overflow-hidden">
            <div className="h-full w-[70%] rounded-full bg-white animate-pulse" />
          </div>

          <p className="mt-5 text-center text-xs text-white/85">
            Chargement de l’expérience...
          </p>

          <Link
            href="/intro"
            className="mt-8 rounded-full bg-white px-5 py-2 text-sm font-semibold text-[#5A31B6]"
          >
            Continuer
          </Link>
        </div>
      </div>
    </main>
  );
}