"use client";

import { acrylic } from "@/constants/categories/acrylic";
import { motion } from "motion/react";
import { CornerPill } from "./reusables/corner-pill";
import { ServiceAddOns } from "./reusables/service-addons";
import { ServiceHeading } from "./reusables/service-heading";

export function AcrylicSection() {
  // const [showMore, setShowMore] = useState(false);

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="mb-8"
    >
      <section className="border-claybrown bg-warmsand group relative flex transform flex-col gap-2 overflow-hidden rounded-tl-md rounded-tr-3xl rounded-br-md rounded-bl-3xl border-t border-b border-dashed shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
        <ServiceHeading color="claybrown" title={acrylic.title} position="right" />

        <div className="px-8 pt-2 pb-12">
          <p className="text-sm leading-6 whitespace-pre-wrap">
            Acrylic with Gel Polish
            <br />
            Enjoy the perfect blend of strength and modern style. After creating a durable acrylic
            base, we apply your choice of gel polish for a glossy, long-lasting, and chip-resistant
            finish.
          </p>

          <p className="mt-2 text-sm leading-6 whitespace-pre-wrap">
            Acrylic with Powder Color
            <br />
            This service uses colored powder to build your acrylic nails—no additional polish
            needed. The result is vibrant, rich color from the start, sealed with a top coat for
            lasting shine and protection. We recommend this option if you're looking for longer wear
            and better shape retention compared to gel polish.
          </p>

          <div>
            {acrylic.services.map((item, i) => (
              <div
                key={i}
                className="border-claybrown flex flex-col gap-4 border-b py-4 text-sm font-medium uppercase last:border-b-0"
              >
                <div className="font-bold tracking-wide">{item.title}</div>
                {item.subServices && (
                  <div className="grid grid-cols-1 gap-2">
                    {item.subServices.map((subItem, j) => (
                      <div key={j} className="flex justify-between gap-4 text-sm">
                        <span className="font-medium">{subItem.title}</span>
                        <div className="flex min-w-10 justify-between gap-1 font-normal">
                          <span>$</span>
                          <span>{subItem.price}+</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <ServiceAddOns color="claybrown" addOns={acrylic.addOns} />
        </div>

        <CornerPill position="left" color="claybrown" />
      </section>
    </motion.section>
  );
}
