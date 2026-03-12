export default function SpaceMapPage() {
  const zones = [
    "Accueil",
    "Module 1",
    "Module 2",
    "Module 3",
    "Zone Story",
    "Exit",
  ];

  return (
    <main className="min-h-screen bg-[#1E1E1E] flex items-center justify-center px-4 py-10">
      <div className="w-[320px] min-h-[620px] rounded-[28px] bg-gradient-to-b from-[#8E238D] via-[#4C2FAF] to-[#2137C8] p-6 text-white shadow-2xl">
        <h1 className="text-xl font-bold text-center">Plan de l’espace</h1>
        <p className="mt-2 text-center text-sm text-white/90">
          Explorez les différentes zones de l’expérience.
        </p>

        <div className="mt-8 grid grid-cols-2 gap-4">
          {zones.map((zone) => (
            <div
              key={zone}
              className="rounded-2xl bg-white/10 border border-white/10 p-4 text-center text-sm"
            >
              {zone}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}