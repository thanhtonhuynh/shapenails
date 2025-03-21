"use client";

import { gelX } from "@/constants/categories/gel-x";
import { motion } from "motion/react";
import { CornerPill } from "./reusables/corner-pill";
import { ServiceAddOns } from "./reusables/service-addons";

export function GelXSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="mb-8"
    >
      <section className="border-olive bg-warmsand group relative flex flex-col gap-2 overflow-hidden rounded-tl-3xl rounded-tr-md rounded-br-3xl rounded-bl-md border-r border-l border-dashed p-8 pt-20 pb-12 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
        <h2 className="bg-olive absolute top-0 left-0 rounded-tl-3xl rounded-br-3xl p-4 px-8 tracking-widest">
          {gelX.title}
        </h2>

        <p className="text-sm">{gelX.description}</p>

        <div className="">
          {gelX.services.map((item, i) => (
            <div
              key={i}
              className="border-olive flex gap-4 border-b py-4 text-sm font-medium uppercase last:border-b-0"
            >
              <span className="tracking-wide">{item.title}</span>
              <span className="font-normal">$ {item.price}+</span>
            </div>
          ))}
        </div>

        <ServiceAddOns color="olive" addOns={gelX.addOns} />

        <CornerPill position="right" color="olive" />
      </section>
    </motion.section>
  );
}
