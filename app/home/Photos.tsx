import Image from "next/image";
import RevealGrid from "@/components/RevealGrid";
import RevealItem from "@/components/RevealItem";

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
  "/image/pandora/10.jpg",
  "/image/pandora/11.jpg",
  "/image/pandora/12.jpg",
  "/image/pandora/13.jpg",
];

export default function Photos() {
  return (
    <section className="py-32 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-semibold mb-10">
        The World of Pandora
      </h2>

      <RevealGrid>
        {photos.map((src, i) => (
          <RevealItem key={i}>
            <Image
              src={src}
              alt="Pandora landscape"
              width={600}
              height={400}
              className="rounded-xl"
            />
          </RevealItem>
        ))}
      </RevealGrid>
    </section>
  );
}
