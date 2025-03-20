import Link from "next/link";
import { FiFacebook, FiInstagram } from "react-icons/fi";
import { IoLogoTiktok } from "react-icons/io5";
import { Button } from "../ui/button";

export function FollowUs() {
  return (
    <section className="px-4 py-32 sm:px-8">
      <div className="mx-auto flex w-full max-w-(--breakpoint-2xl) flex-col gap-8">
        <div className="flex flex-col gap-8 sm:items-center">
          <h2 className="text-claybrown flex flex-col gap-1 text-3xl tracking-widest uppercase sm:flex-row sm:gap-2">
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
          <Button
            asChild
            variant={"outline"}
            className="border-claybrown hover:bg-claybrown hover:text-ivory transition duration-300 hover:scale-105"
          >
            <Link target="blank" href="https://www.facebook.com/shapenailsmedford">
              <FiFacebook className="size-4" />
              <span>Shape Nails</span>
            </Link>
          </Button>

          <Button
            asChild
            variant={"outline"}
            className="border-claybrown hover:bg-claybrown hover:text-ivory transition duration-300 hover:scale-105"
          >
            <Link target="blank" href="https://www.instagram.com/shapenailsmedford/">
              <FiInstagram className="size-4" />
              <span>shapenailsmedford</span>
            </Link>
          </Button>

          <Button
            asChild
            variant={"outline"}
            className="border-claybrown hover:bg-claybrown hover:text-ivory transition duration-300 hover:scale-105"
          >
            <Link target="blank" href="https://www.tiktok.com/@shapenailsmedford">
              <IoLogoTiktok className="size-4" />
              <span>shapenailsmedford</span>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
