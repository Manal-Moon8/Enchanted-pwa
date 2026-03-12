import Image from "next/image";

export default function LoadingScreenPage() {
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
          <div className="absolute top-8 left-10 w-1 h-1 rounded-full bg-white" />
          <div className="absolute top-14 right-12 w-1 h-1 rounded-full bg-white" />
          <div className="absolute top-24 left-20 w-1 h-1 rounded-full bg-white" />
          <div className="absolute top-36 right-16 w-1 h-1 rounded-full bg-white" />
          <div className="absolute bottom-28 left-10 w-1 h-1 rounded-full bg-white" />
          <div className="absolute bottom-20 right-8 w-1 h-1 rounded-full bg-white" />
        </div>

        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <Image
            src="/images/loading-logo.svg"
            alt="Loading logo"
            width={269}
            height={269}
            className="w-[170px] h-auto"
            priority
          />

          <div className="mt-10 w-[180px] h-[6px] rounded-full bg-white/90" />
        </div>
      </div>
    </main>
  );
}