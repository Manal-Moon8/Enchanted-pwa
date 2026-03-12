export default function AdminPage() {
  return (
    <main className="min-h-screen bg-[#111111] text-white px-6 py-12">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold">Admin Dashboard</h1>
        <p className="mt-4 text-white/75">
          Interface simple de gestion du prototype PWA.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-white/15 p-5">
            <h2 className="text-xl font-semibold">Session codes</h2>
            <p className="mt-2 text-white/70">1234, 5678, 9012</p>
          </div>
          <div className="rounded-2xl border border-white/15 p-5">
            <h2 className="text-xl font-semibold">Modules</h2>
            <p className="mt-2 text-white/70">Exploration, Story, Intro</p>
          </div>
          <div className="rounded-2xl border border-white/15 p-5">
            <h2 className="text-xl font-semibold">Zones</h2>
            <p className="mt-2 text-white/70">Accueil, Plan, Exit</p>
          </div>
        </div>
      </div>
    </main>
  );
}