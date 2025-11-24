import Navbar from "../components/Navbar";
import Typewriter from "../components/Typewriter";

export default function PersonalReview() {
  return (
    <div className="min-h-screen bg-black font-serif flex flex-col">
      <Navbar />

      <main className="flex flex-col items-center flex-1 px-6 py-20 space-y-10 w-[90%] md:w-[70%] lg:w-[55%] mx-auto">
        
        <div className="bg-dossier-panel border border-dossier-stain rounded-lg shadow-2xl p-10 text-center space-y-6 opacity-0 animate-fadeIn">
          <Typewriter
            text="Personal Review"
            className="text-4xl md:text-6xl font-bold text-dossier-title"
          />
          <p className="text-lg md:text-xl text-dossier-ink">
            After reading this novel, I am beyond shocked. Originally, I found myself getting lost into the immense detail & many acronyms that were introduced during Julie’s confession towards the beginning of the novel. It was so intimidating for me since I was unfamiliar with most of these terms and I continued to forget what they meant even after looking them up, simply because there were so many to remember.
          </p>
        </div>

        <div className="bg-dossier-panel border border-dossier-stain rounded-lg shadow-2xl p-8 space-y-4 opacity-0 animate-fadeIn animate-fadeIn-delay-100">
          <p className="text-lg md:text-xl text-dossier-ink">
            However, upon reading further into the novel, specifically into the climax, I found myself completely hooked on the resilient friendship between Julie & Maddie. In addition to this, I enjoyed Wein’s use of language with German & French to provide a more historically accurate portrayal of the war. Wein’s intricate design of the plotline leading up to the eventual tragedy that unfolded later in the novel continues to baffle me, considering how well written & captivating it is.
          </p>
        </div>

        <div className="bg-dossier-panel border border-dossier-stain rounded-lg shadow-2xl p-8 space-y-4 opacity-0 animate-fadeIn animate-fadeIn-delay-200">
          <p className="text-lg md:text-xl text-dossier-ink">
            Overall, I will definitely recommend this novel to other historical fiction fans that are seeking a story of many twists, turns, & most prominently a powerful depiction of the importance of friendship.
          </p>
        </div>

      </main>
    </div>
  );
}
