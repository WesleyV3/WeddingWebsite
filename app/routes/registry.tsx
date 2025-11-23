import Menu from "../components/Menu";
import FullBg from "../components/FullBg";

export default function Registry() {
  return (
    <main className="relative min-h-screen w-full" style={{ fontFamily: "'Playfair Display', serif" }}>
      <FullBg src="/background.jpg" />
      <div className="fixed inset-0 z-5 pointer-events-none" style={{ backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)' }} />
      <div className="relative z-10 flex flex-col min-h-screen w-full items-center justify-center px-4">
        <Menu />
        <section id="registry" className="max-w-xl w-full py-12 px-6 text-center rounded-2xl shadow-xl bg-white/15 dark:bg-slate-900/15 backdrop-blur-xl border border-white/25 dark:border-slate-700/25">
          <h2 className="text-4xl md:text-5xl font-light mb-4 text-white dark:text-white tracking-wide drop-shadow-md" style={{ fontFamily: "'Playfair Display', serif" }}>Registry</h2>
          <p className="text-lg md:text-xl mb-6 text-white/95 dark:text-white/95 font-normal leading-relaxed drop-shadow-sm">Your presence is the best gift! If you wish to bless us further, help us build funds to get Wesley to America.</p>
          <p className="text-lg md:text-xl mb-6 text-white/95 dark:text-white/95 font-normal leading-relaxed drop-shadow-sm">On the day of the wedding, we will have a donation box available for anyone who wishes to contribute.</p>
          <p className="text-lg md:text-xl mb-6 text-white/95 dark:text-white/95 font-normal leading-relaxed drop-shadow-sm">If you aren't at the wedding itself and wish to contribute:</p>
          <p className="text-lg md:text-xl mb-6 text-white/95 dark:text-white/95 font-normal leading-relaxed drop-shadow-sm"><a href="https://www.paypal.com/paypalme/kayleagray872" className="text-white hover:text-white/80 underline decoration-white/50 hover:decoration-white/80 transition-colors">PayPal</a></p>
          <p className="text-lg md:text-xl mb-6 text-white/95 dark:text-white/95 font-normal leading-relaxed drop-shadow-sm"><a href="https://cash.app/$KayleaGray" className="text-white hover:text-white/80 underline decoration-white/50 hover:decoration-white/80 transition-colors">Cash App</a></p>
          <p className="text-lg md:text-xl mb-6 text-white/95 dark:text-white/95 font-normal leading-relaxed drop-shadow-sm"><a href="https://account.venmo.com/u/Kaylea-Gray" className="text-white hover:text-white/80 underline decoration-white/50 hover:decoration-white/80 transition-colors">Venmo</a></p>
          {/* <ul className="text-left text-base md:text-lg mb-6 space-y-3 text-white/95 dark:text-white/95 drop-shadow-sm">
            <li>
              <a href="#" className="text-white hover:text-white/80 underline decoration-white/50 hover:decoration-white/80 transition-colors">
                Amazon Registry
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-white/80 underline decoration-white/50 hover:decoration-white/80 transition-colors">
                Target Registry
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-white/80 underline decoration-white/50 hover:decoration-white/80 transition-colors">
                Honeymoon Fund
              </a>
            </li>
          </ul> */}
          <p className="text-sm text-white/80 dark:text-white/80 border-t border-white/20 dark:border-slate-700/20 pt-4 mt-6 drop-shadow-sm">Thank you for your love and support!</p>
        </section>
      </div>
      <div className="fixed inset-0 bg-black/40 z-5 pointer-events-none" />
    </main>
  );
}