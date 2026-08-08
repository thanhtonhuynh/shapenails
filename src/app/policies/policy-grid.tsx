"use client";

import { paymentMethods, policyColumns, type Policy } from "@/constants/policies";
import { motion, useReducedMotion } from "motion/react";

export function PolicyGrid() {
  return (
    <section className="grid grid-cols-1 gap-8 px-4 sm:px-8 lg:grid-cols-2 lg:items-start">
      {policyColumns.map((column, i) => (
        <div key={i} className="flex flex-col gap-8">
          {column.map((policy) => (
            <PolicyCard key={policy.id} policy={policy} />
          ))}
        </div>
      ))}
    </section>
  );
}

function PolicyCard({ policy }: { policy: Policy }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.article
      id={policy.id}
      initial={shouldReduceMotion ? false : { opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="border-olive bg-warmsand group relative flex scroll-mt-28 flex-col gap-2 overflow-hidden rounded-tl-3xl rounded-tr-md rounded-br-3xl rounded-bl-md border-r border-l border-dashed shadow-sm transition-shadow duration-300 hover:shadow-xl"
    >
      <h2 className="bg-olive text-deepespresso self-start rounded-tl-3xl rounded-br-3xl px-6 py-3 text-xl tracking-wider sm:px-8 sm:py-4">
        {policy.title}
      </h2>

      <div className="px-6 pb-12 sm:px-8">
        <ul className="marker:text-charcoal flex list-disc flex-col gap-2 pl-5 leading-7">
          {policy.points.map((point) => (
            <li key={point.text}>
              {point.text}

              {point.details && (
                <ul className="marker:text-charcoal mt-2 flex list-[circle] flex-col gap-1 pl-5">
                  {point.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        {policy.id === "payment" && <PaymentMethods />}
      </div>

      <div className="bg-olive absolute right-0 bottom-0 size-10 rounded-tl-3xl rounded-br-3xl transition duration-300 group-hover:scale-125" />
    </motion.article>
  );
}

function PaymentMethods() {
  return (
    <div className="mt-4 flex flex-wrap gap-2">
      {paymentMethods.map(({ title, icon: Icon }) => (
        <span
          key={title}
          className="border-olive bg-ivory text-deepespresso inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium tracking-wide uppercase"
        >
          <Icon className="size-4" />
          {title}
        </span>
      ))}
    </div>
  );
}
