import { Link } from "react-router-dom";
import { GraduationCap, ArrowLeft, Sparkles, Download, BookOpen, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { YOUTUBE_CHANNEL_URL } from "@/lib/config";
import { trackColoringPageDownload, trackCTAClick } from "@/lib/analytics";

const ForTeachers = () => {
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
          Classroom Resources
        </span>

        <h1 className="font-display text-4xl font-bold text-foreground mb-4 leading-tight">
          For Teachers &amp; Classrooms
        </h1>
        <p className="text-muted-foreground text-lg leading-relaxed mb-12">
          Use <em>The Tooth Fairy's Magical Mission</em> to open conversations about character,
          virtues, and the small ways children make the world better.
        </p>

        {/* Film CTA */}
        <div className="mb-10 p-6 rounded-2xl night-sky-section text-center relative overflow-hidden rounded-2xl">
          <div className="relative z-10">
            <Sparkles className="w-6 h-6 text-primary mx-auto mb-3" />
            <p className="font-display font-semibold text-starlight mb-2">
              Start with the short film
            </p>
            <p className="text-starlight/70 text-sm mb-4 max-w-md mx-auto">
              Watch <em>The Tooth Fairy's Magical Mission</em> as a class, then use the
              discussion prompts below to explore themes of courage, kindness, creativity,
              and patience.
            </p>
            <Button variant="hero" size="sm" asChild>
              <a href={YOUTUBE_CHANNEL_URL} target="_blank" rel="noopener noreferrer">
                Watch on YouTube (free)
              </a>
            </Button>
          </div>
        </div>

        {/* Discussion prompts */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-5">
            <MessageSquare className="w-5 h-5 text-primary" />
            <h2 className="font-display text-2xl font-bold text-foreground">
              Discussion Prompts
            </h2>
          </div>
          <div className="space-y-4">
            {[
              {
                grade: "K–2",
                prompts: [
                  "What do you think the Tooth Fairy does with the teeth she collects?",
                  "If your tooth held a special quality, what quality would you want it to have?",
                  "How did Arlo feel when he found out what the Tooth Fairy really does?",
                ],
              },
              {
                grade: "3–5",
                prompts: [
                  "The film says that teeth hold virtues — qualities like courage and kindness. What does that mean to you?",
                  "Think about something brave or kind you did recently. If that 'went into' your tooth, what would the Tooth Fairy do with it?",
                  "Why do you think the Tooth Fairy works at night, when nobody can see her?",
                ],
              },
            ].map((group) => (
              <div key={group.grade} className="magical-card">
                <span className="inline-block text-xs font-semibold uppercase tracking-wide text-primary bg-primary/10 px-3 py-1 rounded-full mb-3">
                  Grades {group.grade}
                </span>
                <ul className="space-y-2">
                  {group.prompts.map((prompt, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                      <span className="text-primary font-semibold mt-0.5">{i + 1}.</span>
                      <span>{prompt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Activity ideas */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-5">
            <BookOpen className="w-5 h-5 text-primary" />
            <h2 className="font-display text-2xl font-bold text-foreground">
              Classroom Activity Ideas
            </h2>
          </div>
          <div className="space-y-4">
            {[
              {
                title: "My Virtue Jar",
                description: "Have each student write down one kind, brave, creative, or patient thing they did that week. Collect them in a class jar. At the end of the month, read them aloud — like the Tooth Fairy's workshop, cataloguing what the class has built together.",
              },
              {
                title: "Write a Tooth Fairy Letter",
                description: "Students write a letter to the Tooth Fairy about a tooth they've lost (or imagine losing), describing what virtue they think was in it. Pairs well with the printable letter template.",
              },
              {
                title: "Virtue Mapping",
                description: "After watching the film, students draw or write about a moment when they showed courage, kindness, creativity, or patience. Connect it to the idea that these moments build up over time.",
              },
              {
                title: "Color the Story",
                description: "Use the free coloring page after watching the film as a quiet activity to let students process what they saw. Works especially well for K–2.",
              },
            ].map((activity) => (
              <div key={activity.title} className="p-4 rounded-xl bg-secondary/50 border border-border">
                <h3 className="font-display font-semibold text-foreground mb-1">{activity.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{activity.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Downloads */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-5">
            <Download className="w-5 h-5 text-primary" />
            <h2 className="font-display text-2xl font-bold text-foreground">
              Free Downloads
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="magical-card flex flex-col gap-3">
              <h3 className="font-display font-semibold text-foreground">Coloring Page</h3>
              <p className="text-muted-foreground text-sm">
                Great for a quiet activity or art integration. Free for classroom use.
              </p>
              <Button variant="magical" size="sm" asChild>
                <a
                  href="/downloads/coloring-page.pdf"
                  download="tooth-fairy-coloring-page.pdf"
                  onClick={trackColoringPageDownload}
                >
                  <Download className="w-3.5 h-3.5" />
                  Download (free)
                </a>
              </Button>
            </div>
            <div className="magical-card flex flex-col gap-3">
              <h3 className="font-display font-semibold text-foreground">Tooth Fairy Letter Template</h3>
              <p className="text-muted-foreground text-sm">
                A printable letter for the Tooth Fairy activity. More printables coming soon.
              </p>
              <Link to="/printables" className="text-sm font-medium text-primary hover:underline">
                See all printables →
              </Link>
            </div>
          </div>
        </div>

        {/* More resources CTA */}
        <div className="magical-card text-center">
          <GraduationCap className="w-6 h-6 text-primary mx-auto mb-3" />
          <h3 className="font-display text-lg font-semibold text-foreground mb-2">
            More classroom resources coming
          </h3>
          <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
            Join the Workshop to receive new printables, activity packs, and classroom
            guides as they're created.
          </p>
          <Button
            variant="magical"
            size="sm"
            onClick={() => trackCTAClick("for_teachers_page")}
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

export default ForTeachers;
