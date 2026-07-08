import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Sparkles, PlayCircle, ThumbsUp } from "lucide-react";
import { YOUTUBE_VIDEO_ID, YOUTUBE_CHANNEL_URL, YOUTUBE_SUBSCRIBE_URL, YOUTUBE_VIDEO_URL } from "@/lib/config";
import { trackCTAClick, trackEvent, trackVideoPlay, trackVideoProgress, trackVideoComplete } from "@/lib/analytics";

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
  </svg>
);

const TikTokIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/>
  </svg>
);

const YouTubeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const isPlaceholderVideo = !YOUTUBE_VIDEO_ID || YOUTUBE_VIDEO_ID === "REPLACE_WITH_FINAL_VIDEO_ID";

const HeroSection = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const playerRef = useRef<ReturnType<typeof window.YT.Player> | null>(null);
  const milestoneTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const trackedMilestonesRef = useRef(new Set<number>());

  useEffect(() => {
    if (isPlaceholderVideo) return;

    const initPlayer = () => {
      if (!iframeRef.current || !window.YT?.Player) return;
      playerRef.current = new window.YT.Player(iframeRef.current, {
        events: {
          onStateChange: (event) => {
            const { PLAYING, PAUSED, ENDED, BUFFERING } = window.YT.PlayerState;
            if (event.data === PLAYING) {
              trackVideoPlay(YOUTUBE_VIDEO_ID);
              // Poll every 5 s to hit 25 / 50 / 75 % milestones
              if (milestoneTimerRef.current) clearInterval(milestoneTimerRef.current);
              milestoneTimerRef.current = setInterval(() => {
                const p = playerRef.current;
                if (!p?.getCurrentTime || !p?.getDuration) return;
                const pct = Math.round((p.getCurrentTime() / p.getDuration()) * 100);
                for (const m of [25, 50, 75] as const) {
                  if (pct >= m && !trackedMilestonesRef.current.has(m)) {
                    trackedMilestonesRef.current.add(m);
                    trackVideoProgress(YOUTUBE_VIDEO_ID, m);
                  }
                }
              }, 5000);
            } else if (event.data === ENDED) {
              trackVideoComplete(YOUTUBE_VIDEO_ID);
              if (milestoneTimerRef.current) clearInterval(milestoneTimerRef.current);
            } else if (event.data === PAUSED || event.data === BUFFERING) {
              if (milestoneTimerRef.current) clearInterval(milestoneTimerRef.current);
            }
          },
        },
      });
    };

    // Load YT IFrame API script once; handle both "already loaded" and "not yet loaded"
    if (window.YT?.Player) {
      initPlayer();
    } else {
      if (!document.querySelector('script[src="https://www.youtube.com/iframe_api"]')) {
        const script = document.createElement("script");
        script.src = "https://www.youtube.com/iframe_api";
        document.head.appendChild(script);
      }
      window.onYouTubeIframeAPIReady = initPlayer;
    }

    return () => {
      if (milestoneTimerRef.current) clearInterval(milestoneTimerRef.current);
    };
  }, []);

  const scrollToSignup = () => {
    trackCTAClick("hero");
    document.getElementById("signup")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="film"
      className="relative py-20 md:py-28 flex flex-col items-center justify-center overflow-hidden night-sky-section"
    >
      {/* Animated stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(24)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-starlight rounded-full sparkle"
            style={{
              left: `${(i * 17 + 7) % 100}%`,
              top: `${(i * 23 + 11) % 80}%`,
              animationDelay: `${(i * 0.13) % 2}s`,
            }}
          />
        ))}
      </div>

      <div className="container relative z-10 px-6 text-center">
        {/* Brand */}
        <div className="inline-flex items-center gap-2 bg-starlight/10 backdrop-blur-sm border border-starlight/20 rounded-full px-4 py-2 mb-6">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm text-starlight/90 font-medium">Wiggly Tooth Workshop</span>
        </div>

        {/* Headline */}
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-starlight mb-4 leading-tight max-w-3xl mx-auto">
          Most people know the Tooth Fairy collects teeth.
          <br />
          <span className="text-primary">Very few know why.</span>
        </h1>

        <p className="text-lg md:text-xl text-starlight/75 mb-10 max-w-2xl mx-auto leading-relaxed font-body">
          Every lost tooth holds something special: courage, kindness, patience,
          creativity, and wonder. Watch the short film and discover what the
          Tooth Fairy really does with them.
        </p>

        {/* YouTube embed */}
        <div className="max-w-3xl mx-auto mb-10">
          <p className="text-xs font-medium text-starlight/60 uppercase tracking-widest mb-3">
            The Tooth Fairy's Secret Workshop
          </p>
          {isPlaceholderVideo ? (
            <div className="relative w-full rounded-2xl overflow-hidden shadow-magical bg-[hsl(244_45%_15%)] border border-starlight/20 aspect-video flex flex-col items-center justify-center gap-4">
              <PlayCircle className="w-20 h-20 text-primary opacity-60" />
              <div className="text-center px-6">
                <p className="text-starlight font-display font-semibold text-lg mb-1">The short film</p>
                <p className="text-starlight/50 text-sm">Replace YOUTUBE_VIDEO_ID in src/lib/config.ts to go live</p>
              </div>
            </div>
          ) : (
            <>
              {/* 16:9 responsive embed — uses youtube-nocookie.com (privacy-enhanced, reduces ad
                  targeting), rel=0 (no unrelated channels in end screen), iv_load_policy=3
                  (disables annotations/cards), modestbranding=1 (minimal YouTube chrome),
                  color=white (progress bar), origin for referrer security */}
              <div className="relative w-full rounded-2xl overflow-hidden shadow-magical" style={{ paddingBottom: "56.25%" }}>
                <iframe
                  ref={iframeRef}
                  className="absolute inset-0 w-full h-full"
                  src={`https://www.youtube-nocookie.com/embed/${YOUTUBE_VIDEO_ID}?rel=0&modestbranding=1&iv_load_policy=3&color=white&enablejsapi=1&origin=https://wigglytoothworkshop.com`}
                  title="The Tooth Fairy's Secret Workshop — Short Film by Wiggly Tooth Workshop"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
              {/* Enjoyed the film? Like + Subscribe nudge */}
              <div className="flex items-center justify-center gap-3 mt-3 flex-wrap">
                <span className="text-xs text-starlight/50">Enjoyed the film?</span>
                <a
                  href={YOUTUBE_VIDEO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent("like_click", { location: "hero_video" })}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-starlight/10 border border-starlight/20 text-starlight/80 hover:bg-starlight/20 hover:text-starlight hover:border-starlight/40 transition-all text-xs font-medium"
                >
                  <ThumbsUp className="w-3.5 h-3.5" />
                  Like on YouTube
                </a>
                <a
                  href={YOUTUBE_SUBSCRIBE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent("subscribe_click", { location: "hero_video" })}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#FF0000]/20 border border-[#FF0000]/30 text-starlight/80 hover:bg-[#FF0000]/30 hover:text-starlight hover:border-[#FF0000]/50 transition-all text-xs font-medium"
                >
                  <YouTubeIcon />
                  Subscribe
                </a>
              </div>
            </>
          )}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <Button
            variant="hero"
            size="xl"
            onClick={scrollToSignup}
            className="group"
          >
            <Sparkles className="w-5 h-5 group-hover:animate-spin" />
            Join the Workshop
          </Button>
          <Button
            variant="workshop"
            size="xl"
            asChild
          >
            <a
              href={YOUTUBE_VIDEO_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent("social_click", { platform: "youtube", location: "hero" })}
            >
              <YouTubeIcon />
              Watch on YouTube
            </a>
          </Button>
        </div>

        {/* Social follow */}
        <div className="border-t border-starlight/15 pt-8 max-w-lg mx-auto">
          <p className="text-xs font-medium text-starlight/50 mb-3">Follow the Workshop</p>
          <div className="flex gap-3 justify-center flex-wrap">
            <a
              href={YOUTUBE_SUBSCRIBE_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent("social_click", { platform: "youtube", location: "hero_follow" })}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-full bg-starlight/10 border border-starlight/20 text-starlight/70 hover:text-starlight hover:bg-starlight/20 hover:border-starlight/40 transition-all text-xs font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-label="Subscribe on YouTube"
            >
              <YouTubeIcon />
              <span>Subscribe</span>
            </a>
            <a
              href="https://www.instagram.com/wigglytoothworkshop/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent("social_click", { platform: "instagram", location: "hero_follow" })}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-full bg-starlight/10 border border-starlight/20 text-starlight/70 hover:text-starlight hover:bg-starlight/20 hover:border-starlight/40 transition-all text-xs font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-label="Follow on Instagram"
            >
              <InstagramIcon />
              <span>Instagram</span>
            </a>
            <a
              href="https://www.tiktok.com/@wigglytoothworkshop"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent("social_click", { platform: "tiktok", location: "hero_follow" })}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-full bg-starlight/10 border border-starlight/20 text-starlight/70 hover:text-starlight hover:bg-starlight/20 hover:border-starlight/40 transition-all text-xs font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-label="Follow on TikTok"
            >
              <TikTokIcon />
              <span>TikTok</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
