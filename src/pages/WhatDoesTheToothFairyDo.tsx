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
      Watch <em>The Tooth Fairy's Magical Mission</em> — the short film that answers this very question.
    </p>
    <div className="flex flex-col sm:flex-row gap-3 justify-center">
      <Button variant="magical" size="sm" asChild>
        <a href={YOUTUBE_CHANNEL_URL} target="_blank" rel="noopener noreferrer">
          Watch the Short Film
        </a>
      </Button>
      <Button variant="workshop" size="sm" asChild>
        <a href="/#signup" onClick={() => trackCTAClick("seo_page_what_tf_does")}>
          Join the Workshop
        </a>
      </Button>
    </div>
  </div>
);

const WhatDoesTheToothFairyDo = () => {
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
          The Big Question
        </span>

        <h1 className="font-display text-4xl font-bold text-foreground mb-6 leading-tight">
          What Does the Tooth Fairy Do With Teeth?
        </h1>

        <p className="text-muted-foreground text-lg leading-relaxed mb-6">
          Every tooth a child loses holds something the Tooth Fairy needs — and what
          she does with it is more meaningful than most people realize.
        </p>

        <FilmCTA />

        <div className="space-y-6">
          <h2 className="font-display text-2xl font-bold text-foreground">
            The tooth is just the container
          </h2>
          <p className="text-foreground leading-relaxed">
            What the Tooth Fairy is really collecting isn't calcium and enamel. It's
            the invisible thing that grew inside the tooth while it was yours: courage,
            kindness, creativity, patience, or wonder.
          </p>
          <p className="text-foreground leading-relaxed">
            A tooth that fell out after a child faced something scary holds bravery. A
            tooth that came loose while a child was learning to be gentle holds kindness.
            These qualities don't disappear when the tooth does — they get extracted,
            catalogued, and put to work.
          </p>

          <h2 className="font-display text-2xl font-bold text-foreground">
            The workshop
          </h2>
          <p className="text-foreground leading-relaxed">
            The Tooth Fairy's workshop looks a bit like a library, if libraries
            sparkled. Millions of teeth, sorted by virtue, organized by year, catalogued
            by country. The Tooth Fairy and her small team process each tooth carefully —
            extracting its virtue, logging it, and preparing it for use.
          </p>
          <p className="text-foreground leading-relaxed">
            The virtues extracted from children's teeth are then woven back into the
            world in ways that are hard to see but easy to feel. The stranger who held a
            door open when you really needed it. The child who shared when it cost them
            something. The courage that appeared, unexpectedly, when someone needed to
            be brave.
          </p>

          <h2 className="font-display text-2xl font-bold text-foreground">
            Why she leaves something behind
          </h2>
          <p className="text-foreground leading-relaxed">
            The coin (or bill, depending on the Tooth Fairy's current exchange rate) is
            a thank-you. You're giving something that took real time and real growth to
            produce. A small piece of yourself. The Tooth Fairy doesn't take that lightly.
          </p>
          <p className="text-foreground leading-relaxed">
            The payment is also an acknowledgment: the work you did while growing that
            tooth was real, it mattered, and it's going to help somebody.
          </p>

          <h2 className="font-display text-2xl font-bold text-foreground">
            What happens to the tooth after
          </h2>
          <p className="text-foreground leading-relaxed">
            Some teeth are kept. Particularly special ones — teeth that held a very
            rare or very concentrated virtue — are preserved in the archive. Most teeth
            are returned to the earth eventually, once their virtue has been extracted.
            Nothing is wasted.
          </p>
        </div>

        <FilmCTA />

        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="font-display text-lg font-semibold text-foreground mb-4">
            More questions from curious kids
          </h3>
          <ul className="space-y-2">
            <li>
              <Link to="/is-the-tooth-fairy-real" className="text-sm text-primary hover:underline">
                Is the Tooth Fairy real? →
              </Link>
            </li>
            <li>
              <Link to="/how-much-does-the-tooth-fairy-leave" className="text-sm text-primary hover:underline">
                How much does the Tooth Fairy leave? →
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

export default WhatDoesTheToothFairyDo;
