import Navbar from "../components/Navbar";

export default function FavoriteQuotes() {
  return (
    <div className="min-h-screen bg-black font-serif flex flex-col">
      <Navbar />

      <main className="flex flex-col items-center justify-center flex-1 px-6 py-20 text-center space-y-10 bg-dossier-panel border border-dossier-stain rounded-lg shadow-2xl w-[90%] md:w-[70%] lg:w-[55%] mx-auto opacity-0 animate-fadeIn">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-wide text-dossier-title typewriter-animated">
            Favorite Quotes
          </h1>

          <p className="text-lg md:text-xl text-dossier-ink opacity-0 animate-fadeIn animate-fadeIn-delay-100">
            Let us take a look at some of my absolute favorite quotes from the novel which in some way or another, closely illustrate the powerful message that Wein intended to elucidate:
          </p>

          <p className="text-lg md:text-xl text-dossier-ink opacity-0 animate-fadeIn animate-fadeIn-delay-200">
            <strong>Part I, Verity, pg. 201</strong><br />
            “I have told the truth. I have told the truth. I have told the truth.”<br />
            My favorite part about this quote is that its a complete lie in itself. Throughout her confession, she inserts a lot of false information intended to misdirect higher Gestapo officials. While Maddie herself claims she told the truth in one way or another, for the most part she was giving fake names & non-existent places in Britain. I think what is even more ironic about this is that Julie’s code name is Verity (which means truth), even though the first section of the novel is just her seemingly acting honest while spreading lies throughout her confession. In a way, this relates to Wein’s choice of the title.
          </p>

          <p className="text-lg md:text-xl text-dossier-ink opacity-0 animate-fadeIn animate-fadeIn-delay-300">
            <strong>Part II, Kittyhawk, pg. 228</strong><br />
            “But of all the things I’m afraid of, there’s nothing that frightens me so much as the likelihood–thenear certainty–that Julie is a prisoner of the Ormaie Gestapo. It made my spine crawl as I wrote it down and it makes me shiver again to read the words I just wrote. Must stop. This ink is amazing, it really doesn’t smear even when you cry on it.”<br />
            What really stood out to me about this quote was that it had some humor intertwined within it. While being a demonstration of Maddie’s utmost connection to Julie, it also highlights Maddie’s similar personality to Julie, both of which exerting a combination of sarcasm, humor, & courage in their darkest moments. Their similarities truly make Julie & Maddie’s friendship even more symbolic & representative of the need for happiness in the most devastating points of our lives.
          </p>

          <p className="text-lg md:text-xl text-dossier-ink opacity-0 animate-fadeIn animate-fadeIn-delay-400">
            <strong>Part II, Kittyhawk, pg. 268</strong><br />
            “I don’t believe she’s dead, I don’t believe any of their bluff and lies and bullying threats. I don’t believe she’s dead and I WON’T believe she’s dead until I hear the shots MYSELF and see her fall.”<br />
            Not only does this quote foreshadow the eventual tragedy that strikes the heart strings of Maddie, but it also demonstrates the profound connection & friendship that has remained between the two throughout time. Maddie’s refusal to consider Julie’s death even within the realm of possibility highlights their deep bond.
          </p>

          <p className="text-lg md:text-xl text-dossier-ink opacity-0 animate-fadeIn animate-fadeIn-delay-500">
            <strong>Part II, Kittyhawk, pg. 285</strong><br />
            “‘KISS ME, HARDY! Kiss me, QUICK!’ ”<br />
            To some readers, this choice might seem a bit cliché considering these are Julie’s final words to Maddie in a tragic twist in plot. However, the words are more symbolic. The phrase are believed to be the last words of Admiral Lord Nelson after the Battle of Trafalgar. Both Julie & Maddie are familiar with the phrase, making it sensible for Julie to use it as a code signal to prevent her from the prolonged pain and suffering that would come from impending mutilation. Maddie’s decision was not an end to their friendship, but rather it was the final proof of it.
          </p>
        </div>
      </main>
    </div>
  );
}
