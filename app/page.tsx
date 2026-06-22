import { AuthoritySection } from "@/components/sections/AuthoritySection";
import { ChallengesSection } from "@/components/sections/ChallengesSection";
import { DiagnosticSection } from "@/components/sections/DiagnosticSection";
import { ExperienceStripSection } from "@/components/sections/ExperienceStripSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { MethodologySection } from "@/components/sections/MethodologySection";
import { SolutionsSection } from "@/components/sections/SolutionsSection";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-[#111111] [&_h1]:font-extrabold [&_h1]:leading-[1.12] [&_h1]:tracking-normal [&_h2]:font-extrabold [&_h2]:leading-[1.12] [&_h2]:tracking-normal [&_h3]:font-extrabold [&_h3]:leading-[1.12] [&_h3]:tracking-normal">
      <Header />
      <HeroSection />
      <AuthoritySection />
      <ChallengesSection />
      <SolutionsSection />
      <MethodologySection />
      <ExperienceStripSection />
      <DiagnosticSection />
      <Footer />
    </main>
  );
}
