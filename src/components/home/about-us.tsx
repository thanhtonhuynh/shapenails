import Image from "next/image";
import { StoreName } from "../store-name";

export function AboutUs() {
  return (
    <section className="flex flex-col px-4 py-16 sm:px-8">
      <div className="mx-auto grid max-w-(--breakpoint-2xl) grid-cols-1 md:grid-cols-4 md:gap-8">
        <div className="relative h-[300px] md:h-[400px]">
          <Image
            src={"/services1.png"}
            alt="Hero Image"
            fill
            className="border-claybrown rounded-lg border border-dashed object-cover"
          />
        </div>

        <div className="col-span-3 flex flex-col justify-center gap-4 place-self-center p-8">
          <h2 className="text-3xl tracking-widest uppercase">About Shape Nails</h2>

          <div className="space-y-1 leading-7">
            <p>
              Welcome to the <StoreName />, where beauty, creativity, and relaxation come together.
            </p>
            <p>
              We believe that well-shaped nails are more than a detail - they're a statement.
              Whether you're seeking timeless elegance or bold designs, our mission is to enhance
              your natural beauty with expert care and stunning nail artistry.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-(--breakpoint-2xl) flex-col md:flex-row-reverse md:gap-8">
        <div className="relative h-[300px] md:h-[300px] md:basis-1/4">
          <Image
            src={"/services2.png"}
            alt="Hero Image"
            fill
            className="border-claybrown rounded-lg border border-dashed object-cover"
          />
        </div>

        <div className="flex flex-col justify-center gap-4 place-self-center p-8 md:basis-3/4">
          <h2 className="text-xl tracking-wider uppercase">
            Shaping Stories Through Stunning Nails
          </h2>

          <p className="leading-7">
            At <StoreName />, every design tells your story. Our passion for nail artistry and
            exceptional care creates a space where you can relax, refresh, and express your unique
            style. Trust us to bring your vision to life - because you deserve nails that make a
            statement.
          </p>
        </div>
      </div>
    </section>
  );
}
