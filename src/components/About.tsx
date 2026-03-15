"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-40" ref={ref}>
      {/* Amber rule */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="w-16 h-px bg-amber mb-12" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Left — Photo Placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="aspect-[3/4] w-full"
          >
            {/* EDIT: Replace this div with an <Image> tag when you have a photo */}
            <div className="w-full h-full bg-stone-200 border border-stone-300 flex items-center justify-center">
              <span className="text-stone-400 text-sm tracking-widest uppercase">
                Photo Coming Soon
              </span>
            </div>
          </motion.div>

          {/* Right — Text */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col gap-8"
          >
            <h2 className="font-editorial italic text-2xl md:text-3xl lg:text-4xl leading-snug text-charcoal">
              {/* EDIT: Replace this quote */}
              &ldquo;We started with one truck and one obsession — making food
              people can&apos;t stop talking about.&rdquo;
            </h2>

            <div className="flex flex-col gap-4 text-charcoal/70 text-base md:text-lg leading-relaxed">
              {/* EDIT: Replace these paragraphs with your story */}
              <p>
                What began as a weekend side hustle quickly became something
                bigger. We discovered that when you care about every single
                ingredient, every technique, every plate — people notice. And
                they come back.
              </p>
              <p>
                Deimler Concessions isn&apos;t just a food truck. It&apos;s a
                promise that wherever we park, you&apos;re getting the best meal
                of your day. No shortcuts. No compromises. Just food worth
                chasing.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
