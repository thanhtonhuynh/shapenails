"use client";

import { dippingPowder } from "@/constants/categories/dipping-powder";
import { motion } from "motion/react";
import { CornerPill } from "./reusables/corner-pill";
import { ServiceAddOns } from "./reusables/service-addons";
import { ServiceHeading } from "./reusables/service-heading";

export function DipPowderSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="mb-8"
    >
      <section className="border-claybrown bg-warmsand group relative flex flex-col gap-2 overflow-hidden rounded-tl-md rounded-tr-3xl rounded-br-md rounded-bl-3xl border-t border-b border-dashed shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
        <ServiceHeading color="claybrown" title={dippingPowder.title} position="right" />

        <div className="px-8 pt-2 pb-12">
          <p className="text-sm">{dippingPowder.description}</p>

          <div>
            {dippingPowder.services.map((item, i) => (
              <div
                key={i}
                className="border-claybrown flex justify-between gap-4 border-b py-4 text-sm font-medium uppercase last:border-b-0"
              >
                <span className="tracking-wide">{item.title}</span>
                <span className="font-normal">$ {item.price}+</span>
              </div>
            ))}
          </div>

          <ServiceAddOns color="claybrown" addOns={dippingPowder.addOns} />
        </div>

        <CornerPill position="left" color="claybrown" />
      </section>
    </motion.section>
  );
}
