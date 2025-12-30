"use client";

import { useCallback, useEffect, useRef } from "react";

type Props = {
  desktopSrc: string;
  mobileSrc: string;
  poster?: string;
  className?: string;
  loop?: boolean;
  muted?: boolean;
  autoPlay?: boolean;
  style?: React.CSSProperties;
};

export default function ResponsiveVideo({
  desktopSrc,
  mobileSrc,
  poster,
  className = "",
  loop = true,
  muted = true,
  autoPlay = true,
  style = {},
}: Props) {
  const ref = useRef<HTMLVideoElement | null>(null);

  const setSrc = useCallback((video: HTMLVideoElement, isMatch: boolean) => {
    const src = isMatch ? mobileSrc : desktopSrc;
    if (!src) {
      return;
    }
    // avoid re-setting the same src
    if (video.getAttribute("data-current-src") === src) {
      return;
    }

    video.src = src;
    video.setAttribute("data-current-src", src);
    video.load();

    if (autoPlay) {
      const p = video.play();
      if (p && typeof p.then === "function") {
        p.catch(() => {
          // autoplay failed (maybe due to browser policy)
        });
      }
    }
  }, [desktopSrc, mobileSrc, autoPlay]);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    const mq = window.matchMedia("(max-width: 767px)");
    setSrc(video, mq.matches);
    const handler = () => setSrc(video, mq.matches);

    if (typeof mq.addEventListener === "function") {
      mq.addEventListener("change", handler);
    } else {
      (mq as any).addListener(handler);
    }

    return () => {
      if (typeof mq.removeEventListener === "function") {
        mq.removeEventListener("change", handler);
      } else {
        (mq as any).removeListener(handler);
      }
    };
  }, [setSrc]);

  return (
    <video
      ref={ref}
      className={className}
      poster={poster}
      muted={muted}
      loop={loop}
      style={style}
      playsInline
    />
  );
}