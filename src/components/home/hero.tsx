import Image from "next/image";

export function Hero() {
  return (
    <section className="relative mx-4 h-[500px] rounded-xl p-4 shadow-sm">
      <Image
        src={"/hero.jpg"}
        alt="Hero Image"
        fill
        priority
        className="rounded-xl object-cover opacity-90"
      />

      <div className="text-charcoal bg-ivory/80 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform space-y-3 rounded-xl p-8 text-center backdrop-blur-xs">
        <h1 className="font-playfair-display text-4xl font-extrabold">The Shape Nails</h1>
        <p className="text-lg font-medium">Where Stories Shaped Through Stunning Nails</p>
      </div>
    </section>
  );
}
