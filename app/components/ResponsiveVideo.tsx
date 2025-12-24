"use client";

import { useEffect, useRef } from "react";

type Props = {
  desktopSrc: string;
  mobileSrc: string;
  poster?: string;
  className?: string;
  loop?: boolean;
  muted?: boolean;
  autoPlay?: boolean;
};

export default function ResponsiveVideo({
  desktopSrc,
  mobileSrc,
  poster,
  className = "",
  loop = true,
  muted = true,
  autoPlay = true,
}: Props) {
  const ref = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    const mq = window.matchMedia("(max-width: 767px)");

    const setSrc = () => {
      const src = mq.matches ? mobileSrc : desktopSrc;
      if (!src) return;

      // avoid re-setting the same src
      if (video.getAttribute("data-current-src") === src) return;

      video.src = src;
      video.setAttribute("data-current-src", src);
      video.load();

      if (autoPlay) {
        const p = video.play();
        if (p && typeof p.then === "function") p.catch(() => {});
      }
    };

    setSrc();
    const handler = () => setSrc();

    if (typeof mq.addEventListener === "function") mq.addEventListener("change", handler);
    else (mq as any).addListener(handler);

    return () => {
      if (typeof mq.removeEventListener === "function") mq.removeEventListener("change", handler);
      else (mq as any).removeListener(handler);
    };
  }, [desktopSrc, mobileSrc, autoPlay]);

  return (
    <video
      ref={ref}
      className={className}
      poster={poster}
      muted={muted}
      loop={loop}
      playsInline
      // do not set src here — it will be set in the effect
    />
  );
}