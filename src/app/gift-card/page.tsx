import { Button } from "@/components/ui/button";
import Link from "next/link";
import { GiftCardHero } from "./hero";

export default function Page() {
  return (
    <>
      <GiftCardHero />

      <main className="mx-auto my-16 flex w-full max-w-(--breakpoint-2xl) flex-col gap-16 px-4 sm:px-8">
        <section className="flex flex-col gap-4">
          <h2 className="text-2xl tracking-wider uppercase md:text-3xl">
            Give the Gift of Self-Care
          </h2>
          <p className="leading-7">
            Delight someone special with the gift of beauty and relaxation. Shape Nails digital gift
            cards are the perfect way to treat your loved ones to a pampering experience - sent
            instantly through Fresha.
          </p>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="tracking-wider uppercase">How it Works</h2>
          <div className="leading-7">
            <p>1. Click the button below to visit our Fresha page.</p>
            <p>2. Choose the amount you want to gift.</p>
            <p>3. Personalize your gift card with a style and a message.</p>
            <p>4. Send it instantly via email, or text.</p>
          </div>
        </section>

        <section className="flex flex-col gap-8">
          <h2 className="tracking-wider uppercase">Why Choose Shape Nails Gift Cards?</h2>

          <div className="grid grid-cols-1 gap-8 rounded-lg md:grid-cols-2">
            <div className="bg-warmsand border-olive flex flex-col justify-center gap-4 rounded-tl-4xl rounded-br-4xl border-t border-b border-dashed p-8 shadow-sm">
              <h4 className="font-playfair-display tracking-wider uppercase">Instant Delivery</h4>
              <p className="leading-6">
                Send a beautiful digital gift card instantly to your loved ones, no waiting
                required.
              </p>
            </div>

            <div className="bg-warmsand border-olive flex flex-col justify-center gap-4 rounded-tr-4xl rounded-bl-4xl border-t border-b border-dashed p-8 shadow-sm">
              <h4 className="font-playfair-display tracking-wider uppercase">
                Perfect for Any Occasion
              </h4>
              <p className="leading-6">
                Birthdays, holidays, anniversaries, or just because. A Shape Nails gift card is
                always a thoughtful surprise.
              </p>
            </div>

            <div className="bg-warmsand border-olive flex flex-col justify-center gap-4 rounded-tr-4xl rounded-bl-4xl border-t border-b border-dashed p-8 shadow-sm">
              <h4 className="font-playfair-display tracking-wider uppercase">
                Thoughtful & Personal
              </h4>
              <p className="leading-6">
                Give the gift of "me time". Whether they're a first-time guest or a regular,
                everyone loves a moment of self-care.
              </p>
            </div>

            <div className="bg-warmsand border-olive flex flex-col justify-center gap-4 rounded-tl-4xl rounded-br-4xl border-t border-b border-dashed p-8 shadow-sm">
              <h4 className="font-playfair-display tracking-wider uppercase">
                Flexible & Convenient
              </h4>
              <p className="leading-6">
                Choose the amount, and your recipient can enjoy any service—from stunning nail art
                to soothing spa treatments.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-olive flex flex-col items-center gap-4 rounded-lg border px-4 py-8 shadow-sm sm:mx-auto sm:w-fit sm:p-12">
          <h3 className="font-playfair-display text-center font-bold tracking-wide uppercase">
            Ready to make someone's day?
          </h3>
          <p className="text-center text-sm">
            It's quick, easy, and the perfect way to show you care.
          </p>

          <Button
            asChild
            className="text-ivory hover:bg-warmsand border-olive hover:border-deepespresso hover:text-olive mt-4 rounded-full border px-12 py-4 tracking-widest uppercase transition duration-300 ease-in-out"
          >
            <Link href="" target="_blank" rel="noopener noreferrer">
              Purchase Gift Card on Fresha
            </Link>
          </Button>
        </section>
      </main>
    </>
  );
}
