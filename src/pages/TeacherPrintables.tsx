import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import type { LucideIcon } from "lucide-react";
import {
  ArrowLeft,
  ArrowRight,
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

// Pre-computed star positions — avoids Math.random in render
const stars = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  left: `${(i * 19 + 5) % 100}%`,
  top: `${(i * 31 + 9) % 100}%`,
  delay: `${(i * 0.17) % 2}s`,
}));

// Internal links — strengthen topical authority
const relatedLinks = [
  {
    question: "What does the Tooth Fairy do with teeth?",
    teaser:
      "She draws out the good qualities inside (bravery, kindness, creativity, patience) and uses them to fix small problems in the world.",
    to: "/what-does-the-tooth-fairy-do-with-teeth",
  },
  {
    question: "Why does the Tooth Fairy take teeth?",
    teaser:
      "Because every tooth holds something the child grew while it was there. Those qualities don't disappear when the tooth falls out.",
    to: "/why-does-the-tooth-fairy-take-teeth",
  },
  {
    question: "Your child's first lost tooth",
    teaser:
      "What to do, what to say, and how to make the moment feel meaningful rather than just routine.",
    to: "/first-tooth-what-to-do",
  },
  {
    question: "The Tooth Fairy story, explained",
    teaser:
      "Where the tradition comes from, why it exists in almost every culture, and what it's really about.",
    to: "/tooth-fairy-story-explained",
  },
];

const faqs = [
  {
    question: "What age are these Tooth Fairy worksheets for?",
    answer:
      "The activities are designed for children ages 5–8, typically in grades 1 and 2. That's when most children are losing their first teeth and when SEL concepts like kindness, bravery, and self-reflection are developmentally appropriate to introduce. The coloring page works well for younger children too.",
  },
  {
    question: "Are these Tooth Fairy printables free?",
    answer:
      "Yes. All three resources (the worksheet, the coloring page, and the teacher guide) are free to download and use. No account or sign-up required. Print as many copies as you need.",
  },
  {
    question: "Can teachers use these in the classroom?",
    answer:
      "Absolutely. These were designed with classroom use in mind. The teacher guide includes a full lesson plan, discussion prompts, and instructions for turning the activity into a repeatable tradition. Every time a student loses a tooth, the worksheet is ready for them.",
  },
  {
    question: "Can parents use this at home?",
    answer:
      "Yes. The worksheet and coloring page both work well at home when a child loses a tooth. The teacher guide includes notes on involving families, and the worksheet is designed to be kept.",
  },
  {
    question: "What makes these Tooth Fairy activities different?",
    answer:
      "Most Tooth Fairy content focuses on the tooth, the money, or the magic. These activities focus on the child: on noticing what they've been growing and giving that a name. The goal is reflection and curiosity, not just reward.",
  },
  {
    question: "How long does the activity take?",
    answer:
      "The full lesson, including the worksheet and coloring page, takes about 15–20 minutes. The worksheet alone takes about 10–15 minutes. Once you've done the lesson once, the routine version takes about five minutes.",
  },
  {
    question: "Can I download just one resource?",
    answer:
      "Yes. Each file is a separate PDF. Download whichever one you need. The worksheet, coloring page, and teacher guide are all available individually on this page.",
  },
  {
    question: "What curriculum standards does this support?",
    answer:
      "The activity supports CASEL competencies around self-awareness and self-management, and connects to personal narrative writing for grades 1–2. It's not tied to a specific curriculum and is designed to be flexible.",
  },
];

// Preview image with graceful fallback when image file doesn't exist yet
// Add preview images to public/images/:
//   tooth-fairy-worksheet-preview.jpg
//   printable-tooth-fairy-coloring-page.jpg
//   tooth-fairy-teacher-guide-preview.jpg
const PreviewImage = ({
  src,
  alt,
  icon: Icon,
  bg,
}: {
  src: string;
  alt: string;
  icon: LucideIcon;
  bg: string;
}) => {
  const [hasError, setHasError] = useState(false);

  return (
    <div
      className={`relative rounded-2xl overflow-hidden ${bg} aspect-[3/4] flex items-center justify-center shadow-sm`}
    >
      {!hasError ? (
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
          onError={() => setHasError(true)}
          loading="lazy"
        />
      ) : (
        <div className="flex flex-col items-center justify-center gap-4 p-8 text-center">
          <Icon className="w-16 h-16 text-muted-foreground/20" />
          <span className="text-xs text-muted-foreground/40 uppercase tracking-widest font-medium">
            Preview
          </span>
        </div>
      )}
    </div>
  );
};

