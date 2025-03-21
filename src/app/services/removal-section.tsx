"use client";

import { removal } from "@/constants/categories/removal";
import { motion } from "motion/react";
import { CornerPill } from "./reusables/corner-pill";
import { ServiceHeading } from "./reusables/service-heading";

export function RemovalSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="mb-8"
    >
      <section className="border-claybrown bg-warmsand group relative flex flex-col gap-2 overflow-hidden rounded-tl-md rounded-tr-3xl rounded-br-md rounded-bl-3xl border-t border-b border-dashed shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
        <ServiceHeading color="claybrown" title={removal.title} position="right" />

        <div className="px-8 pt-2 pb-12">
          <p className="text-sm">{removal.description}</p>

          <div>
            {removal.services.map((item, i) => (
              <div
                key={i}
                className="border-claybrown flex gap-4 border-b py-4 text-sm font-medium uppercase last:border-b-0"
              >
                <span className="tracking-wide">{item.title}</span>
                <span className="font-normal">$ {item.price}+</span>
              </div>
            ))}
          </div>
        </div>

        <CornerPill position="left" color="claybrown" />
      </section>
    </motion.section>
  );
}
