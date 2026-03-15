"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 items-center pt-24 md:pt-0">
        {/* Left — Text */}
        <div className="flex flex-col gap-6 md:gap-8">
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="font-editorial font-bold text-charcoal leading-[0.95] text-[clamp(3rem,9vw,10rem)]"
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
              className="font-editorial font-bold text-charcoal leading-[0.95] text-[clamp(3rem,9vw,10rem)]"
            >
              CHASING<span className="text-amber">.</span>
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-charcoal/60 text-base md:text-lg tracking-wide max-w-md"
          >
            {/* EDIT: Replace region and year below */}
            Deimler Concessions — serving Central Pennsylvania since 2024
          </motion.p>
        </div>

        {/* Right — Photo Placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative aspect-[4/5] md:aspect-[3/4] w-full"
        >
          {/* EDIT: Replace this div with an <Image> tag when you have a photo */}
          <div className="w-full h-full bg-stone-200 border border-stone-300 flex items-center justify-center">
            <span className="text-stone-400 text-sm tracking-widest uppercase">
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
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
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
