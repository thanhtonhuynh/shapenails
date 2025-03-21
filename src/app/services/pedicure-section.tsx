"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { pedicure } from "@/constants/categories/pedicure";
import { CircleAlert } from "lucide-react";
import { motion } from "motion/react";
import { CornerPill } from "./reusables/corner-pill";
import { ServiceHeading } from "./reusables/service-heading";

export function PedicureSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="mb-8"
    >
      <section className="border-olive bg-warmsand group relative flex flex-col gap-2 overflow-hidden rounded-tl-3xl rounded-tr-md rounded-br-3xl rounded-bl-md border-r border-l border-dashed shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
        <ServiceHeading color="olive" title={pedicure.title} position="left" />

        <div className="px-8 pt-2 pb-12">
          <p className="text-terracotta flex items-center gap-2 text-sm font-semibold">
            <CircleAlert className="size-4 shrink-0" />
            <span>Kindly note, in-grown nails are not treated as part of these services.</span>
          </p>

          <Accordion type="multiple">
            {pedicure.services.map((item, i) => (
              <AccordionItem className="border-olive" key={i} value={`item-${i}`}>
                <AccordionTrigger className="cursor-pointer uppercase">
                  <div className="flex w-full items-center justify-between gap-4">
                    <span className="tracking-wide">{item.title}</span>
                    <span className="font-normal">
                      $ {item.price}
                      {item.pricePlus && <span>+</span>}
                    </span>
                  </div>
                </AccordionTrigger>

                <AccordionContent className="flex flex-col gap-4">
                  <p>{item.description}</p>
                  {item.addOns && (
                    <div className="space-y-2">
                      <h5 className="font-bold uppercase">Add-ons</h5>
                      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-x-8">
                        {item.addOns.map((addOn, i) => (
                          <div key={i} className="flex justify-between gap-4 text-sm">
                            <span className="font-medium">{addOn.title}</span>
                            <span>$ {addOn.price}+</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <CornerPill position="right" color="olive" />
      </section>
    </motion.section>
  );
}
