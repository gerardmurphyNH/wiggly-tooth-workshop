import { Link } from "react-router-dom";
import { Palette } from "lucide-react";
import { Button } from "@/components/ui/button";

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
            <Link to="/coloring-page">
              <Palette className="w-4 h-4" />
              Get the coloring page
            </Link>
          </Button>
          <p className="mt-3 text-xs text-muted-foreground">
            Free to print. PDF or JPG. No signup needed.
          </p>
        </div>
      </div>
    </section>
  );
};

export default KidsColoringSection;
