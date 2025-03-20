import Image from "next/image";
import { BookNowButton } from "../book-now-button";

export function HomeHero() {
  return (
    <header className="clip-trapezoid bg-warmsand px-4 pt-28 pb-40 shadow-sm sm:px-8">
      <div className="relative mx-auto w-full max-w-(--breakpoint-2xl) lg:flex">
        <div className="relative flex flex-1 gap-4 sm:gap-8 md:justify-center xl:gap-16">
          <div className="relative h-[300px] flex-1 translate-y-16 rounded-t-[100px] rounded-b-3xl shadow-sm sm:h-[350px] md:h-[400px] md:max-w-[250px] lg:h-[450px]">
            <Image
              src={"/home1.png"}
              alt="Hero Image"
              fill
              className="border-claybrown rounded-t-[100px] rounded-b-3xl border border-dashed object-cover"
            />
          </div>

          <div className="relative h-[300px] flex-1 translate-y-8 rounded-t-[100px] rounded-b-3xl shadow-sm sm:h-[350px] md:h-[400px] md:max-w-[250px] lg:h-[450px]">
            <Image
              src={"/home2.png"}
              alt="Hero Image"
              fill
              className="border-claybrown rounded-t-[100px] rounded-b-3xl border border-dashed object-cover"
            />
          </div>

          <div className="relative h-[300px] flex-1 rounded-t-[100px] rounded-b-3xl shadow-sm sm:h-[350px] md:h-[400px] md:max-w-[250px] lg:h-[450px]">
            <Image
              src={"/services2.png"}
              alt="Hero Image"
              fill
              className="border-claybrown rounded-t-[100px] rounded-b-3xl border border-dashed object-cover"
            />
          </div>
        </div>

        <div className="absolute top-1/2 w-full lg:hidden">
          <div className="text-ivory mx-auto flex w-full max-w-xl min-w-xs flex-col items-center gap-4 uppercase sm:min-w-lg">
            <h1 className="flex flex-col items-center gap-1 font-extrabold tracking-widest drop-shadow-[3px_3px_2px_rgb(59,47,47)] sm:flex-row sm:items-start sm:gap-2.5">
              Shape Nails
            </h1>

            <p className="font-playfair-display bg-charcoal/20 rounded-md p-1 text-center font-medium tracking-widest">
              Shaping Stories Through Stunning Nails
            </p>
            <div className="mt-2 md:hidden">
              <BookNowButton />
            </div>
          </div>
        </div>

        <div className="text-claybrown hidden flex-1 items-center justify-center gap-6 uppercase lg:flex lg:flex-col lg:items-center">
          <h1 className="font-extrabold tracking-widest uppercase drop-shadow-[4px_4px_1px_rgba(59,47,47,0.2)]">
            Shape Nails
          </h1>
          <p className="font-playfair-display text-center font-medium tracking-widest">
            Shaping Stories Through Stunning Nails
          </p>
        </div>
      </div>
    </header>
  );
}
