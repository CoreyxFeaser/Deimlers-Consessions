"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, FormEvent } from "react";

/* EDIT: update stats */
const stats = [
  { number: "10+", label: "Years Serving Central PA" },
  { number: "500+", label: "Events Catered" },
  { number: "20+", label: "Menu Items Available" },
];

const eventTypes = [
  "Wedding",
  "Corporate",
  "Festival",
  "Private Party",
  "Other",
];

export default function Booking() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    eventDate: "",
    eventType: "",
    guestCount: "",
    message: "",
  });

  /* EDIT: connect to email service like Resend or Formspree */
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const inputClasses =
    "w-full bg-transparent border border-cream/30 px-4 py-3 text-cream text-sm tracking-wide placeholder:text-cream/30 focus:outline-none focus:border-amber transition-colors duration-300";

  return (
    <section id="booking" className="bg-charcoal py-24 md:py-40" ref={ref}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <span className="text-xs tracking-[0.3em] uppercase text-amber block mb-4">
            LET&apos;S WORK TOGETHER
          </span>
          <h2 className="font-editorial text-5xl md:text-7xl lg:text-8xl font-bold text-cream leading-[0.95]">
            BRING DEIMLER<br />TO YOUR EVENT<span className="text-amber">.</span>
          </h2>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12 mb-20 border-b border-cream/10 pb-16"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-2">
              <span className="font-editorial text-5xl md:text-6xl font-bold text-amber">
                {/* EDIT: update stats */}
                {stat.number}
              </span>
              <span className="text-sm tracking-wide text-cream/50">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-2xl"
        >
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="py-16 text-center"
            >
              <span className="text-amber text-5xl font-editorial block mb-4">
                ✓
              </span>
              <h3 className="font-editorial text-3xl md:text-4xl text-cream mb-3">
                Inquiry Sent
              </h3>
              <p className="text-cream/50 text-base tracking-wide">
                We&apos;ll be in touch within 24 hours.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className={inputClasses}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className={inputClasses}
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                <input
                  type="date"
                  name="eventDate"
                  required
                  value={form.eventDate}
                  onChange={handleChange}
                  className={inputClasses}
                />
                <select
                  name="eventType"
                  required
                  value={form.eventType}
                  onChange={handleChange}
                  className={`${inputClasses} ${
                    !form.eventType ? "text-cream/30" : ""
                  }`}
                >
                  <option value="" disabled>
                    Event Type
                  </option>
                  {eventTypes.map((type) => (
                    <option key={type} value={type} className="bg-charcoal text-cream">
                      {type}
                    </option>
                  ))}
                </select>
                <input
                  type="text"
                  name="guestCount"
                  placeholder="Guest Count"
                  required
                  value={form.guestCount}
                  onChange={handleChange}
                  className={inputClasses}
                />
              </div>
              <textarea
                name="message"
                placeholder="Tell us about your event..."
                rows={5}
                value={form.message}
                onChange={handleChange}
                className={`${inputClasses} resize-none`}
              />
              <button
                type="submit"
                className="w-full bg-amber text-white text-sm font-bold tracking-[0.2em] uppercase py-4 hover:bg-amber/90 transition-colors duration-300 mt-2"
              >
                SEND INQUIRY
              </button>
            </form>
          )}
        </motion.div>

        {/* Contact info below form */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 flex flex-col sm:flex-row gap-6 sm:gap-12"
        >
          {/* EDIT: Replace email */}
          <a
            href="mailto:hello@deimlerconcessions.com"
            className="text-cream/50 text-sm tracking-wide hover:text-cream transition-colors duration-300"
          >
            hello@deimlerconcessions.com
          </a>
          {/* EDIT: Replace phone number */}
          <a
            href="tel:+15551234567"
            className="text-cream/50 text-sm tracking-wide hover:text-cream transition-colors duration-300"
          >
            (555) 123-4567
          </a>
        </motion.div>
      </div>
    </section>
  );
}
