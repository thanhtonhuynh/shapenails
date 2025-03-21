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

export default function Page() {
  return (
    <>
      <ServicesHeader />

      <main className="mx-auto my-16 flex w-full max-w-(--breakpoint-2xl) flex-col gap-16 px-4 sm:px-8">
        <div className="columns-1 gap-8 lg:columns-2">
          <BasicManicureSection />
          <GelManicureSection />
          <BiabGelSection />
          <DipPowderSection />
          <GelXSection />
          <AcrylicSection />
          <PedicureSection />
          <RemovalSection />
          <KidsSection />
          <WaxingSection />
        </div>
      </main>
    </>
  );
}
