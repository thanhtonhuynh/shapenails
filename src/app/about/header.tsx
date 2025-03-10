import Image from "next/image";

export function AboutHeader() {
  return (
    <header className="clip-trapezoid bg-terracotta p-8 pt-28 pb-32 shadow-sm">
      <div className="mx-auto w-full max-w-(--breakpoint-2xl) p-8 lg:grid lg:grid-cols-2">
        <div className="relative flex h-[500px] md:justify-center md:gap-8 lg:grid lg:grid-cols-3">
          <div className="absolute z-10 h-[500px] w-[200px] translate-y-16 overflow-hidden rounded-t-[100px] rounded-b-3xl shadow-sm md:relative md:z-auto">
            <Image
              src={"/about1.jpg"}
              alt="Hero Image"
              fill
              className="border-warmsand rounded-t-[100px] rounded-b-3xl border border-dashed object-cover"
            />
          </div>
          <div className="absolute left-1/2 z-20 h-[500px] w-[200px] -translate-x-1/2 translate-y-8 overflow-hidden rounded-t-[100px] rounded-b-3xl shadow-sm md:relative md:left-0 md:z-auto md:-translate-x-0">
            <Image
              src={"/about2.jpg"}
              alt="Hero Image"
              fill
              className="border-warmsand rounded-t-[100px] rounded-b-3xl border border-dashed object-cover"
            />
          </div>
          <div className="absolute right-0 z-30 h-[500px] w-[200px] overflow-hidden rounded-t-[100px] rounded-b-3xl shadow-sm md:relative md:z-auto">
            <Image
              src={"/about3.jpg"}
              alt="Hero Image"
              fill
              className="border-warmsand rounded-t-[100px] rounded-b-3xl border border-dashed object-cover"
            />
          </div>
          <h1 className="text-ivory absolute top-1/2 left-1/2 z-40 flex w-full -translate-x-1/2 -translate-y-1/2 justify-center px-4 font-extrabold tracking-wider uppercase lg:hidden">
            <span className="bg-claybrown/70 rounded-xs p-8">About Us</span>
          </h1>
        </div>

        <h1 className="text-ivory z-40 hidden items-center justify-center rounded-xl p-8 text-4xl font-extrabold tracking-widest uppercase drop-shadow-[4px_4px_0px_rgb(217,207,193,0.5)] lg:flex">
          About Us
        </h1>
      </div>
    </header>
  );
}
