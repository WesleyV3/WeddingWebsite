import React from "react";

const MENU = [
  { label: "About Us", href: "/about-us" },
  { label: "Travel", href: "/travel" },
  { label: "Schedule", href: "/schedule" },
  { label: "Registry", href: "/registry" },
  { label: "RSVP", href: "/rsvp" },
  { label: "FAQ", href: "/faq" },
];

export default function Menu() {
  return (
    <nav className="w-full flex items-center gap-6 py-6 px-4 bg-black/10 dark:bg-gray-900/60 backdrop-blur-md fixed top-0 left-0 z-20">
      <a
        href="/"
        className="flex items-center gap-2 text-pink-400 hover:text-pink-600 font-bold text-2xl mr-4"
        aria-label="Home"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-7 h-7"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
        Home
      </a>
      {MENU.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className="text-white dark:text-gray-200 hover:text-pink-500 dark:hover:text-pink-400 font-semibold"
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}
