import { contactLinks } from "@/constants";
import { policiesLastUpdated } from "@/constants/policies";
import Link from "next/link";

const phone = contactLinks.find((link) => link.key === "phone")!;

export function PolicyLede() {
  return (
    <section className="mx-auto w-full max-w-(--breakpoint-2xl) px-4 pt-16 pb-16 sm:px-8 md:pt-20 md:pb-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-8">
        {/* Sits on the same spine as the clauses below. */}
        <div className="flex flex-col gap-6 lg:col-span-8 lg:col-start-5">
          <p className="font-playfair-display text-deepespresso max-w-[46ch] text-2xl leading-[1.4] lg:text-[1.875rem]">
            We want your time with us to feel calm and unhurried. Everything below is what to expect
            before you arrive, from how we handle changes to what your service will cost.
          </p>

          <div className="text-charcoal flex flex-col gap-1 text-sm leading-7">
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
      </div>
    </section>
  );
}