// Inline signup component
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
        <p className="text-sm text-muted-foreground mt-1">
          We'll send future teaching resources when they're ready.
        </p>
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
        {isLoading ? (
          <span className="animate-pulse">Sending…</span>
        ) : (
          <>
            <Mail className="w-4 h-4" /> Stay in touch
          </>
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
        <title>
          Free Tooth Fairy Worksheets, Printables &amp; Classroom Activities | Wiggly Tooth Workshop
        </title>
        <meta
          name="description"
          content="Free tooth fairy worksheets, coloring pages, and a teacher guide for grades 1–2. Help children reflect on the qualities they've been growing. No sign-up required."
        />
        <link
          rel="canonical"
          href="https://wigglytoothworkshop.com/tooth-fairy-printables"
        />
        <meta
          property="og:title"
          content="Free Tooth Fairy Worksheets, Printables &amp; Classroom Activities"
        />
        <meta
          property="og:description"
          content="Free tooth fairy worksheets, a coloring page, and a teacher guide for grades 1–2. A simple SEL activity built around a meaningful question: what have you been growing lately?"
        />
        <meta
          property="og:url"
          content="https://wigglytoothworkshop.com/tooth-fairy-printables"
        />
        <meta property="og:image" content="https://wigglytoothworkshop.com/og-image.jpg" />
        <meta
          name="twitter:title"
          content="Free Tooth Fairy Worksheets, Printables &amp; Classroom Activities"
        />
        <meta
          name="twitter:description"
          content="Free tooth fairy worksheets, a coloring page, and a teacher guide for grades 1–2. Print, use, and repeat every time a student loses a tooth."
        />
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
                    "name": "Free Tooth Fairy Worksheets and Printables",
                    "item": "https://wigglytoothworkshop.com/tooth-fairy-printables"
                  }
                ]
              },
              {
                "@type": "ItemList",
                "name": "Free Tooth Fairy Worksheets, Printables and Classroom Activities",
                "description": "A free SEL activity bundle for grades 1–2 built around the Tooth Fairy tradition. Includes a student worksheet, teacher guide, and coloring page.",
                "numberOfItems": 3,
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "item": {
                      "@type": "DigitalDocument",
                      "name": "Tooth Fairy Worksheet for Kids — The Good Things You Grow",
                      "description": "A free printable tooth fairy worksheet for grades 1–2 where children reflect on the qualities they have been growing: kindness, bravery, creativity, patience.",
                      "encodingFormat": "application/pdf",
                      "url": "https://wigglytoothworkshop.com/downloads/tooth-fairy-worksheet.pdf",
                      "isAccessibleForFree": true,
                      "educationalLevel": "Grades 1-2",
                      "learningResourceType": "Worksheet"
                    }
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "item": {
                      "@type": "DigitalDocument",
                      "name": "Printable Tooth Fairy Coloring Page",
                      "description": "A free printable tooth fairy coloring page for kids. Children color the Tooth Fairy in her workshop and label a jar with a quality they are growing.",
                      "encodingFormat": "application/pdf",
                      "url": "https://wigglytoothworkshop.com/downloads/tooth-fairy-coloring-page.pdf",
                      "isAccessibleForFree": true,
                      "learningResourceType": "Activity"
                    }
                  },
                  {
                    "@type": "ListItem",
                    "position": 3,
                    "item": {
                      "@type": "DigitalDocument",
                      "name": "Tooth Fairy Teacher Guide — Classroom Lesson Plan",
                      "description": "A free tooth fairy teacher guide with a 15–20 minute lesson plan for grades 1–2. Includes discussion prompts, SEL learning goals, and a repeatable classroom tradition.",
                      "encodingFormat": "application/pdf",
                      "url": "https://wigglytoothworkshop.com/downloads/tooth-fairy-teacher-guide.pdf",
                      "isAccessibleForFree": true,
                      "educationalLevel": "Grades 1-2",
                      "learningResourceType": "Lesson Plan"
                    }
                  }
                ]
              },
              {
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "What age are these Tooth Fairy worksheets for?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "The activities are designed for children ages 5–8, typically in grades 1 and 2. That's when most children are losing their first teeth and when SEL concepts like kindness, bravery, and self-reflection are developmentally appropriate. The coloring page works for younger children too."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Are these Tooth Fairy printables free?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. All three resources — the worksheet, the coloring page, and the teacher guide — are free to download and use. No account or sign-up required. Print as many copies as you need."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can teachers use these Tooth Fairy worksheets in the classroom?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Absolutely. These were designed with classroom use in mind. The teacher guide includes a full lesson plan, discussion prompts, and instructions for turning the activity into a repeatable tradition every time a student loses a tooth."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What makes these Tooth Fairy activities different?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Most Tooth Fairy content focuses on the tooth, the money, or the magic. These activities focus on the child: on noticing what they've been growing and giving that a name. The goal is reflection and curiosity, not just reward."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How long does the Tooth Fairy classroom activity take?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "The full lesson takes about 15–20 minutes. The worksheet alone takes about 10–15 minutes. Once you've done the lesson once, the routine version takes about five minutes."
                    }
                  }
                ]
              }
            ]
          }
        `}</script>
      </Helmet>

      <main className="min-h-screen bg-background">

        {/* ── Hero ──────────────────────────────────────────────── */}
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
              Free Tooth Fairy Worksheets,<br />
              <span className="text-primary">Printables &amp; Classroom Activities</span>
            </h1>
            <p className="text-lg text-starlight/80 mb-3 leading-relaxed">
              Three free resources for grades 1 and 2. Built around one simple idea: every tooth holds something the child has been growing.
            </p>
            <p className="text-starlight/60 mb-10 text-sm">
              Worksheet · Coloring page · Teacher guide · No sign-up required
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button variant="hero" size="xl" asChild>
                <a
                  href="/downloads/tooth-fairy-worksheet.pdf"
                  download="tooth-fairy-worksheet-for-kids.pdf"
                  onClick={trackTeacherWorksheetDownload}
                >
                  <Download className="w-5 h-5" />
                  Download Worksheet (PDF)
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
                View all resources
              </Button>
            </div>
            <p className="mt-4 text-xs text-starlight/40">
              Free for classroom and personal use · Print as many copies as you need
            </p>
          </div>
        </section>

        {/* ── Intro copy — crawlable SEO content ───────────────── */}
        <section className="py-14 md:py-16 bg-background">
          <div className="container px-6 max-w-2xl mx-auto space-y-4 text-muted-foreground leading-relaxed">
            <p className="text-lg text-foreground font-medium leading-relaxed">
              Looking for Tooth Fairy worksheets and printables for your classroom or home?
            </p>
            <p>
              These free activities give children a way to mark a milestone most of them will remember. Designed for early elementary students in grades 1 and 2, they work equally well for teachers, parents, school counselors, and homeschool families.
            </p>
            <p>
              The goal is not just to celebrate losing a tooth. It's to help children notice what they've been growing while they had it. Bravery when something was hard. Kindness when someone needed it. Creativity when there was no obvious answer. Patience when waiting was difficult. In this version of the story, the Tooth Fairy collects those qualities and uses them to quietly help fix small problems in the world.
            </p>
            <p>
              All three resources are free to download and print. No sign-up required.
            </p>
          </div>
        </section>

        {/* ── Individual Resources ──────────────────────────────── */}
        <div id="resources">

          {/* Worksheet */}
          <section id="worksheet" className="py-14 md:py-20 border-t border-border bg-background">
            <div className="container px-6">
              <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-center">
                {/* Add tooth-fairy-worksheet-preview.jpg to public/images/ */}
                <PreviewImage
                  src="/images/tooth-fairy-worksheet-preview.jpg"
                  alt="Tooth fairy worksheet for grades 1 and 2, a printable reflection activity where children identify qualities they have been growing like bravery and kindness"
                  icon={FileText}
                  bg="bg-primary/5"
                />
                <div>
                  <span className="inline-block text-xs font-semibold uppercase tracking-wide text-primary bg-primary/10 px-3 py-1 rounded-full mb-4">
                    Reflection Activity
                  </span>
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                    Tooth Fairy Worksheet
                  </h2>
                  <div className="space-y-3 text-muted-foreground leading-relaxed mb-6">
                    <p>
                      The worksheet gives children a simple prompt: what have you been growing lately?
                    </p>
                    <p>
                      Not in a physical sense. It asks about qualities — the ones that grow slowly, that you only notice when something tests them. Bravery when something was hard. Kindness when someone needed it. Creativity when there was no obvious answer. Patience when waiting was difficult.
                    </p>
                    <p>
                      Children ages 5–8 can complete it independently or with a little guidance. It works as a standalone activity or as the reflective piece of a larger lesson. The teacher guide walks through how to introduce it and build a repeatable classroom routine around it.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {["Grades 1–2", "Ages 5–8", "10–15 min", "PDF · Print and use"].map((d) => (
                      <span
                        key={d}
                        className="text-xs bg-secondary text-muted-foreground px-2.5 py-1 rounded-full"
                      >
                        {d}
                      </span>
                    ))}
                  </div>
                  <Button variant="magical" asChild>
                    <a
                      href="/downloads/tooth-fairy-worksheet.pdf"
                      download="tooth-fairy-worksheet-for-kids.pdf"
                      onClick={trackTeacherWorksheetDownload}
                    >
                      <Download className="w-4 h-4" />
                      Download Worksheet (PDF)
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Coloring Page */}
          <section
            id="coloring-page"
            className="py-14 md:py-20 border-t border-border bg-secondary/10"
          >
            <div className="container px-6">
              <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-center">
                <div className="md:order-1">
                  <span className="inline-block text-xs font-semibold uppercase tracking-wide text-primary bg-primary/10 px-3 py-1 rounded-full mb-4">
                    Creative Activity
                  </span>
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                    Tooth Fairy Coloring Page
                  </h2>
                  <div className="space-y-3 text-muted-foreground leading-relaxed mb-6">
                    <p>
                      After completing the worksheet, children color the Tooth Fairy in her workshop and label a jar with the quality they've been growing.
                    </p>
                    <p>
                      It's a small extension, but it gives the reflection something physical to hold onto: a picture to take home, a jar to label, a moment to sit with quietly. Works well as a classroom extension activity, a take-home project, or a gentle entry point for younger children who aren't quite ready for the full worksheet.
                    </p>
                    <p className="text-sm italic">
                      Artwork created in collaboration with Peter H. Reynolds and FableVision Studios.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {["All ages", "10–15 min", "PDF · Single page"].map((d) => (
                      <span
                        key={d}
                        className="text-xs bg-secondary text-muted-foreground px-2.5 py-1 rounded-full"
                      >
                        {d}
                      </span>
                    ))}
                  </div>
                  <Button variant="magical" asChild>
                    <a
                      href="/downloads/tooth-fairy-coloring-page.pdf"
                      download="printable-tooth-fairy-coloring-page.pdf"
                      onClick={trackTeacherColoringDownload}
                    >
                      <Download className="w-4 h-4" />
                      Download Coloring Page (PDF)
                    </a>
                  </Button>
                </div>
                {/* Add printable-tooth-fairy-coloring-page.jpg to public/images/ */}
                <div className="md:order-2">
                  <PreviewImage
                    src="/images/printable-tooth-fairy-coloring-page.jpg"
                    alt="Printable tooth fairy coloring page showing the Tooth Fairy in her workshop, with a jar for children to label with a quality they are growing"
                    icon={Palette}
                    bg="bg-secondary"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Teacher Guide */}
          <section
            id="teacher-guide"
            className="py-14 md:py-20 border-t border-border bg-background"
          >
            <div className="container px-6">
              <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-center">
                {/* Add tooth-fairy-teacher-guide-preview.jpg to public/images/ */}
                <PreviewImage
                  src="/images/tooth-fairy-teacher-guide-preview.jpg"
                  alt="Tooth fairy teacher guide, a two-page classroom lesson plan for grades 1 and 2 with discussion prompts and social-emotional learning goals"
                  icon={BookOpen}
                  bg="bg-accent/10"
                />
                <div>
                  <span className="inline-block text-xs font-semibold uppercase tracking-wide text-primary bg-primary/10 px-3 py-1 rounded-full mb-4">
                    Lesson Plan
                  </span>
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                    Teacher Guide
                  </h2>
                  <div className="space-y-3 text-muted-foreground leading-relaxed mb-6">
                    <p>
                      The two-page teacher guide is the connective tissue. It explains the idea behind the activity, walks through a structured 15–20 minute lesson, and includes discussion prompts to use before and after the worksheet.
                    </p>
                    <p>
                      The core question it helps teachers ask: why does the Tooth Fairy care about what you've been growing?
                    </p>
                    <p>
                      The guide also explains how to turn this into a repeatable classroom tradition. Something that happens every time a student loses a tooth, not just once. By the end of the year, every child who lost a tooth has had that quiet moment to notice what they've been growing.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {["Grades 1–2", "15–20 min", "PDF · 2 pages"].map((d) => (
                      <span
                        key={d}
                        className="text-xs bg-secondary text-muted-foreground px-2.5 py-1 rounded-full"
                      >
                        {d}
                      </span>
                    ))}
                  </div>
                  <Button variant="magical" asChild>
                    <a
                      href="/downloads/tooth-fairy-teacher-guide.pdf"
                      download="tooth-fairy-teacher-guide.pdf"
                      onClick={trackTeacherGuideDownload}
                    >
                      <Download className="w-4 h-4" />
                      Download Teacher Guide (PDF)
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </section>

        </div>

        {/* ── Bundle — secondary option ─────────────────────────── */}
        <section className="py-10 bg-secondary/20 border-y border-border">
          <div className="container px-6 max-w-5xl mx-auto">
            <div className="magical-card flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p className="font-display font-semibold text-foreground">
                  Prefer to download everything at once?
                </p>
                <p className="text-sm text-muted-foreground">
                  All three files in one ZIP: worksheet, teacher guide, and coloring page.
                </p>
              </div>
              <Button variant="outline" asChild className="flex-shrink-0">
                <a
                  href="/downloads/tooth-fairy-activity-bundle.zip"
                  download="tooth-fairy-activity-bundle.zip"
                  onClick={trackTeacherBundleDownload}
                >
                  <Download className="w-4 h-4" />
                  Download all (.zip)
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* ── Why teachers use this ─────────────────────────────── */}
        <section className="py-16 md:py-20 bg-background">
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
              {[
                {
                  icon: GraduationCap,
                  title: "Built for grades 1–2",
                  body: "Designed for the age when children are actively losing teeth. Simple enough for first graders, meaningful enough for second graders.",
                },
                {
                  icon: Users,
                  title: "Social-emotional learning",
                  body: "Connects a familiar childhood milestone to character reflection. Bravery, kindness, creativity, patience — qualities children can name and recognize in themselves.",
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
              ].map((reason) => (
                <div key={reason.title} className="magical-card flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <reason.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground mb-1">
                      {reason.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{reason.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── How to use it ─────────────────────────────────────── */}
        <section className="py-16 md:py-20 bg-secondary/20">
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
                  body: "Keep worksheets printed and ready. When a student loses a tooth, give them one and ask: what do you think you've been growing lately? It becomes a quiet, personal moment that belongs to them.",
                },
              ].map((item) => (
                <div key={item.step} className="magical-card flex gap-5">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary text-sm font-bold flex items-center justify-center mt-0.5">
                    {item.step}
                  </span>
                  <div>
                    <h3 className="font-display font-semibold text-foreground mb-1.5">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Internal links — topical authority ───────────────── */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container px-6">
            <div className="text-center mb-10">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
                Learn more about the Tooth Fairy
              </h2>
              <p className="text-muted-foreground max-w-lg mx-auto">
                These printables are one part of a larger story. Here's where to find the rest of it.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {relatedLinks.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="magical-card group hover:shadow-magical transition-all duration-300 hover:-translate-y-0.5 flex flex-col gap-2"
                >
                  <h3 className="font-display font-semibold text-foreground group-hover:text-primary transition-colors">
                    {item.question}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                    {item.teaser}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary mt-1">
                    Read more
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </Link>
              ))}
            </div>
            <p className="text-center mt-8">
              <Link
                to="/tooth-fairy-faq"
                className="text-sm text-muted-foreground hover:text-primary transition-colors underline underline-offset-4"
              >
                See all Tooth Fairy questions →
              </Link>
            </p>
          </div>
        </section>

        {/* ── FAQ ───────────────────────────────────────────────── */}
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

        {/* ── Optional signup ───────────────────────────────────── */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container px-6 max-w-xl mx-auto text-center">
            <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-5">
              <Mail className="w-6 h-6 text-primary" />
            </div>
            <h2 className="font-display text-2xl font-bold text-foreground mb-2">
              Stay in touch with the Workshop
            </h2>
            <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
              Get future printables, classroom activity ideas, and updates from Wiggly Tooth Workshop.
              Completely optional. We'll only send something when there's a good reason to.
            </p>
            <TeacherSignup />
            <p className="mt-4 text-xs text-muted-foreground">
              We respect your inbox. Unsubscribe anytime.
            </p>
          </div>
        </section>

        {/* ── Closing CTA ───────────────────────────────────────── */}
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
              These printables are one part of a larger world being built at the Wiggly Tooth Workshop.
              An animated short film, a children's book, and a keepsake box. All coming Summer 2026,
              all built around the same idea. Children are growing something real. It deserves to be noticed.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button variant="hero" size="lg" asChild>
                <a
                  href="/downloads/tooth-fairy-worksheet.pdf"
                  download="tooth-fairy-worksheet-for-kids.pdf"
                  onClick={trackTeacherWorksheetDownload}
                >
                  <Download className="w-4 h-4" />
                  Download the worksheet
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
              Animated short film in development in collaboration with Peter H. Reynolds and FableVision
              Studios.
            </p>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default TeacherPrintables;
