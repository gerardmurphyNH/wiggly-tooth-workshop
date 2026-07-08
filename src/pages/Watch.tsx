import { Link } from "react-router-dom";
import { ArrowLeft, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import PageSeo from "@/components/PageSeo";
import { YOUTUBE_VIDEO_ID, YOUTUBE_VIDEO_URL } from "@/lib/config";
import { trackCTAClick, trackEvent } from "@/lib/analytics";

const PAGE_URL = "https://wigglytoothworkshop.com/watch";
const SITE_URL = "https://wigglytoothworkshop.com/";

const Watch = () => {
  return (
    <div className="min-h-screen bg-background">
      <PageSeo
        title="Watch The Tooth Fairy's Secret Workshop | Wiggly Tooth Workshop"
        description="Watch The Tooth Fairy's Secret Workshop, a short animated film about what the Tooth Fairy really does with the teeth she collects. Free to watch."
        canonical={PAGE_URL}
        image={`https://i.ytimg.com/vi/${YOUTUBE_VIDEO_ID}/maxresdefault.jpg`}
        jsonLd={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Wiggly Tooth Workshop", item: SITE_URL },
                { "@type": "ListItem", position: 2, name: "Watch the Film", item: PAGE_URL },
              ],
            },
            {
              "@type": "VideoObject",
              name: "The Tooth Fairy's Secret Workshop",
              description:
                "An animated short film about a curious boy named Arlo who sets out to discover what the Tooth Fairy really does with the teeth she collects - and learns that every lost tooth carries something worth keeping. Created in collaboration with Peter H. Reynolds and FableVision Studios.",
              thumbnailUrl: [`https://i.ytimg.com/vi/${YOUTUBE_VIDEO_ID}/maxresdefault.jpg`],
              uploadDate: "2026-06-07",
              contentUrl: YOUTUBE_VIDEO_URL,
              embedUrl: `https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}`,
              publisher: { "@type": "Organization", name: "Wiggly Tooth Workshop", url: SITE_URL },
            },
          ],
        }}
      />
      <NavBar />

      <main>
        {/* Video-first hero — the film is the primary content of this page */}
        <section className="night-sky-section py-12 md:py-16 relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {Array.from({ length: 16 }, (_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-starlight rounded-full sparkle"
                style={{
                  left: `${(i * 17 + 7) % 100}%`,
                  top: `${(i * 23 + 11) % 90}%`,
                  animationDelay: `${(i * 0.13) % 2}s`,
                }}
              />
            ))}
          </div>

          <div className="container px-6 relative z-10 max-w-3xl mx-auto">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-starlight/50 hover:text-starlight/80 transition-colors text-sm mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Wiggly Tooth Workshop
            </Link>

            <h1 className="font-display text-3xl md:text-4xl font-bold text-starlight mb-3 text-center">
              Watch <span className="text-primary">The Tooth Fairy's Secret Workshop</span>
            </h1>
            <p className="text-starlight/70 text-center mb-8 max-w-xl mx-auto">
              A short animated film about what the Tooth Fairy really does with
              the teeth she collects. Free to watch.
            </p>

            {/* The video player */}
            <div
              className="relative w-full rounded-2xl overflow-hidden shadow-magical"
              style={{ paddingBottom: "56.25%" }}
            >
              <iframe
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube-nocookie.com/embed/${YOUTUBE_VIDEO_ID}?rel=0&modestbranding=1&iv_load_policy=3&color=white&origin=https://wigglytoothworkshop.com`}
                title="The Tooth Fairy's Secret Workshop — Short Film by Wiggly Tooth Workshop"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </section>

        {/* About the film */}
        <section className="py-14 md:py-20 bg-background">
          <div className="container px-6 max-w-2xl mx-auto">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
              About the film
            </h2>
            <div className="space-y-4 text-foreground/80 text-lg leading-relaxed">
              <p>
                <em>The Tooth Fairy's Secret Workshop</em> follows Arlo, a curious
                boy who loses a tooth and asks the question many children wonder
                about: what does the Tooth Fairy actually do with my tooth - and
                why?
              </p>
              <p>
                The answer leads to a discovery. Every lost tooth quietly holds a
                quality the child grew while it was theirs - courage, kindness,
                patience, creativity - and the Tooth Fairy uses those qualities to
                help make the world a little better. The film was created in
                collaboration with Peter H. Reynolds and FableVision Studios.
              </p>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Button variant="hero" size="lg" asChild>
                <a
                  href={YOUTUBE_VIDEO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent("social_click", { platform: "youtube", location: "watch_page" })}
                >
                  <Sparkles className="w-5 h-5" />
                  Watch on YouTube
                </a>
              </Button>
              <Button variant="workshop" size="lg" asChild>
                <a href="/#signup" onClick={() => trackCTAClick("watch_page")}>
                  Join the Workshop
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Explore */}
        <section className="py-14 md:py-20 bg-secondary/30">
          <div className="container px-6 max-w-3xl mx-auto">
            <h2 className="font-display text-xl font-bold text-foreground mb-6 text-center">
              After you watch
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { to: "/is-the-tooth-fairy-real", label: "Is the Tooth Fairy real?", desc: "The question the film keeps answering." },
                { to: "/what-does-the-tooth-fairy-do-with-teeth", label: "What does she do with teeth?", desc: "Inside the Tooth Fairy's workshop." },
                { to: "/first-tooth-tradition", label: "Start a first tooth tradition", desc: "A free printable certificate to go with the film." },
                { to: "/tooth-fairy-letter", label: "Tooth Fairy letter template", desc: "A printable letter from the Tooth Fairy." },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="magical-card group hover:shadow-magical transition-all duration-300 hover:-translate-y-0.5"
                >
                  <p className="font-display font-semibold text-foreground group-hover:text-primary transition-colors mb-1">
                    {link.label}
                  </p>
                  <p className="text-sm text-muted-foreground">{link.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Watch;
