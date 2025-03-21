"use client";

import { kidServices } from "@/constants/categories/kids";
import { CircleAlert } from "lucide-react";
import { motion } from "motion/react";

export function KidsSection() {
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
          {kidServices.title}
        </h2>

        <p className="text-terracotta flex items-center gap-2 text-sm font-semibold">
          <CircleAlert className="size-4 shrink-0" />
          <span>Cuticle care is not included in children's services for a gentle experience.</span>
        </p>

        <div className="">
          {kidServices.services.map((item, i) => (
            <div
              key={i}
              className="border-olive flex flex-col gap-4 border-b py-4 text-sm font-medium uppercase last:border-b-0"
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

        <div className="bg-olive absolute right-0 bottom-0 size-10 rounded-tl-3xl rounded-br-3xl transition duration-300 group-hover:scale-125" />
      </section>
    </motion.section>
  );
}
