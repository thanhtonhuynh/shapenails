import Image from "next/image";

export function Mission() {
  return (
    <section className="flex flex-col-reverse sm:flex-row sm:gap-0">
      <div className="flex flex-col items-center sm:basis-2/3">
        <div className="border-deepespresso text-deepespresso flex w-full flex-col items-center justify-center gap-2 border-dashed p-4 sm:basis-1/2 sm:border-b sm:p-8">
          <h2 className="text-2xl tracking-widest uppercase md:text-3xl">Our Mission & Vision</h2>
        </div>

        <div className="flex flex-col justify-center gap-2 p-4 sm:basis-1/2 sm:p-8">
          <p>
            Our mission is to enhance your natural beauty with stunning nail designs and top-quality
            services in a clean, modern, and relaxing environment.
          </p>
          <p>
            Our vision is to provide a space where you can unwind, refresh your spirit, and express
            your unique personality through flawless nail designs.
          </p>
        </div>
      </div>

      <div className="border-deepespresso border-dashed p-4 sm:basis-1/3 sm:border-l sm:p-8">
        <div className="group relative h-[500px]">
          <Image src={"/about5.png"} alt="Hero Image" fill className="rounded-xl object-cover" />
          <div className="bg-ivory/10 animate-in fade-in absolute inset-0 hidden rounded-xl transition duration-300 group-hover:block" />
        </div>
      </div>
    </section>
  );
}
