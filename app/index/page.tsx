import Reveal from "@/components/Reveal";
import Photos from "@/index/Photos";
import Cast from "@/index/Cast";

export default function HomePage() {
  return (
    <main className="bg-black text-white">
      <section className="relative h-screen overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full object-cover opacity-70"
          style={{height: "140%", top: "-20%"}}
        >
          <source src="/video/1080.mp4" type="video/mp4" />
        </video>

        <div className="relative z-10 flex h-full items-center justify-center text-center px-6">
          <Reveal>
            <h1 className="text-5xl md:text-7xl font-bold tracking-wide">
              AVATAR: THE NEXT CHAPTER
            </h1>
            <p className="mt-6 text-lg text-gray-200 max-w-2xl mx-auto">
              A cinematic, scroll-driven experience built with Next.js
            </p>
          </Reveal>
        </div>
      </section>

      <Photos />

      <Cast />
    </main>
  );
}
