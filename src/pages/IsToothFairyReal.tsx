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
      Watch <em>The Tooth Fairy's Magical Mission</em> — the short film that explores what the Tooth Fairy really does.
    </p>
    <div className="flex flex-col sm:flex-row gap-3 justify-center">
      <Button variant="magical" size="sm" asChild>
        <a href={YOUTUBE_CHANNEL_URL} target="_blank" rel="noopener noreferrer">
          Watch the Short Film
        </a>
      </Button>
      <Button variant="workshop" size="sm" asChild>
        <a href="/#signup" onClick={() => trackCTAClick("seo_page_is_tooth_fairy_real")}>
          Join the Workshop
        </a>
      </Button>
    </div>
  </div>
);

const IsToothFairyReal = () => {
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
          For Curious Kids &amp; Parents
        </span>

        <h1 className="font-display text-4xl font-bold text-foreground mb-6 leading-tight">
          Is the Tooth Fairy Real?
        </h1>

        <p className="text-muted-foreground text-lg leading-relaxed mb-6">
          Yes — the Tooth Fairy is real. Just not in the way most people expect.
        </p>

        <FilmCTA />

        <div className="prose prose-neutral max-w-none space-y-6">
          <h2 className="font-display text-2xl font-bold text-foreground">
            What "real" means for the Tooth Fairy
          </h2>
          <p className="text-foreground leading-relaxed">
            The Tooth Fairy does her work in ways most people don't see. Like many
            important things — kindness, courage, patience — she works quietly and at
            night, fixing small problems and keeping the world in balance.
          </p>
          <p className="text-foreground leading-relaxed">
            When a child loses a tooth, it doesn't disappear by accident. The Tooth
            Fairy takes it because every tooth holds something invisible: a tiny piece
            of who that child is becoming.
          </p>

          <h2 className="font-display text-2xl font-bold text-foreground">
            What children sense that adults forget
          </h2>
          <p className="text-foreground leading-relaxed">
            Young children are remarkably good at sensing things that are real but
            invisible. The feeling of being watched over. The certainty that something
            wonderful happened while they slept. These aren't mistakes or fantasies —
            they're a kind of perception that grows quieter as we get older.
          </p>
          <p className="text-foreground leading-relaxed">
            The Tooth Fairy is one of those things that children know before they can
            explain. And that knowing matters.
          </p>

          <h2 className="font-display text-2xl font-bold text-foreground">
            The clues are there
          </h2>
          <p className="text-foreground leading-relaxed">
            The coin or bill appears. The tooth disappears. Nobody saw anything. These
            are not accidents of forgetful parents — they're evidence of a very skilled,
            very small, very fast creature who has been doing this for a very long time.
          </p>
          <p className="text-foreground leading-relaxed">
            You may never see her. That's exactly how she likes it.
          </p>

          <h2 className="font-display text-2xl font-bold text-foreground">
            A note for parents
          </h2>
          <p className="text-foreground leading-relaxed">
            If your child is asking whether the Tooth Fairy is real, they are probably
            ready for a more nuanced conversation about imagination, tradition, and the
            kinds of real things that don't have physical forms. You don't have to choose
            between honesty and magic — there's a version of both.
          </p>
          <p className="text-foreground leading-relaxed">
            The Wiggly Tooth Workshop story offers one such version: the Tooth Fairy is
            real, she does something meaningful with what children give her, and the
            things she collects — courage, kindness, patience, creativity — are very real
            indeed.
          </p>
        </div>

        <FilmCTA />

        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="font-display text-lg font-semibold text-foreground mb-4">
            More questions from curious kids
          </h3>
          <ul className="space-y-2">
            <li>
              <Link
                to="/what-does-the-tooth-fairy-do-with-teeth"
                className="text-sm text-primary hover:underline"
              >
                What does the Tooth Fairy do with teeth? →
              </Link>
            </li>
            <li>
              <Link
                to="/how-much-does-the-tooth-fairy-leave"
                className="text-sm text-primary hover:underline"
              >
                How much does the Tooth Fairy leave? →
              </Link>
            </li>
            <li>
              <Link
                to="/printables"
                className="text-sm text-primary hover:underline"
              >
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

export default IsToothFairyReal;
