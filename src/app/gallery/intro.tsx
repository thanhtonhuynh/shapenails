import { Paintbrush } from "lucide-react";

export function GalleryIntro() {
  return (
    <section className="flex flex-col gap-4 px-4 sm:px-8">
      <h2 className="text-xl tracking-widest uppercase md:text-3xl">Every Design Tells a Story!</h2>

      <div className="space-y-2 leading-7">
        <div>
          Here is our collection of stunning nail designs and curated moments. Each piece is a
          reflection of creativity and elegance, crafted with precision and passion.
        </div>

        <p className="">
          Find your next nail art inspiration and let us bring your story on our canvas!
          <Paintbrush className="text-terracotta animate-wiggle ml-2 inline-flex size-5 -translate-y-1" />
        </p>
      </div>
    </section>
  );
}
