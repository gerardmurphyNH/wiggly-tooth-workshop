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
    question: "Is the Tooth Fairy the same in every country?",
    answer:
      "The tradition exists all over the world, but it takes different forms. In France and other parts of Europe, it's La Petite Souris — a small mouse who takes the tooth. In parts of Asia, children throw their lower teeth onto the roof and upper teeth under the floor. In the Middle East, teeth are sometimes thrown toward the sun. The Tooth Fairy's workshop has teeth from all of these traditions.",
  },
  {
    question: "How old is the Tooth Fairy tradition?",
    answer:
      "Customs around lost teeth date back thousands of years. Norse and Northern European traditions from the 10th century mention a tooth fee — a small payment for a child's first lost tooth. The figure of the Tooth Fairy as we know her in the English-speaking world became more widespread in the early 20th century.",
  },
  {
    question: "Who invented the Tooth Fairy?",
    answer:
      "No one invented her — she grew from a tradition that many cultures developed independently. The modern version of the Tooth Fairy story was shaped over generations of parents answering the same question every child eventually asks: what happens to my tooth now?",
  },
  {
    question: "What is The Tooth Fairy's Magical Mission?",
    answer:
      "It's an animated short film and children's book from the Wiggly Tooth Workshop — developed in collaboration with Peter H. Reynolds and FableVision Studios. The story follows Arlo and CeCe as they discover what really happens to lost teeth and what goes on inside the Tooth Fairy's workshop. Coming Summer 2026.",
  },
  {
    question: "Who are Arlo and CeCe?",
    answer:
      "Arlo and CeCe are the two young characters at the heart of The Tooth Fairy's Magical Mission. They're curious, imaginative kids who discover what really happens to lost teeth — and what goes on inside the workshop when nobody is watching. They're the kind of characters who ask the questions every kid wonders about, and aren't afraid to follow the answer wherever it leads.",
  },
];

