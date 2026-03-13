import Link from "next/link";

export default function AdminPage() {
  return (
    <main className="min-h-screen bg-[#111111] text-white px-6 py-12">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-4xl font-bold">Admin Dashboard</h1>
        <p className="mt-4 text-white/75">
          Interface simple de gestion du prototype PWA.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          <Link
            href="/session-code"
            className="rounded-2xl border border-white/15 p-5 transition hover:bg-white/5"
          >
            <h2 className="text-xl font-semibold">Session codes</h2>
            <p className="mt-2 text-white/70">1234, 5678, 9012</p>
          </Link>

          <Link
            href="/modules"
            className="rounded-2xl border border-white/15 p-5 transition hover:bg-white/5"
          >
            <h2 className="text-xl font-semibold">Modules</h2>
            <p className="mt-2 text-white/70">Exploration, Story, Intro</p>
          </Link>

          <Link
            href="/space-map"
            className="rounded-2xl border border-white/15 p-5 transition hover:bg-white/5"
          >
            <h2 className="text-xl font-semibold">Zones</h2>
            <p className="mt-2 text-white/70">Accueil, Plan, Exit</p>
          </Link>
        </div>

        <div className="mt-8">
          <Link
            href="/"
            className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-black"
          >
            Retour accueil
          </Link>
        </div>
      </div>
    </main>
  );
}