import Image from "next/image";
import { StoreName } from "../store-name";

export function AboutUs() {
  return (
    <section className="bg-warmsand flex flex-col px-4 py-8 sm:px-8">
      <div className="mx-auto grid max-w-(--breakpoint-2xl) grid-cols-1 md:grid-cols-3 md:gap-8">
        <div className="relative h-[300px] md:h-[500px]">
          <Image
            src={"/services1.png"}
            alt="Hero Image"
            fill
            className="border-claybrown rounded-lg border border-dashed object-cover"
          />
        </div>

        <div className="col-span-2 flex flex-col justify-center gap-4 place-self-center p-8">
          <h2 className="text-claybrown tracking-widest uppercase">About Shape Nails</h2>

          <p className="leading-7">
            Welcome to <StoreName />, where beauty, creativity, and relaxation come together. We
            believe that well-shaped nails are more than a detail - they're a statement. Whether
            you're seeking timeless elegance or bold designs, our mission is to enhance your natural
            beauty with expert care and stunning nail artistry.
          </p>
        </div>
      </div>

      <div className="mx-auto flex max-w-(--breakpoint-2xl) flex-col md:flex-row-reverse md:gap-8">
        <div className="relative h-[300px] md:h-[400px] md:basis-1/3">
          <Image
            src={"/services2.png"}
            alt="Hero Image"
            fill
            className="border-claybrown rounded-lg border border-dashed object-cover"
          />
        </div>

        <div className="flex flex-col justify-center gap-4 place-self-center p-8 md:basis-2/3">
          <h2 className="text-claybrown text-xl tracking-wider uppercase">
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
