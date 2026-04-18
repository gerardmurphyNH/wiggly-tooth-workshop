import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Download,
  BookOpen,
  FileText,
  Palette,
  Sparkles,
  Check,
  GraduationCap,
  RefreshCw,
  Mail,
  AlertCircle,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Footer from "@/components/Footer";
import {
  trackTeacherWorksheetDownload,
  trackTeacherGuideDownload,
  trackTeacherColoringDownload,
  trackTeacherBundleDownload,
  trackTeacherSignupSubmit,
  trackTeacherResourcesPageClick,
} from "@/lib/analytics";
import { GOOGLE_SHEETS_ENDPOINT, CONTACT_EMAIL } from "@/lib/config";

const resources = [
  {
    icon: FileText,
    badge: "Reflection Activity",
    title: "The Good Things You Grow",
    subtitle: "Student Worksheet",
    description:
      "A simple writing and reflection activity where students identify the good qualities they've been growing. Kindness, bravery, creativity, persistence. Built around a single question: what have you been growing lately?",
    details: ["Grades 1–2", "10–15 min", "Print and use"],
    fileName: "tooth-fairy-worksheet.pdf",
    downloadName: "tooth-fairy-worksheet.pdf",
    onDownload: trackTeacherWorksheetDownload,
    color: "bg-primary/10",
    iconColor: "text-primary",
  },
  {
    icon: BookOpen,
    badge: "Lesson Plan",
    title: "Teacher Guide",
    subtitle: "Lesson Plan & Classroom Tradition",
    description:
      "A structured lesson flow with discussion prompts, learning goals, and instructions for making this a repeatable classroom routine. Every time a student loses a tooth, there's a simple, meaningful moment ready for them.",
    details: ["Grades 1–2", "15–20 min", "2 pages"],
    fileName: "tooth-fairy-teacher-guide.pdf",
    downloadName: "tooth-fairy-teacher-guide.pdf",
    onDownload: trackTeacherGuideDownload,
    color: "bg-accent/10",
    iconColor: "text-accent-foreground",
  },
  {
    icon: Palette,
    badge: "Creative Activity",
    title: "Color the Tooth Fairy",
    subtitle: "Coloring Page",
    description:
      "Students color the Tooth Fairy in her workshop and label a jar with a quality they're growing. A calming extension that lets children process the reflection through drawing. Art by Peter H. Reynolds and FableVision Studios.",
    details: ["All ages", "10–15 min", "Single page"],
    fileName: "tooth-fairy-coloring-page.pdf",
    downloadName: "tooth-fairy-coloring-page.pdf",
    onDownload: trackTeacherColoringDownload,
    color: "bg-secondary",
    iconColor: "text-foreground",
  },
];

const whyReasons = [
  {
    icon: GraduationCap,
    title: "Built for grades 1–2",
    body: "Designed for the age when children are actively losing teeth. Simple enough for first graders, meaningful enough for second graders.",
  },
  {
    icon: Users,
    title: "Social-emotional learning",
    body: "Connects a familiar childhood milestone to character reflection. Bravery, kindness, creativity, patience — qualities children can actually name and recognize in themselves.",
  },
  {
    icon: RefreshCw,
    title: "A repeatable classroom tradition",
    body: "Use it once, then use it every time a student loses a tooth. The worksheet becomes a ritual that marks the moment as meaningful, not just routine.",
  },
  {
    icon: Check,
    title: "Minimal prep, maximum impact",
    body: "Print and go. The teacher guide walks through a 15–20 minute lesson. No materials needed beyond paper and something to color with.",
  },
];

