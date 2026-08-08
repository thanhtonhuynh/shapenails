import { BookNowButton } from "@/components/book-now-button";
import { AboutUs } from "@/components/home/about-us";
import { FollowUs } from "@/components/home/follow-us";
import { SeasonalCollection } from "@/components/home/seasonal-collection";
import { Services } from "@/components/home/services";
import { WhyChooseUs } from "@/components/home/why-choose-us";
import { PageHeader } from "@/components/layout/page-header";

export default function Home() {
  return (
    <>
      <PageHeader
        fullHeight
        title="Shape Nails"
        tone="warmsand"
        tagline="Shaping stories through stunning nails"
        // The sticky nav already carries a Book Now from lg up.
        action={
          <div className="lg:hidden">
            <BookNowButton />
          </div>
        }
        images={[
          { src: "/home1.png", alt: "Hands with long almond nails in nude and soft pink" },
          { src: "/about2.png", alt: "Two hands with long nude almond nails and a slim gold ring" },
          {
            src: "/services2.png",
            alt: "A hand with white almond nails reflected in a vanity mirror",
          },
        ]}
      />

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
