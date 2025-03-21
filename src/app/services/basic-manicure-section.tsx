"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { basicManicure } from "@/constants/categories/basic-manicure";
import { motion } from "motion/react";
import { CornerPill } from "./reusables/corner-pill";

export function BasicManicureSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="mb-8"
    >
      <section className="border-olive bg-warmsand group relative flex flex-col gap-2 overflow-hidden rounded-tl-3xl rounded-tr-md rounded-br-3xl rounded-bl-md border-r border-l border-dashed shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
        <h2 className="bg-olive w-fit rounded-tl-3xl rounded-br-3xl px-8 py-4 tracking-widest">
          {basicManicure.title}
        </h2>

        <div className="px-8 pt-4 pb-12">
          <Accordion type="multiple">
            {basicManicure.services.map((item, i) => (
              <AccordionItem className="border-olive" key={i} value={`item-${i}`}>
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

          <div className="mt-2 space-y-3">
            <h5 className="border-olive border-b font-bold uppercase">Add-ons</h5>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-x-4">
              {basicManicure.addOns &&
                basicManicure.addOns.map((item, i) => (
                  <div key={i} className="flex gap-4 text-sm">
                    <span className="font-medium">{item.title}</span>
                    <span>$ {item.price}+</span>
                  </div>
                ))}
            </div>
          </div>
        </div>

        <CornerPill position="right" color="olive" />
      </section>
    </motion.section>
  );
}
