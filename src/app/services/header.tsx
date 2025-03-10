import Image from "next/image";

export function ServicesHeader() {
  return (
    <header className="clip-trapezoid bg-warmsand p-8 pt-28 pb-32 shadow-sm">
      <div className="mx-auto w-full max-w-(--breakpoint-2xl) p-8 lg:grid lg:grid-cols-2">
        <div className="relative flex h-[500px] md:justify-center md:gap-8 lg:grid lg:grid-cols-3">
          <div className="absolute z-10 h-[500px] w-[200px] translate-y-16 overflow-hidden rounded-t-[100px] rounded-b-3xl shadow-sm md:relative md:z-auto">
            <Image
              src={"/services1.jpg"}
              alt="Hero Image"
              fill
              className="border-warmsand rounded-t-[100px] rounded-b-3xl border border-dashed object-cover"
            />
          </div>

          <div className="absolute left-1/2 z-20 h-[500px] w-[200px] -translate-x-1/2 translate-y-8 overflow-hidden rounded-t-[100px] rounded-b-3xl shadow-sm md:relative md:left-0 md:z-auto md:-translate-x-0">
            <Image
              src={"/services3.jpg"}
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

          <h1 className="absolute top-1/2 left-1/2 z-40 flex w-full -translate-x-1/2 -translate-y-1/2 justify-center px-4 font-extrabold tracking-widest uppercase lg:hidden">
            <span className="bg-olive/50 text-warmsand rounded-xs p-8">Services</span>
          </h1>
        </div>

        <h1 className="text-claybrown z-40 hidden items-center justify-center p-8 font-extrabold tracking-widest uppercase drop-shadow-[4px_4px_0px_rgb(163,163,128,0.5)] lg:flex">
          Services
        </h1>
      </div>
    </header>
  );
}