const faqs = [
  {
    question: "What grade is this for?",
    answer:
      "The activity is designed for grades 1 and 2, ages 5–8. That's typically when children are losing their first teeth and when the SEL concepts (kindness, bravery, effort) are most appropriate to introduce. The coloring page works for any age.",
  },
  {
    question: "Is this free?",
    answer:
      "Yes. All three printables are free to download and use. No sign-up required. Print as many copies as you need for your classroom.",
  },
  {
    question: "Can parents use this at home?",
    answer:
      "Absolutely. The worksheet and coloring page work well at home when a child loses a tooth. The teacher guide includes a note about extending the activity home, and the worksheet is designed to be shared with families.",
  },
  {
    question: "Can I print just one page?",
    answer:
      "Yes. Each resource is a separate PDF. Download whichever one you need. The worksheet, teacher guide, and coloring page are all available individually, or you can grab all three in one bundle.",
  },
  {
    question: "How can I use this each time a student loses a tooth?",
    answer:
      "Keep a stack of worksheets printed and ready. When a student loses a tooth, give them a fresh worksheet and ask: \"What do you think you've been growing lately?\" Let them complete it, then optionally color the jar page. The teacher guide explains the full routine.",
  },
  {
    question: "What curriculum standards does this address?",
    answer:
      "The activity supports common SEL frameworks including CASEL competencies around self-awareness and self-management. It also touches on personal narrative writing for grades 1–2. Not tied to any specific curriculum — designed to be flexible and easy to integrate.",
  },
];

// Pre-computed star positions
const stars = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  left: `${(i * 19 + 5) % 100}%`,
  top: `${(i * 31 + 9) % 100}%`,
  delay: `${(i * 0.17) % 2}s`,
}));

// Inline mini signup for teacher page
const TeacherSignup = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const isEndpointConfigured =
    GOOGLE_SHEETS_ENDPOINT !== "PASTE_YOUR_APPS_SCRIPT_WEB_APP_URL_HERE";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (honeypot) { setIsSubmitted(true); return; }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (!isEndpointConfigured) {
      setError(`Form not configured yet. Email us at ${CONTACT_EMAIL} to stay in touch.`);
      return;
    }
    setIsLoading(true);
    try {
      await fetch(GOOGLE_SHEETS_ENDPOINT, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          firstName: firstName || "",
          virtue: "",
          source: "teacher_resources",
          timestamp: new Date().toISOString(),
        }),
      });
      setIsSubmitted(true);
      trackTeacherSignupSubmit();
    } catch {
      setError(`Something went wrong. Please try again or email ${CONTACT_EMAIL}.`);
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-4">
        <div className="w-10 h-10 mx-auto rounded-full bg-primary flex items-center justify-center mb-3">
          <Check className="w-5 h-5 text-primary-foreground" />
        </div>
        <p className="font-display font-semibold text-foreground">You're on the list.</p>
        <p className="text-sm text-muted-foreground mt-1">We'll send future teaching resources when they're ready.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
      <Input
        type="email"
        placeholder="your@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        aria-label="Email address"
        className="h-12 flex-1"
      />
      <Input
        type="text"
        placeholder="First name (optional)"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        aria-label="First name (optional)"
        className="h-12 sm:w-40"
      />
      <input
        type="text"
        name="website"
        value={honeypot}
        onChange={(e) => setHoneypot(e.target.value)}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={{ position: "absolute", left: "-9999px", opacity: 0, height: 0 }}
      />
      <Button type="submit" variant="magical" className="h-12" disabled={isLoading}>
        {isLoading ? <span className="animate-pulse">Sending…</span> : (
          <><Mail className="w-4 h-4" /> Stay in touch</>
        )}
      </Button>
      {error && (
        <div className="flex items-center gap-2 text-red-500 text-sm col-span-full">
          <AlertCircle className="w-4 h-4 flex-shrink-0" />
          <span>{error}</span>
        </div>
      )}
    </form>
  );
};

