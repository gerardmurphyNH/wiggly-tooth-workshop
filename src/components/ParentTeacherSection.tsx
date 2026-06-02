import { Link } from "react-router-dom";
import { Download, BookOpen, GraduationCap, HelpCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { trackColoringPageDownload, trackCTAClick } from "@/lib/analytics";

const parentLinks = [
  {
    href: "/is-the-tooth-fairy-real",
    label: "Is the Tooth Fairy real?",
    description: "A thoughtful answer - for when the question finally comes",
    icon: HelpCircle,
  },
  {
    href: "/what-does-the-tooth-fairy-do-with-teeth",
    label: "What does the Tooth Fairy do with teeth?",
    description: "The real reason she takes them, and what happens next",
    icon: Sparkles,
  },
  {
    href: "/how-much-does-the-tooth-fairy-leave",
    label: "How much does the Tooth Fairy leave?",
    description: "Ranges, context, and what actually lands well with kids",
    icon: BookOpen,
  },
  {
    href: "/tooth-fairy-letter",
    label: "Tooth Fairy letter template",
    description: "A printable letter from the Tooth Fairy, free to use",
    icon: Download,
  },
  {
    href: "/what-to-say-when-child-asks-if-tooth-fairy-is-real",
    label: "What to say when they ask",
    description: "A gentle guide for the conversation that eventually comes",
    icon: HelpCircle,
  },
];

const teacherLinks = [
  {
    href: "/for-teachers",
    label: "Classroom resources",
    description: "Discussion prompts, activity ideas, and free downloads",
    icon: GraduationCap,
  },
  {
    href: "/printables",
    label: "Free printables",
    description: "Coloring pages and letter templates, free to use",
    icon: Download,
  },
];

const ParentTeacherSection = () => {
  const scrollToSignup = () => {
    trackCTAClick("parent_teacher_section");
    document.getElementById("signup")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 md:py-28 bg-secondary/30">
      <div className="container px-6">
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-semibold uppercase tracking-wide text-primary bg-primary/10 px-3 py-1 rounded-full mb-5">
            Resources
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            For Parents &amp; Teachers
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Questions to answer, stories to share, and a few things worth knowing.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          {/* For Parents */}
          <div>
            <h3 className="font-display text-lg font-semibold text-foreground mb-5 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-primary" />
              For Parents
            </h3>
            <ul className="space-y-3">
              {parentLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="group flex items-start gap-3 p-3.5 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors border border-transparent hover:border-border"
                  >
                    <link.icon className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                        {link.label}
                      </span>
                      <p className="text-xs text-muted-foreground mt-0.5">{link.description}</p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* For Teachers */}
          <div>
            <h3 className="font-display text-lg font-semibold text-foreground mb-5 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-primary" />
              For Teachers
            </h3>
            <ul className="space-y-3 mb-6">
              {teacherLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="group flex items-start gap-3 p-3.5 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors border border-transparent hover:border-border"
                  >
                    <link.icon className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                        {link.label}
                      </span>
                      <p className="text-xs text-muted-foreground mt-0.5">{link.description}</p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>

            {/* Coloring page quick download */}
            <Button
              variant="workshop"
              size="sm"
              asChild
            >
              <a
                href="/downloads/coloring-page.pdf"
                download="tooth-fairy-coloring-page.pdf"
                onClick={trackColoringPageDownload}
                className="inline-flex items-center gap-2"
              >
                <Download className="w-3.5 h-3.5" />
                Download coloring page (free)
              </a>
            </Button>
          </div>
        </div>

        {/* Workshop CTA */}
        <div className="max-w-xl mx-auto text-center magical-card">
          <Sparkles className="w-6 h-6 text-primary mx-auto mb-3" />
          <h3 className="font-display text-lg font-semibold text-foreground mb-2">
            The workshop keeps growing
          </h3>
          <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
            New stories, printables, and classroom resources are added as they're
            made. Join the Workshop to find out when something new appears.
          </p>
          <Button variant="magical" size="sm" onClick={scrollToSignup}>
            <Sparkles className="w-3.5 h-3.5" />
            Join the Workshop
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ParentTeacherSection;
