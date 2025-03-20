import { socialLinks } from "@/constants";
import Link from "next/link";
import { Button } from "../ui/button";

export function FollowUs() {
  return (
    <section className="px-4 py-32 sm:px-8">
      <div className="mx-auto flex w-full max-w-(--breakpoint-2xl) flex-col gap-8">
        <div className="flex flex-col items-center gap-8">
          <h2 className="flex flex-col gap-1 text-3xl tracking-widest uppercase sm:flex-row sm:gap-2">
            <span>Stay Connected.</span>
            <span>Get Inspired.</span>
          </h2>

          <div className="space-y-1 leading-6">
            <p>
              Explore our latest nail art, special offers, and get inspired by our talented artists.
            </p>
            <p>Tag us in your nailfies - we love seeing your Shape Nails moments!</p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-4 text-sm font-medium tracking-wide uppercase md:flex-row md:gap-8">
          {socialLinks.map((link, i) => (
            <Button
              key={i}
              asChild
              variant={"outline"}
              className="border-claybrown hover:bg-claybrown hover:text-ivory transition duration-300 hover:scale-105"
            >
              <Link target="blank" href={link.href}>
                <link.icon className="size-4" />
                <span>{link.title}</span>
              </Link>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
}
