import { AboutHeader } from "./hero";
import { AboutIntro } from "./intro";
import { Mission } from "./mission";
import { Values } from "./values";

export default function Page() {
  return (
    <>
      <AboutHeader />

      <main className="mx-auto my-16 w-full max-w-(--breakpoint-2xl) space-y-8">
        <AboutIntro />
        <Mission />
        <Values />
      </main>
    </>
  );
}
