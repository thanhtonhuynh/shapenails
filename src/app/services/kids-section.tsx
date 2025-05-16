"use client";

import { kidServices } from "@/constants/categories/kids";
import { CircleAlert } from "lucide-react";
import { motion } from "motion/react";
import { CornerPill } from "./reusables/corner-pill";
import { ServiceHeading } from "./reusables/service-heading";

export function KidsSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <section className="border-olive bg-warmsand group relative flex flex-col gap-2 overflow-hidden rounded-tl-3xl rounded-tr-md rounded-br-3xl rounded-bl-md border-r border-l border-dashed shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
        <ServiceHeading color="olive" title={kidServices.title} position="left" />

        <div className="px-8 pt-2 pb-12">
          <p className="text-terracotta flex items-center gap-2 text-sm font-semibold">
            <CircleAlert className="size-4 shrink-0" />
            <span>
              Cuticle care is not included in children's services for a gentle experience.
            </span>
          </p>

          <div>
            {kidServices.services.map((item, i) => (
              <div
                key={i}
                className="border-olive flex flex-col gap-4 border-b py-4 text-sm font-medium uppercase last:border-b-0"
              >
                <div className="font-bold tracking-wide">{item.title}</div>
                {item.subServices && (
                  <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-x-4">
                    {item.subServices.map((subItem, j) => (
                      <div key={j} className="flex justify-between gap-4 text-sm">
                        <span className="font-medium">{subItem.title}</span>
                        <div className="flex min-w-10 justify-between gap-1 font-normal">
                          <span>$</span>
                          <span>
                            {subItem.price}
                            {subItem.pricePlus && <span>+</span>}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <CornerPill position="right" color="olive" />
      </section>
    </motion.section>
  );
}
