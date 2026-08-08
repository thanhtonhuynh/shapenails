import { contactLinks } from "@/constants";
import { policiesLastUpdated } from "@/constants/policies";
import Link from "next/link";

const phone = contactLinks.find((link) => link.key === "phone")!;

export function PolicyLede() {
  return (
    <section className="mx-auto w-full max-w-(--breakpoint-2xl) px-4 pt-20 pb-24 sm:px-8 md:pt-28 md:pb-32">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="flex flex-col gap-8 lg:col-span-7 lg:col-start-5">
          <p className="font-playfair-display text-deepespresso text-2xl leading-[1.5] lg:text-[2rem] lg:leading-[1.45]">
            These are the policies we follow so that every appointment runs smoothly and fairly, for
            our guests and for our team.
          </p>

          <div className="text-charcoal flex flex-col gap-2 text-sm leading-7">
            <p>
              If anything here is unclear, call or text us at{" "}
              <Link
                href={phone.href}
                className="text-deepespresso underline decoration-dotted underline-offset-4"
              >
                {phone.title}
              </Link>{" "}
              before you book.
            </p>
            <p>Last updated {policiesLastUpdated}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
