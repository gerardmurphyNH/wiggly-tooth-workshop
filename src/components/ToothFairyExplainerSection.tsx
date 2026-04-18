import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const explainerLinks = [
  {
    question: "What does the Tooth Fairy do with teeth?",
    teaser: "She takes them to her workshop and extracts the virtues inside — bravery, kindness, creativity, patience. Then she sends those virtues back into the world.",
    to: "/what-does-the-tooth-fairy-do-with-teeth",
    label: "Read the full answer",
  },
  {
    question: "Why does the Tooth Fairy take teeth?",
    teaser: "Because every tooth you've ever grown holds a trace of everything you learned while it was growing. That trace is something the world can use.",
    to: "/why-does-the-tooth-fairy-take-teeth",
    label: "Read the full answer",
  },
  {
    question: "Is the Tooth Fairy real?",
    teaser: "Yes. She just does her work in ways most people don't see. The clues are there — if you know where to look.",
    to: "/is-the-tooth-fairy-real",
    label: "Read the full answer",
  },
  {
    question: "Where does the Tooth Fairy tradition come from?",
    teaser: "The tradition exists in almost every culture on earth. The exchange has always been the same: a child loses something, a ritual marks the moment, and something is given back.",
    to: "/tooth-fairy-story-explained",
    label: "Read the full answer",
  },
];

const ToothFairyExplainerSection = () => {
  return (
    <section className="py-20 md:py-28 bg-secondary/20">
      <div className="container px-6">
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-semibold uppercase tracking-wide text-primary bg-primary/10 px-3 py-1 rounded-full mb-4">
            The Real Story
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Does the Tooth Fairy Really Do?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Every child asks. Here are the real answers — the ones that hold up to the questions
            curious kids actually ask.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {explainerLinks.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="magical-card group hover:shadow-magical transition-all duration-300 hover:-translate-y-1 flex flex-col gap-3"
            >
              <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors leading-snug">
                {item.question}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                {item.teaser}
              </p>
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                {item.label}
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </Link>
          ))}
        </div>

        <p className="text-center mt-10">
          <Link
            to="/tooth-fairy-faq"
            className="text-sm text-muted-foreground hover:text-primary transition-colors underline underline-offset-4"
          >
            See all Tooth Fairy questions →
          </Link>
        </p>
      </div>
    </section>
  );
};

export default ToothFairyExplainerSection;
