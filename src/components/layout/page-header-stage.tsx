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

/** "full" scales with the viewport for the 100dvh home header; "compact" is fixed. */
const sizeByVariant = {
  full: "h-[clamp(220px,34dvh,320px)] sm:h-[clamp(320px,44dvh,480px)] md:h-[clamp(380px,50dvh,560px)] md:max-w-[240px] lg:h-[clamp(280px,43dvh,540px)] lg:max-w-[290px] xl:max-w-[320px]",
  compact:
    "h-[190px] sm:h-[300px] md:h-[350px] md:max-w-[200px] lg:h-[390px] lg:max-w-[230px] xl:max-w-[250px]",
} as const;

export function PageHeaderStage({
  images,
  className,
  variant = "full",
}: {
  images: PageHeaderImage[];
  className?: string;
  variant?: keyof typeof sizeByVariant;
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
        // One gap at every breakpoint, so the spacing between the arches never changes.
        className="flex items-center justify-center gap-10"
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
              style={{
                rotateY: restY,
                z: translateZ,
                transformStyle: "preserve-3d",
                // Horizontal radius of 50% makes the two top corners meet, so it is a true
                // arch at any width. A fixed px radius left a flat top whose width changed
                // with the card, which is what read as inconsistent.
                borderRadius: "50% 50% 1.5rem 1.5rem / 34% 34% 1.5rem 1.5rem",
              }}
              className={cn(
                "relative flex-1 overflow-hidden shadow-[0_45px_70px_-30px_rgba(59,47,47,0.75)]",
                sizeByVariant[variant],
              )}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                priority
                sizes="(max-width: 768px) 33vw, 320px"
                className="object-cover"
              />
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
