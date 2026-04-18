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
import Footer from "@/components/Footer";

const faqs = [
  {
    question: "Why does the Tooth Fairy want teeth and not something else?",
    answer:
      "Because teeth are the only part of you that falls off on its own, at just the right time, carrying everything you've grown so far. Hair grows too fast. Fingernails don't hold memories the same way. A tooth that's been growing for years holds years.",
  },
  {
    question: "Does the Tooth Fairy take adult teeth too?",
    answer:
      "No. Adult teeth are permanent — they're not meant to be collected. The baby teeth are the special ones: they fall away naturally at exactly the moment when a child is ready for something bigger. That timing isn't an accident.",
  },
  {
    question: "What if I want to keep my tooth?",
    answer:
      "The Tooth Fairy understands. Some families keep teeth as keepsakes, and she respects that. If there's no tooth under the pillow, she simply moves on. The virtues in a kept tooth aren't lost — they stay with the family.",
  },
  {
    question: "Why does she leave money instead of something else?",
    answer:
      "The coin is a trade — an acknowledgment that what you gave her had real value. It's the Tooth Fairy's way of saying: I see what you've grown. I'm grateful for it. Thank you.",
  },
  {
    question: "Is the exchange fair?",
    answer:
      "That depends on how you think about it. You give her something that took years to grow, packed with memories and virtues. She gives you a coin. But the coin isn't the point. The point is that what was in your tooth is now out in the world, doing something good. Most people would say that's more than fair.",
  },
];

