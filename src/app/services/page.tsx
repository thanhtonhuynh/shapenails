import { Metadata } from "next";
import { AcrylicSection } from "./acrylic-section";
import { BasicManicureSection } from "./basic-manicure-section";
import { BiabGelSection } from "./biab-gel-section";
import { DipPowderSection } from "./dip-powder-section";
import { GelManicureSection } from "./gel-manicure-section";
import { GelXSection } from "./gelX-section";
import { ServicesHeader } from "./hero";
import { KidsSection } from "./kids-section";
import { PedicureSection } from "./pedicure-section";
import { RemovalSection } from "./removal-section";
import { WaxingSection } from "./waxing-section";

export const metadata: Metadata = {
  title: "Services - Shape Nails",
  description:
    "Shape Nails offers a variety of nail and waxing services to help you look and feel your best. Manicures, pedicures, BIAB gel, dip powder, gel X, acrylic, kids' services, waxing, and more. Book your appointment today and experience the difference!",
};

export default function Page() {
  return (
    <>
      <ServicesHeader />

      <main className="mx-auto my-16 flex w-full max-w-(--breakpoint-2xl) flex-col gap-16 px-4 sm:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-start">
          <div className="flex flex-col gap-8">
            <BasicManicureSection />
            <GelManicureSection />
            <BiabGelSection />
            <DipPowderSection />
            <GelXSection />
          </div>
          <div className="flex flex-col gap-8">
            <AcrylicSection />
            <PedicureSection />
            <RemovalSection />
            <KidsSection />
            <WaxingSection />
          </div>
        </div>
      </main>
    </>
  );
}
