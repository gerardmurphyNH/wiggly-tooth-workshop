import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Has anyone ever seen the Tooth Fairy?",
    answer:
      "Very few people. The Tooth Fairy works in the quiet hours, when most children are deeply asleep. Some have caught a glimpse — a movement at the edge of a dream, a small light near the window. But she's fast, and she's careful, and she prefers it that way.",
  },
  {
    question: "How does she get in without waking anyone up?",
    answer:
      "Fairies are very small — about the size of your hand — and they can slip through the tiniest spaces: a crack in a window, a gap under a door, even the space between moonbeams. Your house is never as sealed as you think.",
  },
  {
    question: "If she's real, why doesn't she just show herself?",
    answer:
      "Partly because she works better that way. A visitor in the night who leaves a coin is mysterious. A visitor you can see and talk to is just a person. The mystery is part of what makes the tradition feel larger than itself. And the Tooth Fairy has always understood that.",
  },
  {
    question: "What if I stay up and wait for her?",
    answer:
      "She knows. She waits. The Tooth Fairy is patient — she has been doing this for centuries. She'll come when the time is right, and not a moment before. Most children who try to wait up for her fall asleep eventually. That's the plan.",
  },
  {
    question: "Does the Tooth Fairy exist in other countries too?",
    answer:
      "Yes, though she goes by different names and traditions. In France she's La Petite Souris — a little mouse. In some parts of Asia, children throw their teeth onto the roof or under the floorboards. The Tooth Fairy's workshop has teeth catalogued from all over the world. The tradition is older and wider than most people realize.",
  },
  {
    question: "My parents say they put the coin there. Is that true?",
    answer:
      "Parents help. They always have. The Tooth Fairy works in ways that are hard to do alone — especially in houses where she can't always make it on the right night. Parents are her helpers. The coin still means the same thing.",
  },
];

