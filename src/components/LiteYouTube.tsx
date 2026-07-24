import { useEffect, useRef, useState } from "react";
import { PlayCircle } from "lucide-react";
import { YOUTUBE_VIDEO_ID } from "@/lib/config";
import { trackVideoPlay, trackVideoProgress, trackVideoComplete } from "@/lib/analytics";

interface LiteYouTubeProps {
  /** YouTube video id (defaults to the film) */
  videoId?: string;
  /** Accessible title / thumbnail alt */
  title: string;
  /** Wire GA play/progress/complete tracking via the YT IFrame API */
  track?: boolean;
  /** Fired once, when the viewer clicks to load the player */
  onActivate?: () => void;
  /** Extra classes on the 16:9 container */
  className?: string;
}

/**
 * Click-to-load YouTube facade. Shows the video thumbnail with a play button and
 * only injects the real <iframe> after the viewer clicks.
 *
 * Why: Google's video crawler treats any embedded YouTube iframe as "a video on
 * this page." On pages that aren't dedicated watch pages that triggers the
 * "Video isn't on a watch page" report. With a facade there's no iframe at crawl
 * time, so only /watch (a true watch page carrying VideoObject) is seen as the
 * video's home. Bonus: no YouTube iframe or IFrame API JS on initial page load.
 */
const LiteYouTube = ({
  videoId = YOUTUBE_VIDEO_ID,
  title,
  track = false,
  onActivate,
  className = "",
}: LiteYouTubeProps) => {
  const [activated, setActivated] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const playerRef = useRef<ReturnType<typeof window.YT.Player> | null>(null);
  const milestoneTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const trackedMilestonesRef = useRef(new Set<number>());

  useEffect(() => {
    if (!activated || !track) return;

    const initPlayer = () => {
      if (!iframeRef.current || !window.YT?.Player) return;
      playerRef.current = new window.YT.Player(iframeRef.current, {
        events: {
          onStateChange: (event) => {
            const { PLAYING, PAUSED, ENDED, BUFFERING } = window.YT.PlayerState;
            if (event.data === PLAYING) {
              trackVideoPlay(videoId);
              if (milestoneTimerRef.current) clearInterval(milestoneTimerRef.current);
              milestoneTimerRef.current = setInterval(() => {
                const p = playerRef.current;
                if (!p?.getCurrentTime || !p?.getDuration) return;
                const pct = Math.round((p.getCurrentTime() / p.getDuration()) * 100);
                for (const m of [25, 50, 75] as const) {
                  if (pct >= m && !trackedMilestonesRef.current.has(m)) {
                    trackedMilestonesRef.current.add(m);
                    trackVideoProgress(videoId, m);
                  }
                }
              }, 5000);
            } else if (event.data === ENDED) {
              trackVideoComplete(videoId);
              if (milestoneTimerRef.current) clearInterval(milestoneTimerRef.current);
            } else if (event.data === PAUSED || event.data === BUFFERING) {
              if (milestoneTimerRef.current) clearInterval(milestoneTimerRef.current);
            }
          },
        },
      });
    };

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
  }, [activated, track, videoId]);

  const handleActivate = () => {
    onActivate?.();
    setActivated(true);
  };

  const src =
    `https://www.youtube-nocookie.com/embed/${videoId}` +
    `?rel=0&modestbranding=1&iv_load_policy=3&color=white&autoplay=1` +
    `${track ? "&enablejsapi=1" : ""}&origin=https://wigglytoothworkshop.com`;

  return (
    <div
      className={`relative w-full rounded-2xl overflow-hidden shadow-magical ${className}`}
      style={{ paddingBottom: "56.25%" }}
    >
      {activated ? (
        <iframe
          ref={iframeRef}
          className="absolute inset-0 w-full h-full"
          src={src}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={handleActivate}
          aria-label={`Play video: ${title}`}
          className="group absolute inset-0 w-full h-full cursor-pointer border-0 p-0 bg-night-sky"
        >
          <img
            src={`https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`}
            alt={title}
            width={1280}
            height={720}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover"
            onError={(e) => {
              // maxres is missing for some uploads — fall back to the always-present thumb
              const img = e.currentTarget;
              if (!img.src.endsWith("hqdefault.jpg")) {
                img.src = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
              }
            }}
          />
          <span className="absolute inset-0 flex items-center justify-center bg-night-sky/25 group-hover:bg-night-sky/10 transition-colors">
            <PlayCircle className="w-16 h-16 md:w-20 md:h-20 text-starlight drop-shadow-lg group-hover:scale-110 transition-transform" />
          </span>
        </button>
      )}
    </div>
  );
};

export default LiteYouTube;
