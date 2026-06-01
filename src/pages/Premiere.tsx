import { Link } from "react-router-dom";
import { ArrowLeft, MapPin, Clock, Calendar, Sparkles, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { trackEvent, trackCTAClick } from "@/lib/analytics";

const RSVP_URL = "https://events.humanitix.com/tooth-fairy-film-premiere";

const RsvpButton = ({ location }: { location: string }) => (
  <a
    href={RSVP_URL}
    target="_blank"
    rel="noopener noreferrer"
    onClick={() => trackEvent("rsvp_click", { location })}
    className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-display font-semibold text-base hover:bg-primary/90 transition-colors shadow-glow"
  >
    RSVP for the Free Event
  </a>
);

const Premiere = () => {
  return (
    <div className="min-h-screen bg-background">
      <NavBar />

      <main>
        {/* Hero */}
        <section className="relative py-20 md:py-28 night-sky-section overflow-hidden">
          {/* Stars */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-starlight rounded-full sparkle"
                style={{
                  left: `${(i * 19 + 5) % 100}%`,
                  top: `${(i * 27 + 9) % 85}%`,
                  animationDelay: `${(i * 0.17) % 2}s`,
                }}
              />
            ))}
          </div>

          <div className="container relative z-10 px-6 max-w-3xl mx-auto text-center">
            <Link
              to="/news"
              className="inline-flex items-center gap-2 text-sm text-starlight/60 hover:text-starlight/90 transition-colors mb-10"
            >
              <ArrowLeft className="w-4 h-4" />
              News from the Workshop
            </Link>

            <span className="inline-block text-xs font-semibold uppercase tracking-wide text-primary bg-primary/20 px-3 py-1 rounded-full mb-6">
              World Premiere
            </span>

            <h1 className="font-display text-4xl md:text-5xl font-bold text-starlight mb-6 leading-tight">
              The Tooth Fairy's Magical Mission
            </h1>

            <p className="text-starlight/75 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
              Join us in Dedham for the world premiere of{" "}
              <em>The Tooth Fairy's Magical Mission</em>, a short animated film
              about curiosity, growing up, and what the Tooth Fairy really does
              with children's lost teeth.
            </p>

            {/* Event detail pills */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10 text-sm">
              <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-starlight/10 border border-starlight/20 text-starlight/80">
                <Calendar className="w-4 h-4 text-primary" />
                Sunday, June 7, 2026
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-starlight/10 border border-starlight/20 text-starlight/80">
                <Clock className="w-4 h-4 text-primary" />
                2:00 PM
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-starlight/10 border border-starlight/20 text-starlight/80">
                <MapPin className="w-4 h-4 text-primary" />
                Dedham, MA
              </div>
            </div>

            <RsvpButton location="hero" />
          </div>
        </section>

        {/* Location card */}
        <section className="py-12 bg-secondary/30 border-b border-border">
          <div className="container px-6 max-w-xl mx-auto">
            <div className="magical-card text-center">
              <h2 className="font-display text-lg font-semibold text-foreground mb-3">
                The Tooth Fairy's Magical Mission — World Premiere
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Sunday, June 7, 2026 · 2:00 PM
                <br />
                TLC Studios
                <br />
                390 Washington Street
                <br />
                Dedham, MA 02026
              </p>
              <p className="mt-4 text-xs text-primary font-medium">
                Free admission · All ages welcome
              </p>
            </div>
          </div>
        </section>

        {/* Supporting copy */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container px-6 max-w-2xl mx-auto">
            <p className="text-foreground text-base leading-relaxed text-center mb-16">
              Families are invited to a free community celebration at TLC
              Studios in Dedham Square. The event will include a screening of
              the short film, behind-the-scenes stories about how it was made,
              family-friendly activities for young children, and a chance to
              learn more about CeCe, Arlo, and the Wiggly Tooth Workshop.
            </p>

            {/* What the film is about */}
            <div className="mb-14">
              <div className="flex items-center gap-3 mb-5">
                <Star className="w-5 h-5 text-primary flex-shrink-0" />
                <h2 className="font-display text-2xl font-bold text-foreground">
                  What the film is about
                </h2>
              </div>
              <div className="space-y-4 text-foreground leading-relaxed pl-8">
                <p>
                  <em>The Tooth Fairy's Magical Mission</em> follows Arlo, a
                  curious boy who loses a tooth and asks the question many
                  children wonder about: what does the Tooth Fairy actually do
                  with my tooth — and why?
                </p>
                <p>
                  That question leads to a late-night adventure with CeCe, the
                  Tooth Fairy. Arlo discovers that children's teeth hold special
                  qualities that grow over time — courage, kindness, patience,
                  creativity, friendship, perseverance, and wonder. CeCe gathers
                  those qualities and uses them to help keep the world balanced
                  in small but meaningful ways.
                </p>
              </div>
            </div>

            {/* What to expect */}
            <div className="mb-14">
              <div className="flex items-center gap-3 mb-5">
                <Sparkles className="w-5 h-5 text-primary flex-shrink-0" />
                <h2 className="font-display text-2xl font-bold text-foreground">
                  What to expect
                </h2>
              </div>
              <ul className="space-y-3 pl-8">
                {[
                  "A screening of The Tooth Fairy's Magical Mission",
                  "Behind-the-scenes stories from the creators",
                  "Family-friendly activities for children",
                  "A chance to meet Peter H. Reynolds and Paul Reynolds",
                  "A first look at the ToothSafe, CeCe's clever invention for keeping lost teeth safe",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-foreground">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    </div>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* ToothSafe section */}
            <div className="magical-card mb-14">
              <span className="inline-block text-xs font-semibold uppercase tracking-wide text-primary bg-primary/10 px-3 py-1 rounded-full mb-4">
                From CeCe's Workshop
              </span>
              <h2 className="font-display text-2xl font-bold text-foreground mb-3">
                Meet the ToothSafe
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                No one wants to lose a tooth — and then really lose it. The
                ToothSafe is a playful invention from CeCe's workshop designed
                to keep a child's lost tooth safe for the Tooth Fairy's visit.
                At the premiere, you'll get your first look at where the story
                goes next.
              </p>
            </div>

            {/* RSVP CTA */}
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-5">
                Free admission. No ticket required — just let us know you're coming.
              </p>
              <RsvpButton location="bottom" />
            </div>
          </div>
        </section>

        {/* Can't make it CTA */}
        <section className="py-16 bg-secondary/30">
          <div className="container px-6 max-w-xl mx-auto">
            <div className="magical-card text-center">
              <Sparkles className="w-6 h-6 text-primary mx-auto mb-3" />
              <h2 className="font-display text-lg font-semibold text-foreground mb-2">
                Can't make the event?
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                Join the Workshop to watch the short film, download free
                printables, and follow future CeCe and Arlo adventures.
              </p>
              <Button variant="magical" size="sm" asChild>
                <a href="/#signup" onClick={() => trackCTAClick("premiere_page")}>
                  <Sparkles className="w-3.5 h-3.5" />
                  Join the Workshop
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Premiere;
