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
  fullHeight = false,
}: {
  title: string;
  tone: PageHeaderTone;
  images: PageHeaderImage[];
  tagline?: string;
  action?: React.ReactNode;
  /** Only the landing page fills the viewport; content pages stay short so the page starts sooner. */
  fullHeight?: boolean;
}) {
  return (
    <header
      className={cn(
        // Same domed bottom edge as the footer CTA band.
        "flex flex-col justify-center px-4 pt-24 shadow-sm [clip-path:var(--clip-dome)] sm:px-8 sm:[clip-path:var(--clip-dome-sm)] [@media(min-height:850px)]:pt-28",
        fullHeight ? "min-h-[100dvh] pb-32" : "pb-28 sm:pb-32",
        bandByTone[tone],
      )}
    >
      {/* One centred stack at every width. The dome trims both bottom corners, so the extra
          bottom padding keeps content clear of the curve. */}
      <div
        className={cn(
          "text-deepespresso mx-auto flex w-full max-w-(--breakpoint-2xl) flex-col items-center text-center",
          // Short laptops spend their height on the arches instead of the gaps, so the
          // full-height header still fits in exactly one viewport.
          fullHeight ? "gap-8 [@media(min-height:850px)]:gap-16" : "gap-8 sm:gap-12",
        )}
      >
        {/* Title and tagline read as one masthead, so they sit closer to each other than
            either does to the arc. */}
        <div className="flex flex-col items-center gap-5">
          <h1
            className={cn(
              "leading-[0.95] tracking-tight text-balance uppercase",
              fullHeight
                ? "text-4xl sm:text-5xl lg:text-[4rem]"
                : "text-3xl sm:text-4xl lg:text-5xl",
            )}
          >
            {title}
          </h1>

          {tagline && (
            <p className="font-playfair-display max-w-md pb-1 text-xl leading-snug text-balance">
              {tagline}
            </p>
          )}

          {action && <div className="mt-1">{action}</div>}
        </div>

        <PageHeaderStage
          images={images}
          variant={fullHeight ? "full" : "compact"}
          className="w-full"
        />
      </div>
    </header>
  );
}
