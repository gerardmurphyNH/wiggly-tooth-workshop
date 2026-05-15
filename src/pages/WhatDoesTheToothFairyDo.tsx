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
    question: "Does the Tooth Fairy keep all the teeth forever?",
    answer:
      "Not exactly. Once the quality is drawn out, the tooth stays in the workshop, carefully kept as a record. Some say there are rows and rows of tiny labeled jars, one for each child, each one marked with a name and a year.",
  },
  {
    question: "What happens if a tooth has more than one quality in it?",
    answer:
      "That happens more often than you'd think. A tooth that grew in while you were learning to ride a bike might hold both bravery and patience. The Tooth Fairy sorts these carefully; she has been doing this for a very long time.",
  },
  {
    question: "Can I visit the Tooth Fairy's workshop?",
    answer:
      "Not usually. The workshop exists in a place between sleeping and dreaming. But Arlo and CeCe find their way there in The Tooth Fairy's Magical Mission, and they discover it looks a bit like a library, if libraries sparkled.",
  },
  {
    question: "How does the Tooth Fairy know whose tooth is whose?",
    answer:
      "Teeth carry a kind of fingerprint, not a visible one, but something the Tooth Fairy can sense. Every tooth knows where it came from.",
  },
  {
    question: "What if my tooth has a cavity?",
    answer:
      "The quality is in the tooth itself, not in its condition. A tooth with a cavity still holds something real. The Tooth Fairy doesn't judge. She just collects.",
  },
  {
    question: "What are the four good qualities?",
    answer:
      "Bravery, kindness, creativity, and patience. These are the four that teeth most commonly hold. Every child grows a little of each one, though different teeth tend to carry different amounts depending on what was happening in your life when they were growing.",
  },
];

