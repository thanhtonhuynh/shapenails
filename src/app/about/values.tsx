import { StoreName } from "@/components/store-name";
import Image from "next/image";

export function Values() {
  return (
    <section className="space-y-16 p-4 sm:p-8">
      <div className="text-deepespresso flex flex-col items-center gap-2">
        <h2 className="text-2xl tracking-widest uppercase md:text-3xl">Our Values</h2>
      </div>

      <div className="flex flex-col gap-1">
        <p>
          At <StoreName />, we understand that nails are more than just an accessory - they're a
          reflection of your style and confidence.
        </p>
        <p>
          Whether you're in the mood for a timeless classic, bold designs, or a relaxing spa
          treatment, we've got you covered. Trust us to keep your nails healthy, vibrant, and a true
          reflection of who you are.
        </p>
        <p>Treat yourself to the best - because you deserve nails that make a statement!</p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="group relative flex h-56 flex-col items-center justify-center overflow-hidden rounded-tl-4xl rounded-br-4xl p-4 shadow-sm">
          <Image
            src={"/about1.png"}
            alt="Hero Image"
            fill
            className="rounded-tl-4xl rounded-br-4xl object-cover transition duration-300 ease-in-out group-hover:scale-110"
          />
          <div className="bg-deepespresso/30 absolute inset-0" />
          <p className="text-ivory z-10 text-center font-semibold uppercase">
            Top-quality services with high quality products
          </p>
        </div>

        <div className="group relative flex h-56 flex-col items-center justify-center overflow-hidden rounded-tr-4xl rounded-bl-4xl p-4 shadow-sm">
          <Image
            src={"/about2.png"}
            alt="Hero Image"
            fill
            className="rounded-tr-4xl rounded-bl-4xl object-cover transition duration-300 ease-in-out group-hover:scale-110"
          />
          <div className="bg-deepespresso/30 absolute inset-0" />
          <p className="text-ivory z-10 text-center font-semibold uppercase">
            Staying ahead of the latest trends in nail artistry
          </p>
        </div>

        <div className="group relative flex h-56 flex-col items-center justify-center overflow-hidden rounded-tr-4xl rounded-bl-4xl p-4 shadow-sm">
          <Image
            src={"/about3.png"}
            alt="Hero Image"
            fill
            className="rounded-tr-4xl rounded-bl-4xl object-cover transition duration-300 ease-in-out group-hover:scale-110"
          />
          <div className="bg-deepespresso/30 absolute inset-0" />
          <p className="text-ivory z-10 text-center font-semibold uppercase">
            Pampering experience, tailored to your unique style and preferences
          </p>
        </div>

        <div className="group relative flex h-56 flex-col items-center justify-center overflow-hidden rounded-tl-4xl rounded-br-4xl p-4 shadow-sm">
          <Image
            src={"/about4.png"}
            alt="Hero Image"
            fill
            className="rounded-tl-4xl rounded-br-4xl object-cover transition duration-300 ease-in-out group-hover:scale-110"
          />
          <div className="bg-deepespresso/30 absolute inset-0" />
          <p className="text-ivory z-10 text-center font-semibold uppercase">
            Clean, modern, and relaxing environment
          </p>
        </div>
      </div>
    </section>
  );
}
