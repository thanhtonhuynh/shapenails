"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { gelManicure } from "@/constants/categories/gel-manicure";
import { motion } from "motion/react";

export function GelManicureSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="mb-8"
    >
      <section className="border-claybrown bg-warmsand group relative flex flex-col gap-2 overflow-hidden rounded-tl-md rounded-tr-3xl rounded-br-md rounded-bl-3xl border-t border-b border-dashed p-8 pt-20 pb-12 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
        <h2 className="bg-claybrown absolute top-0 right-0 rounded-tr-3xl rounded-bl-3xl p-4 px-8 tracking-widest">
          {gelManicure.title}
        </h2>

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

        <div className="space-y-2">
          <h5 className="font-medium uppercase">Add-ons</h5>
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-x-4">
            {gelManicure.addOns &&
              gelManicure.addOns.map((item, i) => (
                <div key={i} className="flex gap-4 text-sm">
                  <span className="font-medium">{item.title}</span>
                  <span>$ {item.price}+</span>
                </div>
              ))}
          </div>
        </div>

        <div className="bg-claybrown absolute bottom-0 left-0 size-10 rounded-tr-3xl rounded-bl-3xl transition duration-300 group-hover:scale-125" />
      </section>
    </motion.section>
  );
}
