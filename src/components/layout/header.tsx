"use client";

import { cn } from "@/lib/utils";
import { useMotionValueEvent, useScroll } from "motion/react";
import { useState } from "react";
import { BookNowButton } from "../book-now-button";
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
    <header className="fixed top-4 left-1/2 z-50 w-full max-w-(--breakpoint-2xl) -translate-x-1/2 px-2 lg:px-4 2xl:px-0">
      <div
        className={cn(
          "flex h-16 w-full items-center justify-between gap-2 rounded-xl border border-transparent bg-transparent px-2 transition duration-1000 lg:px-4",
          scrolled && "bg-ivory/75 border-claybrown shadow-sm backdrop-blur-sm",
        )}
      >
        <Logo />
        <DesktopNav />
        <div className="hidden lg:block">
          <BookNowButton />
        </div>
        <MobileNav />
      </div>
    </header>
  );
}
