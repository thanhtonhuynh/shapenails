"use client";

import { cn } from "@/lib/utils";
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "motion/react";
import Image from "next/image";
import type { PageHeaderImage } from "./page-header";

/** Resting position of each arch on the arc. Outer two angle inward, centre sits forward. */
const arcPlacement = [
  { rotateY: 22, translateZ: -110, lift: 34 },
  { rotateY: 0, translateZ: 60, lift: 0 },
  { rotateY: -22, translateZ: -110, lift: 34 },
];

const tilt = { stiffness: 110, damping: 18, mass: 0.6 };

export function PageHeaderStage({
  images,
  className,
}: {
  images: PageHeaderImage[];
  className?: string;
}) {
  const shouldReduceMotion = useReducedMotion();

  // Pointer position as 0..1 across the stage. Motion values so the tilt never re-renders React.
  const pointerX = useMotionValue(0.5);
  const pointerY = useMotionValue(0.5);
  const rotateY = useSpring(useTransform(pointerX, [0, 1], [8, -8]), tilt);
  const rotateX = useSpring(useTransform(pointerY, [0, 1], [-6, 6]), tilt);

  const recentre = () => {
    pointerX.set(0.5);
    pointerY.set(0.5);
  };

  return (
    <div
      className={cn("[perspective:1400px]", className)}
      onPointerMove={(event) => {
        if (shouldReduceMotion || event.pointerType !== "mouse") return;
        const bounds = event.currentTarget.getBoundingClientRect();
        pointerX.set((event.clientX - bounds.left) / bounds.width);
        pointerY.set((event.clientY - bounds.top) / bounds.height);
      }}
      onPointerLeave={recentre}
    >
      <motion.div
        style={
          shouldReduceMotion
            ? { transformStyle: "preserve-3d" }
            : { transformStyle: "preserve-3d", rotateX, rotateY }
        }
        className="flex items-center justify-center gap-4 sm:gap-8 xl:gap-12"
      >
        {images.slice(0, 3).map((image, i) => {
          const { rotateY: restY, translateZ, lift } = arcPlacement[i];

          return (
            // One element, one transform, always present. The resting lift is the animation's
            // end value rather than a second transform, so no layer is created and torn down.
            <motion.div
              key={image.src}
              initial={shouldReduceMotion ? false : { opacity: 0, y: lift + 24 }}
              animate={{ opacity: 1, y: lift }}
              transition={{ duration: 0.45, delay: i * 0.08, ease: "easeOut" }}
              style={{ rotateY: restY, z: translateZ, transformStyle: "preserve-3d" }}
              className="relative h-[260px] flex-1 rounded-t-[100px] rounded-b-3xl shadow-[0_45px_70px_-30px_rgba(59,47,47,0.75)] sm:h-[330px] md:h-[400px] md:max-w-[210px] lg:h-[450px]"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                priority
                sizes="(max-width: 768px) 33vw, 210px"
                className="rounded-t-[100px] rounded-b-3xl object-cover"
              />
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
