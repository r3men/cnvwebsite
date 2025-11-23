import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-dossier-paper text-dossier-ink font-serif flex flex-col">
      <Navbar />

      <main className="flex flex-col items-center justify-center flex-1 px-6 py-20 text-center space-y-10 bg-dossier-panel border border-dossier-stain rounded-lg shadow-2xl w-[90%] md:w-[70%] lg:w-[55%] mx-auto">
        
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight tracking-wide text-dossier-title typewriter">
            CODE NAME VERITY
          </h1>

          <p className="text-lg md:text-xl text-dossier-ink/80 max-w-xl mx-auto">
            A deep dive into one of the greatest, most detailed historical fiction novels of the 21st century.
          </p>
        </div>
      </main>
    </div>
  );
}
