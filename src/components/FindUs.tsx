"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

/* EDIT: Replace these schedule entries with your real locations and hours */
const schedule = [
  { day: "Monday", location: "Downtown Farmers Market", hours: "11 AM – 3 PM" },
  { day: "Tuesday", location: "Riverside Business Park", hours: "11 AM – 2 PM" },
  { day: "Wednesday", location: "University Campus", hours: "11 AM – 4 PM" },
  { day: "Thursday", location: "Brewery District", hours: "4 PM – 9 PM" },
  { day: "Friday", location: "Main Street Festival Grounds", hours: "11 AM – 10 PM" },
  { day: "Saturday", location: "Community Park", hours: "10 AM – 6 PM" },
  { day: "Sunday", location: "Closed", hours: "—" },
];

export default function FindUs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="find-us" className="py-24 md:py-40" ref={ref}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="w-16 h-px bg-amber mb-12" />
          <h2 className="font-editorial text-5xl md:text-7xl lg:text-8xl font-bold text-charcoal mb-16">
            FIND US
          </h2>
        </motion.div>

        {/* Schedule */}
        <div className="max-w-3xl">
          {schedule.map((entry, i) => (
            <motion.div
              key={entry.day}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="grid grid-cols-3 gap-4 py-5 border-b border-charcoal/10 last:border-b-0"
            >
              <span className="text-sm md:text-base font-medium text-charcoal tracking-wide">
                {entry.day}
              </span>
              <span className="text-sm md:text-base text-charcoal/60">
                {entry.location}
              </span>
              <span className="text-sm md:text-base text-charcoal/40 text-right">
                {entry.hours}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Instagram CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 flex items-center gap-3"
        >
          {/* Instagram icon */}
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-charcoal/50"
          >
            <rect x="2" y="2" width="20" height="20" rx="5" />
            <circle cx="12" cy="12" r="5" />
            <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
          </svg>
          <p className="text-sm text-charcoal/50 tracking-wide">
            {/* EDIT: Replace with your Instagram handle */}
            Follow{" "}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber hover:text-charcoal transition-colors duration-300 underline underline-offset-4"
            >
              @deimlerconcessions
            </a>{" "}
            for daily location updates
          </p>
        </motion.div>
        {/* Event banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 bg-amber px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="text-white font-bold text-base md:text-lg tracking-wide">
            Planning an event? We come to you.
          </p>
          <a
            href="#booking"
            className="text-white text-sm font-bold tracking-[0.15em] uppercase hover:text-white/80 transition-colors duration-300 whitespace-nowrap"
          >
            GET A QUOTE →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
