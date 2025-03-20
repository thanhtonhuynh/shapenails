import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { ServiceCarousel } from "../services-carousel";
import { Button } from "../ui/extension/button";

export function Services() {
  return (
    <section className="mx-auto flex w-full max-w-(--breakpoint-2xl) flex-col gap-8 px-4 sm:px-8">
      <div className="flex flex-col items-center gap-2">
        <h2 className="tracking-wide uppercase">Our Services</h2>
        <p className="font-medium capitalize">Elevate your look, tell your story</p>
      </div>

      <ServiceCarousel />

      <Button
        effect={"expandIcon"}
        icon={ChevronRight}
        iconPlacement="right"
        asChild
        className="self-center"
      >
        <Link href={"/services"}>View All Services</Link>
      </Button>
    </section>
  );
}
