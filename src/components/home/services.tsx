import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { ServiceCarousel } from "../services-carousel";
import { Button } from "../ui/extension/button";

export function Services() {
  return (
    <section className="bg-warmsand flex flex-col gap-8 p-8 px-4 pb-12 sm:px-8">
      <div className="flex flex-col gap-4 sm:items-center">
        <h2 className="text-claybrown text-3xl tracking-widest uppercase">Our Services</h2>
        <p className="text-sm">Elevate your look, tell your story with our premium offerings</p>
      </div>

      <div className="mx-auto w-full max-w-(--breakpoint-2xl)">
        <ServiceCarousel />
      </div>

      <Button
        effect={"expandIcon"}
        icon={ChevronRight}
        iconPlacement="right"
        asChild
        className="mt-4 self-center"
      >
        <Link href={"/services"}>View All Services</Link>
      </Button>
    </section>
  );
}
