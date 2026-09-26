'use client';

import { useState } from "react";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav
      className="relative flex items-center justify-end py-6"
      onKeyDown={(event) => {
        if (event.key === "Escape") setIsMenuOpen(false);
      }}
    >
      <div className="hidden gap-8 md:flex">
        {links.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </div>

      <button
        type="button"
        className="rounded-md border border-zinc-700 px-3 py-2 text-lg md:hidden"
        aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isMenuOpen}
        aria-controls="mobile-navigation"
        onClick={() => setIsMenuOpen((open) => !open)}
      >
        {isMenuOpen ? "×" : "☰"}
      </button>

      <div
        id="mobile-navigation"
        className={`${isMenuOpen ? "block" : "hidden"} absolute right-0 top-full z-50 min-w-48 rounded-lg border border-zinc-800 bg-zinc-950 p-2 shadow-xl md:hidden`}
      >
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="block rounded-md px-4 py-3 text-sm text-zinc-200 transition hover:bg-zinc-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
            onClick={() => setIsMenuOpen(false)}
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}