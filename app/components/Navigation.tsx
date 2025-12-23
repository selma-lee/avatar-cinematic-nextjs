"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 bg-black/60 backdrop-blur-md border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3" onClick={closeMenu}>
          <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-indigo-500 to-emerald-400 flex items-center justify-center text-black font-bold">
            A
          </div>
          <span className="font-semibold text-white text-lg tracking-wide">
            AVATAR
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-white/80 hover:text-white transition">
            Home
          </Link>
          <Link href="/storyline" className="text-white/80 hover:text-white transition">
            Storyline
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            aria-label="Open menu"
            className="p-2 text-white/80 hover:text-white transition"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Slide-Over Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/95 border-t border-white/5">
          <div className="px-6 py-4 flex flex-col gap-4">
            <Link
              href="/"
              className="text-white/80 hover:text-white py-2 transition"
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link
              href="/storyline"
              className="text-white/80 hover:text-white py-2 transition"
              onClick={closeMenu}
            >
              Storyline
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}