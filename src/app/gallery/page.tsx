import { GalleryHero } from "./hero";

export default function Page() {
  return (
    <>
      <GalleryHero />
      <main className="mx-auto w-full max-w-(--breakpoint-2xl) space-y-8"></main>
    </>
  );
}
