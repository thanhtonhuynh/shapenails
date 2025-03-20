import { AboutUs } from "@/components/home/about-us";
import { FollowUs } from "@/components/home/follow-us";
import { HomeHero } from "@/components/home/hero";
import { Services } from "@/components/home/services";
import { WhyChooseUs } from "@/components/home/why-choose-us";

export default function Home() {
  return (
    <>
      <div className="bg-warmsand">
        <HomeHero />
      </div>

      <main className="flex flex-col">
        <Services />

        <AboutUs />

        <WhyChooseUs />

        <FollowUs />
      </main>
    </>
  );
}
