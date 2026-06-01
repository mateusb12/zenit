import { AuthoritySection } from "@/components/sections/AuthoritySection";
import { ChallengesSection } from "@/components/sections/ChallengesSection";
import { DiagnosticSection } from "@/components/sections/DiagnosticSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { MethodologySection } from "@/components/sections/MethodologySection";
import { SegmentsSection } from "@/components/sections/SegmentsSection";
import { SolutionsSection } from "@/components/sections/SolutionsSection";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";

export default function Home() {
  return (
    <main className="zenit-page">
      <Header />
      <HeroSection />
      <AuthoritySection />
      <ChallengesSection />
      <SolutionsSection />
      <SegmentsSection />
      <MethodologySection />
      <DiagnosticSection />
      <Footer />
    </main>
  );
}
