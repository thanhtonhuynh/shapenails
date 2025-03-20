import { contactLinks, socialLinks } from "@/constants";
import Link from "next/link";
import { BookNowButton } from "../book-now-button";
import { Button } from "../ui/button";
import { Logo } from "./logo";

export function Footer() {
  return (
    <footer className="bg-warmsand flex flex-col gap-16">
      <section className="bg-claybrown text-ivory flex h-[350px] flex-col items-center justify-center space-y-6 px-4 [clip-path:var(--clip-ellipse)] sm:[clip-path:var(--clip-ellipse-sm)]">
        <div className="space-y-2 text-center">
          <h2 className="text-xl tracking-widest uppercase sm:text-2xl">
            Book Your Appoinment Today!
          </h2>
          <p className="text-sm font-medium">
            Ready for a little <span className="font-playfair-display italic">'me time' </span>?
            We've got a spot just for you!
          </p>
        </div>

        <BookNowButton />
      </section>

      <section className="mx-auto flex w-full max-w-(--breakpoint-2xl) flex-col gap-8 px-4 sm:px-8">
        <div className="mb-4 flex flex-col items-center gap-4">
          <Logo size="lg" />
          <p className="font-playfair-display text-center text-sm font-medium italic">
            Well-shaped nails are not just a detail, they are a statement.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:flex lg:justify-center lg:gap-32">
          <div className="flex flex-col gap-4">
            <h5 className="font-playfair-display tracking-wide uppercase">Business Hours</h5>
            <div className="space-y-2 text-sm font-medium tracking-wide uppercase">
              <p className="py-0.5">Mon-Sat: 9:30AM to 7:00PM</p>
              <p className="py-0.5">Sunday: Closed</p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h5 className="font-playfair-display tracking-wide uppercase">Contact Information</h5>
            <div className="flex flex-col items-start gap-2 tracking-wide uppercase">
              {contactLinks.map((link, i) => (
                <Button key={i} asChild variant={"link"} className="h-fit !px-0 py-0.5">
                  <Link target="blank" href={link.href}>
                    <link.icon className="size-4" />
                    <span>{link.title}</span>
                  </Link>
                </Button>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h5 className="font-playfair-display tracking-wide uppercase">Social Media</h5>
            <div className="flex flex-col items-start gap-2 tracking-wide">
              {socialLinks.map((link, i) => (
                <Button key={i} asChild variant={"link"} className="h-fit !px-0 py-0.5">
                  <Link target="blank" href={link.href}>
                    <link.icon className="size-4" />
                    <span>{link.title}</span>
                  </Link>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="text-charcoal mb-8 flex flex-col items-center justify-center gap-1 text-sm">
        <p>Copyright &copy; {new Date().getFullYear()}, The Shape Nails. All rights reserved.</p>
        <p className="flex items-center gap-1">
          <span>Designed by</span>
          <Button variant={"link"} className="text-charcoal px-0">
            <Link target="blank" href={"https://tonhuynh.ca"}>
              Ton Huynh
            </Link>
          </Button>
        </p>
      </section>
    </footer>
  );
}
