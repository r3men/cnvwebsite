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
            After reading this novel, I am beyond shocked. Originally, I found myself getting lost into the immense detail & many acronyms that were introduced during Julie’s confession towards the beginning of the novel. It was so intimidating for me since I was unfamiliar with most of these terms and I continued to forget what they meant even after looking them up, simply because there were so many to remember. However, upon reading further into the novel, specifically into the climax, I found myself completely hooked on the resilient friendship between Julie & Maddie. In addition to this, I enjoyed Wein’s use of language with German & French to provide a more historically accurate portrayal of the war. Wein’s intricate design of the plotline leading up to the eventual tragedy that unfolded later in the novel continues to baffle me, considering how well written & captivating it is. Overall, I will definitely recommend this novel to other historical fiction fans that are seeking a story of many twists, turns, & most prominently a powerful depiction of the importance of friendship.
          </p>

        </div>
      </main>
    </div>
  );
}
