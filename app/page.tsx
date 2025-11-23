import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-dossier-ink font-serif flex flex-col">
      <Navbar />

      <main className="flex items-center justify-center flex-1 px-4 py-20">
        <div className="bg-dossier-panel border border-dossier-stain rounded-lg shadow-2xl w-full max-w-4xl p-10 text-center space-y-10">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight tracking-wide text-dossier-title typewriter-animated">
              CODE NAME VERITY
            </h1>

            <p className="text-lg md:text-xl text-dossier-ink/80 max-w-2xl mx-auto">
              A deep dive into one of the greatest, most detailed historical fiction novels of the 21st century.
            </p>

            <p className="text-lg md:text-xl text-dossier-ink/80 max-w-2xl mx-auto typewriter-animated">
              Information compiled by Raymond Zhang.
            </p>
            
          </div>
        </div>
      </main>
    </div>
  );
}
