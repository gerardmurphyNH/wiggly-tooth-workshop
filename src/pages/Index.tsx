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

const Index = () => {
  return (
    <main className="min-h-screen">
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
