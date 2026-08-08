"use client";

import { Button } from "@/components/ui/button";
import { nailArtSms, paymentMethods, policies, type Policy } from "@/constants/policies";
import { motion, useReducedMotion } from "motion/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { PolicyIndexCompact, PolicyIndexRail } from "./policy-index";

export function PolicyManuscript() {
  const [activeId, setActiveId] = useState(policies[0].id);

  useEffect(() => {
    const elements = policies
      .map((policy) => document.getElementById(policy.id))
      .filter((element): element is HTMLElement => element !== null);

    if (!elements.length) return;

    // The last clause whose top has passed the reading line is the one being read.
    const sync = () => {
      const readingLine = window.innerHeight * 0.3;
      const passed = elements.filter((el) => el.getBoundingClientRect().top <= readingLine);
      setActiveId((passed.at(-1) ?? elements[0]).id);
    };

    // The observer only wakes us when a clause crosses that line, so no scroll listener.
    const observer = new IntersectionObserver(sync, { rootMargin: "-30% 0px -70% 0px" });
    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="mx-auto w-full max-w-(--breakpoint-2xl) px-4 pb-24 sm:px-8 md:pb-32">
      <PolicyIndexCompact />

      <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-8 lg:pt-20">
        <PolicyIndexRail activeId={activeId} />

        <div className="lg:col-span-8 lg:col-start-5">
          {policies.map((policy, i) => (
            <PolicyClause key={policy.id} policy={policy} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PolicyClause({ policy, index }: { policy: Policy; index: number }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.article
      id={policy.id}
      initial={shouldReduceMotion ? false : { opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true, amount: 0.15 }}
      className="border-claybrown/25 flex scroll-mt-28 flex-col gap-4 border-t py-12 md:flex-row md:gap-10 md:py-16"
    >
      <span
        aria-hidden
        className="font-playfair-display text-claybrown shrink-0 text-5xl leading-none md:w-24 md:text-6xl"
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      <div className="flex flex-col gap-10">
        <h2 className="font-playfair-display text-deepespresso mt-4 text-2xl tracking-wide md:text-3xl">
          {policy.title}
        </h2>

        <ul className="flex max-w-[58ch] list-none flex-col gap-5 leading-6">
          {policy.points.map((point) => (
            <li key={point.text}>
              {point.text}

              {point.details && (
                <ul className="border-claybrown/40 mt-4 flex list-none flex-col gap-2 border-l pl-6">
                  {point.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        {policy.id === "payment" && <PaymentMethods />}

        {policy.id === "nail-art" && (
          <Button
            asChild
            className="bg-deepespresso text-ivory hover:bg-deepespresso/90 h-11 self-start rounded-full px-6 text-sm tracking-wide uppercase transition active:translate-y-[1px]"
          >
            <Link href={nailArtSms.href}>{nailArtSms.label}</Link>
          </Button>
        )}
      </div>
    </motion.article>
  );
}

function PaymentMethods() {
  return (
    <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
      {paymentMethods.map(({ title, icon: Icon }) => (
        <span
          key={title}
          className="text-deepespresso flex items-center gap-2.5 text-sm tracking-wide uppercase"
        >
          <Icon className="text-claybrown size-4" />
          {title}
        </span>
      ))}
    </div>
  );
}
