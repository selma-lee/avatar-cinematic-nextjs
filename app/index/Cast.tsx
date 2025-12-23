"use client";

import Image from "next/image";
import Reveal from "@/components/Reveal";

const CAST = [
  { name: "Sam Worthington", role: "Jake", image: "/image/cast/Jake.jpg", bio: "Former marine turned Avatar operator and Na'vi warrior." },
  { name: "Zoe Saldaña", role: "Neytiri", image: "/image/cast/Neytiri.jpg", bio: "Na'vi princess and skilled hunter-warrior." },
  { name: "Sigourney Weaver", role: "Kiri", image: "/image/cast/Kiri.jpg", bio: "Scientist and bridge between cultures." },
  { name: "Stephen Lang", role: "Quaritch", image: "/image/cast/Quaritch.jpg", bio: "Ruthless military leader with a single-minded mission." },
  { name: "Oona Chaplin", role: "Varang", image: "/image/cast/Varang.jpg", bio: "Na'vi leader and strong community presence." },
  { name: "Kate Winslet", role: "Ronal", image: "/image/cast/Ronal.jpg", bio: "Wise Na'vi matriarch and spiritual guide." },
  { name: "Cliff Curtis", role: "Tonowari", image: "/image/cast/Tonowari.jpg", bio: "Tribal leader standing tall for his people." },
  { name: "Joel David Moore", role: "Norm", image: "/image/cast/Norm.jpg", bio: "Loyal friend and technical specialist." },
];

export default function Cast() {
  return (
    <section className="py-16 md:py-28 bg-neutral-900 px-6">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-20 text-white">
            Top Cast
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {CAST.map((member, idx) => (
            <Reveal key={member.name}>
              <div className="bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-2xl p-5 flex flex-col items-center text-center gap-3 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden ring-2 ring-white/10">
                  <Image
                    src={member.image}
                    alt={`${member.name} avatar`}
                    width={160}
                    height={160}
                    className="object-cover"
                    priority={idx === 0}
                  />
                </div>

                <div className="space-y-0">
                  <h3 className="text-lg md:text-xl font-semibold text-white">
                    {member.name}
                  </h3>
                  <p className="text-sm text-indigo-300">{member.role}</p>
                </div>

                <p className="text-sm text-neutral-300 mt-1">{member.bio}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}