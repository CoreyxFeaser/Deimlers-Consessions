"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

/* EDIT: Replace these menu items with your real menu */
const menuItems = [
  {
    category: "Signature",
    name: "The Deimler Smash",
    description:
      "Double smashed patties, American cheese, house sauce, pickles, brioche bun",
    price: "$12",
  },
  {
    category: "Signature",
    name: "Loaded Street Fries",
    description:
      "Hand-cut fries, beer cheese, bacon crumble, jalapeños, scallions",
    price: "$9",
  },
  {
    category: "Poultry",
    name: "Nashville Hot Tender Basket",
    description:
      "Crispy tenders tossed in Nashville hot oil, coleslaw, white bread, pickles",
    price: "$11",
  },
  {
    category: "Sides",
    name: "Mac & Cheese Bites",
    description: "House mac & cheese, breaded and fried golden, ranch drizzle",
    price: "$7",
  },
  {
    category: "Drinks",
    name: "Fresh Squeezed Lemonade",
    description: "Made daily with real lemons, cane sugar, served ice cold",
    price: "$4",
  },
  {
    category: "Dessert",
    name: "Funnel Cake Fries",
    description:
      "Crispy funnel cake strips, powdered sugar, chocolate dipping sauce",
    price: "$6",
  },
];

export default function Menu() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="menu" className="py-24 md:py-40" ref={ref}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-xs tracking-[0.3em] uppercase text-amber block mb-3">
            What We Serve
          </span>
          <h2 className="font-editorial text-5xl md:text-7xl lg:text-8xl font-bold text-charcoal">
            THE MENU
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
          {menuItems.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group border border-charcoal/10 p-8 flex flex-col gap-4 transition-colors duration-500 hover:bg-charcoal cursor-default"
            >
              {/* Amber dot + category */}
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-amber inline-block" />
                <span className="text-[10px] tracking-[0.3em] uppercase text-charcoal/40 group-hover:text-cream/50 transition-colors duration-500">
                  {item.category}
                </span>
              </div>

              {/* Name */}
              <h3 className="font-editorial text-xl md:text-2xl text-charcoal group-hover:text-cream transition-colors duration-500">
                {item.name}
              </h3>

              {/* Description */}
              <p className="text-sm text-charcoal/60 group-hover:text-cream/60 transition-colors duration-500 leading-relaxed flex-1">
                {item.description}
              </p>

              {/* Price */}
              <span className="text-lg font-medium text-charcoal group-hover:text-cream transition-colors duration-500">
                {item.price}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
