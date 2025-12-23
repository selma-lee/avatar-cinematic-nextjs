"use client";

import Gallery from "@/components/Gallery";
import Reveal from "@/components/Reveal";

const photos = [
  "/image/pandora/1.jpg",
  "/image/pandora/2.jpg",
  "/image/pandora/3.jpg",
  "/image/pandora/4.jpg",
  "/image/pandora/5.jpg",
  "/image/pandora/6.jpg",
  "/image/pandora/7.jpg",
  "/image/pandora/8.jpg",
  "/image/pandora/9.jpg",
  "/image/pandora/11.jpg",
  "/image/pandora/12.jpg",
  "/image/pandora/13.jpg",
];

export default function Photos() {
  return (
    <Reveal>
      <section className="py-20 md:pt-28 md:pb-32">
        <div className="mb-20 px-6 max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold mb-4">
            The World of Pandora
          </h2>
          <p className="text-gray-400 max-w-xl">
            A cinematic glimpse into Pandora.
          </p>
        </div>
        <Gallery photos={photos} />
      </section>
    </Reveal>
  );
}
