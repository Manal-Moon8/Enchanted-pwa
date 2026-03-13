"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SessionCodePage() {
  const [code, setCode] = useState<string[]>(["", "", "", ""]);
  const router = useRouter();

  const addDigit = (digit: string) => {
    const next = [...code];
    const emptyIndex = next.findIndex((item) => item === "");

    if (emptyIndex !== -1) {
      next[emptyIndex] = digit;
      setCode(next);

      const filled = next.every((item) => item !== "");
      if (filled) {
        setTimeout(() => {
          router.push("/loading-screen");
        }, 400);
      }
    }
  };

  const removeDigit = () => {
    const next = [...code];
    const lastFilledIndex = [...next].reverse().findIndex((item) => item !== "");

    if (lastFilledIndex !== -1) {
      const realIndex = next.length - 1 - lastFilledIndex;
      next[realIndex] = "";
      setCode(next);
    }
  };

  const resetCode = () => {
    setCode(["", "", "", ""]);
  };

  return (
    <main className="min-h-screen bg-[#1E1E1E] flex items-center justify-center px-4 py-10">
      <div
        className="relative w-[280px] h-[610px] overflow-hidden rounded-[36px] shadow-2xl"
        style={{
          background: "linear-gradient(180deg, #8B238E 0%, #5232B5 52%, #2D3DCC 100%)",
        }}
      >
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-8 left-8 w-1 h-1 rounded-full bg-white" />
          <div className="absolute top-12 left-20 w-1 h-1 rounded-full bg-white" />
          <div className="absolute top-16 right-10 w-1 h-1 rounded-full bg-white" />
          <div className="absolute top-24 left-14 w-1 h-1 rounded-full bg-white" />
          <div className="absolute top-28 right-16 w-1 h-1 rounded-full bg-white" />
          <div className="absolute top-40 left-32 w-1 h-1 rounded-full bg-white" />
          <div className="absolute bottom-24 right-10 w-1 h-1 rounded-full bg-white" />
          <div className="absolute bottom-16 left-10 w-1 h-1 rounded-full bg-white" />
        </div>

        <div className="absolute top-0 left-0 w-full px-6 pt-4 text-[11px] text-white flex items-center justify-between z-10">
          <span>9:41</span>
          <div className="flex items-center gap-1">
            <span className="w-3 h-[6px] border border-white rounded-sm inline-block" />
            <span className="w-1 h-1 rounded-full bg-white inline-block" />
          </div>
        </div>

        <div className="absolute top-[58px] left-1/2 -translate-x-1/2 z-10">
          <Image
            src="/images/session-logo.png"
            alt="Session logo"
            width={220}
            height={107}
            className="w-[155px] h-auto"
            priority
          />
        </div>

        <div className="absolute top-[195px] left-[28px] right-[28px] text-white z-10">
          <h1 className="text-[13px] font-bold leading-5">
            Entrez votre code de session
          </h1>
          <p className="mt-2 text-[9px] leading-4 text-white/90">
            Entrez le code indiqué sur votre billet
            <br />
            pour commencer l’expérience.
          </p>
        </div>

        <div className="absolute top-[270px] left-1/2 -translate-x-1/2 z-10 flex gap-[8px]">
          {code.map((digit, index) => (
            <div
              key={index}
              className="w-[42px] h-[42px] rounded-[10px] bg-[#F2F4FF] border border-white/80 flex items-center justify-center shadow-[0_0_10px_rgba(255,255,255,0.35)]"
            >
              <span className="text-[#888EA3] text-[24px] font-bold">
                {digit || "0"}
              </span>
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={resetCode}
          className="absolute top-[322px] left-1/2 -translate-x-1/2 text-[7px] text-white/80 z-10 underline"
        >
          Je ne trouve pas mon code de session
        </button>

        <div className="absolute left-1/2 -translate-x-1/2 bottom-[58px] z-10 w-[235px]">
          <div className="grid grid-cols-3 gap-[4px]">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
              <button
                key={num}
                className="h-[28px] rounded-[4px] bg-white/10 border border-white/10 text-white text-[13px] hover:bg-white/15 transition"
                type="button"
                onClick={() => addDigit(String(num))}
              >
                {num}
              </button>
            ))}

            <div className="h-[28px]" />

            <button
              className="h-[28px] rounded-[4px] bg-white/10 border border-white/10 text-white text-[13px] hover:bg-white/15 transition"
              type="button"
              onClick={() => addDigit("0")}
            >
              0
            </button>

            <button
              className="h-[28px] rounded-[4px] bg-white/10 border border-white/10 text-white text-[13px] hover:bg-white/15 transition"
              type="button"
              onClick={removeDigit}
            >
              ⌫
            </button>
          </div>
        </div>

        <div className="absolute bottom-[16px] left-0 w-full text-center text-[7px] text-white/85 z-10">
          Expérience propulsée par ✦ Enchanted Tools
        </div>

        <Link
          href="/loading-screen"
          className="absolute top-4 left-4 z-20 rounded-full bg-white/15 px-3 py-1 text-[10px] text-white"
        >
          Skip
        </Link>
      </div>
    </main>
  );
}