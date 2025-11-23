import Navbar from "../components/Navbar";

export default function PersonalReview() {
  return (
    <div className="min-h-screen bg-black text-dossier-ink font-serif flex flex-col">
      <Navbar />

      <main className="flex items-center justify-center flex-1 px-4 py-20">
        <div className="bg-dossier-panel border border-dossier-stain rounded-lg shadow-2xl w-full max-w-4xl p-10 space-y-8">
          <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight tracking-wide text-dossier-title typewriter text-center">
            Personal Review
          </h1>

          <p className="text-lg md:text-xl text-dossier-ink/80 opacity-0 animate-fadeIn">
            After reading this novel, I am beyond shocked...
          </p>
        </div>
      </main>
    </div>
  );
}
