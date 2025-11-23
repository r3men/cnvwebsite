import Navbar from "../components/Navbar";

export default function FavoriteQuotes() {
  return (
    <div className="min-h-screen bg-black text-dossier-ink font-serif flex flex-col">
      <Navbar />

      <main className="flex items-center justify-center flex-1 px-4 py-20">
        <div className="bg-dossier-panel border border-dossier-stain rounded-lg shadow-2xl w-full max-w-4xl p-10 space-y-8">
          <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight tracking-wide text-dossier-title typewriter text-center">
            Favorite Quotes
          </h1>

          <p className="text-lg md:text-xl text-dossier-ink/80 opacity-0 animate-fadeIn">
            Let us take a look at some of my absolute favorite quotes from the novel...
          </p>

          <section className="space-y-6 opacity-0 animate-fadeIn delay-100">
            <h2 className="text-2xl md:text-3xl font-bold text-dossier-title hover:text-dossier-ink/90 hover:scale-105 transition-transform duration-300">
              Part I, Verity, pg. 201
            </h2>
            <p className="text-lg md:text-xl text-dossier-ink/80 italic">
              “I have told the truth. I have told the truth. I have told the truth.”
            </p>
            <p className="text-lg md:text-xl text-dossier-ink/80">
              My favorite part about this quote is that its a complete lie in itself...
            </p>
            <hr className="border-dossier-stain/50 my-6" />

            <h2 className="text-2xl md:text-3xl font-bold text-dossier-title hover:text-dossier-ink/90 hover:scale-105 transition-transform duration-300">
              Part II, Kittyhawk, pg. 228
            </h2>
            <p className="text-lg md:text-xl text-dossier-ink/80 italic">
              “But of all the things I’m afraid of...”
            </p>
            <p className="text-lg md:text-xl text-dossier-ink/80">
              What really stood out to me about this quote was that it had some humor intertwined...
            </p>
            <hr className="border-dossier-stain/50 my-6" />

            <h2 className="text-2xl md:text-3xl font-bold text-dossier-title hover:text-dossier-ink/90 hover:scale-105 transition-transform duration-300">
              Part II, Kittyhawk, pg. 268
            </h2>
            <p className="text-lg md:text-xl text-dossier-ink/80 italic">
              “I don’t believe she’s dead...”
            </p>
            <p className="text-lg md:text-xl text-dossier-ink/80">
              Not only does this quote foreshadow the eventual tragedy...
            </p>
            <hr className="border-dossier-stain/50 my-6" />

            <h2 className="text-2xl md:text-3xl font-bold text-dossier-title hover:text-dossier-ink/90 hover:scale-105 transition-transform duration-300">
              Part II, Kittyhawk, pg. 285
            </h2>
            <p className="text-lg md:text-xl text-dossier-ink/80 italic">
              “ ‘KISS ME, HARDY! Kiss me, QUICK!’ ”
            </p>
            <p className="text-lg md:text-xl text-dossier-ink/80">
              To some readers, this choice might seem a bit cliché...
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
