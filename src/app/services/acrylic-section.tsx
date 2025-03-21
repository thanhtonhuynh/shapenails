"use client";

import { acrylic } from "@/constants/categories/acrylic";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { CornerPill } from "./reusables/corner-pill";

export function AcrylicSection() {
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
          {acrylic.title}
        </h2>

        <p className="text-sm leading-6 whitespace-pre-wrap">{acrylic.description}</p>

        <div className="">
          {acrylic.services.map((item, i) => (
            <div
              key={i}
              className="border-claybrown flex flex-col gap-4 border-b py-4 text-sm font-medium uppercase last:border-b-0"
            >
              <div className="font-semibold tracking-wide">{item.title}</div>
              {item.subServices && (
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-x-4">
                  {item.subServices.map((subItem, j) => (
                    <div key={j} className="flex gap-4 text-sm">
                      <span className="font-medium">{subItem.title}</span>
                      <span className="shrink-0 font-normal">
                        $ {subItem.price}
                        {subItem.pricePlus && <span>+</span>}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="space-y-2">
          <h5 className="font-medium uppercase">Add-ons</h5>
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-x-4">
            {acrylic.addOns &&
              acrylic.addOns.map((item, i) => (
                <div key={i} className="flex gap-4 text-sm">
                  <span className={cn("font-medium", item.bold && "font-bold")}>{item.title}</span>
                  <span>$ {item.price}+</span>
                </div>
              ))}
          </div>
        </div>

        <CornerPill position="left" color="claybrown" />
      </section>
    </motion.section>
  );
}
