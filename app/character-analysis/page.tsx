import Navbar from "../../components/Navbar";

export default function CharacterAnalysis() {
  return (
    <div className="min-h-screen bg-black text-white font-serif flex flex-col">
      <Navbar />

      <main className="flex flex-col items-center justify-center flex-1 px-6 py-20 text-center space-y-10 bg-dossier-panel border border-dossier-stain rounded-lg shadow-2xl w-[90%] md:w-[70%] lg:w-[55%] mx-auto opacity-0 animate-fadeIn">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-wide text-dossier-title typewriter">
            Character Analysis
          </h1>

          <p className="text-lg md:text-xl text-dossier-ink/80 opacity-0 animate-fadeIn animate-fadeIn-delay-100">
            With there being a multitude of characters within the novel, it can be quite difficult to keep track of each character, their motivations, personality, & traits. Here is an overview of the most prominent characters within the novel, as well as a brief analysis of each one.
          </p>

          <p className="text-lg md:text-xl text-dossier-ink/80 opacity-0 animate-fadeIn animate-fadeIn-delay-200">
            <strong>Julia Beaufort-Stuart/Queenie/Verity</strong><br />
            Julia Beaufort-Stuart, also known as Queenie in her confession and Verity as her code name, is one of the main protagonists and narrates Part One of the novel in which she tells the story of the events that led up to her eventual capture by the Ormaie Gestapo. Julie is a Scottish woman born into a wealthy family who works in the SOE (Special Operations Executive) organization, and she claims that she is in the organization because she is able to speak both French and German, and she is good at making up stories (Wein 6). In addition to this, she is described as being intelligent, beautiful, & fearless, which is impressive because she remains in captivity with a likely chance of punishment, torture, and even death. Julie is best known for being best friends with Maddie Brodatt, who inevitably fails in preventing Julie’s eventual tragedy.
          </p>

          <p className="text-lg md:text-xl text-dossier-ink/80 opacity-0 animate-fadeIn animate-fadeIn-delay-300">
            <strong>Maddie Brodatt/Kittyhawk</strong><br />
            Maddie Brodatt, also associated with the codename “Kittyhawk”, is an English pilot who is part of the ATA (Air Transport Auxiliary). She is the other main protagonist of the novel, who tells her story of the events that followed her crash near Ormaie. Maddie was born into a working-class family and was comparatively born into worse conditions than Julie. Still, with the help and teachings of Dympna Wythenshawe, a female pilot who Maddie meets, Maddie is able to defy the norms of women not being fit to fly and becomes a highly valued member of the ATA. Maddie is characterized by her overwhelming amount of bravery, friendship, and her commitment to saving Julie from the Ormaie Gestapo. Maddie’s willingness to do whatever it takes to bring Julie home is an indication of her bright personality and perseverance.
          </p>

          <p className="text-lg md:text-xl text-dossier-ink/80 opacity-0 animate-fadeIn animate-fadeIn-delay-400">
            <strong>Jamie Beaufort-Stuart</strong><br />
            Jamie Beaufort-Stuart is the brother of Julie who becomes a pilot during the beginning of the war. However, during one of his flights, he was shot down over the North Sea. While at his stay in the hospital due to severe frostbite, Maddie meets Jamie for the first time. Due to their similar professions, they become well acquainted with each other, soon sparking a sense of romantic chemistry between them. At one point, when Julie recommends that Maddie fly the plane, Jamie becomes concerned that something awful will happen to her (Wein 176-177). Jamie’s care for both Julie & Maddie’s safety demonstrates his caring, thoughtful, & loving nature. Even towards the end of the novel, when Maddie informs Jamie of the bad news in regards to his sister, he understands that she was just trying to do the right thing. Despite initial skepticism at first, Jamie completely forgives Maddie upon reading Julie’s written confession. Overall, Jamie’s entire personality embodies the novel’s central themes of kindness, loyalty, and love, serving as a moral compass for both Julie and Maddie.
          </p>

          <p className="text-lg md:text-xl text-dossier-ink/80 opacity-0 animate-fadeIn animate-fadeIn-delay-500">
            <strong>SS-Hauptsturmführer von Linden/The Captain</strong><br />
            SS-Hauptsturmführer von Linden, more commonly referred to as “The Captain” or simply von Linden, is the captain and overseer of the Ormaie Gestapo who delegates punishments, torture, and executions to those who he feels deserve it most. Von Linden is feared immensely by Julie, who states he “blinds me with fear” (Wein 114). Von Linden essentially controls everything that happens to Julie, deciding if she should be tortured, what she needs to write, and ultimately her survival. However, despite his depiction as an antagonist, von Linden is just like any other human being; he experiences internal conflict. Moreover, Von Linden & Julie even develop a connection throughout Julie’s captivity, with Julie conversing with him about his daughter, Isolde, reminding von Linden that he is also a father at heart. Eventually, fearing consequences from his actions, von Linden commits suicide in fear of what higher officials may do to him. Ultimately, von Linden’s decision to kill himself was an illustration of this idea that conflict & fear is inescapable, no matter who you are.
          </p>
        </div>
      </main>
    </div>
  );
}
