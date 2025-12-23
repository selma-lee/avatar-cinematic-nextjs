"use client";

import { motion } from "framer-motion";

export default function RevealGrid({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.12,
          },
        },
      }}
      className="grid md:grid-cols-2 gap-6"
    >
      {children}
    </motion.div>
  );
}
