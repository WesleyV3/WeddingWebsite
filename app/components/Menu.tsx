import React, { useState } from "react";
import "./Menu.css";

const MENU = [
  { label: "About Us", href: "/about-us" },
  { label: "Travel", href: "/travel" },
  { label: "Schedule", href: "/schedule" },
  { label: "Registry", href: "/registry" },
  { label: "RSVP", href: "/rsvp" },
  { label: "FAQ", href: "/faq" },
];

export default function Menu() {
  const [open, setOpen] = useState(false);
  const handleToggle = () => setOpen((o) => !o);
  const handleClose = () => setOpen(false);

  return (
    <>
      {/* Overlay for mobile menu */}
      {open && (
        <div
          className="menu-overlay"
          onClick={handleClose}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(0,0,0,0.3)",
            zIndex: 19,
            display: "block"
          }}
        ></div>
      )}
      <nav className="w-full flex items-center justify-between py-6 px-4 bg-black/10 dark:bg-gray-900/60 backdrop-blur-md fixed top-0 left-0 z-20" style={{ position: 'relative' }}>
        <a
          href="/"
          className="flex items-center gap-2 text-white hover:text-pink-600 font-bold text-2xl mr-4"
          aria-label="Home"
          style={{ fontFamily: "'Playfair Display', serif" }}
          onClick={handleClose}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-7 h-7 text-black"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
          Home
        </a>
        <div className="flex items-center">
          <div className="menu-hamburger" onClick={handleToggle} aria-label="Open menu" tabIndex={0} role="button">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
        <div className={`menu-links${open ? " open" : ""}`}>
          {MENU.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-white dark:text-gray-200 hover:text-pink-500 dark:hover:text-pink-400 font-semibold"
              onClick={handleClose}
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </>
  );
}
