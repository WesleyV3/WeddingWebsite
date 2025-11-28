import Menu from "../components/Menu";
import FullBg from "../components/FullBg";

const SCHEDULE = [
	{
		day: "Saturday, May 23rd",
		events: [
			{ time: "1:15 PM", title: "Arrive at Wildlands." },
			{ time: "1:30 PM", title: "Ceremony." },
			{ time: "2:15 PM", title: "Coffee & Cookies." },
			{ time: "2:45 PM", title: "Explore the Zoo while Kaylea & Wesley take pictures." },
			{ time: "5:30 PM", title: "Dinner at Fletcher hotel." },
			],
	},
];

import React, { useState } from "react";

function Timeline() {
	   const [selectedDay, setSelectedDay] = useState(0);

	   return (
		   <div className="relative mb-6">
			   <div className="flex w-full">
				   {SCHEDULE.map((day, dayIdx) => (
					   <button
						   key={dayIdx}
						   className={`w-full px-4 py-1 bg-white/20 text-white/90 font-semibold text-base shadow drop-shadow-sm border border-white/30 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-pink-300 transition-all flex items-center justify-center gap-2 ${selectedDay === dayIdx ? 'bg-white/30 border-pink-400 text-pink-200' : ''}`}
						   onClick={() => setSelectedDay(dayIdx)}
						   aria-selected={selectedDay === dayIdx}
						   style={{ borderRight: dayIdx !== SCHEDULE.length - 1 ? 'none' : undefined }}
					   >
						   <span className="text-center">{day.day}</span>
					   </button>
				   ))}
			   </div>
			   <div className="relative mt-2">
				   {/* Vertical center line for this day, extends beyond first/last dot for cohesion */}
				   <div
					   className="absolute left-1/2 top-0 bottom-0 w-1 bg-white/20 z-0"
					   style={{ transform: "translateX(-50%)" }}
				   />
				   <div className="flex flex-col gap-12 relative z-10">
					   {SCHEDULE[selectedDay].events.map((item, idx) => (
						   <div
							   key={idx}
							   className="relative flex w-full min-h-[72px]"
						   >
							   {/* Left side content */}
							   {idx % 2 === 0 ? (
								   <div className="w-1/2 px-4 flex justify-end items-start">
									   <div className="max-w-xs inline-block text-right align-top">
										   <div className="inline-block bg-white/15 border border-white/20 rounded-xl px-4 py-3 shadow-md backdrop-blur-md align-top">
											   <span className="font-semibold text-white/90 text-base drop-shadow-sm block">
												   {item.time}
											   </span>
											   <span className="text-white/80 text-sm md:text-base drop-shadow-sm block">
												   {item.title}
											   </span>
										   </div>
									   </div>
								   </div>
							   ) : (
								   <div className="w-1/2" />
							   )}
							   {/* Dot */}
							   <div className="absolute left-1/2 -translate-x-1/2 top-0 w-5 h-5 rounded-full bg-white/80 border-2 border-white/60 shadow z-10 flex items-center justify-center">
								   <div className="w-2 h-2 rounded-full bg-pink-400" />
							   </div>
							   {/* Right side content */}
							   {idx % 2 === 1 ? (
								   <div className="w-1/2 px-4 flex justify-start items-start ml-auto">
									   <div className="max-w-xs inline-block text-left align-top">
										   <div className="inline-block bg-white/15 border border-white/20 rounded-xl px-4 py-3 shadow-md backdrop-blur-md align-top">
											   <span className="font-semibold text-white/90 text-base drop-shadow-sm block">
												   {item.time}
											   </span>
											   <span className="text-white/80 text-sm md:text-base drop-shadow-sm block">
												   {item.title}
											   </span>
										   </div>
									   </div>
								   </div>
							   ) : (
								   <div className="w-1/2" />
							   )}
						   </div>
					   ))}
				   </div>
			   </div>
		   </div>
	   );
}

export default function Schedule() {
	return (
		   <main
			   className="relative min-h-screen w-full"
			   style={{ fontFamily: "'Playfair Display', serif" }}
		   >
			   <Menu />
			   <FullBg src="/background.jpg" />
			   <div
				   className="fixed inset-0 z-5 pointer-events-none"
				   style={{
					   backdropFilter: "blur(8px)",
					   WebkitBackdropFilter: "blur(8px)",
				   }}
			   />
			   <div className="relative z-10 flex flex-col min-h-screen w-full items-center justify-center px-4">
				   <section
					   id="schedule"
					   className="max-w-xl w-full py-12 px-6 text-center rounded-2xl shadow-xl bg-white/15 dark:bg-slate-900/15 backdrop-blur-xl border border-white/25 dark:border-slate-700/25 mt-8"
				   >
					   <h2 className="text-4xl md:text-5xl font-light mb-4 text-white dark:text-white tracking-wide drop-shadow-md" style={{ fontFamily: "'Playfair Display', serif" }}>
						   Schedule
					   </h2>
					   <Timeline />
					   <p className="text-sm text-white/80 dark:text-white/80 border-t border-white/20 dark:border-slate-700/20 pt-4 mt-6 drop-shadow-sm">
						   We can't wait to celebrate with you!
					   </p>
				   </section>
			   </div>
			   <div className="fixed inset-0 bg-black/40 z-5 pointer-events-none" />
		   </main>
	);
}