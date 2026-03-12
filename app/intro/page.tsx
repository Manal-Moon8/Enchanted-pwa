import Image from "next/image";

export default function IntroPage() {
  return (
    <main className="min-h-screen bg-[#1E1E1E] flex items-center justify-center px-4 py-10">
      <div className="relative w-[280px] h-[610px] overflow-hidden rounded-[36px] shadow-2xl">
        <Image
          src="/images/intro-bg.jpeg"
          alt="Miroka intro background"
          fill
          className="object-cover"
          priority
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/20" />

        <div className="absolute top-0 left-0 w-full px-6 pt-4 text-white text-[11px] flex items-center justify-between z-10">
          <span>9:41</span>
          <div className="flex items-center gap-1">
            <span className="w-3 h-[6px] border border-white rounded-sm inline-block" />
            <span className="w-1 h-1 rounded-full bg-white inline-block" />
          </div>
        </div>

        <div className="absolute top-[210px] left-[20px] z-10">
          <span className="rounded-t-[8px] bg-[#FF7A1A] px-3 py-1 text-[10px] font-semibold text-white">
            Miroka
          </span>
        </div>

        <div className="absolute bottom-[58px] left-1/2 -translate-x-1/2 w-[86%] z-10">
          <div className="rounded-[18px] bg-[#FFF3F0] px-4 py-4 shadow-lg">
            <p className="text-[13px] leading-5 text-[#B54F8A]">
              Oh… Te voilà !<br />
              Je suis Miroka.
            </p>
          </div>

          <div className="mt-3 flex justify-end">
            <button className="flex h-[34px] w-[34px] items-center justify-center rounded-full bg-[#F3E6F5] text-[#B54F8A] shadow">
              →
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}