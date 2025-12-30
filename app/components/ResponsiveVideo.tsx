"use client";

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
  return (
    <video
      poster={poster}
      className={className}
      loop={loop}
      muted={muted}
      autoPlay={autoPlay}
      playsInline
      style={style}
    >
      <source src={mobileSrc} media="(max-width: 767px)" />
      <source src={desktopSrc} />
    </video>
  );
}