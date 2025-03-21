import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import springCollection from "@/data/collections/spring-collection.json";
import Image from "next/image";

export function SeasonalCarousel() {
  return (
    <Carousel opts={{ align: "start" }} className="mx-12 sm:mx-8">
      <CarouselContent>
        {springCollection.map((service, i) => {
          return (
            <CarouselItem key={i} className="sm:basis-1/2 lg:basis-1/3 xl:basis-1/4 2xl:basis-1/5">
              <div className="group mb-1 overflow-hidden rounded-lg shadow-sm select-none">
                <div className="relative h-[400px] overflow-hidden sm:h-[500px]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="rounded-t-lg object-cover transition duration-300 ease-in-out group-hover:scale-[102%] group-hover:opacity-90"
                    sizes="(min-width: 1280px) 20vw, (min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                  />
                </div>
                <h6 className="text-claybrown p-4 text-center font-medium tracking-wide uppercase">
                  {service.title}
                </h6>
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
