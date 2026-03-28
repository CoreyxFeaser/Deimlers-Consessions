"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const eventTypes = [
  "Corporate Events",
  "Weddings",
  "Festivals",
  "Private Parties",
  "Community Events",
];

export default function SocialProof() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <section ref={ref} className="bg-charcoal py-6 md:py-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-[1400px] mx-auto px-6 md:px-12 text-center"
      >
        <p className="text-cream text-sm md:text-base tracking-wide">
          Available for{" "}
          {eventTypes.map((type, i) => (
            <span key={type}>
              {type}
              {i < eventTypes.length - 1 && (
                <span className="text-amber mx-2 md:mx-3">·</span>
              )}
            </span>
          ))}
        </p>
      </motion.div>
    </section>
  );
}
