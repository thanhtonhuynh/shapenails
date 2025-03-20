"use client";

import { mobileNavItems } from "@/constants";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion, MotionConfig } from "motion/react";
import Link from "next/link";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

const containerVariants = {
  open: {
    width: "100vw",
    height: "100vh",
    top: "-30px",
    right: "-17px",
    borderRadius: 0,
    transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
  },

  closed: {
    width: 36,
    height: 36,
    top: 0,
    right: 0,
    transition: { duration: 0.5, delay: 0.2, ease: [0.76, 0, 0.24, 1] },
  },
};

const perspective = {
  initial: {
    opacity: 0,
    rotateX: 90,
    translateY: 80,
    translateX: -20,
  },

  enter: (i: number) => ({
    opacity: 1,
    rotateX: 0,
    translateY: 0,
    translateX: 0,
    transition: {
      duration: 0.5,
      delay: 0.25 + i * 0.1,
      ease: [0.215, 0.61, 0.355, 1],
    },
  }),

  exit: {
    opacity: 0,
    transition: { duration: 0.25, ease: [0.76, 0, 0.24, 1] },
  },
};

export function MobileNav() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    document.body.style.overflow = active ? "hidden" : "auto";
  }, [active]);

  return (
    <div className="relative h-9 md:hidden">
      <motion.div
        className="bg-warmsand absolute rounded-md"
        variants={containerVariants}
        animate={active ? "open" : "closed"}
        initial="closed"
      >
        <AnimatePresence>{active && <Nav active={active} setActive={setActive} />}</AnimatePresence>
      </motion.div>

      <MenuButton active={active} setActive={setActive} />
    </div>
  );
}

function Nav({
  active,
  setActive,
}: {
  active: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <div className="flex h-full flex-col justify-center px-8">
      <ul className="flex flex-col gap-8">
        {mobileNavItems.map((navItem, i) => (
          <li key={i} className="perspective-[120px] perspective-origin-bottom">
            <motion.div
              custom={i}
              variants={perspective}
              initial="initial"
              animate="enter"
              exit="exit"
              className="border-deepespresso border-b"
            >
              <Link
                href={navItem.href}
                className="text-3xl uppercase"
                onClick={() => setActive(!active)}
              >
                {navItem.title}
              </Link>
            </motion.div>
          </li>
        ))}
      </ul>
    </div>
  );
}

function MenuButton({
  active,
  setActive,
}: {
  active: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <MotionConfig
      transition={{
        duration: 0.5,
        ease: [0.76, 0, 0.24, 1],
      }}
    >
      <motion.button
        initial={false}
        onClick={() => setActive(!active)}
        className={cn(
          "bg-warmsand hover:bg-ivory relative size-9 cursor-pointer rounded-md shadow-lg transition-colors",
        )}
        animate={active ? "open" : "closed"}
      >
        <motion.span
          style={{
            left: "50%",
            top: "35%",
            x: "-50%",
            y: "-50%",
          }}
          className="bg-foreground absolute h-[1px] w-4 rounded-full"
          variants={{
            open: {
              rotate: ["0deg", "0deg", "45deg"],
              top: ["35%", "50%", "50%"],
            },
            closed: {
              rotate: ["45deg", "0deg", "0deg"],
              top: ["50%", "50%", "35%"],
            },
          }}
        />
        <motion.span
          style={{
            left: "50%",
            top: "50%",
            x: "-50%",
            y: "-50%",
          }}
          className="bg-foreground absolute h-[1px] w-4 rounded-full"
          variants={{
            open: {
              rotate: ["0deg", "0deg", "-45deg"],
            },
            closed: {
              rotate: ["-45deg", "0deg", "0deg"],
            },
          }}
        />
        <motion.span
          style={{
            left: "50%",
            bottom: "35%",
            x: "-50%",
            y: "50%",
          }}
          className="bg-foreground absolute h-[1px] w-4 rounded-full"
          variants={{
            open: {
              rotate: ["0deg", "0deg", "45deg"],
              bottom: ["35%", "50%", "50%"],
            },
            closed: {
              rotate: ["45deg", "0deg", "0deg"],
              bottom: ["50%", "50%", "35%"],
            },
          }}
        />
      </motion.button>
    </MotionConfig>
  );
}
