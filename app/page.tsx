export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm uppercase tracking-[0.2em] text-gray-500">
            Enchanted Tools
          </p>

          <h1 className="text-5xl font-bold leading-tight">
            Plateforme digitale intelligente pour améliorer l’expérience
            utilisateur
          </h1>

          <p className="mt-6 text-lg text-gray-600">
            Cette interface présente une vision simple, scalable et moderne
            d’une solution web conçue pour Enchanted Tools, avec une approche
            orientée performance, faisabilité technique et éco-conception.
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href="/admin"
              className="rounded-xl bg-black px-6 py-3 text-white transition hover:opacity-90"
            >
              Accéder au dashboard
            </a>

            <a
              href="#features"
              className="rounded-xl border border-black px-6 py-3 transition hover:bg-gray-100"
            >
              Voir les fonctionnalités
            </a>
          </div>
        </div>
      </section>

      <section id="features" className="mx-auto max-w-6xl px-6 pb-20">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border p-6 shadow-sm">
            <h2 className="text-xl font-semibold">Architecture claire</h2>
            <p className="mt-3 text-gray-600">
              Frontend Next.js, backend API routes, structure modulaire et prête
              à évoluer.
            </p>
          </div>

          <div className="rounded-2xl border p-6 shadow-sm">
            <h2 className="text-xl font-semibold">Performance</h2>
            <p className="mt-3 text-gray-600">
              Interface légère, chargement rapide, structure adaptée à une
              expérience fluide.
            </p>
          </div>

          <div className="rounded-2xl border p-6 shadow-sm">
            <h2 className="text-xl font-semibold">Éco-conception</h2>
            <p className="mt-3 text-gray-600">
              Réduction des requêtes inutiles, design simple et architecture
              sobre.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}