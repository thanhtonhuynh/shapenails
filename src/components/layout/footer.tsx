import { MapPinHouse, PhoneOutgoing } from "lucide-react";
import Link from "next/link";
import { FiFacebook, FiInstagram } from "react-icons/fi";
import { Button } from "../ui/button";
import { Logo } from "./logo";

export function Footer() {
  return (
    <footer className="mx-auto my-4 w-full max-w-(--breakpoint-2xl) px-4">
      <div className="border-claybrown flex w-full items-center justify-between gap-4 rounded-xl border p-4 shadow-sm">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
          <div className="flex flex-col items-start gap-2">
            <Logo />
            <Button asChild variant={"ghost"} className="group transition duration-300">
              <Link target="blank" href="https://www.facebook.com/shapenailsmedford">
                <FiFacebook className="size-4" />
                <span className="opacity-0 transition duration-300 group-hover:opacity-100">
                  Shape Nails
                </span>
              </Link>
            </Button>
            <Button asChild variant={"ghost"} className="group transition duration-300">
              <Link target="blank" href="https://www.instagram.com/shapenail_studio/">
                <FiInstagram className="size-4" />
                <span className="opacity-0 transition duration-300 group-hover:opacity-100">
                  shapenail_studio
                </span>
              </Link>
            </Button>
          </div>

          <div className="flex flex-col gap-1">
            <h5>Business Hours</h5>
            <div>
              <p className="text-sm">
                <span className="font-semibold">Mon - Sat:</span> 9:30 AM - 7:30 PM
              </p>
              <p className="text-sm">
                <span className="font-semibold">Sunday:</span> Closed
              </p>
            </div>
          </div>

          <div className="flex flex-col items-start gap-2">
            <Button className="!px-0" asChild variant={"link"}>
              <Link href="tel:+18579998268">
                <PhoneOutgoing className="size-4" />
                +1 (857) 999 - 8268
              </Link>
            </Button>
            <Button className="!px-0" asChild variant={"link"}>
              <Link target="blank" href="https://maps.app.goo.gl/KXA6y7j7q6aSoRe66">
                <MapPinHouse className="size-4" />
                243 Boston Ave, Medford, MA 02155
              </Link>
            </Button>
          </div>
        </div>

        <div className="text-muted-foreground self-center text-sm">
          &copy; {new Date().getFullYear()}, Shape Nails. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
