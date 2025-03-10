import { StoreName } from "@/components/store-name";
import Image from "next/image";

export function AboutIntro() {
  return (
    <section className="flex flex-col sm:flex-row">
      <div className="border-claybrown border-dashed p-4 sm:basis-1/3 sm:border-r sm:p-8">
        <div className="group relative h-[300px]">
          <Image src={"/about4.jpg"} alt="Hero Image" fill className="rounded-xl object-cover" />
          <div className="bg-ivory/10 animate-in fade-in absolute inset-0 hidden rounded-xl transition duration-300 group-hover:block" />
        </div>
      </div>

      <div className="flex flex-col items-center sm:basis-2/3">
        <div className="border-claybrown text-deepespresso flex w-full flex-col items-center justify-center gap-2 border-dashed p-4 sm:basis-1/2 sm:border-b sm:p-8">
          <h2 className="uppercase">Welcome to The Shape Nails</h2>
          <p className="font-playfair-display">
            where your beauty and relaxation are our top priorities
          </p>
        </div>

        <div className="flex flex-col justify-center gap-2 p-4 sm:basis-1/2 sm:p-8">
          <p>
            At <StoreName />, we believe that well-shaped nails are not just a detail - they are a
            statement.
          </p>
          <p>
            Founded with a deep passion for nail artistry and exceptional customer care, Shape Nails
            was created to offer more than just a nail service - it's a sanctuary where beauty,
            creativity, and relaxation come together.
          </p>
        </div>
      </div>
    </section>
  );
}
