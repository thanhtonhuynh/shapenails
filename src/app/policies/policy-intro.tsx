import { contactLinks } from "@/constants";
import { policiesLastUpdated, policyJumpLinks } from "@/constants/policies";
import Link from "next/link";

const phone = contactLinks.find((link) => link.key === "phone")!;

export function PolicyIntro() {
  return (
    <section className="flex flex-col gap-6 px-4 sm:px-8">
      <div className="flex max-w-[65ch] flex-col gap-1 leading-7">
        <p>
          These are the policies we follow so that every appointment runs smoothly and fairly, for
          our guests and for our team.
        </p>
        <p>
          If anything here is unclear, call or text us at{" "}
          <Link href={phone.href} className="underline underline-offset-4">
            {phone.title}
          </Link>{" "}
          before you book.
        </p>
      </div>

      <nav aria-label="Jump to a policy">
        <ul className="flex flex-wrap gap-2">
          {policyJumpLinks.map((link) => (
            <li key={link.id}>
              <Link
                href={`#${link.id}`}
                className="border-olive bg-warmsand hover:bg-mutedtaupe focus-visible:ring-olive inline-flex rounded-full border border-dashed px-4 py-1.5 text-xs font-medium tracking-wide uppercase transition duration-300 focus-visible:ring-2 focus-visible:outline-none"
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <p className="text-charcoal text-xs">Last updated {policiesLastUpdated}</p>
    </section>
  );
}
