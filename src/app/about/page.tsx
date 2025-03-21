import { Metadata } from "next";
import { AboutHeader } from "./hero";
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
      <AboutHeader />

      <main className="mx-auto my-16 flex w-full max-w-(--breakpoint-2xl) flex-col gap-16">
        <AboutIntro />
        <Mission />
        <Values />
      </main>
    </>
  );
}