const IsTheToothFairyReal = () => {
  return (
    <>
      <Helmet>
        <title>Is the Tooth Fairy Real? | Wiggly Tooth Workshop</title>
        <meta
          name="description"
          content="Is the Tooth Fairy real? Yes. She just does her work in ways most people don't see. Here's the honest answer — and why the mystery is part of the magic."
        />
        <link rel="canonical" href="https://wigglytoothworkshop.com/is-the-tooth-fairy-real" />
        <meta property="og:title" content="Is the Tooth Fairy Real?" />
        <meta property="og:description" content="Is the Tooth Fairy real? Yes. She just does her work in ways most people don't see. Like many important things, she works quietly — and the clues are there if you know where to look." />
        <meta property="og:url" content="https://wigglytoothworkshop.com/is-the-tooth-fairy-real" />
        <meta property="og:image" content="https://wigglytoothworkshop.com/og-image.jpg" />
        <meta name="twitter:title" content="Is the Tooth Fairy Real?" />
        <meta name="twitter:description" content="Is the Tooth Fairy real? Yes. She just does her work in ways most people don't see. Like many important things, she works quietly — and the clues are there if you know where to look." />
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
                    "name": "Is the Tooth Fairy Real?",
                    "item": "https://wigglytoothworkshop.com/is-the-tooth-fairy-real"
                  }
                ]
              },
              {
                "@type": "Article",
                "headline": "Is the Tooth Fairy Real?",
                "description": "Yes. The Tooth Fairy is real. She just does her work in ways most people don't see. Like many important things, she works quietly — and the clues are there if you know where to look.",
                "url": "https://wigglytoothworkshop.com/is-the-tooth-fairy-real",
                "publisher": {
                  "@type": "Organization",
                  "name": "Wiggly Tooth Workshop",
                  "url": "https://wigglytoothworkshop.com/"
                },
                "author": {
                  "@type": "Organization",
                  "name": "Wiggly Tooth Workshop"
                }
              },
              {
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "Is the Tooth Fairy real?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes, the Tooth Fairy is real. She just does her work in ways most people don't see. Like many important things, she works quietly, at night, fixing small problems and keeping the world in balance. When you lose a tooth, it doesn't disappear by accident. The Tooth Fairy takes it because every tooth holds memories and virtues you've grown while becoming yourself. You may never see her, but the clues are there. And that's exactly how she likes it."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Has anyone ever seen the Tooth Fairy?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Very few people. The Tooth Fairy works in the quiet hours, when most children are deeply asleep. Some have caught a glimpse — a movement at the edge of a dream, a small light near the window. But she's fast, and she's careful, and she prefers it that way."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Why doesn't the Tooth Fairy just show herself?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Partly because she works better that way. The mystery is part of what makes the tradition feel larger than itself. And the Tooth Fairy has always understood that."
                    }
                  }
                ]
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
          <div className="container px-6 relative z-10 text-center max-w-3xl mx-auto">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-starlight/60 hover:text-starlight transition-colors mb-8 text-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to the Workshop
            </Link>
            <span className="inline-block text-xs font-semibold uppercase tracking-wide text-primary bg-primary/10 px-3 py-1 rounded-full mb-5">
              The Serious Question
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-starlight mb-6 leading-tight">
              Is the Tooth Fairy<br />
              <span className="text-primary">Real?</span>
            </h1>
            <p className="text-lg text-starlight/80 mb-8 leading-relaxed max-w-2xl mx-auto">
              This question deserves a real answer. Here it is.
            </p>
          </div>
        </section>

        {/* AEO Answer Block */}
        <section className="py-12 md:py-16 bg-secondary/30">
          <div className="container px-6 max-w-2xl mx-auto">
            <div className="magical-card p-8">
              <span className="inline-block text-xs font-semibold uppercase tracking-wide text-primary bg-primary/10 px-3 py-1 rounded-full mb-4">
                The Answer
              </span>
              <p className="text-foreground text-2xl font-display font-bold mb-4">Yes.</p>
              <p className="text-foreground text-lg leading-relaxed">
                The Tooth Fairy is real. She just does her work in ways most people don't see.
                Like many important things, she works quietly, at night, fixing small problems
                and keeping the world in balance.
              </p>
              <p className="text-muted-foreground mt-4 leading-relaxed">
                When you lose a tooth, it doesn't disappear by accident. The Tooth Fairy takes it
                because every tooth holds memories and virtues you've grown while becoming yourself.
                She uses those to help make the world a little better, then leaves something behind
                as a thank-you. You may never see her. But the clues are there.
                And that's exactly how she likes it.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12 md:py-16 bg-background">
          <div className="container px-6 max-w-2xl mx-auto space-y-12">

            <div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                The Evidence
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  The strongest evidence for the Tooth Fairy is the simplest one:
                  the tooth disappears, and something appears in its place.
                </p>
                <p>
                  That exchange happens on schedule — usually within a night or two of a tooth
                  being lost. It happens in houses all over the world, in different countries,
                  different climates, different time zones. The scale of the operation alone
                  is remarkable.
                </p>
                <p>
                  Something is doing this work. Something has been doing it for centuries.
                  And it isn't random.
                </p>
              </div>
            </div>

            <div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                Why You Never See Her
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  The Tooth Fairy is small — about the size of your hand — and she works in
                  the quiet hours of the night, when most people are deeply asleep.
                  She's very good at her job. She has had centuries of practice.
                </p>
                <p>
                  She can slip through the tiniest spaces — a crack in a window frame,
                  a gap under a door. She doesn't need much room.
                  And she moves quietly enough that even light sleepers rarely wake up.
                </p>
                <p>
                  Most things that matter work this way. Gravity doesn't announce itself.
                  The wind doesn't explain where it's going. Important systems are usually
                  invisible — until you know how to look.
                </p>
              </div>
            </div>

            <div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                What the Clues Tell Us
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  If you want to find the Tooth Fairy, you don't need to stay up all night.
                  You just need to pay attention to what she leaves behind.
                </p>
                <p>
                  The coin is the obvious one. But there's also the absence of the tooth —
                  the fact that it went somewhere specific, not just disappeared.
                  There's the timing, which is never random. There's the fact that
                  children all over the world have been part of this same exchange
                  for as long as anyone can remember.
                </p>
                <p>
                  These aren't the clues of something imaginary.
                  They're the clues of something that works very hard not to be noticed.
                  There's a difference.
                </p>
              </div>
            </div>

            <div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                For Kids Who Are Starting to Wonder
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  If you're at the age where you're starting to ask harder questions —
                  that's a good thing. Asking hard questions is one of the ways you grow.
                </p>
                <p>
                  The Tooth Fairy works in ways that don't require you to see her to believe in her.
                  She works through the people who love you, through traditions passed down
                  for generations, through the real magic of feeling like something cares
                  about you enough to notice when you've lost something.
                </p>
                <p>
                  That's real. Whatever form it takes, that part is real.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* FAQ */}
        <section className="py-12 md:py-16 bg-secondary/30">
          <div className="container px-6 max-w-2xl mx-auto">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
              More questions about this
            </h2>
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="magical-card border-0 data-[state=open]:shadow-magical transition-shadow"
                >
                  <AccordionTrigger className="text-left font-display font-semibold text-foreground hover:text-primary transition-colors hover:no-underline px-0">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Related Pages */}
        <section className="py-12 md:py-16 bg-background">
          <div className="container px-6 max-w-2xl mx-auto">
            <h2 className="font-display text-xl font-bold text-foreground mb-6 text-center">
              Keep exploring
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { to: "/what-does-the-tooth-fairy-do-with-teeth", label: "What does she do with the teeth?", desc: "Inside the Tooth Fairy's workshop" },
                { to: "/why-does-the-tooth-fairy-take-teeth", label: "Why does she take teeth?", desc: "The reason behind the tradition" },
                { to: "/tooth-fairy-story-explained", label: "The Tooth Fairy story, explained", desc: "Where the tradition comes from" },
                { to: "/tooth-fairy-faq", label: "All Tooth Fairy questions answered", desc: "The complete FAQ" },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="magical-card group hover:shadow-magical transition-all duration-300 hover:-translate-y-0.5"
                >
                  <p className="font-display font-semibold text-foreground group-hover:text-primary transition-colors mb-1">
                    {link.label}
                  </p>
                  <p className="text-sm text-muted-foreground">{link.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-20 night-sky-section relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            {Array.from({ length: 10 }, (_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-starlight rounded-full sparkle"
                style={{
                  left: `${(i * 19 + 5) % 100}%`,
                  top: `${(i * 31 + 9) % 100}%`,
                  animationDelay: `${(i * 0.2) % 2}s`,
                }}
              />
            ))}
          </div>
          <div className="container px-6 max-w-2xl mx-auto text-center relative z-10">
            <Sparkles className="w-8 h-8 text-primary mx-auto mb-4" />
            <h2 className="font-display text-2xl md:text-3xl font-bold text-starlight mb-4">
              The full story is coming
            </h2>
            <p className="text-starlight/70 mb-8 leading-relaxed">
              <em>The Tooth Fairy's Magical Mission</em> is an animated short film that takes
              Arlo and CeCe deeper into the Tooth Fairy's world than any child has ever gone.
              Coming Summer 2026 from the Wiggly Tooth Workshop.
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/#signup">
                <Sparkles className="w-4 h-4" />
                Join the Workshop for updates
              </Link>
            </Button>
            <p className="mt-4 text-xs text-starlight/50">
              Free · No spam · Unsubscribe anytime
            </p>
          </div>
        </section>

      </main>
    </>
  );
};

export default IsTheToothFairyReal;
