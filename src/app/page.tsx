import { AboutUs } from "@/components/home/about-us";
import { HomeHero } from "@/components/home/hero";
import { Services } from "@/components/home/services";

export default function Home() {
  return (
    <>
      <HomeHero />

      <main className="flex flex-col gap-16">
        <Services />

        <AboutUs />
      </main>
    </>
  );
}
