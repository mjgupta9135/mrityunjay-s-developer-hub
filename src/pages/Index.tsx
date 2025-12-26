import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import AchievementsSection from "@/components/AchievementsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Mrityunjay Kumar Gupta | Frontend Developer</title>
        <meta
          name="description"
          content="Frontend developer with hands-on experience in building responsive web applications using React.js, JavaScript, and Tailwind CSS. View my projects and get in touch."
        />
        <meta
          name="keywords"
          content="Frontend Developer, React.js, JavaScript, Tailwind CSS, Web Developer, Bengaluru"
        />
        <meta name="author" content="Mrityunjay Kumar Gupta" />
        <meta property="og:title" content="Mrityunjay Kumar Gupta | Frontend Developer" />
        <meta
          property="og:description"
          content="Frontend developer specializing in React.js and modern web technologies."
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <main className="bg-background min-h-screen">
        <Navbar />
        <HeroSection />
        <ProjectsSection />
        <SkillsSection />
        <AchievementsSection />
        <ContactSection />
      </main>
    </>
  );
};

export default Index;
