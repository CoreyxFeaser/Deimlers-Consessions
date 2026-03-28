"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Menu", href: "#menu" },
  { label: "About", href: "#about" },
  { label: "Find Us", href: "#find-us" },
  { label: "Contact", href: "#booking" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-cream/95 backdrop-blur-sm border-b border-amber"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between h-16 md:h-20">
          {/* Wordmark */}
          <a
            href="#"
            className="font-editorial text-xl md:text-2xl font-bold tracking-wide text-charcoal"
          >
            DEIMLER
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            <a
              href="#booking"
              className="bg-amber text-white text-xs font-bold tracking-[0.15em] uppercase px-5 py-2.5 hover:bg-amber/90 transition-colors duration-300"
            >
              BOOK NOW
            </a>
            {navLinks.map((link) => (
              <a
                key={link.href + link.label}
                href={link.href}
                className="text-sm tracking-[0.2em] uppercase text-charcoal/70 hover:text-charcoal transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex flex-col gap-[5px] w-7 relative z-[60]"
            aria-label="Toggle navigation"
          >
            <span
              className={`block h-[1.5px] w-full bg-charcoal transition-all duration-300 ${
                mobileOpen ? "rotate-45 translate-y-[6.5px]" : ""
              }`}
            />
            <span
              className={`block h-[1.5px] w-full bg-charcoal transition-all duration-300 ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-[1.5px] w-full bg-charcoal transition-all duration-300 ${
                mobileOpen ? "-rotate-45 -translate-y-[6.5px]" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 bg-cream flex flex-col items-center justify-center gap-10"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href + link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="font-editorial text-4xl text-charcoal tracking-wide"
              >
                {link.label}
              </motion.a>
            ))}
            {/* Mobile Book Now button */}
            <motion.a
              href="#booking"
              onClick={() => setMobileOpen(false)}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ delay: navLinks.length * 0.08, duration: 0.4 }}
              className="bg-amber text-white text-sm font-bold tracking-[0.2em] uppercase px-10 py-4 mt-4 hover:bg-amber/90 transition-colors duration-300"
            >
              BOOK NOW
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
