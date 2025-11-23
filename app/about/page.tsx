export default function About() {
  return (
    <main className="min-h-screen bg-black text-gray-100 font-sans">
      {/* Header Section */}
      <section className="bg-gradient-to-b from-blue-900/30 to-black py-20 text-center border-b border-blue-900/40">
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
          About This Project
        </h1>
        <p className="text-gray-400 mt-4 text-lg max-w-2xl mx-auto">
          A deeper look into the research and inspiration behind this digital tribute to
          <span className="text-blue-400"> Code Name Verity</span>.
        </p>
      </section>

      {/* Main Content */}
      <section className="max-w-5xl mx-auto px-6 py-16 space-y-16">
        
        {/* Mission */}
        <article>
          <h2 className="text-3xl font-semibold mb-4 text-blue-400">Purpose</h2>
          <p className="text-gray-300 leading-relaxed">
            This website was created to explore, honor, and analyze *Code Name Verity* by Elizabeth E. Wein— 
            a novel rich with historical detail, emotional depth, and powerful themes of friendship,
            sacrifice, and resistance.  
            <br /><br />
            The goal is to give readers a resource that blends literary insight with factual 
            historical context, helping bring the world of the novel to life.
          </p>
        </article>

        {/* Sources */}
        <article>
          <h2 className="text-3xl font-semibold mb-4 text-blue-400">Sources Cited</h2>
          <p className="text-gray-300 mb-4">
            Below are the historical and literary sources referenced while creating this project:
          </p>

          <ul className="space-y-4">

            {/* 1 */}
            <li className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-4">
              <a
                href="https://www.kenleyrevival.org/content/history/women-at-war/air-transport-auxiliary"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 underline transition-colors text-lg font-medium"
              >
                “The Air Transport Auxiliary.” Kenley Revival
              </a>
              <p className="text-gray-300 mt-2 leading-relaxed">
                Used for understanding the real historical role of women pilots in the ATA, reflecting Maddie’s background.
              </p>
            </li>

            {/* 2 */}
            <li className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-4">
              <a
                href="https://www.britannica.com/topic/Gestapo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 underline transition-colors text-lg font-medium"
              >
                “Gestapo | Nazi Political Police.” Encyclopaedia Britannica
              </a>
              <p className="text-gray-300 mt-2 leading-relaxed">
                Provided background on the structure and operations of the Gestapo, relevant to Von Linden’s role in the novel.
              </p>
            </li>

            {/* 3 */}
            <li className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-4">
              <a
                href="https://www.britannica.com/topic/Night-and-Fog-Decree"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 underline transition-colors text-lg font-medium"
              >
                “Night and Fog Decree.” Encyclopaedia Britannica
              </a>
              <p className="text-gray-300 mt-2 leading-relaxed">
                Used to contextualize Nazi interrogation tactics and prisoner disappearance, relevant to Julie’s captivity.
              </p>
            </li>

            {/* 4 */}
            <li className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-4">
              <a
                href="https://guides.loc.gov/french-resistance-world-war-two"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 underline transition-colors text-lg font-medium"
              >
                Spencer, Erika Hope. “Overview of the French Resistance.” Library of Congress
              </a>
              <p className="text-gray-300 mt-2 leading-relaxed">
                Supported research into the French Resistance movements that play a major role in the story.
              </p>
            </li>

            {/* 5 */}
            <li className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-4">
              <a
                href="https://www.iwm.org.uk/history/soe-the-secret-british-organisation-of-the-second-world-war"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 underline transition-colors text-lg font-medium"
              >
                “SOE: The Secret British Organisation of the Second World War.” Imperial War Museums
              </a>
              <p className="text-gray-300 mt-2 leading-relaxed">
                Referenced for understanding British intelligence operations, paralleling Julie’s role as a covert operative.
              </p>
            </li>

            {/* 6 */}
            <li className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-4">
              <span className="text-blue-400 text-lg font-medium">
                Wein, Elizabeth. <i>Code Name Verity.</i> Hyperion, 2012.
              </span>
              <p className="text-gray-300 mt-2 leading-relaxed">
                The core literary source inspiring this project and its analysis.
              </p>
            </li>
          </ul>
        </article>
      </section>

      {/* Footer */}
      <footer className="border-t border-blue-900/40 py-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Code Name Verity Project. All rights reserved.
      </footer>
    </main>
  );
}
