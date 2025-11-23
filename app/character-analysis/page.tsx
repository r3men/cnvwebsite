import Navbar from "../components/Navbar";

export default function CharacterAnalysis() {
  return (
    <div className="min-h-screen bg-black text-dossier-ink font-serif flex flex-col">
      <Navbar />

      <main className="flex items-center justify-center flex-1 px-4 py-20">
        <div className="bg-dossier-panel border border-dossier-stain rounded-lg shadow-2xl w-full max-w-4xl p-10 space-y-8">
          <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight tracking-wide text-dossier-title typewriter text-center">
            Character Analysis
          </h1>

          <p className="text-lg md:text-xl text-dossier-ink/80 opacity-0 animate-fadeIn">
            With there being a multitude of characters within the novel, it can be quite difficult to keep track of each character, their motivations, personality, & traits...
          </p>

          <section className="space-y-6 opacity-0 animate-fadeIn delay-100">
            <h2 className="text-2xl md:text-3xl font-bold text-dossier-title hover:text-dossier-ink/90 hover:scale-105 transition-transform duration-300">
              Julia Beaufort-Stuart/Queenie/Verity
            </h2>
            <p className="text-lg md:text-xl text-dossier-ink/80">
              Julia Beaufort-Stuart, also known as Queenie...
            </p>
            <hr className="border-dossier-stain/50 my-6" />

            <h2 className="text-2xl md:text-3xl font-bold text-dossier-title hover:text-dossier-ink/90 hover:scale-105 transition-transform duration-300">
              Maddie Brodatt/Kittyhawk
            </h2>
            <p className="text-lg md:text-xl text-dossier-ink/80">
              Maddie Brodatt, also associated with the codename “Kittyhawk”...
            </p>
            <hr className="border-dossier-stain/50 my-6" />

            <h2 className="text-2xl md:text-3xl font-bold text-dossier-title hover:text-dossier-ink/90 hover:scale-105 transition-transform duration-300">
              Jamie Beaufort-Stuart
            </h2>
            <p className="text-lg md:text-xl text-dossier-ink/80">
              Jamie Beaufort-Stuart is the brother of Julie...
            </p>
            <hr className="border-dossier-stain/50 my-6" />

            <h2 className="text-2xl md:text-3xl font-bold text-dossier-title hover:text-dossier-ink/90 hover:scale-105 transition-transform duration-300">
              SS-Hauptsturmführer von Linden/The Captain
            </h2>
            <p className="text-lg md:text-xl text-dossier-ink/80">
              SS-Hauptsturmführer von Linden, more commonly referred to as “The Captain”...
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
