import { cn } from "@/lib/utils";
import Link from "next/link";

type Props = {
  size?: "default" | "lg";
};

export function Logo({ size = "default" }: Props) {
  return (
    <Link
      className={cn(
        "font-playfair-display flex w-fit flex-row items-center text-xl uppercase",
        size === "lg" && "text-4xl",
      )}
      href="/"
    >
      {/* <span
        className={cn(
          "border-deepespresso -rotate-90 rounded-l-3xl rounded-r-[100px] border border-dashed px-1.5 py-1 text-sm font-medium",
          size === "lg" && "text-xl",
        )}
      >
        the
      </span> */}
      <span className="shrink-0 font-bold tracking-tighter">Shape Nails</span>
    </Link>
  );
}
