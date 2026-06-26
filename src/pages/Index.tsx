import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import WorldIntroSection from "@/components/WorldIntroSection";
import MeetCharactersSection from "@/components/MeetCharactersSection";
import VirtueQuizSection from "@/components/VirtueQuizSection";
import KidsColoringSection from "@/components/KidsColoringSection";
import ToothSafeSection from "@/components/ToothSafeSection";
import FAQSection from "@/components/FAQSection";
import ParentTeacherSection from "@/components/ParentTeacherSection";
import SignupSection from "@/components/SignupSection";
import Footer from "@/components/Footer";
import PageSeo from "@/components/PageSeo";
import { YOUTUBE_VIDEO_ID, YOUTUBE_VIDEO_URL } from "@/lib/config";

const videoJsonLd = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  name: "The Tooth Fairy's Magical Mission",
  description:
    "An animated short film about a curious boy named Arlo who sets out to discover what the Tooth Fairy really does with the teeth she collects - and learns that every lost tooth carries something worth keeping. Created in collaboration with Peter H. Reynolds and FableVision Studios.",
  thumbnailUrl: [`https://i.ytimg.com/vi/${YOUTUBE_VIDEO_ID}/maxresdefault.jpg`],
  uploadDate: "2026-06-07",
  contentUrl: YOUTUBE_VIDEO_URL,
  embedUrl: `https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}`,
  publisher: {
    "@type": "Organization",
    name: "Wiggly Tooth Workshop",
    url: "https://wigglytoothworkshop.com/",
  },
};

const Index = () => {
  return (
    <main className="min-h-screen">
      <PageSeo canonical="https://wigglytoothworkshop.com/" jsonLd={videoJsonLd} />
      <NavBar />
      <HeroSection />
      <WorldIntroSection />
      <VirtueQuizSection />
      <MeetCharactersSection />
      <KidsColoringSection />
      <ToothSafeSection />
      <FAQSection />
      <ParentTeacherSection />
      <SignupSection />
      <Footer />
    </main>
  );
};

export default Index;
