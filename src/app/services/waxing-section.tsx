"use client";

import { waxing } from "@/constants/categories/waxing";
import { CircleAlert } from "lucide-react";
import { motion } from "motion/react";
import { CornerPill } from "./reusables/corner-pill";
import { ServiceHeading } from "./reusables/service-heading";

export function WaxingSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="mb-8"
    >
      <section className="border-claybrown bg-warmsand group relative flex flex-col gap-2 overflow-hidden rounded-tl-md rounded-tr-3xl rounded-br-md rounded-bl-3xl border-t border-b border-dashed shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
        <ServiceHeading color="claybrown" title={waxing.title} position="right" />

        <p className="text-terracotta flex items-center gap-2 text-sm font-semibold">
          <CircleAlert className="size-4 shrink-0" />
          <span>
            To ensure the safety and well-being of our clients, we regret that we are unable to
            offer waxing services to individuals with diabetes. We appreciate your understanding.
          </span>
        </p>

        <div className="">
          {waxing.services.map((item, i) => (
            <div
              key={i}
              className="border-claybrown flex gap-4 border-b py-4 text-sm font-medium uppercase last:border-b-0"
            >
              <span className="tracking-wide">{item.title}</span>
              <span className="font-normal">$ {item.price}+</span>
            </div>
          ))}
        </div>

        <CornerPill position="left" color="claybrown" />
      </section>
    </motion.section>
  );
}
