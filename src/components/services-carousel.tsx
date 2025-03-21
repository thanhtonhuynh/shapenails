import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import serviceItems from "@/data/service-carousel-items.json";
import Image from "next/image";

export function ServiceCarousel() {
  return (
    <Carousel opts={{ align: "start" }} className="mx-12 sm:mx-8">
      <CarouselContent>
        {serviceItems.map((service, i) => {
          return (
            <CarouselItem
              key={i}
              className="relative sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5"
            >
              <div className="group relative mb-1 h-[400px] overflow-hidden rounded-lg shadow-sm select-none sm:h-[500px]">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="rounded-lg object-cover transition duration-300 ease-in-out group-hover:scale-[102%] group-hover:opacity-90"
                  sizes="(min-width: 1280px) 20vw, (min-width: 768px) 25vw, (min-width: 640px) 33vw, 50vw"
                />

                <div className="absolute bottom-[5%] flex w-full justify-center">
                  <h6 className="bg-warmsand/75 text-deepespresso rounded-full px-8 py-3 font-semibold tracking-wide uppercase">
                    {service.title}
                  </h6>
                </div>
              </div>
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselPrevious className="text-claybrown border-mutedtaupe hover:text-claybrown hover:border-claybrown hover:scale-110" />
      <CarouselNext className="text-claybrown border-mutedtaupe hover:text-claybrown hover:border-claybrown hover:scale-110" />
    </Carousel>
  );
}
