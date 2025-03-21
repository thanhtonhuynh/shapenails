"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { gelManicure } from "@/constants/categories/gel-manicure";
import { motion } from "motion/react";
import { CornerPill } from "./reusables/corner-pill";
import { ServiceAddOns } from "./reusables/service-addons";
import { ServiceHeading } from "./reusables/service-heading";

export function GelManicureSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="mb-8"
    >
      <section className="border-claybrown bg-warmsand group relative flex flex-col gap-2 overflow-hidden rounded-tl-md rounded-tr-3xl rounded-br-md rounded-bl-3xl border-t border-b border-dashed shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
        <ServiceHeading color="claybrown" title={gelManicure.title} position="right" />

        <div className="px-8 pt-4 pb-12">
          <Accordion type="multiple">
            {gelManicure.services.map((item, i) => (
              <AccordionItem className="border-claybrown" key={i} value={`item-${i}`}>
                <AccordionTrigger className="cursor-pointer uppercase">
                  <div className="flex gap-4">
                    <span className="tracking-wide">{item.title}</span>
                    <span className="font-normal">$ {item.price}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>{item.description}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <ServiceAddOns color="claybrown" addOns={gelManicure.addOns} />
        </div>

        <CornerPill position="left" color="claybrown" />
      </section>
    </motion.section>
  );
}
