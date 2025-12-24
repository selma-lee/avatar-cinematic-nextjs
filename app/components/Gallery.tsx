"use client";

import { motion } from "framer-motion";
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
  const [direction, setDirection] = useState<1 | -1>(1);
  const [isHovered, setIsHovered] = useState(false);

  const count = photos.length;
  const prevIndex = (index - 1 + count) % count;
  const nextIndex = (index + 1) % count;

  useEffect(() => {
    if (isHovered) return;

    const timer = setInterval(() => {
      slide(1);
    }, autoPlayInterval);

    return () => clearInterval(timer);
  }, [isHovered, autoPlayInterval, index]);

  const slide = (dir: 1 | -1) => {
    setDirection(dir);
    setIndex((i) => (i + dir + count) % count);
  };

  return (
    <>
      <div className="relative mx-auto h-[35vh] md:h-[60vh] max-w-6xl overflow-hidden">
        {/* Track */}
        <motion.div
          key={index}
          initial={{ x: direction === 1 ? "7%" : "-59%" }}
          animate={{ x: "-26%" }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="absolute top-0 left-0 flex w-[210%] h-full"
        >
          {/* Previous */}
          <div className="relative w-1/3 h-full flex items-center justify-center">
            <Image
              src={photos[prevIndex]}
              alt="Previous"
              fill
              className="object-cover rounded-xl opacity-40 scale-95"
            />
          </div>

          {/* Current */}
          <div className="relative w-1/3 h-full flex items-center justify-center">
            <motion.div
              animate={{ scale: isHovered ? 1.1 : 1 }}
              transition={{ duration: 0.3 }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
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
            <Image
              src={photos[nextIndex]}
              alt="Next"
              fill
              className="object-cover rounded-xl opacity-40 scale-95"
            />
          </div>
        </motion.div>

        {/* Controls */}
        <button
          onClick={() => slide(-1)}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/40 text-white p-3 rounded-full cursor-pointer"
        >
          ‹
        </button>

        <button
          onClick={() => slide(1)}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/40 text-white p-3 rounded-full cursor-pointer"
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
              setDirection(i > index ? 1 : -1);
              setIndex(i);
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
