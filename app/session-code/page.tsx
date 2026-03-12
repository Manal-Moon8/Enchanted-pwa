 import Image from "next/image";

export default function SessionCodePage() {
  return (
    <main className="min-h-screen bg-[#1E1E1E] flex items-center justify-center px-4 py-10">
      <div
        className="relative w-[280px] h-[610px] overflow-hidden rounded-[36px] shadow-2xl"
        style={{
          background:
            "linear-gradient(180deg, #8E238D 0%, #4C2FAF 52%, #2137C8 100%)",
        }}
      >
        <div className="absolute inset-0 opacity-25 pointer-events-none">
          <div className="absolute top-6 left-8 w-1 h-1 rounded-full bg-white" />
          <div className="absolute top-10 left-20 w-1 h-1 rounded-full bg-white" />
          <div className="absolute top-16 right-10 w-1 h-1 rounded-full bg-white" />
          <div className="absolute top-24 left-12 w-1 h-1 rounded-full bg-white" />
          <div className="absolute top-32 right-16 w-1 h-1 rounded-full bg-white" />
          <div className="absolute top-40 left-28 w-1 h-1 rounded-full bg-white" />
          <div className="absolute bottom-28 left-8 w-1 h-1 rounded-full bg-white" />
          <div className="absolute bottom-20 right-8 w-1 h-1 rounded-full bg-white" />
        </div>

        <div className="absolute top-0 left-0 w-full px-6 pt-4 text-white text-[11px] flex items-center justify-between z-10">
          <span>9:41</span>
          <div className="flex items-center gap-1">
            <span className="w-3 h-[6px] border border-white rounded-sm inline-block" />
            <span className="w-1 h-1 rounded-full bg-white inline-block" />
          </div>
        </div>

        <div className="absolute top-[58px] left-1/2 -translate-x-1/2 z-10">
          <Image
            src="/images/session-logo.png"
            alt="Mirokaï Experience"
            width={220}
            height={107}
            className="h-auto w-[155px]"
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
          {[0, 0, 0, 0].map((digit, index) => (
            <div
              key={index}
              className="w-[42px] h-[42px] rounded-[10px] bg-[#F2F4FF] border border-white/80 flex items-center justify-center shadow-[0_0_10px_rgba(255,255,255,0.35)]"
            >
              <span className="text-[#888EA3] text-[24px] font-bold">0</span>
            </div>
          ))}
        </div>

        <p className="absolute top-[322px] left-1/2 -translate-x-1/2 text-[7px] text-white/80 z-10">
          Je ne trouve pas mon code de session
        </p>

        <div className="absolute left-1/2 -translate-x-1/2 bottom-[58px] z-10 w-[235px]">
          <div className="grid grid-cols-3 gap-[4px]">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
              <button
                key={num}
                className="h-[28px] rounded-[4px] bg-white/10 border border-white/10 text-white text-[13px] hover:bg-white/15 transition"
              >
                {num}
              </button>
            ))}

            <div className="h-[28px]" />

            <button className="h-[28px] rounded-[4px] bg-white/10 border border-white/10 text-white text-[13px] hover:bg-white/15 transition">
              0
            </button>

            <button className="h-[28px] rounded-[4px] bg-white/10 border border-white/10 text-white text-[13px] hover:bg-white/15 transition">
              ⌫
            </button>
          </div>
        </div>

        <div className="absolute bottom-[16px] left-0 w-full text-center text-[7px] text-white/85 z-10">
          Expérience propulsée par ✦ Enchanted Tools
        </div>
      </div>
    </main>
  );
}