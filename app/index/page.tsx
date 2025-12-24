import Reveal from "@/components/Reveal";
import Photos from "@/index/Photos";
import Cast from "@/index/Cast";
import Link from "next/link";
import ResponsiveVideo from "@/components/ResponsiveVideo";

export default function HomePage() {
  return (
    <main className="bg-black text-white">
      <section className="relative h-screen overflow-hidden">
        <ResponsiveVideo
          desktopSrc="/video/1080-trailer.mp4"
          mobileSrc="/video/trailer.mp4"
          poster="/image/movies/avatar-bg.jpg"
          className="absolute inset-0 w-full object-cover opacity-70 h-[140%] top-[-20%]"
        />

        <div className="relative z-10 flex h-full items-center justify-center text-center px-6">
          <Reveal>
            <h1 className="text-5xl md:text-7xl font-bold tracking-wide">
              AVATAR CINEMATIC EXPERIENCE
            </h1>
            <p className="mt-6 text-lg text-gray-200 max-w-2xl mx-auto">
              A cinematic, scroll-driven experience built with Next.js
            </p>
          </Reveal>
        </div>
      </section>

      <Photos />

      <Cast />

      {/* Read Storyline CTA (home-only) */}
      <section className="max-w-6xl mx-auto px-6 py-12 text-center">
        <Link
          href="/storyline"
          className="inline-flex items-center gap-3 bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-3 rounded-full shadow-lg ring-1 ring-white/10 transition"
          aria-label="Read Storyline"
        >
          Read Storyline
        </Link>
      </section>
    </main>
  );
}
