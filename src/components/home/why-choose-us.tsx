import Image from "next/image";
import { StoreName } from "../store-name";

export function WhyChooseUs() {
  return (
    <section className="bg-warmsand flex flex-col gap-8 px-4 py-16 sm:px-8">
      <div className="flex flex-col items-center gap-8">
        <h2 className="flex flex-col gap-1 text-center text-2xl tracking-widest uppercase md:flex-row md:gap-2.5 md:text-3xl">
          <span>Why Choose</span> <span>Shape Nails?</span>
        </h2>

        <p className="text-sm leading-6">
          Discover the difference at <StoreName /> - an experience that's more than just a service -
          it's a story waiting to be told.
        </p>
      </div>

      <div className="mx-auto grid w-full max-w-(--breakpoint-2xl) grid-cols-1 gap-8 md:grid-cols-2">
        <div className="group relative flex h-80 flex-col items-center justify-center overflow-hidden rounded-tl-4xl rounded-br-4xl p-8 shadow-sm">
          <Image
            src={"/about1.png"}
            alt="Hero Image"
            fill
            className="rounded-tl-4xl rounded-br-4xl object-cover transition duration-300 ease-in-out group-hover:scale-110"
          />

          <div className="bg-warmsand/70 z-10 flex flex-col gap-2 rounded-tl-4xl rounded-br-4xl p-8">
            <h4 className="font-playfair-display tracking-wider uppercase">Expert Nail Artistry</h4>

            <p className="text-sm leading-6">
              Our highly skilled technicians are passionate about delivering flawless nail designs.
              Whether you prefer timeless classics or bold, trend-setting styles, we bring precision
              and creativity to every detail.
            </p>
          </div>
        </div>

        <div className="group relative flex h-80 flex-col items-center justify-center overflow-hidden rounded-tr-4xl rounded-bl-4xl p-8 shadow-sm">
          <Image
            src={"/about2.png"}
            alt="Hero Image"
            fill
            className="rounded-tr-4xl rounded-bl-4xl object-cover transition duration-300 ease-in-out group-hover:scale-110"
          />

          <div className="bg-warmsand/70 z-10 flex flex-col gap-2 rounded-tr-4xl rounded-bl-4xl p-8">
            <h4 className="font-playfair-display tracking-wider uppercase">
              Quality You Can Trust
            </h4>

            <p className="text-sm leading-6">
              We use only the highest quality products and industry-leading techniques to ensure
              your nails stay healthy, vibrant, and beautifully polished.
            </p>
          </div>
        </div>

        <div className="group relative flex h-80 flex-col items-center justify-center overflow-hidden rounded-tr-4xl rounded-bl-4xl p-8 shadow-sm">
          <Image
            src={"/about3.png"}
            alt="Hero Image"
            fill
            className="rounded-tr-4xl rounded-bl-4xl object-cover transition duration-300 ease-in-out group-hover:scale-110"
          />

          <div className="bg-warmsand/70 z-10 flex flex-col gap-2 rounded-tr-4xl rounded-bl-4xl p-8">
            <h4 className="font-playfair-display tracking-wider uppercase">A Relaxing Sanctuary</h4>

            <p className="text-sm leading-6">
              More than just a nail salon, The Shape Nails is designed to be a peaceful oasis where
              you can unwind, refresh, and enjoy a moment of{" "}
              <span className="italic">'me time'</span> in a calm, modern, and serene environment.
            </p>
          </div>
        </div>

        <div className="group relative flex h-80 flex-col items-center justify-center overflow-hidden rounded-tl-4xl rounded-br-4xl p-8 shadow-sm">
          <Image
            src={"/about3.png"}
            alt="Hero Image"
            fill
            className="rounded-tl-4xl rounded-br-4xl object-cover transition duration-300 ease-in-out group-hover:scale-110"
          />

          <div className="bg-warmsand/70 z-10 flex flex-col gap-2 rounded-tl-4xl rounded-br-4xl p-8">
            <h4 className="font-playfair-display tracking-wider uppercase">
              Personalized Experiences
            </h4>

            <p className="text-sm leading-6">
              Every client is unique - and so is every service. We listen to your needs and tailor
              each treatment to express your individual style and confidence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