const WhatDoesTheToothFairyDo = () => {
  return (
    <>
      <Helmet>
        <title>What Does the Tooth Fairy Do With Teeth? | Wiggly Tooth Workshop</title>
        <meta
          name="description"
          content="What does the Tooth Fairy do with all those teeth? She takes them to her workshop, draws out the good qualities inside (bravery, kindness, creativity, patience) and uses them to quietly fix the world."
        />
        <link rel="canonical" href="https://wigglytoothworkshop.com/what-does-the-tooth-fairy-do-with-teeth" />
        <meta property="og:title" content="What Does the Tooth Fairy Do With Teeth?" />
        <meta property="og:description" content="The Tooth Fairy takes every lost tooth to her workshop, where she draws out the good qualities inside (bravery, kindness, creativity, patience) and uses them to quietly fix the world." />
        <meta property="og:url" content="https://wigglytoothworkshop.com/what-does-the-tooth-fairy-do-with-teeth" />
        <meta property="og:image" content="https://wigglytoothworkshop.com/og-image.jpg" />
        <meta name="twitter:title" content="What Does the Tooth Fairy Do With Teeth?" />
        <meta name="twitter:description" content="The Tooth Fairy takes every lost tooth to her workshop, where she draws out the good qualities inside (bravery, kindness, creativity, patience) and uses them to quietly fix the world." />
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
                    "name": "What Does the Tooth Fairy Do With Teeth?",
                    "item": "https://wigglytoothworkshop.com/what-does-the-tooth-fairy-do-with-teeth"
                  }
                ]
              },
              {
                "@type": "Article",
                "headline": "What Does the Tooth Fairy Do With Teeth?",
                "description": "The Tooth Fairy takes every lost tooth to her workshop, where she carefully draws out the good qualities inside (bravery, kindness, creativity, patience) and uses them to quietly fix the world.",
                "url": "https://wigglytoothworkshop.com/what-does-the-tooth-fairy-do-with-teeth",
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
                    "name": "What does the Tooth Fairy do with all the teeth she collects?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "The Tooth Fairy takes every tooth to her workshop, where she carefully draws out the good quality inside: bravery, kindness, creativity, or patience. She uses these qualities to help fix small problems in the world: helping someone find courage, bringing patience to a difficult moment, or lighting the way for someone who needs kindness."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Does the Tooth Fairy keep all the teeth forever?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Not exactly. The teeth are processed in the workshop; the quality is carefully drawn out, and then the tooth becomes part of the record. Some say the workshop has rows and rows of tiny jars, each one labeled with a child's name and the year."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What are the four good qualities the Tooth Fairy collects?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Bravery, kindness, creativity, and patience. These are the four that teeth most commonly hold. Every child grows a little of each one, though different teeth tend to carry different amounts."
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
                          <div className="flex flex-col items-center gap-4 mb-8">
                <Link
                  to="/"
                  className="inline-flex items-center gap-2 text-starlight/60 hover:text-starlight transition-colors text-sm"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to Wiggly Tooth Workshop
                </Link>
                <span className="inline-block text-xs font-semibold uppercase tracking-wide text-primary bg-primary/10 px-3 py-1 rounded-full">
              The Big Question
            </span>
                          </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-starlight mb-6 leading-tight">
              What Does the Tooth Fairy<br />
              <span className="text-primary">Do With Teeth?</span>
            </h1>
            <p className="text-lg text-starlight/80 mb-8 leading-relaxed max-w-2xl mx-auto">
              She takes them to her workshop. And what happens there is more magical than most people ever discover.
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
                The Tooth Fairy takes every lost tooth to her workshop, where she carefully draws out
                the <strong>good quality</strong> hiding inside. A good quality is something you grew
                while your tooth was growing: bravery, or kindness, or creativity, or patience.
                She draws those out, one by one, and uses them to help fix small problems in the world.
              </p>
              <p className="text-muted-foreground mt-4 leading-relaxed">
                Your tooth might help a child find the courage to try something new. Or remind
                someone to be patient when things are hard. That's why the Tooth Fairy collects teeth.
                Not to keep them. To <em>use</em> what's inside them.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12 md:py-16 bg-background">
          <div className="container px-6 max-w-2xl mx-auto space-y-12">

            <div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                Inside the Tooth Fairy's Workshop
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  The Tooth Fairy's workshop is enormous, much bigger than you'd expect from someone
                  so small. It's built into the side of a hill that exists somewhere between the waking
                  world and the dreaming one, in a place where starlight falls at a slightly different
                  angle than anywhere else.
                </p>
                <p>
                  Inside, the workshop looks a bit like a library — if libraries sparkled.
                  There are rows upon rows of tiny shelves, each one holding teeth sorted by quality,
                  organized by year, and sorted by where they came from. At the center of it all is a
                  long wooden workbench, worn smooth by centuries of use, where the Tooth Fairy does
                  her most careful work.
                </p>
                <p>
                  It smells like warm wood and something faintly sweet. And if you stopped and
                  listened, you'd hear the small, careful sounds of very important work being done.
                </p>
                <p>
                  Every night, after her rounds, she comes back with what she's collected. And then
                  the real work begins.
                </p>
              </div>
            </div>

            <div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                Why Teeth Hold Good Qualities
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Every tooth you've ever grown holds something more than calcium and enamel.
                  It holds <em>time</em>. Each tooth was growing inside you while you were becoming yourself,
                  learning to walk, learning to share, learning to be brave when something was scary.
                </p>
                <p>
                  Those experiences leave a trace. Not a visible one, but something real.
                  The Tooth Fairy has been collecting teeth long enough to know that a tooth grown
                  during a child's first year of school is different from a tooth that came in while
                  they were recovering from something hard. You can feel the difference, if you know
                  how to look.
                </p>
                <p>
                  The Tooth Fairy calls this a good quality. And the world keeps running short of them.
                </p>
              </div>
            </div>

            <div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                The Workshop's Careful Work
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  The work is delicate. The Tooth Fairy uses tools that look like something from a
                  watchmaker's bench: small, precise, each one made for a single job. She works
                  under a lamp that casts a warm gold light, bending close over each tooth.
                  When a quality comes out it looks a bit like a spark: small, warm, and very
                  much alive.
                </p>
                <p>
                  Once drawn out, each quality is carefully labeled and stored in its own jar.
                  Bravery in one. Kindness in another. Creativity in a third. Patience in the
                  fourth, the jar that always takes the longest to fill.
                </p>
                <p>
                  The qualities don't expire. They don't go stale. They wait on the shelf until
                  they're needed somewhere in the world.
                </p>
              </div>
            </div>

            <div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                Where the Qualities Go
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  This is the part the Tooth Fairy doesn't advertise. The collection is only half the job.
                </p>
                <p>
                  The qualities drawn from children's teeth are quietly sent back into the world,
                  used to help fix the small problems that keep coming up. A firefighter who needs
                  to stay calm in a dangerous moment. A shy kid finding the courage to try something
                  new. A parent who has run out of patience on a long afternoon.
                </p>
                <p>
                  The Tooth Fairy doesn't make announcements about this. She doesn't take credit.
                  She just does the work, night after night, quietly fixing what the world
                  keeps running short of.
                </p>
                <p>
                  Your tooth is part of that. Whatever quality was in it is out there now,
                  doing something useful. Helping someone. Being something good.
                </p>
              </div>
            </div>

            <div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                A Note for Curious Kids
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  If you've just lost a tooth and you're wondering what happens to it now,
                  this is what happens. The Tooth Fairy takes it somewhere safe. She takes care
                  of it. She uses what's inside it for something important.
                </p>
                <p>
                  You don't need to worry about your tooth. It's in good hands.
                  And the coin under your pillow? That's her way of saying thank you for
                  something real, something you grew yourself, that turned out to be
                  exactly what the world needed.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* Related Questions */}
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
                { to: "/why-does-the-tooth-fairy-take-teeth", label: "Why does she take teeth at all?", desc: "The reason behind the whole tradition" },
                { to: "/is-the-tooth-fairy-real", label: "Is the Tooth Fairy real?", desc: "A serious answer to a serious question" },
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
              <em>The Tooth Fairy's Magical Mission</em> is an animated short film following
              Arlo and CeCe as they discover the workshop for themselves. Coming Summer 2026
              from the Wiggly Tooth Workshop.
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

export default WhatDoesTheToothFairyDo;
