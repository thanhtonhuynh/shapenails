import { PageHeader } from "@/components/layout/page-header";
import { Metadata } from "next";
import { AboutIntro } from "./intro";
import { Mission } from "./mission";
import { Values } from "./values";

export const metadata: Metadata = {
  title: "About Shape Nails",
  description:
    "Welcome to Shape Nails where your beauty and relaxation are our top priorities. Learn more about our mission, values, and team.",
};

export default function Page() {
  return (
    <>
      <PageHeader
        title="About Us"
        tone="claybrown"
        images={[
          {
            src: "/about1.png",
            alt: "Hands of different skin tones clasped together in a chain, each with nude almond nails",
          },
          { src: "/about2.png", alt: "Two hands with long nude almond nails and a slim gold ring" },
          {
            src: "/about3.png",
            alt: "A hand with white almond nails and gold rings resting on a cream leather clutch",
          },
        ]}
      />

      <main className="mx-auto my-16 flex w-full max-w-(--breakpoint-2xl) flex-col gap-16">
        <AboutIntro />
        <Mission />
        <Values />
      </main>
    </>
  );
}
