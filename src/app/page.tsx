import { HomeHero } from "@/components/home/hero";
import { Services } from "@/components/home/services";

export default function Home() {
  return (
    <>
      <HomeHero />
      <main className="mx-auto mt-8 flex w-full max-w-(--breakpoint-2xl) flex-col gap-16 p-4 md:p-8">
        <Services />
      </main>
    </>
  );
}
