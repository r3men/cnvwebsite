import Navbar from "../../components/Navbar";

export default function HistoricalPremise() {
  return (
    <div className="min-h-screen bg-black text-white font-serif flex flex-col">
      <Navbar />

      <main className="flex flex-col items-center justify-center flex-1 px-6 py-20 text-center space-y-10 bg-dossier-panel border border-dossier-stain rounded-lg shadow-2xl w-[90%] md:w-[70%] lg:w-[55%] mx-auto opacity-0 animate-fadeIn">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-wide text-dossier-title typewriter">
            Historical Premise
          </h1>

          <p className="text-lg md:text-xl text-dossier-ink/80 opacity-0 animate-fadeIn animate-fadeIn-delay-100">
            In order to provide a historically accurate depiction of World War II, Wein utilized many historical terms that may have been a bit overwhelming to grasp for the reader. With that being said, here is some historical context to several of the key terms that appear most frequently throughout the novel.
          </p>

          <p className="text-lg md:text-xl text-dossier-ink/80 opacity-0 animate-fadeIn animate-fadeIn-delay-200">
            <strong>Air Transport Auxiliary (ATA)</strong><br />
            Most commonly associated with Maddie, a pilot of the ATA, the Air Transport Auxiliary was an organization composed of civilians that were responsible for transporting new, repaired, and damaged aircraft between factories, assembly plants, and maintenance depots...
          </p>

          <p className="text-lg md:text-xl text-dossier-ink/80 opacity-0 animate-fadeIn animate-fadeIn-delay-300">
            <strong>Gestapo</strong><br />
            The Gestapo, responsible for Julie’s capture, was the secret police force of Nazi Germany from 1933 up until 1945 following Germany’s surrender...
          </p>

          <p className="text-lg md:text-xl text-dossier-ink/80 opacity-0 animate-fadeIn animate-fadeIn-delay-400">
            <strong>Nacht und Nebel (Night and Fog)</strong><br />
            Nacht und Nebel was a secret order that was first issued by Adolf Hitler, which stated any people that were thought to be endangering German security or authority were to be immediately arrested...
          </p>

          <p className="text-lg md:text-xl text-dossier-ink/80 opacity-0 animate-fadeIn animate-fadeIn-delay-500">
            <strong>Special Operations Executive (SOE)</strong><br />
            The SOE was the organization that Julie was a part of, different from the ATA which Maddie was associated with...
          </p>

          <p className="text-lg md:text-xl text-dossier-ink/80 opacity-0 animate-fadeIn animate-fadeIn-delay-600">
            <strong>The French Resistance</strong><br />
            The Thibault family, the people who saved Maddie upon crashing near Ormaie, were members of the French Resistance...
          </p>
        </div>
      </main>
    </div>
  );
}
