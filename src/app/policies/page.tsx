import { StoreName } from "@/components/store-name";
import { Metadata } from "next";
import { PoliciesHeader } from "./hero";
import { NailArtPolicy } from "./nail-art-policy";
import { PolicyGrid } from "./policy-grid";
import { PolicyIntro } from "./policy-intro";

export const metadata: Metadata = {
  title: "Salon Policies - Shape Nails",
  description:
    "Our appointment, deposit, cancellation, group booking, payment, pricing, nail art, and service guarantee policies. Everything you need to know before your visit to Shape Nails in Medford, MA.",
};

export default function Page() {
  return (
    <>
      <PoliciesHeader />

      <div className="mx-auto my-16 flex w-full max-w-(--breakpoint-2xl) flex-col gap-16">
        <PolicyIntro />
        <NailArtPolicy />
        <PolicyGrid />

        <section className="px-4 sm:px-8">
          <p className="font-playfair-display mx-auto max-w-[55ch] pb-1 text-center leading-8 italic">
            Thank you for choosing <StoreName />. We truly appreciate your trust, and we look
            forward to welcoming you.
          </p>
        </section>
      </div>
    </>
  );
}
