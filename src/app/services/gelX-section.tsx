"use client";

import { gelX } from "@/constants/categories/gel-x";
import { motion } from "motion/react";
import { CornerPill } from "./reusables/corner-pill";
import { ServiceAddOns } from "./reusables/service-addons";
import { ServiceHeading } from "./reusables/service-heading";

export function GelXSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <section className="border-olive bg-warmsand group relative flex flex-col gap-2 overflow-hidden rounded-tl-3xl rounded-tr-md rounded-br-3xl rounded-bl-md border-r border-l border-dashed shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
        <ServiceHeading color="olive" title={gelX.title} position="left" />

        <div className="px-8 pt-2 pb-10">
          <p className="text-sm">{gelX.description}</p>
          <div className="">
            {gelX.services.map((item, i) => (
              <div
                key={i}
                className="border-olive flex flex-col gap-4 border-b py-4 text-sm font-medium uppercase last:border-b-0"
              >
                <span className="font-bold tracking-wide">{item.title}</span>
                {item.subServices && (
                  <div className="flex flex-col gap-2">
                    {item.subServices.map((subItem, subIndex) => (
                      <div key={subIndex} className="flex justify-between gap-4 text-sm">
                        <span className="font-medium">{subItem.title}</span>
                        <div className="flex min-w-10 justify-between gap-1 font-normal">
                          <span>$</span>
                          <span>{subItem.price}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          <ServiceAddOns color="olive" addOns={gelX.addOns} />

          <div className="text-deepespresso/80 mt-6 flex items-center gap-3 text-xs font-medium">
            <div className="flex flex-col gap-0.5">
              <span>Please note that additional charges may apply for longer nail lengths.</span>{" "}
              <span>Your technician will kindly inform you before beginning the service.</span>
            </div>
          </div>
        </div>

        <CornerPill position="right" color="olive" />
      </section>
    </motion.section>
  );
}
