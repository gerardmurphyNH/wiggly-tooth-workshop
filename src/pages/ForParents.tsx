import { Link } from "react-router-dom";
import { ArrowLeft, Sparkles, HelpCircle, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { YOUTUBE_CHANNEL_URL } from "@/lib/config";
import { trackCTAClick } from "@/lib/analytics";

const ForParents = () => {
  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      <main className="container px-6 py-16 max-w-3xl mx-auto">
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

        <h1 className="font-display text-4xl font-bold text-foreground mb-4 leading-tight">
          Bringing the magic home
        </h1>
        <p className="text-muted-foreground text-lg leading-relaxed mb-12">
          Resources, answers, and ideas for making the tooth-losing tradition
          meaningful — and a little more magical.
        </p>

        {/* Film CTA */}
        <div className="mb-10 p-6 rounded-2xl bg-secondary/50 border border-border text-center">
          <Sparkles className="w-6 h-6 text-primary mx-auto mb-3" />
          <p className="font-display font-semibold text-foreground mb-2">
            Watch the short film with your child
          </p>
          <p className="text-muted-foreground text-sm mb-4">
            <em>The Tooth Fairy's Magical Mission</em> is a great conversation starter.
            Watch it together, then talk about what virtue might be in their tooth.
          </p>
          <Button variant="magical" size="sm" asChild>
            <a href={YOUTUBE_CHANNEL_URL} target="_blank" rel="noopener noreferrer">
              Watch on YouTube (free)
            </a>
          </Button>
        </div>

        {/* Quick links */}
        <div className="grid sm:grid-cols-2 gap-4 mb-12">
          {[
            {
              href: "/is-the-tooth-fairy-real",
              icon: HelpCircle,
              title: "Is the Tooth Fairy real?",
              description: "An honest, magical answer — for when your child starts asking.",
            },
            {
              href: "/what-does-the-tooth-fairy-do-with-teeth",
              icon: Sparkles,
              title: "What does the Tooth Fairy do with teeth?",
              description: "The full story behind where those tiny teeth really go.",
            },
            {
              href: "/how-much-does-the-tooth-fairy-leave",
              icon: HelpCircle,
              title: "How much does the Tooth Fairy leave?",
              description: "Ranges, averages, and what actually lands well with kids.",
            },
            {
              href: "/printables",
              icon: Download,
              title: "Free printables",
              description: "Coloring pages, letter templates, and more — all free.",
            },
          ].map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className="group flex items-start gap-3 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors border border-transparent hover:border-border"
            >
              <item.icon className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
              <div>
                <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                  {item.title}
                </span>
                <p className="text-xs text-muted-foreground mt-0.5">{item.description}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Workshop CTA */}
        <div className="magical-card text-center">
          <Sparkles className="w-6 h-6 text-primary mx-auto mb-3" />
          <h3 className="font-display text-lg font-semibold text-foreground mb-2">
            Join the Workshop
          </h3>
          <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
            New printables, CeCe and Arlo stories, classroom resources, and early
            updates about the ToothSafe — all free for Workshop members.
          </p>
          <Button
            variant="magical"
            size="sm"
            onClick={() => trackCTAClick("for_parents_page")}
            asChild
          >
            <a href="/#signup">
              <Sparkles className="w-3.5 h-3.5" />
              Join the Workshop
            </a>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ForParents;
