export default function AdminPage() {
  return (
    <main className="min-h-screen bg-gray-50 text-black">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h1 className="text-4xl font-bold">Admin Dashboard</h1>
        <p className="mt-4 text-gray-600">
          Tableau de bord simple pour illustrer la gestion du contenu,
          l’administration et la supervision fonctionnelle de la plateforme.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl bg-white p-6 shadow-sm border">
            <h2 className="text-lg font-semibold">Utilisateurs</h2>
            <p className="mt-2 text-gray-600">128 comptes simulés</p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm border">
            <h2 className="text-lg font-semibold">Interactions</h2>
            <p className="mt-2 text-gray-600">342 actions enregistrées</p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm border">
            <h2 className="text-lg font-semibold">Contenus</h2>
            <p className="mt-2 text-gray-600">12 éléments administrables</p>
          </div>
        </div>
      </section>
    </main>
  );
}