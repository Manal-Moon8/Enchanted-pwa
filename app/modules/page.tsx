import Image from "next/image";
import Link from "next/link";

export default function ModulesPage() {
  const cards = [
    {
      title: "Dialogue",
      subtitle: "Miroka introduction",
      image: "/images/iPhone SE - 2.png",
    },
    {
      title: "Input nom",
      subtitle: "Interaction visiteur",
      image: "/images/Imput nom.png",
    },
    {
      title: "Story",
      subtitle: "Session visuelle",
      image: "/images/session.png",
    },
  ];

  return (
    <main className="min-h-screen bg-[#1E1E1E] flex items-center justify-center px-4 py-10">
      <div className="w-[340px] min-h-[650px] rounded-[28px] bg-gradient-to-b from-[#8B238E] via-[#5232B5] to-[#2D3DCC] p-5 text-white shadow-2xl">
        <h1 className="text-center text-2xl font-bold">Modules</h1>
        <p className="mt-2 text-center text-sm text-white/85">
          Découvrez les écrans interactifs de l’expérience.
        </p>

        <div className="mt-6 space-y-4">
          {cards.map((card) => (
            <div
              key={card.title}
              className="rounded-2xl bg-white/10 border border-white/10 p-3"
            >
              <div className="relative h-[170px] w-full overflow-hidden rounded-xl bg-black/20">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-contain"
                />
              </div>
              <h2 className="mt-3 text-lg font-semibold">{card.title}</h2>
              <p className="text-sm text-white/80">{card.subtitle}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 flex justify-center">
          <Link
            href="/"
            className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-[#4C2FAF]"
          >
            Retour accueil
          </Link>
        </div>
      </div>
    </main>
  );
}