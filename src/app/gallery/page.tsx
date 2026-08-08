import { PageHeader } from "@/components/layout/page-header";
import { Metadata } from "next";
import { GalleryIntro } from "./intro";
import { LightboxGallery } from "./lightbox-gallery";

export const metadata: Metadata = {
  title: "Nail Arts Gallery - Shape Nails",
  description:
    "Every design tells a story! Explore our nail art gallery to find inspiration for your next manicure or pedicure. From simple and elegant to bold and colorful, we have a style for every mood and occasion.",
};

export default function Page() {
  return (
    <>
      <PageHeader
        title="Gallery"
        tone="warmsand"
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

      <main className="mx-auto my-16 flex w-full max-w-(--breakpoint-2xl) flex-col gap-8">
        <GalleryIntro />

        <section className="mt-4 px-4 sm:px-8">
          <LightboxGallery />
        </section>
      </main>
    </>
  );
}
