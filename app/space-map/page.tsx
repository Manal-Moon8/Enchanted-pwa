import Image from "next/image";
import Link from "next/link";

export default function SpaceMapPage() {
  return (
    <main className="min-h-screen bg-[#1E1E1E] flex items-center justify-center px-4 py-10">
      <div className="relative w-[320px] h-[620px] rounded-[28px] overflow-hidden bg-[#0F0F12] shadow-2xl">
        <Image
          src="/images/plan.png"
          alt="Plan de l'espace"
          fill
          className="object-contain"
          priority
        />

        <div className="absolute top-6 left-1/2 -translate-x-1/2 rounded-full bg-white/90 px-5 py-2 text-sm font-semibold text-black">
          Plan de l’espace
        </div>

        <div className="absolute inset-x-0 bottom-8 flex justify-center">
          <Link
            href="/modules"
            className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#4C2FAF] shadow-lg"
          >
            Explorer les modules
          </Link>
        </div>
      </div>
    </main>
  );
}