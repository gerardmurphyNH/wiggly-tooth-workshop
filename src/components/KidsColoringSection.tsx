import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { trackColoringPageDownload } from "@/lib/analytics";

const KidsColoringSection = () => {
  return (
    <section className="py-12 bg-background">
      <div className="container px-6">
        <div className="max-w-md mx-auto text-center">
          <div className="text-5xl mb-4" aria-hidden="true">🦷</div>
          <h2 className="font-display text-2xl font-bold text-foreground mb-2">
            Want something to color?
          </h2>
          <p className="text-muted-foreground text-sm leading-relaxed mb-6">
            A free coloring page from the workshop — print it out and color it
            in any way you like.
          </p>
          <Button variant="magical" size="lg" asChild>
            <a
              href="/downloads/coloring-page.pdf"
              download="tooth-fairy-coloring-page.pdf"
              onClick={trackColoringPageDownload}
            >
              <Download className="w-4 h-4" />
              Download the coloring page
            </a>
          </Button>
          <p className="mt-3 text-xs text-muted-foreground">
            Free to print. No signup needed.
          </p>
        </div>
      </div>
    </section>
  );
};

export default KidsColoringSection;
