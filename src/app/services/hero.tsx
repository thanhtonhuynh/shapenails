import Image from "next/image";

export function ServicesHeader() {
  return (
    <header className="clip-trapezoid bg-claybrown px-4 pt-28 pb-40 shadow-sm sm:px-8">
      <div className="relative mx-auto w-full max-w-(--breakpoint-2xl) lg:flex">
        <div className="relative flex basis-2/3 gap-4 sm:gap-8 md:justify-center xl:gap-16">
          <div className="relative h-[300px] flex-1 translate-y-16 rounded-t-[100px] rounded-b-3xl shadow-sm sm:h-[350px] md:h-[400px] md:max-w-[200px] lg:h-[450px]">
            <Image
              src={"/services1.png"}
              alt="Hero Image"
              fill
              className="border-warmsand rounded-t-[100px] rounded-b-3xl border border-dashed object-cover"
            />
          </div>

          <div className="relative h-[300px] flex-1 translate-y-8 rounded-t-[100px] rounded-b-3xl shadow-sm sm:h-[350px] md:h-[400px] md:max-w-[200px] lg:h-[450px]">
            <Image
              src={"/services3.png"}
              alt="Hero Image"
              fill
              className="border-warmsand rounded-t-[100px] rounded-b-3xl border border-dashed object-cover"
            />
          </div>

          <div className="relative h-[300px] flex-1 rounded-t-[100px] rounded-b-3xl shadow-sm sm:h-[350px] md:h-[400px] md:max-w-[200px] lg:h-[450px]">
            <Image
              src={"/services2.png"}
              alt="Hero Image"
              fill
              className="border-warmsand rounded-t-[100px] rounded-b-3xl border border-dashed object-cover"
            />
          </div>
        </div>

        <h1 className="text-ivory absolute top-1/2 flex w-full justify-center text-center font-extrabold tracking-widest uppercase lg:hidden">
          <span className="drop-shadow-[3px_3px_2px_rgb(59,47,47)]">Services</span>
        </h1>

        <h1 className="text-ivory hidden basis-1/3 items-center justify-center text-center font-extrabold tracking-widest uppercase drop-shadow-[4px_4px_1px_rgba(59,47,47,0.5)] lg:flex">
          Services
        </h1>
      </div>
    </header>
  );
}
