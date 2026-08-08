import { PageHeader } from "@/components/layout/page-header";
import { Metadata } from "next";
import { ClosingNote } from "./closing-note";
import { PolicyLede } from "./policy-lede";
import { PolicyManuscript } from "./policy-manuscript";

export const metadata: Metadata = {
  title: "Salon Policies - Shape Nails",
  description:
    "Our appointment, deposit, cancellation, group booking, payment, pricing, nail art, and service guarantee policies. Everything you need to know before your visit to Shape Nails in Medford, MA.",
};

export default function Page() {
  return (
    <>
      <PageHeader
        title="Salon Policies"
        tone="olive"
        images={[
          {
            src: "/about4.png",
            alt: "Two hands with a soft nude gel manicure and thin gold rings",
          },
          { src: "/home1.png", alt: "Hands with long almond nails in nude and soft pink" },
          { src: "/home2.png", alt: "A hand with a peach manicure holding a dried palm leaf" },
        ]}
      />
      <PolicyLede />
      <PolicyManuscript />
      <ClosingNote />
    </>
  );
}
