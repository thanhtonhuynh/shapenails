import { Metadata } from "next";
import { GalleryHero } from "./hero";
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
      <GalleryHero />

      <main className="mx-auto my-16 flex w-full max-w-(--breakpoint-2xl) flex-col gap-8">
        <GalleryIntro />

        <section className="mt-4 px-4 sm:px-8">
          <LightboxGallery />
        </section>
      </main>
    </>
  );
}
