import { HomeHero } from "@/components/home/hero";
import { Services } from "@/components/home/services";

export default function Home() {
  return (
    <>
      <HomeHero />

      <main className="mx-auto flex w-full max-w-(--breakpoint-2xl) flex-col gap-16">
        <Services />
      </main>
    </>
  );
}
