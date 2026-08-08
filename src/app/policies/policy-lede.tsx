import { contactLinks } from "@/constants";
import { policiesLastUpdated } from "@/constants/policies";
import Link from "next/link";

const phone = contactLinks.find((link) => link.key === "phone")!;

export function PolicyLede() {
  return (
    <section className="mx-auto w-full max-w-(--breakpoint-2xl) px-4 pt-16 pb-16 sm:px-8 md:pt-24 md:pb-20">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-8">
        <p className="font-playfair-display text-deepespresso text-2xl leading-[1.35] lg:col-span-7 lg:col-start-5 lg:row-start-1 lg:text-[2.25rem] lg:leading-[1.3]">
          Most of this comes down to two things: arriving on time, and knowing what your service will
          cost before we start.
        </p>

        {/* Sits in the column the sticky index occupies once the clauses begin. */}
        <div className="text-charcoal flex flex-col gap-2 text-sm leading-7 lg:col-span-3 lg:col-start-1 lg:row-start-1 lg:pt-2 lg:pl-6">
          <p>
            Call or text us at{" "}
            <Link
              href={phone.href}
              className="text-deepespresso underline decoration-dotted underline-offset-4"
            >
              {phone.title}
            </Link>{" "}
            if anything here is unclear.
          </p>
          <p>Last updated {policiesLastUpdated}</p>
        </div>
      </div>
    </section>
  );
}
