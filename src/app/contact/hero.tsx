import Image from "next/image";

export function ContactHero() {
  return (
    <header className="clip-trapezoid bg-olive mb-16 p-8 pt-28 pb-32 shadow-sm">
      <div className="mx-auto w-full max-w-(--breakpoint-2xl) lg:flex">
        <div className="relative flex h-[500px] flex-1 md:justify-center md:gap-8 xl:gap-16">
          <div className="absolute z-10 h-[500px] w-[200px] translate-y-16 overflow-hidden rounded-t-[100px] rounded-b-3xl shadow-sm md:relative md:z-auto">
            <Image
              src={"/about1.png"}
              alt="Hero Image"
              fill
              className="border-warmsand rounded-t-[100px] rounded-b-3xl border border-dashed object-cover"
            />
          </div>
          <div className="absolute left-1/2 z-20 h-[500px] w-[200px] -translate-x-1/2 translate-y-8 overflow-hidden rounded-t-[100px] rounded-b-3xl shadow-sm md:relative md:left-0 md:z-auto md:-translate-x-0">
            <Image
              src={"/about2.png"}
              alt="Hero Image"
              fill
              className="border-warmsand rounded-t-[100px] rounded-b-3xl border border-dashed object-cover"
            />
          </div>
          <div className="absolute right-0 z-30 h-[500px] w-[200px] overflow-hidden rounded-t-[100px] rounded-b-3xl shadow-sm md:relative md:z-auto">
            <Image
              src={"/about3.png"}
              alt="Hero Image"
              fill
              className="border-warmsand rounded-t-[100px] rounded-b-3xl border border-dashed object-cover"
            />
          </div>
          <h1 className="text-warmsand absolute top-1/2 left-1/2 z-40 flex w-full -translate-x-1/2 -translate-y-1/2 justify-center px-4 text-center font-extrabold tracking-widest uppercase lg:hidden">
            <span className="rounded-xs drop-shadow-[3px_3px_2px_rgb(59,47,47)]">Contact Us</span>
          </h1>
        </div>

        <h1 className="text-ivory z-40 hidden flex-1 items-center justify-center rounded-xl p-8 text-center text-4xl font-extrabold tracking-widest uppercase drop-shadow-[4px_4px_1px_rgba(59,47,47,0.5)] lg:flex">
          Contact Us
        </h1>
      </div>
    </header>
  );
}
