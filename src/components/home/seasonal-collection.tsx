import { SeasonalCarousel } from "../seasonal-carousel";

export function SeasonalCollection() {
  return (
    <section className="bg-ivory flex flex-col gap-8 p-8 px-4 pb-16 sm:px-8">
      <div className="flex flex-col items-center gap-4">
        <h2 className="text-center text-3xl tracking-widest uppercase">
          Spring Awakening Collection
        </h2>
        <p className="text-sm">
          Step into the spring season with our fresh, floral-inspired nail arts. Soft pastels,
          delicate details, and designs that celebrate new beginnings.
        </p>
      </div>

      <div className="mx-auto w-full max-w-(--breakpoint-2xl)">
        <SeasonalCarousel />
      </div>
    </section>
  );
}
