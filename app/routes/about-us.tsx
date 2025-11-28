import Menu from "../components/Menu";
import FullBg from "../components/FullBg";

export default function AboutUs() {
  return (
    <main className="relative min-h-screen w-full" style={{ fontFamily: "'Playfair Display', serif" }}>
      <Menu />
      <FullBg src="/background.jpg" />
      <div className="fixed inset-0 z-5 pointer-events-none" style={{ backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)' }} />
      <div className="relative z-10 flex flex-col min-h-screen w-full items-center justify-center px-4">
        <section id="about" className="max-w-xl w-full py-12 px-6 text-center rounded-2xl shadow-xl bg-white/15 dark:bg-slate-900/15 backdrop-blur-xl border border-white/25 dark:border-slate-700/25">
          <h2 className="text-4xl md:text-5xl font-light mb-4 text-white dark:text-white tracking-wide drop-shadow-md" style={{ fontFamily: "'Playfair Display', serif" }}>Our Story</h2>
          <p className="text-lg md:text-xl mb-6 text-white/95 dark:text-white/95 font-normal leading-relaxed drop-shadow-sm">We met by chance, fell in love across the miles, and are now ready to start our forever together. From video calls to airport reunions, every moment brought us closer. We can't wait to celebrate this new chapter with you!</p>
          <img src="/TWP_6847.jpg" alt="Wedding rings on bouquet" className="mx-auto rounded-full w-40 h-40 object-cover shadow-lg mb-4" />
          <p className="text-sm text-white/80 dark:text-white/80 border-t border-white/20 dark:border-slate-700/20 pt-4 mt-6 drop-shadow-sm italic">"Distance means so little when someone means so much."</p>
        </section>
      </div>
      <div className="fixed inset-0 bg-black/40 z-5 pointer-events-none" />
    </main>
  );
}