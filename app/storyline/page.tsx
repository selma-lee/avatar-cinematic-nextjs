import Image from "next/image";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Storyline – Avatar",
};

const ACTS = [
  {
    title: "Avatar (2009)",
    year: "2009",
    image: "/image/movies/avatar1.jpg",
    summary:
      "A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
  },
  {
    title: "Avatar: The Way of Water (2022)",
    year: "2022",
    image: "/image/movies/avatar2.jpg",
    summary:
      "Jake Sully lives with his newfound family on Pandora. When an old threat returns, Jake and Neytiri must defend their home and family across oceans and reefs.",
  },
  {
    title: "Avatar: Fire and Ash (2025)",
    year: "2025",
    image: "/image/movies/avatar3.jpg",
    summary:
      "Jake and Neytiri's family face grief and a new aggressive tribe, the Ash People, led by Varang — forcing new alliances and difficult choices.",
  },
];

export default function StorylinePage() {
  return (
    <main className="bg-black text-white">
      <section>
        <div className="relative z-10 max-w-5xl mx-auto px-6 py-28 md:py-40 text-center">
          <Reveal>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
              The Saga of Pandora
            </h1>
            <p className="mt-6 text-lg md:text-xl text-neutral-300 max-w-3xl mx-auto">
              An epic family saga spanning oceans, tribes, and the fight to protect a
              world unlike any other.
            </p>
            <p className="mt-6 text-sm text-neutral-400">
              Scroll to explore the major chapters of the story.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Timeline / Acts */}
      <section className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ACTS.map((act, idx) => (
            <Reveal key={act.title}>
              {/* add an id so in-page anchor links work without JS */}
              <article
                id={`act-${idx + 1}`}
                className="group relative rounded-2xl overflow-hidden bg-neutral-900 shadow-lg"
              >
                <div className="relative h-74 lg:h-82 overflow-hidden">
                  <Image
                    src={act.image}
                    alt={act.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    priority={idx === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute left-4 bottom-4 text-white">
                    <p className="text-sm text-indigo-300 font-medium">{act.year}</p>
                    <h3 className="text-lg md:text-xl font-semibold">{act.title}</h3>
                  </div>
                </div>

                <div className="p-5 md:p-6">
                  <p className="text-neutral-300 text-sm leading-relaxed">{act.summary}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Extra section: Characters / quote */}
      <section className="border-t border-white/5 mt-16 py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Reveal>
            <blockquote className="text-neutral-300 italic text-lg md:text-xl">
              "Pandora isn't only a place you visit — it's a life you join."
            </blockquote>
            <p className="mt-6 text-sm text-neutral-400">
              The story continues — new tribes, new conflicts, and the enduring bond
              between family and world.
            </p>
          </Reveal>
        </div>
      </section>
    </main>
  );
}