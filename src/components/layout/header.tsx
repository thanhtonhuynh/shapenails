"use client";

import { cn } from "@/lib/utils";
import { useMotionValueEvent, useScroll } from "motion/react";
import { useState } from "react";
import { DesktopNav } from "./desktop-nav";
import { Logo } from "./logo";
import { MobileNav } from "./mobile-nav";

export function Header() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll change
  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  return (
    <header className="fixed top-4 left-1/2 z-50 w-full max-w-(--breakpoint-2xl) -translate-x-1/2 px-4">
      <div
        className={cn(
          "flex h-16 w-full items-center justify-between gap-4 rounded-xl border border-transparent bg-transparent p-4 transition duration-1000",
          scrolled && "bg-ivory/75 border-claybrown shadow-sm backdrop-blur-sm",
        )}
      >
        <Logo />
        <DesktopNav />
        <MobileNav />
      </div>
    </header>
  );
}
