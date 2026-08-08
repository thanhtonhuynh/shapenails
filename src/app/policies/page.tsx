import { Metadata } from "next";
import { ClosingNote } from "./closing-note";
import { PoliciesHeader } from "./hero";
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
      <PoliciesHeader />
      <PolicyLede />
      <PolicyManuscript />
      <ClosingNote />
    </>
  );
}
