import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-dossier-paper text-dossier-ink font-serif">
      <main className="flex flex-col items-center justify-center px-6 py-20 text-center space-y-10 bg-dossier-panel border border-dossier-stain rounded-lg shadow-2xl w-[90%] md:w-[70%] lg:w-[55%]">
        
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight tracking-wide text-dossier-title typewriter">
            CODE NAME VERITY
          </h1>

          <p className="text-lg md:text-xl text-dossier-ink/80 max-w-xl mx-auto">
            A dossier-style deep dive into Elizabeth E. Wein’s extraordinary WWII novel of courage, loyalty, and sacrifice.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/learn"
            className="dossier-btn"
          >
            Start Learning
          </Link>

          <Link
            href="/about"
            className="dossier-btn"
          >
            Learn More
          </Link>
        </div>
      </main>
    </div>
  );
}
