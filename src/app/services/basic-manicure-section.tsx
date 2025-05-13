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
import { ServiceAddOns } from "./reusables/service-addons";
import { ServiceHeading } from "./reusables/service-heading";

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
        <ServiceHeading color="olive" title={basicManicure.title} position="left" />

        <div className="px-8 pb-12">
          <Accordion type="multiple">
            {basicManicure.services.map((item, i) => (
              <AccordionItem className="border-olive" key={i} value={`item-${i}`}>
                <AccordionTrigger className="cursor-pointer uppercase">
                  <div className="flex w-full justify-between gap-4">
                    <span className="tracking-wide">{item.title}</span>
                    <div className="flex min-w-10 justify-between font-normal">
                      <span>$</span>
                      <span>
                        {item.price}
                        {item.pricePlus && <span>+</span>}
                      </span>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="whitespace-pre-wrap">
                  {item.description}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <ServiceAddOns color="olive" addOns={basicManicure.addOns} />
        </div>

        <CornerPill position="right" color="olive" />
      </section>
    </motion.section>
  );
}
