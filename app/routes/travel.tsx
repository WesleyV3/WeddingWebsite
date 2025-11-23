import React, { useState } from "react";
import Menu from "../components/Menu";
import GoogleMap from "../components/GoogleMap";
import TravelTipCard from "../components/TravelTipCard";
import FullBg from "../components/FullBg";

export default function Travel() {
  const weddingQuery = "Wildlands Raadhuisplein 99, 7811 AP Emmen";
  const weddingLabel = "Wildlands Raadhuisplein 99, 7811 AP Emmen";
  const [mapQuery, setMapQuery] = React.useState(weddingQuery);
  const [mapLabel, setMapLabel] = React.useState(weddingLabel);
  return (
    <main className="relative min-h-screen w-full" style={{ fontFamily: "'Playfair Display', serif" }}>
      <FullBg src="/background.jpg" />
      <div className="fixed inset-0 z-5 pointer-events-none" style={{ backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)' }} />
      <div className="relative z-10 flex flex-col min-h-screen w-full items-center justify-center px-4">
        <Menu />
        <section id="travel" className="max-w-xl w-full py-12 px-6 text-center rounded-2xl shadow-xl bg-white/15 dark:bg-slate-900/15 backdrop-blur-xl border border-white/25 dark:border-slate-700/25">
          <TravelHeader />
          <TravelTips setMapQuery={setMapQuery} setMapLabel={setMapLabel} />
          <div className="mb-6">
            <GoogleMap query={mapQuery} label={mapLabel} />
          </div>
          <p className="text-sm text-white/80 dark:text-white/80 border-t border-white/20 dark:border-slate-700/20 pt-4 mt-6 drop-shadow-sm">
            Questions about travel? We're here to help.
          </p>
        </section>
      </div>
      <div className="fixed inset-0 bg-black/40 z-5 pointer-events-none" />
    </main>
  );
}

function TravelHeader() {
  return (
    <>
      <h2 className="text-4xl md:text-5xl font-light mb-4 text-white dark:text-white tracking-wide drop-shadow-md" style={{ fontFamily: "'Playfair Display', serif" }}>
        Travel
      </h2>
      <p className="text-lg md:text-xl mb-8 text-white/95 dark:text-white/95 font-normal leading-relaxed max-w-lg mx-auto drop-shadow-sm">
        Essential details and recommendations for our wedding guests
      </p>
    </>
  );
}

function TravelTips({ setMapQuery, setMapLabel }: { setMapQuery: (q: string) => void, setMapLabel: (l: string) => void }) {
  return (
    <div className="grid gap-4 mb-6">
      <TravelTipCard
        icon={<span className="text-xl" role="img" aria-label="Wedding">💍</span>}
        title="Wedding Location"
        text={<span className="cursor-pointer underline hover:text-white/80" onClick={() => { setMapQuery("Taco Bell Cantina, 3717 S Las Vegas Blvd Suite 140-A, Las Vegas, NV 89109"); setMapLabel("Venue: 3717 S Las Vegas Blvd Suite 140-A, Las Vegas, NV 89109, United States"); }}>Wildlands <p>Raadhuisplein 99, 7811 AP Emmen</p></span>}
      />
      <TravelTipCard
        icon={<span className="text-xl" role="img" aria-label="Airport">✈️</span>}
        title="Nearest Airport"
        text={<span className="cursor-pointer underline hover:text-white/80" onClick={() => { setMapQuery("Harry Reid International Airport, Las Vegas, NV"); setMapLabel("Harry Reid International Airport (LAS), Las Vegas, NV"); }}>Schiphol <p>Evert van de Beekstraat 202, 1118 CP Schiphol</p></span>}
      />
      <TravelTipCard
        icon={<span className="text-xl" role="img" aria-label="Hotel">🏨</span>}
        title="Hotel Recommendations"
        text={<span>
          <span className="cursor-pointer underline hover:text-white/80 block" onClick={() => { setMapQuery("The Cosmopolitan of Las Vegas, 3708 Las Vegas Blvd S, Las Vegas, NV 89109"); setMapLabel("The Cosmopolitan of Las Vegas, 3708 Las Vegas Blvd S, Las Vegas, NV 89109"); }}>
            <b>Fletcher Hotel</b><br />
            Willinkplein 42, 7811 DD Emmen
          </span>
          <span className="cursor-pointer underline hover:text-white/80 block mt-2" onClick={() => { setMapQuery("Excalibur Hotel & Casino, 3850 S Las Vegas Blvd, Las Vegas, NV 89109"); setMapLabel("Excalibur Hotel & Casino, 3850 S Las Vegas Blvd, Las Vegas, NV 89109"); }}>
            <b>Hotel ten Cate</b>
            <p>Noordbargerstraat 44, 7812 AB Emmen</p>
          </span>
        </span>}
      />
    </div>
  );
}