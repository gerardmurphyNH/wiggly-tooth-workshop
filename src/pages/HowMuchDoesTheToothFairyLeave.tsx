import { Link } from "react-router-dom";
import { Sparkles, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { YOUTUBE_CHANNEL_URL } from "@/lib/config";
import { trackCTAClick } from "@/lib/analytics";

const FilmCTA = () => (
  <div className="my-8 p-6 rounded-2xl bg-secondary/50 border border-border text-center">
    <Sparkles className="w-6 h-6 text-primary mx-auto mb-3" />
    <p className="font-display font-semibold text-foreground mb-2">
      Want to see this idea come to life?
    </p>
    <p className="text-muted-foreground text-sm mb-4">
      Watch <em>The Tooth Fairy's Magical Mission</em> — a short film about what the Tooth Fairy
      really does with the teeth she collects.
    </p>
    <div className="flex flex-col sm:flex-row gap-3 justify-center">
      <Button variant="magical" size="sm" asChild>
        <a href={YOUTUBE_CHANNEL_URL} target="_blank" rel="noopener noreferrer">
          Watch the Short Film
        </a>
      </Button>
      <Button variant="workshop" size="sm" asChild>
        <a href="/#signup" onClick={() => trackCTAClick("seo_page_how_much_tf_leaves")}>
          Join the Workshop
        </a>
      </Button>
    </div>
  </div>
);

const HowMuchDoesTheToothFairyLeave = () => {
  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      <main className="container px-6 py-16 max-w-2xl mx-auto">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-10"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Wiggly Tooth Workshop
        </Link>

        <span className="inline-block text-xs font-semibold uppercase tracking-wide text-primary bg-primary/10 px-3 py-1 rounded-full mb-5">
          For Parents
        </span>

        <h1 className="font-display text-4xl font-bold text-foreground mb-6 leading-tight">
          How Much Does the Tooth Fairy Leave?
        </h1>

        <p className="text-muted-foreground text-lg leading-relaxed mb-6">
          There's no single right answer — the Tooth Fairy's exchange rate has never
          been officially standardized. But there are useful patterns, reasonable
          ranges, and a few things worth knowing before you set the amount.
        </p>

        <FilmCTA />

        <div className="space-y-6">
          <h2 className="font-display text-2xl font-bold text-foreground">
            What surveys say
          </h2>
          <p className="text-foreground leading-relaxed">
            In recent years, American surveys have put the average Tooth Fairy payment
            somewhere between $3 and $6 per tooth, with first teeth often getting a
            premium. Some families go higher — $10 or $20 for a first tooth is not
            unheard of. Some families are more modest. All of these are fine.
          </p>
          <p className="text-foreground leading-relaxed">
            The national average has generally trended upward over time, tracking
            roughly with inflation and with what other parents report to their children.
            Kids compare notes.
          </p>

          <h2 className="font-display text-2xl font-bold text-foreground">
            The "first tooth" question
          </h2>
          <p className="text-foreground leading-relaxed">
            Many parents give more for the first tooth — it's a milestone, it takes
            courage, and there's a symbolic weight to it. If you give $5 for the first
            tooth and $2 for subsequent ones, most children accept this graciously once
            it's explained that first teeth are particularly rare and special.
          </p>
          <p className="text-foreground leading-relaxed">
            The Wiggly Tooth Workshop version of this: first teeth hold the most
            concentrated virtue, which is why the Tooth Fairy values them most highly.
          </p>

          <h2 className="font-display text-2xl font-bold text-foreground">
            Practical considerations
          </h2>
          <p className="text-foreground leading-relaxed">
            Whatever you choose, consistency matters more than the specific amount.
            Children discuss. If the Tooth Fairy is giving $10 at a friend's house and
            $2 at yours, be prepared for a negotiation. Having a family rate you
            stick to is simpler than trying to explain fluctuating market conditions.
          </p>
          <p className="text-foreground leading-relaxed">
            Coins often land better with younger children than bills — the physical
            heft and jingle of coins feels more magical, even if the dollar amount is
            lower.
          </p>

          <h2 className="font-display text-2xl font-bold text-foreground">
            Beyond the money
          </h2>
          <p className="text-foreground leading-relaxed">
            Some families write a small note from the Tooth Fairy. Some leave glitter
            footprints. Some include a tiny certificate. None of these require large
            sums — a well-executed note often lands better than a $20 bill left in
            silence.
          </p>
          <p className="text-foreground leading-relaxed">
            If you're looking for something tangible, the ToothSafe from Wiggly Tooth
            Workshop is designed to make the whole ritual — the leaving, the waiting,
            the finding — feel special.
          </p>
        </div>

        <FilmCTA />

        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="font-display text-lg font-semibold text-foreground mb-4">
            More from the Workshop
          </h3>
          <ul className="space-y-2">
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
            <li>
              <Link to="/printables" className="text-sm text-primary hover:underline">
                Free Tooth Fairy printables →
              </Link>
            </li>
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HowMuchDoesTheToothFairyLeave;