const ToothFairyStoryExplained = () => {
  return (
    <>
      <Helmet>
        <title>The Tooth Fairy Story, Explained | Wiggly Tooth Workshop</title>
        <meta
          name="description"
          content="Where does the Tooth Fairy come from? What's the real story behind the tradition? The history of the Tooth Fairy — and why it matters more than most people realize."
        />
        <link rel="canonical" href="https://wigglytoothworkshop.com/tooth-fairy-story-explained" />
        <meta property="og:title" content="The Tooth Fairy Story, Explained" />
        <meta property="og:description" content="Where does the Tooth Fairy come from? What's the real story behind the tradition? The history of the Tooth Fairy — and why it matters more than most people realize." />
        <meta property="og:url" content="https://wigglytoothworkshop.com/tooth-fairy-story-explained" />
        <meta property="og:image" content="https://wigglytoothworkshop.com/og-image.jpg" />
        <meta name="twitter:title" content="The Tooth Fairy Story, Explained" />
        <meta name="twitter:description" content="Where does the Tooth Fairy come from? What's the real story behind the tradition? The history of the Tooth Fairy — and why it matters more than most people realize." />
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
                    "name": "The Tooth Fairy Story, Explained",
                    "item": "https://wigglytoothworkshop.com/tooth-fairy-story-explained"
                  }
                ]
              },
              {
                "@type": "Article",
                "headline": "The Tooth Fairy Story, Explained",
                "description": "Where does the Tooth Fairy come from? What's the real story behind the tradition? The history and meaning of the Tooth Fairy — and why it matters.",
                "url": "https://wigglytoothworkshop.com/tooth-fairy-story-explained",
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
                    "name": "Where does the Tooth Fairy come from?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Customs around lost teeth date back thousands of years across many cultures. Norse and Northern European traditions from the 10th century mention a tooth fee. In France, it's La Petite Souris — a small mouse. The modern English-speaking Tooth Fairy became widespread in the early 20th century, shaped by generations of parents answering the question every child eventually asks: what happens to my tooth now?"
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Is the Tooth Fairy the same in every country?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "The tradition exists all over the world, but takes different forms. In France and parts of Europe it's La Petite Souris — a small mouse. In parts of Asia, children throw teeth toward the roof or floor. In the Middle East, teeth are sometimes thrown toward the sun. The Tooth Fairy's workshop has teeth from all of these traditions."
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
              The Story Behind the Story
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-starlight mb-6 leading-tight">
              The Tooth Fairy Story,<br />
              <span className="text-primary">Explained</span>
            </h1>
            <p className="text-lg text-starlight/80 mb-8 leading-relaxed max-w-2xl mx-auto">
              Where did the Tooth Fairy come from? Why does the tradition exist in so many places?
              And what does the workshop have to do with any of it?
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
                The Tooth Fairy tradition exists in some form in almost every culture on earth —
                though the details vary. What stays the same, everywhere, is the core exchange:
                a child loses something, a ritual marks the moment, and something is given back.
                The Tooth Fairy is the answer to the question every child eventually asks:
                <em> what happens to my tooth now?</em> And that question is as old as childhood itself.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12 md:py-16 bg-background">
          <div className="container px-6 max-w-2xl mx-auto space-y-12">

            <div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                Where the Tradition Begins
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  For as long as there have been children, there have been lost teeth — and people
                  trying to explain where they go. Thousands of years ago, in cultures that never
                  had contact with each other, people developed their own rituals for what to do
                  when a child's tooth fell out.
                </p>
                <p>
                  In Norse and Northern European traditions from the 10th century,
                  there's a record of a "tooth fee" — a small payment given to a child
                  for their first lost tooth. Vikings were said to wear children's teeth as
                  good luck in battle, believing the purity and courage of childhood would
                  protect them.
                </p>
                <p>
                  In parts of Asia, the tradition involves throwing the tooth — lower teeth
                  are thrown onto the roof (so the new tooth will grow upward),
                  and upper teeth are buried in the ground (so the new tooth will grow downward).
                  The logic is different, but the instinct is the same: a lost tooth is
                  significant. It deserves a ritual.
                </p>
              </div>
            </div>

            <div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                How the Tooth Fairy Took Shape
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  The Tooth Fairy as we know her in the English-speaking world began to take
                  her modern form in the early 20th century. A 1908 Chicago Tribune article
                  is one of the earliest printed references, describing the Tooth Fairy as
                  a good fairy who takes a child's tooth and leaves money in exchange.
                </p>
                <p>
                  No single author created her. She grew out of the same tradition that gave
                  us Santa Claus and the Easter Bunny — the human instinct to explain ordinary
                  events with extraordinary characters, especially when explaining those events
                  to children who are asking very reasonable questions.
                </p>
                <p>
                  Over the following decades, the tradition spread and grew. By the time most
                  grandparents today were children, the Tooth Fairy was already part of the story
                  — a figure everyone seemed to know, even if no one quite agreed on the details.
                </p>
              </div>
            </div>

            <div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                What the Tradition Is Really About
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Losing a baby tooth is one of a child's first physical experiences of change.
                  Something that was part of you is suddenly gone. Something new will grow in its
                  place. It can feel strange. A little scary. Sometimes exciting.
                </p>
                <p>
                  The Tooth Fairy tradition turns that moment into something meaningful.
                  The child isn't just losing a tooth. They're <em>giving</em> something to someone
                  who wants it, who values it, who will do something good with it. The tooth
                  doesn't just disappear — it goes somewhere. And that changes how the whole
                  thing feels.
                </p>
                <p>
                  That's the real magic of the tradition. And it has been working for a very long time.
                </p>
              </div>
            </div>

            <div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                The Workshop's Version
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  The Wiggly Tooth Workshop adds one more layer to the story —
                  an answer to the question the tradition never quite settled:
                  <em> why does she take the teeth?</em>
                </p>
                <p>
                  In the world of <em>The Tooth Fairy's Magical Mission</em>,
                  every lost tooth holds a good quality — bravery, kindness, creativity, or
                  patience — grown during years of childhood. The Tooth Fairy collects them not
                  to hoard them, but to carefully lift them out and use them to help fix the
                  small problems the world keeps running into.
                </p>
                <p>
                  It's a story that takes the oldest tradition in childhood and asks:
                  what if the exchange was even more meaningful than anyone knew?
                  What if the teeth actually mattered — not just as objects,
                  but as containers of something real?
                </p>
                <p>
                  That's the story Arlo and CeCe go to discover. And it changes how they
                  see every tooth they've ever lost.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* FAQ */}
        <section className="py-12 md:py-16 bg-secondary/30">
          <div className="container px-6 max-w-2xl mx-auto">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
              Questions about the tradition
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
                { to: "/why-does-the-tooth-fairy-take-teeth", label: "Why does she take teeth?", desc: "The reason behind the exchange" },
                { to: "/is-the-tooth-fairy-real", label: "Is the Tooth Fairy real?", desc: "A serious answer to a serious question" },
                { to: "/first-tooth-what-to-do", label: "Your child's first lost tooth", desc: "What to do and what to expect" },
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
              See it for yourself
            </h2>
            <p className="text-starlight/70 mb-8 leading-relaxed">
              <em>The Tooth Fairy's Magical Mission</em> is an animated short film in development
              with Peter H. Reynolds and FableVision Studios. Join the Workshop to get early
              access, behind-the-scenes updates, and launch news.
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

export default ToothFairyStoryExplained;
