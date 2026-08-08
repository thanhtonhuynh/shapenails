import Image from "next/image";

export function PoliciesHeader() {
  return (
    <header className="clip-trapezoid bg-olive px-4 pt-28 pb-40 shadow-sm sm:px-8">
      <div className="relative mx-auto w-full max-w-(--breakpoint-2xl) lg:flex">
        <div className="relative flex basis-2/3 gap-4 sm:gap-8 md:justify-center xl:gap-16">
          <div className="relative h-[300px] flex-1 translate-y-16 rounded-t-[100px] rounded-b-3xl shadow-sm sm:h-[350px] md:h-[400px] md:max-w-[200px] lg:h-[450px]">
            <Image
              src={"/about4.png"}
              alt="Hands with a soft nude gel manicure"
              fill
              className="border-warmsand rounded-t-[100px] rounded-b-3xl border border-dashed object-cover"
            />
          </div>

          <div className="relative h-[300px] flex-1 translate-y-8 rounded-t-[100px] rounded-b-3xl shadow-sm sm:h-[350px] md:h-[400px] md:max-w-[200px] lg:h-[450px]">
            <Image
              src={"/home1.png"}
              alt="Hands with long almond nails in nude and pink"
              fill
              className="border-warmsand rounded-t-[100px] rounded-b-3xl border border-dashed object-cover"
            />
          </div>

          <div className="relative h-[300px] flex-1 rounded-t-[100px] rounded-b-3xl shadow-sm sm:h-[350px] md:h-[400px] md:max-w-[200px] lg:h-[450px]">
            <Image
              src={"/home2.png"}
              alt="A hand with a peach manicure holding a dried palm leaf"
              fill
              className="border-warmsand rounded-t-[100px] rounded-b-3xl border border-dashed object-cover"
            />
          </div>
        </div>

        <h1 className="text-ivory absolute top-1/2 flex w-full justify-center text-center text-3xl font-extrabold tracking-widest uppercase sm:text-4xl lg:hidden">
          <span className="drop-shadow-[3px_3px_2px_rgb(59,47,47)]">Salon Policies</span>
        </h1>

        <h1 className="text-deepespresso hidden basis-1/3 items-center justify-center text-center font-extrabold tracking-widest uppercase lg:flex">
          Salon Policies
        </h1>
      </div>
    </header>
  );
}
