import { AboutUs } from "@/components/home/about-us";
import { FollowUs } from "@/components/home/follow-us";
import { HomeHero } from "@/components/home/hero";
import { SeasonalCollection } from "@/components/home/seasonal-collection";
import { Services } from "@/components/home/services";
import { WhyChooseUs } from "@/components/home/why-choose-us";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shape Nails",
  description:
    "Shape Nails, shaping stories through stunning nails. Well-shaped nails are more than a detail - they're a statement. Whether you're seeking timeless elegance or bold designs, our mission is to enhance your natural beauty with expert care and stunning nail artistry.",
  openGraph: {
    title: "Shape Nails",
    description:
      "Shape Nails, shaping stories through stunning nails. Well-shaped nails are more than a detail - they're a statement. Whether you're seeking timeless elegance or bold designs, our mission is to enhance your natural beauty with expert care and stunning nail artistry.",
    images: [
      {
        url: "/assets/images/about1.png",
        width: 1200,
        height: 630,
        alt: "Shape Nails",
      },
    ],
  },
};

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