const TeacherPrintables = () => {
  return (
    <>
      <Helmet>
        <title>Free Tooth Fairy Printables for Grades 1–2 | Wiggly Tooth Workshop</title>
        <meta
          name="description"
          content="Free tooth fairy worksheets, a teacher guide, and a coloring page for grades 1–2. A 15-minute SEL activity that connects losing a tooth to kindness, bravery, and character growth. No sign-up required."
        />
        <link rel="canonical" href="https://wigglytoothworkshop.com/tooth-fairy-printables" />
        <meta property="og:title" content="Free Tooth Fairy Printables for Grades 1–2" />
        <meta property="og:description" content="Free tooth fairy worksheets, a teacher guide, and a coloring page for first and second grade. A simple SEL activity that turns a lost tooth into something meaningful." />
        <meta property="og:url" content="https://wigglytoothworkshop.com/tooth-fairy-printables" />
        <meta property="og:image" content="https://wigglytoothworkshop.com/og-image.jpg" />
        <meta name="twitter:title" content="Free Tooth Fairy Printables for Grades 1–2" />
        <meta name="twitter:description" content="Free tooth fairy worksheets, a teacher guide, and a coloring page for first and second grade. Print, use, and repeat every time a student loses a tooth." />
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
                    "name": "Free Tooth Fairy Printables",
                    "item": "https://wigglytoothworkshop.com/tooth-fairy-printables"
                  }
                ]
              },
              {
                "@type": "ItemList",
                "name": "Tooth Fairy Classroom Activity Bundle",
                "description": "A free SEL activity bundle for grades 1–2 built around the Tooth Fairy tradition. Includes a student worksheet, teacher guide, and coloring page.",
                "numberOfItems": 3,
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "item": {
                      "@type": "DigitalDocument",
                      "name": "The Good Things You Grow — Student Worksheet",
                      "description": "A reflection worksheet for grades 1–2 where students identify the good qualities they've been growing: kindness, bravery, creativity, patience.",
                      "encodingFormat": "application/pdf",
                      "url": "https://wigglytoothworkshop.com/downloads/tooth-fairy-worksheet.pdf",
                      "isAccessibleForFree": true
                    }
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "item": {
                      "@type": "DigitalDocument",
                      "name": "Tooth Fairy Teacher Guide",
                      "description": "A 15–20 minute lesson plan for grades 1–2 connecting the Tooth Fairy tradition to social-emotional learning. Includes a repeatable classroom routine.",
                      "encodingFormat": "application/pdf",
                      "url": "https://wigglytoothworkshop.com/downloads/tooth-fairy-teacher-guide.pdf",
                      "isAccessibleForFree": true
                    }
                  },
                  {
                    "@type": "ListItem",
                    "position": 3,
                    "item": {
                      "@type": "DigitalDocument",
                      "name": "Color the Tooth Fairy — Coloring Page",
                      "description": "A tooth fairy coloring page where students label a jar with a quality they are growing. Art by Peter H. Reynolds and FableVision Studios.",
                      "encodingFormat": "application/pdf",
                      "url": "https://wigglytoothworkshop.com/downloads/tooth-fairy-coloring-page.pdf",
                      "isAccessibleForFree": true
                    }
                  }
                ]
              },
              {
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "What grade is the tooth fairy classroom activity for?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "The activity is designed for grades 1 and 2, ages 5–8. That's typically when children are losing their first teeth and when SEL concepts like kindness and bravery are most appropriate to introduce."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Is the tooth fairy worksheet free?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. All three printables — the worksheet, teacher guide, and coloring page — are free to download and use. No sign-up required."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How long does the tooth fairy classroom activity take?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "The full activity, including the worksheet and coloring page, takes 15–20 minutes. The worksheet alone takes about 10–15 minutes."
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
            {stars.map((star) => (
              <div
                key={star.id}
                className="absolute w-1 h-1 bg-starlight rounded-full sparkle"
                style={{ left: star.left, top: star.top, animationDelay: star.delay }}
              />
            ))}
          </div>
          <div className="container px-6 relative z-10 text-center max-w-2xl mx-auto">
            <div className="flex flex-col items-center gap-4 mb-8">
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-starlight/60 hover:text-starlight transition-colors text-sm"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to the Workshop
              </Link>
              <span className="inline-block text-xs font-semibold uppercase tracking-wide text-primary bg-primary/10 px-3 py-1 rounded-full">
                Free for Teachers &amp; Parents
              </span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-starlight mb-5 leading-tight">
              Free Tooth Fairy Printables<br />
              <span className="text-primary">for Grades 1 and 2</span>
            </h1>
            <p className="text-lg text-starlight/80 mb-3 leading-relaxed">
              A free classroom activity bundle built around a simple idea: every lost tooth holds something the child has been growing.
            </p>
            <p className="text-starlight/60 mb-10 text-sm">
              Worksheet · Teacher guide · Coloring page · No sign-up required
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button variant="hero" size="xl" asChild>
                <a
                  href="/downloads/tooth-fairy-activity-bundle.zip"
                  download="tooth-fairy-activity-bundle.zip"
                  onClick={trackTeacherBundleDownload}
                >
                  <Download className="w-5 h-5" />
                  Download All 3 Free
                </a>
              </Button>
              <Button
                variant="outline"
                size="xl"
                className="border-starlight/60 text-starlight hover:bg-starlight/10"
                onClick={() => {
                  trackTeacherResourcesPageClick("hero_view_resources");
                  document.getElementById("resources")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                View individual resources
              </Button>
            </div>
            <p className="mt-4 text-xs text-starlight/40">
              ZIP file · Free for classroom and personal use · Print as many copies as you need
            </p>
          </div>
        </section>

        {/* What's Included */}
        <section id="resources" className="py-16 md:py-20 bg-background">
          <div className="container px-6">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
                What's included
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Three resources that work together as a lesson, or independently when you need them.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {resources.map((resource) => (
                <div key={resource.title} className="magical-card flex flex-col gap-4">
                  <div className="flex items-start gap-3">
                    <div className={`w-11 h-11 rounded-xl ${resource.color} flex items-center justify-center flex-shrink-0`}>
                      <resource.icon className={`w-5 h-5 ${resource.iconColor}`} />
                    </div>
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wide text-primary">
                        {resource.badge}
                      </span>
                      <h3 className="font-display text-lg font-semibold text-card-foreground leading-snug">
                        {resource.title}
                      </h3>
                      <p className="text-xs text-muted-foreground">{resource.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                    {resource.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {resource.details.map((d) => (
                      <span key={d} className="text-xs bg-secondary text-muted-foreground px-2.5 py-1 rounded-full">
                        {d}
                      </span>
                    ))}
                  </div>
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <a
                      href={`/downloads/${resource.fileName}`}
                      download={resource.downloadName}
                      onClick={resource.onDownload}
                    >
                      <Download className="w-3.5 h-3.5" />
                      Download PDF
                    </a>
                  </Button>
                </div>
              ))}
            </div>

            {/* Bundle download */}
            <div className="max-w-5xl mx-auto mt-8">
              <div className="magical-card flex flex-col sm:flex-row items-center justify-between gap-4 bg-secondary/50">
                <div>
                  <p className="font-display font-semibold text-foreground">Download the full bundle</p>
                  <p className="text-sm text-muted-foreground">All 3 files in one ZIP — worksheet, teacher guide, coloring page.</p>
                </div>
                <Button variant="magical" asChild className="flex-shrink-0">
                  <a
                    href="/downloads/tooth-fairy-activity-bundle.zip"
                    download="tooth-fairy-activity-bundle.zip"
                    onClick={trackTeacherBundleDownload}
                  >
                    <Download className="w-4 h-4" />
                    Download All 3
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Why teachers use this */}
        <section className="py-16 md:py-20 bg-secondary/20">
          <div className="container px-6">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
                Why teachers use this
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Losing a tooth is one of the few truly universal childhood experiences. This activity makes it count.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {whyReasons.map((reason) => (
                <div key={reason.title} className="magical-card flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <reason.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground mb-1">{reason.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{reason.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How to use it */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container px-6 max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
                How to use it
              </h2>
              <p className="text-muted-foreground">
                The full lesson takes 15–20 minutes. The routine version takes about five.
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  step: 1,
                  title: "Start with the teacher guide",
                  body: "Read through the two-page guide before class. It walks you through the lesson flow, the core question to ask, and how to introduce the idea that teeth hold the good things children grow.",
                },
                {
                  step: 2,
                  title: "Hand out the worksheet",
                  body: "Students complete the reflection prompt: what have you been growing lately? Give them space to think. Bravery, kindness, effort, creativity — any of these counts. The goal is recognition, not a right answer.",
                },
                {
                  step: 3,
                  title: "Extend with the coloring page",
                  body: "After the worksheet, students label a jar with their quality and color the Tooth Fairy in her workshop. This gives younger students time to process the idea while doing something calming and creative.",
                },
                {
                  step: 4,
                  title: "Repeat whenever someone loses a tooth",
                  body: "Keep worksheets printed and ready. When a student loses a tooth, give them one and ask: \"What do you think you've been growing lately?\" It becomes a quiet, personal moment that belongs to them.",
                },
              ].map((item) => (
                <div key={item.step} className="magical-card flex gap-5">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary text-sm font-bold flex items-center justify-center mt-0.5">
                    {item.step}
                  </span>
                  <div>
                    <h3 className="font-display font-semibold text-foreground mb-1.5">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Classroom tradition */}
        <section className="py-16 md:py-20 bg-secondary/30">
          <div className="container px-6 max-w-2xl mx-auto text-center">
            <span className="inline-block text-xs font-semibold uppercase tracking-wide text-primary bg-primary/10 px-3 py-1 rounded-full mb-5">
              A Repeatable Tradition
            </span>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
              Make it a classroom tradition
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-lg mx-auto">
              Once you've done the full lesson once, the routine version takes almost no time. A student loses a tooth, you hand them a worksheet, and they have a moment that's theirs. By the end of the year, every child in your class who loses a tooth has had that moment.
            </p>
            <div className="grid sm:grid-cols-4 gap-3 max-w-2xl mx-auto mb-8">
              {[
                "Student loses a tooth",
                "You ask: what have you been growing?",
                "They fill out the worksheet",
                "Optional: color a jar, share with the class",
              ].map((step, i) => (
                <div key={i} className="magical-card text-center py-4">
                  <span className="block w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center mx-auto mb-2">
                    {i + 1}
                  </span>
                  <p className="text-xs text-muted-foreground leading-relaxed">{step}</p>
                </div>
              ))}
            </div>
            <Button variant="magical" asChild>
              <a
                href="/downloads/tooth-fairy-activity-bundle.zip"
                download="tooth-fairy-activity-bundle.zip"
                onClick={trackTeacherBundleDownload}
              >
                <Download className="w-4 h-4" />
                Download the bundle
              </a>
            </Button>
          </div>
        </section>

        {/* Optional signup */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container px-6 max-w-xl mx-auto text-center">
            <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-5">
              <Mail className="w-6 h-6 text-primary" />
            </div>
            <h2 className="font-display text-2xl font-bold text-foreground mb-2">
              Stay in touch with the Workshop
            </h2>
            <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
              Get future printables, classroom activity ideas, and updates from Wiggly Tooth Workshop. Completely optional. No pressure. We'll only send something when there's a good reason to.
            </p>
            <TeacherSignup />
            <p className="mt-4 text-xs text-muted-foreground">
              We respect your inbox. Unsubscribe anytime.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 md:py-20 bg-secondary/20">
          <div className="container px-6 max-w-2xl mx-auto">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
              Common questions
            </h2>
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
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

        {/* Closing CTA */}
        <section className="py-16 md:py-20 night-sky-section relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            {stars.slice(0, 8).map((star) => (
              <div
                key={star.id}
                className="absolute w-1 h-1 bg-starlight rounded-full sparkle"
                style={{ left: star.left, top: star.top, animationDelay: star.delay }}
              />
            ))}
          </div>
          <div className="container px-6 max-w-xl mx-auto text-center relative z-10">
            <Sparkles className="w-8 h-8 text-primary mx-auto mb-4" />
            <h2 className="font-display text-2xl md:text-3xl font-bold text-starlight mb-3">
              Losing a tooth can mean something
            </h2>
            <p className="text-starlight/70 mb-8 leading-relaxed text-sm">
              These printables are one part of a larger world being built at the Wiggly Tooth Workshop. An animated short film, a children's book, and a keepsake box — all coming Summer 2026, all built around the same idea. Children are growing something real. It deserves to be noticed.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button variant="hero" size="lg" asChild>
                <a
                  href="/downloads/tooth-fairy-activity-bundle.zip"
                  download="tooth-fairy-activity-bundle.zip"
                  onClick={trackTeacherBundleDownload}
                >
                  <Download className="w-4 h-4" />
                  Download the free bundle
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-starlight/60 text-starlight hover:bg-starlight/10"
                asChild
              >
                <Link
                  to="/#signup"
                  onClick={() => trackTeacherResourcesPageClick("closing_cta_join_workshop")}
                >
                  <Sparkles className="w-4 h-4" />
                  Join the Workshop
                </Link>
              </Button>
            </div>
            <p className="mt-6 text-xs text-starlight/40">
              Animated short film in development in collaboration with Peter H. Reynolds and FableVision Studios.
            </p>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default TeacherPrintables;
