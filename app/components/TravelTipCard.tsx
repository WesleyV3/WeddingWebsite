import React, { useState } from "react";

export default function TravelTipCard({ icon, title, text }: { icon: React.ReactNode; title: string; text: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex flex-col rounded-xl bg-white/20 dark:bg-slate-900/20 backdrop-blur-md border border-white/30 dark:border-slate-700/30 hover:bg-white/30 dark:hover:bg-slate-900/30 transition-all duration-300 shadow-lg hover:shadow-xl">
      <button
        className="flex items-center gap-4 p-4 w-full focus:outline-none"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="travel-card-content"
        type="button"
      >
        {icon != null && (
          <div className="shrink-0 flex items-center justify-center w-10 h-10 rounded-lg bg-white/40 dark:bg-slate-800/40 backdrop-blur-sm border border-white/50 dark:border-slate-600/50 text-xl">
            {icon}
          </div>
        )}
        <div className="text-left flex-grow">
          <div className="font-medium text-base text-white dark:text-white drop-shadow-sm">
            {title}
          </div>
        </div>
        <span className="ml-2 flex items-center">
          <div
            className={`w-7 h-7 rounded-full bg-white/20 dark:bg-slate-900/20 backdrop-blur-md flex items-center justify-center transition-transform duration-200 border border-white/30 dark:border-slate-700/30 ${open ? 'rotate-90' : ''}`}
            style={{ maskImage: 'url("data:image/svg+xml;utf8,<svg width=\'24\' height=\'24\' viewBox=\'0 0 24 24\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'><path d=\'M9 5l7 7-7 7\' stroke=\'black\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'/></svg>")', WebkitMaskImage: 'url("data:image/svg+xml;utf8,<svg width=\'24\' height=\'24\' viewBox=\'0 0 24 24\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'><path d=\'M9 5l7 7-7 7\' stroke=\'black\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'/></svg>")', maskRepeat: 'no-repeat', maskPosition: 'center', WebkitMaskRepeat: 'no-repeat', WebkitMaskPosition: 'center' }}
          />
        </span>
      </button>
      <div
        id="travel-card-content"
        className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-40 py-2 px-4' : 'max-h-0 py-0 px-4'}`}
        style={{
          transitionProperty: 'max-height, padding',
        }}
      >
        <div className="text-sm text-white/90 dark:text-white/90 leading-relaxed drop-shadow-sm">
          {text}
        </div>
      </div>
    </div>
  );
}