const WhyDoesTheToothFairyTakeTeeth = () => {
  return (
    <>
      <Helmet>
        <title>Why Does the Tooth Fairy Take Teeth? | Wiggly Tooth Workshop</title>
        <meta
          name="description"
          content="Why does the Tooth Fairy take teeth instead of leaving them? Because every tooth holds a virtue grown over years of childhood — and those virtues are exactly what the world needs."
        />
        <link rel="canonical" href="https://wigglytoothworkshop.com/why-does-the-tooth-fairy-take-teeth" />
        <meta property="og:title" content="Why Does the Tooth Fairy Take Teeth?" />
        <meta property="og:description" content="Every tooth holds a virtue grown over years of childhood — bravery, kindness, creativity, patience. The Tooth Fairy takes them because those virtues are exactly what the world needs." />
        <meta property="og:url" content="https://wigglytoothworkshop.com/why-does-the-tooth-fairy-take-teeth" />
        <meta property="og:image" content="https://wigglytoothworkshop.com/og-image.jpg" />
        <meta name="twitter:title" content="Why Does the Tooth Fairy Take Teeth?" />
        <meta name="twitter:description" content="Every tooth holds a virtue grown over years of childhood — bravery, kindness, creativity, patience. The Tooth Fairy takes them because those virtues are exactly what the world needs." />
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
                    "name": "Why Does the Tooth Fairy Take Teeth?",
                    "item": "https://wigglytoothworkshop.com/why-does-the-tooth-fairy-take-teeth"
                  }
                ]
              },
              {
                "@type": "Article",
                "headline": "Why Does the Tooth Fairy Take Teeth?",
                "description": "Every tooth holds a virtue grown over years of childhood — bravery, kindness, creativity, patience. The Tooth Fairy takes them because those virtues are exactly what the world needs.",
                "url": "https://wigglytoothworkshop.com/why-does-the-tooth-fairy-take-teeth",
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
                    "name": "Why does the Tooth Fairy take teeth?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Every tooth you lose holds something special — a memory, a moment of bravery, a flash of kindness. The Tooth Fairy collects these tiny treasures because they contain the virtues of childhood. And those virtues are exactly what the world needs."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Why does the Tooth Fairy take baby teeth specifically?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Baby teeth fall away naturally at exactly the moment when a child is ready for something bigger. That timing isn't an accident. The baby teeth carry the record of early childhood — years of growth, learning, and becoming. Adult teeth are permanent and aren't part of the collection."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Why does the Tooth Fairy leave money?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "The coin is a trade — an acknowledgment that what you gave her had real value. It's the Tooth Fairy's way of saying: I see what you've grown. I'm grateful for it. Thank you."
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
              Behind the Tradition
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-starlight mb-6 leading-tight">
              Why Does the Tooth Fairy<br />
              <span className="text-primary">Take Teeth?</span>
            </h1>
            <p className="text-lg text-starlight/80 mb-8 leading-relaxed max-w-2xl mx-auto">
              Not because she needs them. Because of what's inside them — and because the world needs that too.
            </p>
          </div>
        </section>

        {/* AEO Answer Block */}
        <section className="py-12 md:py-16 bg-secondary/30">
          <div className="container px-6 max-w-2xl mx-auto">
            <div className="magical-card p-8">
              <span className="inline-block text-xs font-semibold uppercase tracking-wide text-primary bg-primary/10 px-3 py-1 rounded-full mb-4">
                The Short Answer
              </span>
              <p className="text-foreground text-lg leading-relaxed">
                The Tooth Fairy takes teeth because every tooth you lose holds something special —
                a memory, a moment of bravery, a flash of kindness. Each tooth was growing inside you
                while you were becoming yourself, and it carries a trace of everything you learned
                during that time. The Tooth Fairy calls this a <strong>virtue</strong>.
                She collects them because the world constantly needs more of these — and children
                are the only ones who can grow them.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12 md:py-16 bg-background">
          <div className="container px-6 max-w-2xl mx-auto space-y-12">

            <div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                Why Teeth, Specifically?
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  You might wonder why she doesn't collect something else — your drawings, your
                  favorite toys, the notes you passed in class. But teeth are different.
                </p>
                <p>
                  A tooth grows slowly, over years, inside your jaw. It's there during your first
                  day of school and your first time staying at a friend's house. It's there when you
                  try something scary for the first time, and when you're kind to someone who was
                  having a bad day. It absorbs all of that. Not in a way you can see, but in a way
                  the Tooth Fairy can sense.
                </p>
                <p>
                  And then, at just the right moment, it falls out. Ready to be collected.
                  That timing isn't accidental — it's part of the system. The tooth falls when
                  it's full. When it has grown alongside you long enough to hold something real.
                </p>
              </div>
            </div>

            <div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                What Makes a Tooth Special
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Think about everything that happened while your teeth were growing in.
                  Every time you tried something new. Every time you helped someone.
                  Every time you waited for something you really wanted, even when waiting was hard.
                </p>
                <p>
                  Each of those moments left a small trace. Not visible, but real —
                  like the way a book absorbs the smell of the room where it was read.
                  Your teeth carry the record of your childhood. And childhood, as it turns out,
                  is where virtues come from.
                </p>
                <p>
                  Bravery. Kindness. Creativity. Patience. These are the four the Tooth Fairy
                  finds most often. And she uses every one.
                </p>
              </div>
            </div>

            <div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                The Trade
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  The coin under your pillow is the Tooth Fairy's way of saying thank you.
                  Not for the tooth itself — but for what was in it. For years of growth.
                  For small moments of courage and care that added up to something real.
                </p>
                <p>
                  You grew that tooth. You filled it with something good.
                  And now it's out in the world, doing what it was always meant to do.
                </p>
                <p>
                  The coin is small compared to what you gave her. But it's sincere.
                  It means: <em>I see what you've grown. The world needed this. Thank you.</em>
                </p>
              </div>
            </div>

            <div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                Why It Only Works With Children's Teeth
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Adult teeth stay in. They're not meant to fall. And in a way, that makes
                  sense — adults have already grown their virtues. The work of extraction happens
                  in childhood, when everything is new and being learned for the first time.
                </p>
                <p>
                  That's why the Tooth Fairy visits children specifically. And why she comes
                  every time — because every tooth matters. Every lost tooth holds something
                  the world can use.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* FAQ */}
        <section className="py-12 md:py-16 bg-secondary/30">
          <div className="container px-6 max-w-2xl mx-auto">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
              Questions about this
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
                { to: "/is-the-tooth-fairy-real", label: "Is the Tooth Fairy real?", desc: "A serious answer to a serious question" },
                { to: "/first-tooth-what-to-do", label: "Your child's first lost tooth", desc: "What to do and what to expect" },
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
              <em>The Tooth Fairy's Magical Mission</em> is an animated short film that follows
              Arlo and CeCe as they discover exactly why the Tooth Fairy takes teeth — and what
              she does with them. Coming Summer 2026.
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
      <Footer />
    </>
  );
};

export default WhyDoesTheToothFairyTakeTeeth;
