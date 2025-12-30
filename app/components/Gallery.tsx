"use client";

import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

type Props = {
  photos: string[];
  autoPlayInterval?: number;
};

export default function CinematicCarousel({
  photos,
  autoPlayInterval = 4000,
}: Props) {
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [animating, setAnimating] = useState(false);

  const controls = useAnimation();

  const count = photos.length;
  const prevIndex = (index - 1 + count) % count;
  const nextIndex = (index + 1) % count;

  // Positions tuned to your existing layout
  const CENTER = "-26%";
  const NEXT = "-59%"; // track moved left to show "next" centered
  const PREV = "7%"; // track moved right to show "prev" centered

  // keep autoplay timer (pause on hover)
  useEffect(() => {
    if (isHovered || animating) return;

    const timer = setInterval(() => {
      handleSlide(1);
    }, autoPlayInterval);

    return () => clearInterval(timer);
  }, [isHovered, autoPlayInterval, index, animating]);

  const handleSlide = async (dir: 1 | -1) => {
    if (animating) return;
    setAnimating(true);

    // decide target
    const target = dir === 1 ? NEXT : PREV;

    // animate to target (shows next/prev)
    await controls.start({
      x: target,
      transition: { duration: 0.6, ease: "easeInOut" },
    });

    // update logical index AFTER animation finishes
    setIndex((i) => (i + dir + count) % count);

    // snap back to center instantly (no transition) so DOM remains stable
    controls.set({ x: CENTER });

    // small timeout to ensure any rendering is settled before allowing another animation
    setTimeout(() => {
      setAnimating(false);
    }, 25);
  };

  return (
    <>
      <div className="relative mx-auto h-[35vh] md:h-[60vh] max-w-6xl overflow-hidden">
        {/* Track (single persistent element) */}
        <motion.div
          initial={{ x: CENTER }}
          animate={controls}
          className="absolute top-0 left-0 flex w-[210%] h-full"
        >
          {/* Previous */}
          <div className="relative w-1/3 h-full flex items-center justify-center">
            <div className="relative w-full h-full opacity-40 scale-95">
              <Image
                src={photos[prevIndex]}
                alt="Previous"
                fill
                loading="eager"
                className="object-cover rounded-xl"
              />
            </div>
          </div>

          {/* Current */}
          <div className="relative w-1/3 h-full flex items-center justify-center">
            <motion.div
              animate={{ scale: isHovered ? 1.06 : 1 }}
              transition={{ duration: 0.25 }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onTouchEnd={() => setIsHovered(false)}
              className="relative w-full h-full z-10"
            >
              <Image
                src={photos[index]}
                alt="Current"
                fill
                priority
                className="object-cover rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>

          {/* Next */}
          <div className="relative w-1/3 h-full flex items-center justify-center">
            <div className="relative w-full h-full opacity-40 scale-95">
              <Image
                src={photos[nextIndex]}
                alt="Next"
                fill
                loading="eager"
                className="object-cover rounded-xl"
              />
            </div>
          </div>
        </motion.div>

        {/* Controls */}
        <button
          onClick={() => handleSlide(-1)}
          disabled={animating}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/40 text-white p-3 rounded-full cursor-pointer disabled:opacity-50"
        >
          ‹
        </button>

        <button
          onClick={() => handleSlide(1)}
          disabled={animating}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/40 text-white p-3 rounded-full cursor-pointer disabled:opacity-50"
        >
          ›
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-6">
        {photos.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              if (i === index || animating) return;
              handleSlide(i > index ? 1 : -1);
            }}
            className={`w-2 h-2 rounded-full cursor-pointer ${
              i === index ? "bg-white" : "bg-gray-500"
            }`}
          />
        ))}
      </div>
    </>
  );
}