"use client";

import { biabGel } from "@/constants/categories/biab-gel";
import { motion } from "motion/react";
import { CornerPill } from "./reusables/corner-pill";
import { ServiceAddOns } from "./reusables/service-addons";
import { ServiceHeading } from "./reusables/service-heading";

export function BiabGelSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="mb-8"
    >
      <section className="border-olive bg-warmsand group relative flex flex-col gap-2 overflow-hidden rounded-tl-3xl rounded-tr-md rounded-br-3xl rounded-bl-md border-r border-l border-dashed shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
        <ServiceHeading color="olive" title={biabGel.title} position="left" />

        <div className="px-8 pt-2 pb-12">
          <p className="text-sm">{biabGel.description}</p>

          <div>
            {biabGel.services.map((item, i) => (
              <div
                key={i}
                className="border-olive flex justify-between gap-4 border-b py-4 text-sm font-medium uppercase last:border-b-0"
              >
                <span className="tracking-wide">{item.title}</span>
                <div className="flex min-w-9 justify-between gap-1 font-normal">
                  <span>$</span>
                  <span>{item.price}+</span>
                </div>
              </div>
            ))}
          </div>

          <ServiceAddOns color="olive" addOns={biabGel.addOns} />
        </div>

        <CornerPill position="right" color="olive" />
      </section>
    </motion.section>
  );
}
