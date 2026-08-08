"use client";

import { policies } from "@/constants/policies";
import { cn } from "@/lib/utils";
import { motion, useReducedMotion } from "motion/react";
import Link from "next/link";

const clauseNumber = (index: number) => String(index + 1).padStart(2, "0");

/** Sticky rail on desktop. Tracks which clause is in view. */
export function PolicyIndexRail({ activeId }: { activeId: string }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <aside className="hidden lg:col-span-3 lg:block">
      <nav aria-label="Policies" className="sticky top-32 flex flex-col">
        <ol className="flex flex-col">
          {policies.map((policy, i) => {
            const isActive = policy.id === activeId;

            return (
              <li key={policy.id} className="relative">
                <Link
                  href={`#${policy.id}`}
                  aria-current={isActive ? "true" : undefined}
                  className={cn(
                    "flex items-baseline gap-4 py-2 pl-6 text-sm transition-colors",
                    isActive
                      ? "text-deepespresso font-semibold"
                      : "text-charcoal hover:text-deepespresso",
                  )}
                >
                  <span className="tabular-nums">{clauseNumber(i)}</span>
                  <span className="tracking-wide">{policy.title}</span>
                </Link>

                {isActive && (
                  <motion.span
                    aria-hidden
                    layoutId="policy-index-marker"
                    transition={
                      shouldReduceMotion
                        ? { duration: 0 }
                        : { type: "spring", stiffness: 380, damping: 34 }
                    }
                    className="bg-claybrown absolute top-1/2 left-0 h-5 w-0.5 -translate-y-1/2"
                  />
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </aside>
  );
}

/** Plain typographic list above the clauses on small screens. */
export function PolicyIndexCompact() {
  return (
    // Clause 01 supplies the closing rule, so this only draws its own top rule.
    <nav aria-label="Policies" className="border-claybrown/25 border-t pt-8 pb-4 lg:hidden">
      <ol className="grid grid-cols-1 gap-x-8 gap-y-1 sm:grid-cols-2">
        {policies.map((policy, i) => (
          <li key={policy.id}>
            <Link
              href={`#${policy.id}`}
              className="text-charcoal hover:text-deepespresso flex items-baseline gap-3 py-1 text-sm transition-colors"
            >
              <span className="tabular-nums">{clauseNumber(i)}</span>
              <span className="tracking-wide">{policy.title}</span>
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}
