import { Metadata } from "next";
// import { AcrylicSection } from "./acrylic-section";
// import { BasicManicureSection } from "./basic-manicure-section";
// import { BiabGelSection } from "./biab-gel-section";
// import { DipPowderSection } from "./dip-powder-section";
// import { GelManicureSection } from "./gel-manicure-section";
// import { GelXSection } from "./gelX-section";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ServicesHeader } from "./hero";
// import { KidsSection } from "./kids-section";
// import { PedicureSection } from "./pedicure-section";
// import { RemovalSection } from "./removal-section";
// import { WaxingSection } from "./waxing-section";

export const metadata: Metadata = {
  title: "Services - Shape Nails",
  description:
    "Shape Nails offers a variety of nail and waxing services to help you look and feel your best. Manicures, pedicures, BIAB gel, dip powder, gel X, acrylic, kids' services, waxing, and more. Book your appointment today and experience the difference!",
};

export default function Page() {
  return (
    <>
      <ServicesHeader />

      {/* Maintenance Section - please check back later */}
      <section className="mx-auto my-16 flex w-full max-w-(--breakpoint-2xl) flex-col gap-16 px-4 text-center sm:px-8">
        <h2 className="text-xl tracking-widest uppercase md:text-3xl">Maintenance</h2>

        <div className="flex flex-col items-center gap-4">
          <p>
            We are currently updating our services to bring you the best experience possible. Please
            check back later for updates.
          </p>
          <p>
            For our current services, please visit our Fresha page by clicking the button below.
          </p>
          {/* https://www.fresha.com/a/shape-nails-medford-medford-243-boston-avenue-iealt7lq?pId=2485107 */}
          <Button asChild className="h-12 self-center text-base tracking-wide">
            <Link href="https://www.fresha.com/a/shape-nails-medford-medford-243-boston-avenue-iealt7lq?pId=2485107">
              View services on Fresha
            </Link>
          </Button>
        </div>
      </section>

      {/* <main className="mx-auto my-16 flex w-full max-w-(--breakpoint-2xl) flex-col gap-16 px-4 sm:px-8">
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
      </main> */}
    </>
  );
}
