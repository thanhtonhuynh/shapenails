import { OrnamentLine } from "@/components/deco/ornament-line";
import { StoreName } from "@/components/store-name";

export function ClosingNote() {
  return (
    <section className="mx-auto w-full max-w-(--breakpoint-2xl) px-4 pb-28 sm:px-8 md:pb-36">
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-8">
        <OrnamentLine className="w-full" />

        <p className="font-playfair-display pb-1 text-center text-xl leading-9 italic md:text-2xl md:leading-10">
          Thank you for choosing <StoreName />. We truly appreciate your trust, and we look forward
          to welcoming you.
        </p>
      </div>
    </section>
  );
}
