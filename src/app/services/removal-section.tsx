"use client";

import { removal } from "@/constants/categories/removal";
import { motion } from "motion/react";

export function RemovalSection() {
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
          {removal.title}
        </h2>

        <p className="text-sm">{removal.description}</p>

        <div className="">
          {removal.services.map((item, i) => (
            <div
              key={i}
              className="border-claybrown flex gap-4 border-b py-4 text-sm font-medium uppercase last:border-b-0"
            >
              <span className="tracking-wide">{item.title}</span>
              <span className="font-normal">$ {item.price}+</span>
            </div>
          ))}
        </div>

        <div className="bg-claybrown absolute bottom-0 left-0 size-10 rounded-tr-3xl rounded-bl-3xl transition duration-300 group-hover:scale-125" />
      </section>
    </motion.section>
  );
}
