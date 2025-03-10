import Image from "next/image";

export function HomeHero() {
  return (
    <header className="clip-trapezoid bg-claybrown p-8 pt-28 pb-32 shadow-sm">
      <div className="relative mx-auto w-full max-w-(--breakpoint-2xl) p-8 xl:grid xl:grid-cols-2">
        <div className="relative flex h-[500px] md:justify-center md:gap-8 xl:grid xl:grid-cols-3">
          <div className="absolute z-10 h-[500px] w-[200px] translate-y-16 overflow-hidden rounded-t-[100px] rounded-b-3xl shadow-sm md:relative md:z-auto">
            <Image
              src={"/home1.jpg"}
              alt="Hero Image"
              fill
              className="border-warmsand rounded-t-[100px] rounded-b-3xl border border-dashed object-cover"
            />
          </div>
          <div className="absolute left-1/2 z-20 h-[500px] w-[200px] -translate-x-1/2 translate-y-8 overflow-hidden rounded-t-[100px] rounded-b-3xl shadow-sm md:relative md:left-0 md:z-auto md:-translate-x-0">
            <Image
              src={"/home2.jpg"}
              alt="Hero Image"
              fill
              className="border-warmsand rounded-t-[100px] rounded-b-3xl border border-dashed object-cover"
            />
          </div>
          <div className="absolute right-0 z-30 h-[500px] w-[200px] overflow-hidden rounded-t-[100px] rounded-b-3xl shadow-sm md:relative md:z-auto">
            <Image
              src={"/services2.jpg"}
              alt="Hero Image"
              fill
              className="border-warmsand rounded-t-[100px] rounded-b-3xl border border-dashed object-cover"
            />
          </div>
        </div>

        <div className="absolute top-1/2 left-1/2 z-40 -translate-x-1/2 -translate-y-1/2 xl:hidden">
          <div className="text-ivory bg-deepespresso/40 mx-auto w-full max-w-lg space-y-4 rounded-xs p-8 text-center tracking-widest uppercase">
            <h1 className="p-8 text-center font-extrabold">The Shape Nails</h1>
            <p className="font-playfair-display font-medium">
              Where Stories Shaped Through Stunning Nails
            </p>
          </div>
        </div>

        <div className="text-ivory z-40 hidden items-center justify-center tracking-widest uppercase xl:flex xl:flex-col">
          <h1 className="z-40 p-8 font-extrabold uppercase drop-shadow-[4px_4px_0px_rgb(59,47,47,0.5))]">
            The Shape Nails
          </h1>
          <p className="font-playfair-display font-medium">
            Where Stories Shaped Through Stunning Nails
          </p>
        </div>
      </div>
    </header>
  );
}
