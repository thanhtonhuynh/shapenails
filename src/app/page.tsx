import { AboutUs } from "@/components/home/about-us";
import { FollowUs } from "@/components/home/follow-us";
import { HomeHero } from "@/components/home/hero";
import { SeasonalCollection } from "@/components/home/seasonal-collection";
import { Services } from "@/components/home/services";
import { WhyChooseUs } from "@/components/home/why-choose-us";

export default function Home() {
  return (
    <>
      <HomeHero />

      <main className="flex flex-col">
        <SeasonalCollection />

        <Services />

        <AboutUs />

        <WhyChooseUs />

        <FollowUs />
      </main>
    </>
  );
}
