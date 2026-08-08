import { cn } from "@/lib/utils";
import { PageHeaderStage } from "./page-header-stage";

export type PageHeaderImage = { src: string; alt: string };

/** Each page keeps its own band colour; the title is always deepespresso for contrast. */
export type PageHeaderTone = "olive" | "claybrown" | "terracotta" | "mutedtaupe" | "warmsand";

const bandByTone: Record<PageHeaderTone, string> = {
  olive: "bg-olive",
  claybrown: "bg-claybrown",
  terracotta: "bg-terracotta",
  mutedtaupe: "bg-mutedtaupe",
  warmsand: "bg-warmsand",
};

export function PageHeader({
  title,
  tone,
  images,
  tagline,
  action,
}: {
  title: string;
  tone: PageHeaderTone;
  images: PageHeaderImage[];
  tagline?: string;
  action?: React.ReactNode;
}) {
  return (
    <header className={cn("clip-trapezoid px-4 pt-28 pb-40 shadow-sm sm:px-8", bandByTone[tone])}>
      <div className="mx-auto flex w-full max-w-(--breakpoint-2xl) flex-col items-center gap-12 lg:flex-row lg:gap-8">
        <div className="text-deepespresso order-1 flex flex-col items-center gap-5 text-center lg:order-2 lg:basis-1/3 lg:items-start lg:text-left">
          <h1 className="text-4xl leading-[1.05] tracking-tight text-balance uppercase sm:text-5xl lg:text-[3.25rem]">
            {title}
          </h1>

          {/* Everything on the band is display-sized on purpose: deepespresso only clears
              WCAG's 3:1 large-text bar against these mid-tones, never the 4.5:1 small-text one. */}
          {tagline && (
            <p className="font-playfair-display max-w-sm pb-1 text-xl leading-snug text-balance">
              {tagline}
            </p>
          )}

          {action && <div className="mt-1">{action}</div>}
        </div>

        <PageHeaderStage images={images} className="order-2 w-full lg:order-1 lg:basis-2/3" />
      </div>
    </header>
  );
}
