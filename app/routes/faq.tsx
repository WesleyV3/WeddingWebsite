import Menu from "../components/Menu";
import FullBg from "../components/FullBg";
import TravelTipCard from "../components/TravelTipCard";

const FAQS = [
  {
    title: "Attire: Dressy Casual",
    description:
      "This wedding is at the zoo and we allotted time for you to walk around and explore so wear what you think will be dressy, but also comfy enough to walk around in.",
  },
  {
    title: "Food",
    description:
      "Dinner will be at Fletcher and will include a buffet with a variety of meats including chicken and beef as well as vegetarian options.",
  },
  {
    title: "Transportation",
    description:
      "Fletcher and Wildlands are within walking distance of each other so there will be no transportation needed between the two venues.",
  },
];

export default function FAQ() {
  return (
    <main className="relative min-h-screen w-full" style={{ fontFamily: "'Playfair Display', serif" }}>
      <FullBg src="/background.jpg" />
      <div
        className="fixed inset-0 z-5 pointer-events-none"
        style={{ backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)" }}
      />
      <div className="relative z-10 flex flex-col min-h-screen w-full items-center justify-center px-4">
        <Menu />
        <section className="max-w-xl w-full py-12 px-6 text-center rounded-2xl shadow-xl bg-white/15 dark:bg-slate-900/15 backdrop-blur-xl border border-white/25 dark:border-slate-700/25 mt-8">
          <h2 className="text-4xl md:text-5xl font-light mb-8 text-white dark:text-white tracking-wide drop-shadow-md" style={{ fontFamily: "'Playfair Display', serif" }}>
            FAQ
          </h2>
          <div className="flex flex-col gap-6">
            {FAQS.map((faq, idx) => (
              <TravelTipCard key={idx} icon={null} title={faq.title} text={faq.description} />
            ))}
          </div>
        </section>
      </div>
      <div className="fixed inset-0 bg-black/40 z-5 pointer-events-none" />
    </main>
  );
}
