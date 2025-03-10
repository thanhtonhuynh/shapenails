import { AboutHeader } from "./header";
import { AboutIntro } from "./intro";
import { Mission } from "./mission";
import { Values } from "./values";

export default function Page() {
  return (
    <>
      <AboutHeader />

      <main className="mt-16 space-y-8">
        <AboutIntro />
        <Mission />
        <Values />
      </main>
    </>
  );
}
