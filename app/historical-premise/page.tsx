import Navbar from "../components/Navbar";

export default function HistoricalPremise() {
  return (
    <div className="min-h-screen bg-black text-dossier-ink font-serif flex flex-col">
      <Navbar />

      <main className="flex items-center justify-center flex-1 px-4 py-20">
        <div className="bg-dossier-panel border border-dossier-stain rounded-lg shadow-2xl w-full max-w-4xl p-10 space-y-8">
          <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight tracking-wide text-dossier-title typewriter text-center">
            Historical Premise
          </h1>

          <p className="text-lg md:text-xl text-dossier-ink/80 opacity-0 animate-fadeIn">
            In order to provide a historically accurate depiction of World War II, Wein utilized many historical terms that may have been a bit overwhelming to grasp for the reader. With that being said, here is some historical context to several of the key terms that appear most frequently throughout the novel.
          </p>

          <section className="space-y-6 opacity-0 animate-fadeIn delay-100">
            <h2 className="text-2xl md:text-3xl font-bold text-dossier-title hover:text-dossier-ink/90 hover:scale-105 transition-transform duration-300">
              Air Transport Auxiliary (ATA)
            </h2>
            <p className="text-lg md:text-xl text-dossier-ink/80">
              Most commonly associated with Maddie, a pilot of the ATA...
            </p>
            <hr className="border-dossier-stain/50 my-6" />

            <h2 className="text-2xl md:text-3xl font-bold text-dossier-title hover:text-dossier-ink/90 hover:scale-105 transition-transform duration-300">
              Gestapo
            </h2>
            <p className="text-lg md:text-xl text-dossier-ink/80">
              The Gestapo, responsible for Julie’s capture...
            </p>
            <hr className="border-dossier-stain/50 my-6" />

            <h2 className="text-2xl md:text-3xl font-bold text-dossier-title hover:text-dossier-ink/90 hover:scale-105 transition-transform duration-300">
              Nacht und Nebel (Night and Fog)
            </h2>
            <p className="text-lg md:text-xl text-dossier-ink/80">
              Nacht und Nebel was a secret order that was first issued by Adolf Hitler...
            </p>
            <hr className="border-dossier-stain/50 my-6" />

            <h2 className="text-2xl md:text-3xl font-bold text-dossier-title hover:text-dossier-ink/90 hover:scale-105 transition-transform duration-300">
              Special Operations Executive (SOE)
            </h2>
            <p className="text-lg md:text-xl text-dossier-ink/80">
              The SOE was the organization that Julie was a part of...
            </p>
            <hr className="border-dossier-stain/50 my-6" />

            <h2 className="text-2xl md:text-3xl font-bold text-dossier-title hover:text-dossier-ink/90 hover:scale-105 transition-transform duration-300">
              The French Resistance
            </h2>
            <p className="text-lg md:text-xl text-dossier-ink/80">
              The Thibault family, the people who saved Maddie upon crashing near Ormaie...
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
