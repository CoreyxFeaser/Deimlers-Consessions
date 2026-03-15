export default function Footer() {
  return (
    <footer className="border-t border-amber">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Wordmark */}
        <a
          href="#"
          className="font-editorial text-lg font-bold tracking-wide text-charcoal"
        >
          DEIMLER
        </a>

        {/* Nav links */}
        <div className="flex items-center gap-8">
          {["Menu", "About", "Find Us", "Contact"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(" ", "-")}`}
              className="text-xs tracking-[0.2em] uppercase text-charcoal/50 hover:text-charcoal transition-colors duration-300"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Copyright — EDIT: Update year if needed */}
        <p className="text-xs text-charcoal/40 tracking-wide">
          &copy; 2025 Deimler Concessions
        </p>
      </div>
    </footer>
  );
}
