"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="contact"
      className="bg-charcoal py-24 md:py-40"
      ref={ref}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex flex-col gap-8"
        >
          <h2 className="font-editorial text-6xl md:text-8xl lg:text-[10rem] font-bold text-cream leading-[0.95]">
            HUNGRY<span className="text-amber">?</span>
          </h2>

          <p className="text-cream/50 text-base md:text-lg max-w-lg leading-relaxed tracking-wide">
            {/* EDIT: Replace with your catering details */}
            We cater private events, corporate lunches, weddings, and festivals.
            Let&apos;s make something happen.
          </p>

          <div className="flex flex-col gap-4 mt-4">
            {/* EDIT: Replace email */}
            <a
              href="mailto:hello@deimlerconcessions.com"
              className="text-cream text-2xl md:text-4xl underline underline-offset-8 decoration-amber/50 hover:decoration-amber transition-all duration-300 font-editorial"
            >
              hello@deimlerconcessions.com
            </a>

            {/* EDIT: Replace phone number */}
            <a
              href="tel:+15551234567"
              className="text-cream/60 text-xl md:text-2xl tracking-wide hover:text-cream transition-colors duration-300"
            >
              (555) 123-4567
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
