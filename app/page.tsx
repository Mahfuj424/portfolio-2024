import AboutSection from "@/components/about/About";
import BannerPage from "@/components/banner/banner";
import BlogsSection from "@/components/blogs/Blogs";
import CareerSection from "@/components/carrer/Career";
import ContactUsSection from "@/components/contact-us/ContactUs";
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
        <ContactUsSection />
        <BlogsSection />
      </div>
    </div>
  );
}
