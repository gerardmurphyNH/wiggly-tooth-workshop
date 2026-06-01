import { Link } from "react-router-dom";
import { Download, Palette, FileText, ArrowLeft, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { YOUTUBE_CHANNEL_URL } from "@/lib/config";
import { trackColoringPageDownload, trackCTAClick } from "@/lib/analytics";

const printables = [
  {
    id: "coloring-page",
    title: "Tooth Fairy Coloring Page",
    description: "A hand-illustrated coloring page featuring the Tooth Fairy on her nightly mission. Perfect for ages 4–8.",
    icon: Palette,
    href: "/downloads/coloring-page.pdf",
    download: "tooth-fairy-coloring-page.pdf",
    label: "Download coloring page",
    onDownload: trackColoringPageDownload,
  },
  {
    id: "letter",
    title: "Tooth Fairy Letter Template",
    description: "A printable letter from the Tooth Fairy for your child — personalize with their name, tooth number, and virtue. Coming soon.",
    icon: FileText,
    href: null,
    download: null,
    label: "Coming soon",
    onDownload: () => {},
  },
];

const Printables = () => {
  const scrollToSignup = () => {
    trackCTAClick("printables_page");
  };

  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      <main className="container px-6 py-16 max-w-3xl mx-auto">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-10"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Wiggly Tooth Workshop
        </Link>

        <span className="inline-block text-xs font-semibold uppercase tracking-wide text-primary bg-primary/10 px-3 py-1 rounded-full mb-5">
          Free Downloads
        </span>

        <h1 className="font-display text-4xl font-bold text-foreground mb-4 leading-tight">
          Tooth Fairy Printables
        </h1>
        <p className="text-muted-foreground text-lg leading-relaxed mb-12">
          Free printables for kids, parents, and classrooms — straight from the Workshop.
        </p>

        {/* Film CTA */}
        <div className="mb-10 p-6 rounded-2xl bg-secondary/50 border border-border text-center">
          <Sparkles className="w-6 h-6 text-primary mx-auto mb-3" />
          <p className="font-display font-semibold text-foreground mb-2">
            Watch the short film first
          </p>
          <p className="text-muted-foreground text-sm mb-4">
            <em>The Tooth Fairy's Magical Mission</em> is a great complement to these printables —
            especially for classroom use.
          </p>
          <Button variant="magical" size="sm" asChild>
            <a href={YOUTUBE_CHANNEL_URL} target="_blank" rel="noopener noreferrer">
              Watch on YouTube
            </a>
          </Button>
        </div>

        {/* Printables grid */}
        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          {printables.map((item) => (
            <div key={item.id} id={item.id} className="magical-card flex flex-col gap-4">
              <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center">
                <item.icon className="w-6 h-6 text-accent-foreground" />
              </div>
              <div className="flex-1">
                <h2 className="font-display font-semibold text-foreground mb-1">{item.title}</h2>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </div>
              {item.href ? (
                <Button variant="magical" size="sm" asChild>
                  <a
                    href={item.href}
                    download={item.download}
                    onClick={item.onDownload}
                  >
                    <Download className="w-3.5 h-3.5" />
                    {item.label}
                  </a>
                </Button>
              ) : (
                <Button variant="workshop" size="sm" disabled>
                  {item.label}
                </Button>
              )}
            </div>
          ))}
        </div>

        {/* More coming - join workshop */}
        <div className="magical-card text-center">
          <Sparkles className="w-6 h-6 text-primary mx-auto mb-3" />
          <h3 className="font-display text-lg font-semibold text-foreground mb-2">
            More printables coming soon
          </h3>
          <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
            Join the Workshop to get new printables, coloring pages, and
            classroom resources as they're released.
          </p>
          <Button variant="magical" size="sm" asChild>
            <a href="/#signup" onClick={scrollToSignup}>
              <Sparkles className="w-3.5 h-3.5" />
              Join the Workshop
            </a>
          </Button>
        </div>

        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="font-display text-lg font-semibold text-foreground mb-4">
            More from the Workshop
          </h3>
          <ul className="space-y-2">
            <li>
              <Link to="/for-teachers" className="text-sm text-primary hover:underline">
                Teacher &amp; classroom resources →
              </Link>
            </li>
            <li>
              <Link to="/is-the-tooth-fairy-real" className="text-sm text-primary hover:underline">
                Is the Tooth Fairy real? →
              </Link>
            </li>
            <li>
              <Link to="/what-does-the-tooth-fairy-do-with-teeth" className="text-sm text-primary hover:underline">
                What does the Tooth Fairy do with teeth? →
              </Link>
            </li>
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Printables;
