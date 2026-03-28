"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Grain texture overlay */}
      <div className="hero-grain pointer-events-none absolute inset-0 z-10 opacity-[0.035]" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 w-full grid grid-cols-1 md:grid-cols-[55%_45%] gap-8 items-center pt-24 md:pt-0">
        {/* Left — Text */}
        <div className="flex flex-col gap-6 md:gap-8 relative z-20">
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="font-editorial font-bold text-charcoal leading-[0.95] text-[clamp(4rem,7vw,7rem)]"
            >
              FOOD WORTH
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.15,
              }}
              className="font-editorial font-bold text-charcoal leading-[0.95] text-[clamp(4rem,7vw,7rem)]"
            >
              CHASING<span className="text-amber">.</span>
            </motion.h1>
          </div>

          {/* Amber horizontal rule */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="w-16 h-px bg-amber origin-left"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-charcoal/60 text-base md:text-lg tracking-wide max-w-md"
          >
            {/* EDIT: Replace region and year below */}
            Deimler Concessions — serving Central Pennsylvania since 2024
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="flex flex-col sm:flex-row gap-4 mt-2"
          >
            <a
              href="#booking"
              className="inline-block bg-amber text-white text-sm font-bold tracking-[0.2em] uppercase px-8 py-4 hover:bg-amber/90 transition-colors duration-300 text-center"
            >
              BOOK YOUR EVENT
            </a>
            <a
              href="#menu"
              className="inline-block border border-charcoal text-charcoal text-sm font-bold tracking-[0.2em] uppercase px-8 py-4 hover:bg-charcoal hover:text-cream transition-colors duration-300 text-center"
            >
              VIEW MENU
            </a>
          </motion.div>
        </div>

        {/* Right — Photo Placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative w-full h-[60vh] md:h-[calc(100vh-5rem)]"
        >
          {/* EDIT: Replace this div with an <Image> tag when you have a photo */}
          <div className="w-full h-full bg-stone-200 border border-stone-300 flex items-center justify-center relative overflow-hidden">
            {/* Dark cinematic overlay for when real photos go in */}
            <div className="absolute inset-0 bg-charcoal/10" />
            <span className="text-stone-400 text-sm tracking-widest uppercase relative z-10">
              Photo Coming Soon
            </span>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase text-charcoal/40">
          Scroll
        </span>
        <motion.svg
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          width="16"
          height="24"
          viewBox="0 0 16 24"
          fill="none"
          className="text-charcoal/40"
        >
          <path
            d="M8 4L8 20M8 20L2 14M8 20L14 14"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </motion.svg>
      </motion.div>
    </section>
  );
}
