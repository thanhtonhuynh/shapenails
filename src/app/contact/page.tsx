import { Button } from "@/components/ui/button";
import { Mail, MapPinHouse, PhoneOutgoing } from "lucide-react";
import Link from "next/link";
import { FiFacebook, FiInstagram } from "react-icons/fi";
import { ContactHero } from "./hero";

export default function Page() {
  return (
    <>
      <ContactHero />

      <main className="mx-auto my-16 w-full max-w-(--breakpoint-2xl) space-y-16">
        <section className="space-y-6 px-4 sm:px-8">
          <h2 className="uppercase">How can we help you today?</h2>
          <div>
            <p>
              We understand deciding the right solution for your nails can feel overwhelming. We're
              here to listen and help you every step of the way.
            </p>
            <p>
              Contact us today for personalized assistance and support - we're just a message or
              call away!
            </p>
          </div>
        </section>

        <section className="grid grid-cols-1 gap-8 px-4 sm:px-8 lg:grid-cols-3">
          <div className="bg-olive text-ivory flex basis-1/3 flex-col justify-center gap-4 p-8 shadow-sm">
            <h5 className="font-playfair-display tracking-wide uppercase">Business Hours</h5>
            <div className="space-y-2 text-sm font-medium tracking-wide uppercase">
              <p className="py-0.5">Mon-Sat: 9:30AM to 7:30PM</p>
              <p className="py-0.5">Sunday: Closed</p>
            </div>
          </div>

          <div className="bg-olive text-ivory flex basis-1/3 flex-col justify-center gap-4 p-8 shadow-sm">
            <h5 className="font-playfair-display tracking-wide uppercase">Contact Information</h5>
            <div className="flex flex-col items-start gap-2 tracking-wide uppercase">
              <Button className="text-ivory h-fit !px-0 py-0.5" asChild variant={"link"}>
                <Link href="tel:+18579998268">
                  <PhoneOutgoing className="size-4" />
                  +1 (857) 999 - 8268
                </Link>
              </Button>

              <Button className="text-ivory h-fit !px-0 py-0.5" asChild variant={"link"}>
                <Link href="mailto:theshapenails@gmail.com">
                  <Mail className="size-4" />
                  theshapenails@gmail.com
                </Link>
              </Button>

              <Button className="text-ivory h-fit !px-0 py-0.5" asChild variant={"link"}>
                <Link target="blank" href="https://maps.app.goo.gl/KXA6y7j7q6aSoRe66">
                  <MapPinHouse className="size-4" />
                  <div className="flex flex-row gap-1 lg:flex-col lg:gap-0 xl:flex-row xl:gap-1">
                    <span>243 Boston Ave, Medford</span> <span>MA 02155</span>
                  </div>
                </Link>
              </Button>
            </div>
          </div>

          <div className="bg-olive text-ivory flex basis-1/3 flex-col justify-center gap-4 p-8 shadow-sm">
            <h5 className="font-playfair-display tracking-wide uppercase">Social Media</h5>
            <div className="flex flex-col items-start gap-2 text-sm font-medium tracking-wide uppercase">
              <Button asChild variant={"link"} className="text-ivory h-fit !px-0 py-0.5">
                <Link target="blank" href="https://www.facebook.com/shapenailsmedford">
                  <FiFacebook className="size-4" />
                  <span>Shape Nails</span>
                </Link>
              </Button>
              <Button asChild variant={"link"} className="text-ivory h-fit !px-0 py-0.5">
                <Link target="blank" href="https://www.instagram.com/shapenail_studio/">
                  <FiInstagram className="size-4" />
                  <span>shapenail_studio</span>
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
