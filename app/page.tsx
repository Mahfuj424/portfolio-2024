import AboutSection from "@/components/about/About";
import BannerPage from "@/components/banner/banner";
import CareerSection from "@/components/carrer/Career";
import DaysCode from "@/components/days/DaysCode";
import Project from "@/components/project/Project";
import SkillsSection from "@/components/skills/Skills";

export default function Home() {
  return (
    <div>
      <BannerPage />
      <div className="space-y-24">
        <AboutSection />
        <CareerSection />
        <SkillsSection />
        <DaysCode />
        <Project />
      </div>
    </div>
  );
}
