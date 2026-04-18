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
      </Helmet>
      <main className="min-h-screen">
        <HeroSection />
        <WhatsComingSection />
        <CredibilitySection />
        <ToothSafeSection />
        <VirtueQuizSection />
        <ToothFairyExplainerSection />
        <FAQSection />
        <DownloadSection />
        <SignupSection />
        <Footer />
      </main>
    </>
  );
};

export default Index;
