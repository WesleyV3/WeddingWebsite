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
        <Menu />
      <FullBg src="/background.jpg" />
      <div className="fixed inset-0 z-5 pointer-events-none" style={{ backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)' }} />
      <div className="relative z-10 flex flex-col min-h-screen w-full items-center justify-center px-4">
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
        text={<span className="cursor-pointer underline hover:text-white/80" onClick={() => { setMapQuery("Wildlands Raadhuisplein 99, 7811 AP Emmen"); setMapLabel("Venue: Wildlands Raadhuisplein 99, 7811 AP Emmen"); }}>Wildlands <p>Raadhuisplein 99, 7811 AP Emmen</p></span>}
      />
      <TravelTipCard
        icon={<span className="text-xl" role="img" aria-label="Airport">✈️</span>}
        title="Nearest Airport"
        text={<span className="cursor-pointer underline hover:text-white/80" onClick={() => { setMapQuery("Schiphol Evert van de Beekstraat 202, 1118 CP Schiphol"); setMapLabel("Schiphol Evert van de Beekstraat 202, 1118 CP Schiphol"); }}>Schiphol <p>Evert van de Beekstraat 202, 1118 CP Schiphol</p></span>}
      />
      <TravelTipCard
        icon={<span className="text-xl" role="img" aria-label="Hotel">🏨</span>}
        title="Hotel Recommendations"
        text={<span>
          <span className="cursor-pointer underline hover:text-white/80 block" onClick={() => { setMapQuery("Fletcher Hotel Willinkplein 42, 7811 DD Emmen"); setMapLabel("Fletcher Hotel Willinkplein 42, 7811 DD Emmen"); }}>
            <b>Fletcher Hotel</b><br />
            Willinkplein 42, 7811 DD Emmen
          </span>
          <span className="cursor-pointer underline hover:text-white/80 block mt-2" onClick={() => { setMapQuery("Hotel ten Cate Noordbargerstraat 44, 7812 AB Emmen"); setMapLabel("Hotel ten Cate Noordbargerstraat 44, 7812 AB Emmen"); }}>
            <b>Hotel ten Cate</b>
            <p>Noordbargerstraat 44, 7812 AB Emmen</p>
          </span>
        </span>}
      />
    </div>
  );
}