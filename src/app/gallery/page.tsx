import { GalleryHero } from "./hero";
import { GalleryIntro } from "./intro";
import { LightboxGallery } from "./lightbox-gallery";

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
