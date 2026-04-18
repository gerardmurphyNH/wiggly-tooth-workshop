import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { trackFAQOpen } from "@/lib/analytics";

const faqs = [
  {
    question: "Why does the Tooth Fairy take my teeth?",
    answer: "Every tooth you lose holds something special - a memory, a moment of bravery, a flash of kindness. The Tooth Fairy collects these tiny treasures because they contain the virtues of childhood. And those virtues? They're exactly what the world needs.",
  },
  {
    question: "What does the Tooth Fairy do with my teeth?",
    answer: "In her workshop, the Tooth Fairy carefully extracts the virtue from each tooth. These virtues are then woven into the fabric of the world - helping someone be a little braver, a little kinder, a little more patient. Your tooth might help a firefighter stay calm, or a shy kid make a new friend.",
  },
  {
    question: "Why does the Tooth Fairy leave money?",
    answer: "It's a trade, really. You're giving something precious - a piece of yourself that took time and care to grow. The coin is the Tooth Fairy's way of saying 'thank you' for trusting her with something so important.",
  },
  {
    question: "Why does the Tooth Fairy come at night?",
    answer: "Fairies work best in the quiet hours, when dreams are deep and imaginations are wide open. Plus, there's something about starlight that helps the Tooth Fairy fly faster. She visits thousands of children each night - timing is everything!",
  },
  {
    question: "How does the Tooth Fairy get in my house?",
    answer: "Fairies are very small - about the size of your hand - and they can slip through the tiniest spaces: a crack in a window, a gap under a door, even the space between moonbeams. Your house is never as sealed as you think.",
  },
  {
    question: "Is the Tooth Fairy real?",
    answer: "Yes, the Tooth Fairy is real. She just does her work in ways most people don't see. Like many important things, she works quietly, at night, fixing small problems and keeping the world in balance. When you lose a tooth, it doesn't disappear by accident. The Tooth Fairy takes it because every tooth holds memories and virtues you've grown while becoming yourself. She uses those to help make the world a little better, then leaves something behind as a thank-you. You may never see her, but the clues are there. And that's exactly how she likes it.",
  },
  {
    question: "How many teeth does the Tooth Fairy have?",
    answer: "Millions! The Tooth Fairy's workshop is full of them - sorted by virtue, organized by year, catalogued by country. It looks a bit like a library, if libraries sparkled.",
  },
  {
    question: "What if I swallow my tooth?",
    answer: "Don't worry. The Tooth Fairy has been doing this for a very long time. She always finds a way. Just leave a note under your pillow explaining what happened - the Tooth Fairy appreciates the honesty.",
  },
  {
    question: "Who are Arlo and CeCe?",
    answer: "Arlo and CeCe are the two young characters at the heart of The Tooth Fairy's Magical Mission. They're curious, imaginative kids who find themselves caught up in the Tooth Fairy's world — discovering what really happens to lost teeth, why virtues matter, and what goes on inside the workshop when nobody is watching. They're the kind of characters who ask the questions every kid wonders about, and aren't afraid to follow the answer wherever it leads.",
  },
  {
    question: "What is ToothSafe?",
    answer: "ToothSafe is a beautifully designed keepsake box for lost teeth — created by the Wiggly Tooth Workshop so kids have a special, safe place to leave their tooth for the Tooth Fairy. It's designed to make the whole tooth fairy experience feel more magical and intentional. ToothSafe is currently in development and will be available for early access to Workshop members first.",
  },
  {
    question: "What is the Wiggly Tooth Workshop?",
    answer: "The Wiggly Tooth Workshop is the creative studio behind The Tooth Fairy's Magical Mission — an animated short film, children's book, and ToothSafe product all built around the same magical story world. The Workshop is dedicated to making stories and objects for kids that feel genuinely crafted, imaginative, and worth keeping. It's being developed in collaboration with Peter H. Reynolds and FableVision Studios.",
  },
  {
    question: "When does The Tooth Fairy's Magical Mission come out?",
    answer: "The animated short film is in production and scheduled for Summer 2026. The children's book and ToothSafe product will follow. The best way to stay up to date — and get early access before anything goes public — is to join the Workshop mailing list at wigglytoothworkshop.com.",
  },
  {
    question: "Is there a free tooth fairy coloring page I can print?",
    answer: "Yes! The Wiggly Tooth Workshop has a free printable tooth fairy coloring page available as a PDF download — no sign-up required. It's designed for kids ages 3–10 and features original artwork from the world of The Tooth Fairy's Magical Mission. You can download it at wigglytoothworkshop.com/coloring-page.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-20 md:py-28 bg-secondary/30">
      <div className="container px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold uppercase tracking-wide text-primary bg-primary/10 px-3 py-1 rounded-full mb-4">
              From Curious Minds
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Questions kids ask
            </h2>
            <p className="text-muted-foreground">
              Every good question deserves a thoughtful answer
            </p>
          </div>

          <Accordion
            type="single"
            collapsible
            className="space-y-3"
            onValueChange={(value) => {
              if (value) {
                const index = parseInt(value.replace("item-", ""));
                trackFAQOpen(faqs[index].question);
              }
            }}
          >
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
      </div>
    </section>
  );
};

export default FAQSection;
