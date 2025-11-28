import Menu from "../components/Menu";
import FullBg from "../components/FullBg";
import React, { useState } from "react";

export default function RSVP() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <main className="relative min-h-screen w-full" style={{ fontFamily: "'Playfair Display', serif" }}>
        <Menu />
      <FullBg src="/background.jpg" />
      <div className="fixed inset-0 z-5 pointer-events-none" style={{ backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)' }} />
      <div className="relative z-10 flex flex-col min-h-screen w-full items-center justify-center px-4">
        <section id="rsvp" className="max-w-md w-full text-center">
          <div className="mx-auto bg-white/15 dark:bg-slate-900/15 backdrop-blur-xl p-8 rounded-2xl shadow-xl border border-white/25 dark:border-slate-700/25 flex flex-col items-center">
            <h2 className="text-4xl md:text-5xl font-light mb-8 text-white dark:text-white tracking-wide drop-shadow-md" style={{ fontFamily: "'Playfair Display', serif" }}>RSVP</h2>
            {submitted ? (
              <div className="text-lg text-white/95 drop-shadow-sm">Thank you for your RSVP! We can't wait to celebrate with you.</div>
            ) : (
             <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScRYw6EqjKDIitQAWMfxXjjWk39XcjmqtuIsc61ZzT0MVBngg/viewform?embedded=true" width="640" height="812" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
            )}
          </div>
        </section>
      </div>
      <div className="fixed inset-0 bg-black/40 z-5 pointer-events-none" />
    </main>
  );
}