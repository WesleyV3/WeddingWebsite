
import React, { useState } from "react";
import Menu from "../components/Menu";

const PHOTOS = [
  "/background.jpg",
];

const NAMES = "Wesley & Kaylea"; // Replace with actual names
const WEDDING_DATE: Date = new Date("2026-05-23T13:30:00"); // Set your wedding date

const MENU = [
  { label: "About Us", href: "/about-us" },
  { label: "Travel", href: "/travel" },
  { label: "Schedule", href: "/schedule" },
  { label: "Registry", href: "/registry" },
  { label: "RSVP", href: "/rsvp" },
  { label: "FAQ", href: "/faq" },
];


function getCountdown(date: Date | null) {
  if (!date) return "To be determined";
  const now = new Date();
  const diff = date.getTime() - now.getTime();
  if (diff <= 0) return "Today!";
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  return `${days} day${days !== 1 ? "s" : ""} `;
}

export function meta() {
  return [
    { title: `${NAMES} Wedding` },
    {
      name: "description",
      content:
        WEDDING_DATE && typeof WEDDING_DATE.getTime === "function"
          ? `Join us for our wedding on ${WEDDING_DATE.toLocaleDateString()}`
          : "Join us for our wedding. Date to be determined."
    },
  ];
}

export default function Home() {
  const [photoIdx] = useState(0); // For future: add carousel support
  return (
  <main className="relative min-h-screen w-full bg-black" style={{ fontFamily: "'Playfair Display', serif" }}>
      {/* Fullscreen Photo */}
      <img
        src={PHOTOS[photoIdx]}
        alt="Wedding"
        className="fixed inset-0 w-full h-full object-cover object-center z-0"
        style={{ minHeight: '100vh', minWidth: '100vw' }}
      />
      {/* Overlay */}
      <div className="relative z-10 flex flex-col min-h-screen w-full">
        {/* Top Menu */}
  <Menu />
        {/* Centered Content */}
        <div className="flex-1 flex flex-col items-center justify-center text-center px-4" style={{ minHeight: '100vh' }}>
          <div className="mt-32 md:mt-40" />
          <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-lg mb-4 tracking-tight" >
            {NAMES}
          </h1>
          <div className="text-2xl md:text-3xl text-white/90 mb-2 drop-shadow">
            Wedding is in:
          </div>
          <div className="text-lg md:text-xl text-pink-200 font-semibold mb-8 drop-shadow">
            {WEDDING_DATE && typeof WEDDING_DATE.getTime === "function"
              ? getCountdown(WEDDING_DATE)
              : "To be determined"}
          </div>
        </div>
        {/* For future: sections can be added below */}
      </div>
      {/* Optional: overlay for darken effect */}
      <div className="fixed inset-0 bg-black/40 z-5 pointer-events-none" />
    </main>
  );
}
