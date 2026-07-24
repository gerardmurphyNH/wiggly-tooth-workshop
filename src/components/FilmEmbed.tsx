import { YOUTUBE_VIDEO_URL } from "@/lib/config";
import { trackEvent } from "@/lib/analytics";
import LiteYouTube from "@/components/LiteYouTube";

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
 * Inline film player for content pages, to drive video views without a click to
 * another page. Uses the LiteYouTube click-to-load facade (no iframe at crawl
 * time) and carries NO VideoObject structured data — both so that only /watch,
 * the dedicated watch page, is seen by Google as the video's home and these
 * pages don't trip the "video isn't on a watch page" report.
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
      <LiteYouTube
        title="The Tooth Fairy's Secret Workshop - Short Film by Wiggly Tooth Workshop"
        onActivate={() => trackEvent("video_play", { location })}
        className="mb-4"
      />
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
