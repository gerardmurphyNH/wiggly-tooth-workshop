import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Download, Sparkles, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { trackColoringPageDownload } from "@/lib/analytics";
import Footer from "@/components/Footer";

const ColoringPage = () => {
  return (
    <>
      <Helmet>
        <title>Free Tooth Fairy Coloring Page | Wiggly Tooth Workshop</title>
        <meta
          name="description"
          content="Download a free tooth fairy coloring page for kids: a printable PDF straight from the Wiggly Tooth Workshop. Perfect for ages 3–10. Print, color, and keep the magic alive."
        />
        <link rel="canonical" href="https://wigglytoothworkshop.com/coloring-page" />
        <meta property="og:title" content="Free Tooth Fairy Coloring Page | Wiggly Tooth Workshop" />
        <meta property="og:description" content="A free printable tooth fairy coloring page for kids from the Wiggly Tooth Workshop. Download the PDF and bring the magic to life with color." />
        <meta property="og:url" content="https://wigglytoothworkshop.com/coloring-page" />
        <meta property="og:image" content="https://wigglytoothworkshop.com/og-image.jpg" />
        <meta name="twitter:title" content="Free Tooth Fairy Coloring Page | Wiggly Tooth Workshop" />
        <meta name="twitter:description" content="A free printable tooth fairy coloring page for kids from the Wiggly Tooth Workshop. Download the PDF and bring the magic to life with color." />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Wiggly Tooth Workshop",
                    "item": "https://wigglytoothworkshop.com/"
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Free Tooth Fairy Coloring Page",
                    "item": "https://wigglytoothworkshop.com/coloring-page"
                  }
                ]
              },
              {
                "@type": "DigitalDocument",
                "name": "Tooth Fairy Coloring Page",
                "description": "A free printable tooth fairy coloring page PDF for kids, from the Wiggly Tooth Workshop. Inspired by The Tooth Fairy's Magical Mission animated short film.",
                "encodingFormat": "application/pdf",
                "url": "https://wigglytoothworkshop.com/downloads/coloring-page.pdf",
                "inLanguage": "en",
                "isAccessibleForFree": true,
                "license": "https://creativecommons.org/licenses/by-nc-nd/4.0/",
                "publisher": {
                  "@type": "Organization",
                  "name": "Wiggly Tooth Workshop",
                  "url": "https://wigglytoothworkshop.com/"
                },
                "audience": {
                  "@type": "PeopleAudience",
                  "suggestedMinAge": 3,
                  "suggestedMaxAge": 10
                }
              }
            ]
          }
        `}</script>
      </Helmet>

      <main className="min-h-screen bg-background">

        {/* Hero */}
        <section className="night-sky-section py-20 md:py-28 relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            {Array.from({ length: 15 }, (_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-starlight rounded-full sparkle"
                style={{
                  left: `${(i * 17 + 7) % 100}%`,
                  top: `${(i * 23 + 11) % 100}%`,
                  animationDelay: `${(i * 0.13) % 2}s`,
                }}
              />
            ))}
          </div>
          <div className="container px-6 relative z-10 text-center max-w-2xl mx-auto">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-starlight/60 hover:text-starlight transition-colors mb-8 text-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to the Workshop
            </Link>
            <span className="inline-block text-xs font-semibold uppercase tracking-wide text-primary bg-primary/10 px-3 py-1 rounded-full mb-5">
              Free Download
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-starlight mb-6 leading-tight">
              Free Tooth Fairy<br />
              <span className="text-primary">Coloring Page</span>
            </h1>
            <p className="text-lg text-starlight/80 mb-10 leading-relaxed">
              A printable tooth fairy coloring page for kids, straight from the Wiggly Tooth Workshop.
              Print it, color it, and keep the magic alive while you wait for the film.
            </p>
            <Button variant="hero" size="xl" asChild>
              <a
                href="/downloads/coloring-page.pdf"
                download="tooth-fairy-coloring-page.pdf"
                onClick={trackColoringPageDownload}
              >
                <Download className="w-5 h-5" />
                Download Free Coloring Page
              </a>
            </Button>
            <p className="mt-4 text-xs text-starlight/50">
              PDF format · Free for personal use · No sign-up required
            </p>
          </div>
        </section>

        {/* About section */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container px-6 max-w-2xl mx-auto">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
              About this coloring page
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                This free tooth fairy coloring page is designed for children ages 3–10 and
                features original artwork from the world of <em>The Tooth Fairy's Magical Mission</em>,
                an animated short film and children's book in development from the Wiggly Tooth Workshop.
              </p>
              <p>
                The coloring page depicts the Tooth Fairy at work in her workshop, surrounded by
                tiny teeth and the warm glow of fairy magic. It's a fun, imaginative activity
                for kids who love the tooth fairy, and a gentle introduction to the story world
                of Arlo, CeCe, and the Tooth Fairy's Magical Mission.
              </p>
            </div>

            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mt-12 mb-6">
              How to print your coloring page
            </h2>
            <ol className="space-y-3 text-muted-foreground leading-relaxed list-none">
              {[
                "Click the download button above to save the PDF to your device.",
                "Open the PDF in any PDF viewer (Adobe Acrobat, Preview, or your browser).",
                "Print on standard letter-size paper (8.5\" × 11\") or A4.",
                "Use crayons, colored pencils, or markers. Whatever you love most.",
                "Share your finished artwork with us on Instagram @wigglytoothworkshop!",
              ].map((step, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center mt-0.5">
                    {i + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* CTA — more from the workshop */}
        <section className="py-16 md:py-20 bg-secondary/30">
          <div className="container px-6 max-w-2xl mx-auto text-center">
            <Sparkles className="w-8 h-8 text-primary mx-auto mb-4" />
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
              More Tooth Fairy magic is coming
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              The coloring page is just the beginning. <em>The Tooth Fairy's Magical Mission</em> is
              an animated short film, children's book, and ToothSafe product for kids and families,
              all coming from the Wiggly Tooth Workshop. Join the Workshop to get early access and
              behind-the-scenes updates.
            </p>
            <Button variant="magical" size="lg" asChild>
              <Link to="/#signup">
                <Sparkles className="w-4 h-4" />
                Join the Workshop for updates
              </Link>
            </Button>
            <p className="mt-4 text-xs text-muted-foreground">
              Free · No spam · Unsubscribe anytime
            </p>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
};

export default ColoringPage;
