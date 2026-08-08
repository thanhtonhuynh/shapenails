import { contactLinks } from "@/constants";
import { policiesLastUpdated } from "@/constants/policies";
import Link from "next/link";

const phone = contactLinks.find((link) => link.key === "phone")!;

export function PolicyLede() {
  return (
    <section className="mx-auto w-full max-w-(--breakpoint-2xl) px-4 pt-16 pb-16 sm:px-8 md:pt-20 md:pb-20">
      {/* Left edge lines up with the index rail below, not the clause spine. */}
      <div className="lg:pl-6">
        <div className="flex flex-col gap-6">
          <p className="font-playfair-display text-deepespresso max-w-[65ch] text-lg leading-[1.4] lg:text-xl">
            We want your time with us to feel calm and unhurried. Everything below is what to expect
            before you arrive, please take a moment to read and enjoy our services.
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
            <p className="mt-4">Last updated {policiesLastUpdated}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
