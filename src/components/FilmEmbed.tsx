import { YOUTUBE_VIDEO_ID, YOUTUBE_VIDEO_URL } from "@/lib/config";
import { trackEvent } from "@/lib/analytics";

interface FilmEmbedProps {
  /** Section heading shown above the player */
  heading?: string;
  /** Optional supporting line under the heading */
  blurb?: string;
  /** Analytics label for the "Watch on YouTube" link */
  location: string;
  /** Tailwind bg for the section (default subtle tint) */
  bg?: string;
}

/**
 * Inline YouTube player for content pages, to drive video views without a click
 * to another page. Intentionally carries NO VideoObject structured data — that
 * lives only on /watch (a dedicated watch page), so embedding the player widely
 * doesn't re-trigger Google's "video isn't on a watch page" report.
 */
const FilmEmbed = ({
  heading = "Watch the short film",
  blurb,
  location,
  bg = "bg-secondary/30",
}: FilmEmbedProps) => (
  <section className={`py-12 md:py-16 ${bg}`}>
    <div className="container px-6 max-w-3xl mx-auto text-center">
      <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
        {heading}
      </h2>
      {blurb && (
        <p className="text-muted-foreground leading-relaxed max-w-xl mx-auto mb-6">
          {blurb}
        </p>
      )}
      <div
        className="relative w-full rounded-2xl overflow-hidden shadow-magical mb-4"
        style={{ paddingBottom: "56.25%" }}
      >
        <iframe
          className="absolute inset-0 w-full h-full"
          src={`https://www.youtube-nocookie.com/embed/${YOUTUBE_VIDEO_ID}?rel=0&modestbranding=1&iv_load_policy=3&color=white&origin=https://wigglytoothworkshop.com`}
          title="The Tooth Fairy's Secret Workshop - Short Film by Wiggly Tooth Workshop"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
        />
      </div>
      <a
        href={YOUTUBE_VIDEO_URL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackEvent("social_click", { platform: "youtube", location })}
        className="text-sm font-medium text-primary hover:text-primary/80 underline underline-offset-4"
      >
        Watch on YouTube →
      </a>
    </div>
  </section>
);

export default FilmEmbed;
