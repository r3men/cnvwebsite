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
            Most commonly associated with Maddie, a pilot of the ATA, the Air Transport Auxiliary was an organization composed of civilians that were responsible for transporting new, repaired, and damaged aircraft between factories, assembly plants, and maintenance depots. These aircraft would then be moved to airfields ready to be used. While the organization was originally intended to just be a way for civilians to assist with transportation inefficiencies, it evolved to free up space for other pilots to take on combat roles instead. This is comparable to the WAAF (Woman’s Auxiliary Air Force), which had a similar positive outcome for British air forces.
          </p>

          <p className="text-lg md:text-xl text-dossier-ink/80 opacity-0 animate-fadeIn animate-fadeIn-delay-300">
            <strong>Gestapo</strong><br />
            The Gestapo, responsible for Julie’s capture, was the secret police force of Nazi Germany from 1933 up until 1945 following Germany’s surrender. This police force was responsible for the arrests of many groups of people, including leftists, intellectuals, Jews, trade unionists, political clergy, spies, and homosexuals. These arrests ultimately resulted in these people being redirected & sent to Nazi concentration camps where they faced harsh treatment and extensive labor. Although considered relatively small in size, its influence, authority, and ability to instill fear with those who misbehaved made their efforts incredibly successful. This force was spread out in numerous cities throughout Nazi-occupied territories in different proportions depending on city population. In Code Name Verity, the Gestapo controls the city of Ormaie, where Julie is being held captive.
          </p>

          <p className="text-lg md:text-xl text-dossier-ink/80 opacity-0 animate-fadeIn animate-fadeIn-delay-400">
            <strong>Nacht und Nebel (Night and Fog)</strong><br />
            Nacht und Nebel was a secret order that was first issued by Adolf Hitler, which stated any people that were thought to be endangering German security or authority were to be immediately arrested, and then they would be either shot or sent to concentration camps. The name comes from the idea that these people would be hidden into the night and fog never to be seen again, a recurring fear that Julie has of never being seen again and reconnecting with Maddie or her family.
          </p>

          <p className="text-lg md:text-xl text-dossier-ink/80 opacity-0 animate-fadeIn animate-fadeIn-delay-500">
            <strong>Special Operations Executive (SOE)</strong><br />
            The SOE was the organization that Julie was a part of, different from the ATA which Maddie was associated with. The Special Operations Executive was a secret British World War II organization that was first established in July 1940. Their main instruction from Winston Churchill was to “set Europe ablaze”. This meant coordinating with local resistance movements, conducting espionage in enemy territory, as well as sabotaging infrastructure of the Axis powers. Both women and men were present in this organization, with females specializing in espionage, sabotage, & being wireless operators.
          </p>

          <p className="text-lg md:text-xl text-dossier-ink/80 opacity-0 animate-fadeIn animate-fadeIn-delay-600">
            <strong>The French Resistance</strong><br />
            The Thibault family, the people who saved Maddie upon crashing near Ormaie, were members of the French Resistance, a fierce minority in France that fought relentlessly against Nazi invaders during the war. These people failed to accept the new government that had been established under Nazi collaboration, the Vichy regime, and conducted acts of espionage, sabotage, & warfare against Nazi occupants within France. Fighters of the resistance involved both the French & English, having the same goal of defeating or at least attempting to withstand the Nazi regime. Specifically, some members of the resistance coordinated with British forces to transport injured fighters back to England, in a way showing a level of resemblance to the Thibault family. In the novel, Paul, head of the Damask Resistance Circuit, also happened to be an English SOE agent, just like Julie. Because of Paul, Maddie learned how to handle and shoot guns, along with learning how to make explosives. In several ways, Maddie’s ultimate survival was contingent on the valiant efforts of members of the French Resistance.
          </p>
        </div>
      </main>
    </div>
  );
}
