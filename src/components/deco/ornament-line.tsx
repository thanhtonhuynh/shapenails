import { cn } from "@/lib/utils";

/** Hairline rule broken by a small rotated square. Pure CSS, no SVG. */
export function OrnamentLine({ className }: { className?: string }) {
  return (
    <div aria-hidden className={cn("flex items-center gap-4", className)}>
      <span className="via-claybrown/50 h-px flex-1 bg-gradient-to-r from-transparent to-transparent" />
      <span className="bg-claybrown size-1.5 rotate-45" />
      <span className="via-claybrown/50 h-px flex-1 bg-gradient-to-r from-transparent to-transparent" />
    </div>
  );
}
