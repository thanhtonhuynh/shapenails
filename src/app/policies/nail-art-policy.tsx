"use client";

import { Button } from "@/components/ui/button";
import { nailArtPolicy } from "@/constants/policies";
import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

export function NailArtPolicy() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.section
      id={nailArtPolicy.id}
      initial={shouldReduceMotion ? false : { opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="flex scroll-mt-28 flex-col gap-8 px-4 sm:px-8 lg:flex-row lg:items-center lg:gap-16"
    >
      <div className="relative h-[260px] w-full overflow-hidden rounded-tl-4xl rounded-br-4xl shadow-sm sm:h-[340px] lg:h-[420px] lg:basis-1/2">
        <Image
          src={"/about6.jpg"}
          alt="Close-up of tortoiseshell nail art in black and amber"
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
        />
      </div>

      <div className="flex flex-col items-start gap-4 lg:basis-1/2">
        <h2 className="text-deepespresso text-2xl tracking-widest uppercase md:text-3xl">
          {nailArtPolicy.title}
        </h2>

        <p className="leading-7">{nailArtPolicy.lead}</p>

        <ul className="marker:text-charcoal flex list-disc flex-col gap-2 pl-5 leading-7">
          {nailArtPolicy.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>

        <Button
          asChild
          className="bg-deepespresso text-ivory hover:bg-deepespresso/90 mt-2 h-11 rounded-full px-6 text-sm tracking-wide uppercase shadow-lg transition active:translate-y-[1px]"
        >
          <Link href={nailArtPolicy.smsHref}>{nailArtPolicy.smsLabel}</Link>
        </Button>
      </div>
    </motion.section>
  );
}
