import { Helmet } from "react-helmet-async";
import HeroSection from "@/components/HeroSection";
import WhatsComingSection from "@/components/WhatsComingSection";
import CredibilitySection from "@/components/CredibilitySection";
import ToothSafeSection from "@/components/ToothSafeSection";
import VirtueQuizSection from "@/components/VirtueQuizSection";
import FAQSection from "@/components/FAQSection";
import DownloadSection from "@/components/DownloadSection";
import SignupSection from "@/components/SignupSection";
import Footer from "@/components/Footer";
import ToothFairyExplainerSection from "@/components/ToothFairyExplainerSection";
import TeacherResourcesCallout from "@/components/TeacherResourcesCallout";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>The Tooth Fairy's Magical Mission | Animated Film & Children's Book</title>
        <meta name="description" content="Discover the magic behind every tooth! Join the Workshop for updates on the animated short film (Summer 2026), children's book, and ToothSafe." />
        <link rel="canonical" href="https://wigglytoothworkshop.com/" />
        <meta property="og:url" content="https://wigglytoothworkshop.com/" />
        <meta property="og:title" content="The Tooth Fairy's Magical Mission" />
        <meta property="og:description" content="Every tooth holds a memory. Every tooth holds a good quality. And in the Tooth Fairy's hands, these tiny treasures help quietly fix the world." />
        <meta property="og:image" content="https://wigglytoothworkshop.com/og-image.jpg" />
        <meta name="twitter:title" content="The Tooth Fairy's Magical Mission" />
        <meta name="twitter:description" content="Every tooth holds a memory. Every tooth holds a good quality. And in the Tooth Fairy's hands, these tiny treasures help quietly fix the world." />
        <meta name="twitter:image" content="https://wigglytoothworkshop.com/og-image.jpg" />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Why does the Tooth Fairy take my teeth?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Every tooth you lose holds something special. A moment of bravery. A flash of kindness. A stretch of patience. The Tooth Fairy collects teeth because every tooth holds good qualities that grew during childhood. Bravery, kindness, creativity, patience. And those are exactly what the world needs."
                }
              },
              {
                "@type": "Question",
                "name": "What does the Tooth Fairy do with my teeth?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "She takes them to her workshop, a large, careful place full of small tools and warm lamplight. There she draws the good quality out of each tooth and uses it to help fix small problems in the world. Your bravery might help a firefighter stay calm. Your kindness might reach a shy kid trying to make a new friend."
                }
              },
              {
                "@type": "Question",
                "name": "Why does the Tooth Fairy leave money?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "It's her thank-you. You grew something real, a good quality that took years. The money she leaves is how she says: I see what you grew. The world needed it. It isn't a payment. It's a thank-you."
                }
              },
              {
                "@type": "Question",
                "name": "Why does the Tooth Fairy come at night?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Fairies work best in the quiet hours, when dreams are deep and imaginations are wide open. Plus, there's something about starlight that helps the Tooth Fairy fly faster. She visits thousands of children each night — timing is everything!"
                }
              },
              {
                "@type": "Question",
                "name": "How does the Tooth Fairy get in my house?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Fairies are very small — about the size of your hand — and they can slip through the tiniest spaces: a crack in a window, a gap under a door, even the space between moonbeams. Your house is never as sealed as you think."
                }
              },
              {
                "@type": "Question",
                "name": "Is the Tooth Fairy real?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. She just does her work in ways most people don't see. She works quietly, at night, drawing good qualities out of children's teeth and using them to help fix small problems in the world. When you lose a tooth, it doesn't disappear by accident. The Tooth Fairy takes it. She leaves a thank-you behind."
                }
              },
              {
                "@type": "Question",
                "name": "How many teeth does the Tooth Fairy have?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Millions. The Tooth Fairy's workshop is full of them, sorted by quality, organized by year, grouped by where they came from. It looks a bit like a library, if libraries sparkled."
                }
              },
              {
                "@type": "Question",
                "name": "What if I swallow my tooth?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Don't worry. The Tooth Fairy has been doing this for a very long time. She always finds a way. Just leave a note under your pillow explaining what happened — the Tooth Fairy appreciates the honesty."
                }
              },
              {
                "@type": "Question",
                "name": "Who are Arlo and CeCe?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Arlo and CeCe are the two young characters at the heart of The Tooth Fairy's Magical Mission. They're curious, imaginative kids who find themselves caught up in the Tooth Fairy's world, discovering what really happens to lost teeth, why good qualities matter, and what goes on inside the workshop when nobody is watching."
                }
              },
              {
                "@type": "Question",
                "name": "What is ToothSafe?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "ToothSafe is a beautifully designed keepsake box for lost teeth, created by the Wiggly Tooth Workshop so kids have a special, safe place to leave their tooth for the Tooth Fairy. It's designed to make the whole tooth fairy experience feel more magical and intentional. ToothSafe is currently in development and will be available for early access to Workshop members first."
                }
              },
              {
                "@type": "Question",
                "name": "What is the Wiggly Tooth Workshop?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The Wiggly Tooth Workshop is the creative studio behind The Tooth Fairy's Magical Mission: an animated short film, children's book, and ToothSafe product all built around the same magical story world. It's being developed in collaboration with Peter H. Reynolds and FableVision Studios."
                }
              },
              {
                "@type": "Question",
                "name": "When does The Tooth Fairy's Magical Mission come out?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The animated short film is in production and scheduled for Summer 2026. The children's book and ToothSafe product will follow. The best way to stay up to date and get early access is to join the Workshop mailing list at wigglytoothworkshop.com."
                }
              },
              {
                "@type": "Question",
                "name": "Is there a free tooth fairy coloring page I can print?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes! The Wiggly Tooth Workshop has a free printable tooth fairy coloring page available as a PDF download. No sign-up required. It's designed for kids ages 3–10 and features original artwork from the world of The Tooth Fairy's Magical Mission. You can download it at wigglytoothworkshop.com/coloring-page."
                }
              }
            ]
          }
        `}</script>
      </Helmet>
      <main className="min-h-screen">
        <HeroSection />
        <WhatsComingSection />
        <CredibilitySection />
        <ToothSafeSection />
        <VirtueQuizSection />
        <DownloadSection />
        <TeacherResourcesCallout />
        <ToothFairyExplainerSection />
        <FAQSection />
        <SignupSection />
        <Footer />
      </main>
    </>
  );
};

export default Index;
