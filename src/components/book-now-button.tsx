import { freshaUrl } from "@/constants";
import { CalendarPlus } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

export function BookNowButton() {
  return (
    <Button
      asChild
      className="group bg-deepespresso hover:bg-ivory h-10 rounded-full tracking-wide uppercase shadow-lg transition delay-[0.1s] duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]"
    >
      <Link target="blank" href={freshaUrl}>
        <div className="relative overflow-hidden">
          <p className="text-ivory flex items-center gap-2 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:translate-y-[-20px]">
            <CalendarPlus className="size-4" />
            Book Now
          </p>
          <p
            aria-hidden
            className="text-deepespresso absolute top-5 left-0 flex items-center gap-2 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:top-0"
          >
            <CalendarPlus className="size-4" />
            Book Now
          </p>
        </div>
      </Link>
    </Button>
  );
}
