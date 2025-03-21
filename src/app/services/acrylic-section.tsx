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
      className="mb-8 break-after-avoid"
    >
      <section className="border-claybrown bg-warmsand group relative flex flex-col gap-2 overflow-hidden rounded-tl-md rounded-tr-3xl rounded-br-md rounded-bl-3xl border-t border-b border-dashed shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
        <ServiceHeading color="claybrown" title={acrylic.title} position="right" />

        <div className="px-8 pt-2 pb-12">
          <p className="text-sm leading-6 whitespace-pre-wrap">{acrylic.description}</p>
          {/* <div className="relative">
            <p
              className={`text-sm leading-6 whitespace-pre-wrap transition-all duration-300 ${
                showMore ? "line-clamp-none" : "line-clamp-3"
              }`}
            >
              {acrylic.description}
            </p>

            <Button
              variant="link"
              size="sm"
              className="text-terracotta mt-2 text-xs uppercase"
              onClick={() => setShowMore(!showMore)}
            >
              {showMore ? "Show Less" : "Show More"}
              <ChevronDown className="inline-block size-4" />
            </Button>
          </div> */}

          <div>
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

          <ServiceAddOns color="claybrown" addOns={acrylic.addOns} />
        </div>

        <CornerPill position="left" color="claybrown" />
      </section>
    </motion.section>
  );
}
