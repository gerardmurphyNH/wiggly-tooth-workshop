import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Download, Palette } from "lucide-react";
import { trackColoringPageDownload } from "@/lib/analytics";

const DownloadSection = () => {
  const handleDownload = () => {
    trackColoringPageDownload();
  };

  return (
    <section className="py-20 md:py-28 bg-secondary/30">
      <div className="container px-6">
        <div className="max-w-xl mx-auto text-center">
          <div className="w-16 h-16 mx-auto rounded-2xl bg-secondary flex items-center justify-center mb-6">
            <Palette className="w-8 h-8 text-accent-foreground" />
          </div>
          <span className="inline-block text-xs font-semibold uppercase tracking-wide text-primary bg-primary/10 px-3 py-1 rounded-full mb-4">
            Free Download
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Tooth Fairy Coloring Page
          </h2>
          <p className="text-muted-foreground mb-8">
            While you wait for the film and the book, here's something to color.
            Free, fun, and straight from the workshop. A printable PDF for kids ages 3–10.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button variant="magical" size="lg" asChild>
              <a
                href="/downloads/coloring-page.pdf"
                download="tooth-fairy-coloring-page.pdf"
                onClick={handleDownload}
              >
                <Download className="w-4 h-4" />
                Download coloring page
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/coloring-page">
                Learn more
              </Link>
            </Button>
          </div>
          <p className="mt-4 text-xs text-muted-foreground">
            PDF format · Free for personal use · No sign-up required
          </p>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
