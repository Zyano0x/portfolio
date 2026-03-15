import Reveal from "@/components/reveal";
import AboutSection from "@/components/sections/about-section";
import ContactSection from "@/components/sections/contact-section";
import EducationSection from "@/components/sections/education-section";
import ExperienceSection from "@/components/sections/experience-section";
import HeroSection from "@/components/sections/hero-section";
import ProjectsSection from "@/components/sections/projects-section";
import SkillsSection from "@/components/sections/skills-section";

export default function Home() {
	return (
		<>
			<HeroSection />
			<div className="mx-auto max-w-7xl px-6 lg:px-12">
				<div className="h-px w-full bg-border" />
			</div>
			<Reveal>
				<AboutSection />
			</Reveal>
			<div className="mx-auto max-w-7xl px-6 lg:px-12">
				<div className="h-px w-full bg-border" />
			</div>
			<Reveal>
				<ExperienceSection />
			</Reveal>
			<div className="mx-auto max-w-7xl px-6 lg:px-12">
				<div className="h-px w-full bg-border" />
			</div>
			<Reveal>
				<ProjectsSection />
			</Reveal>
			<div className="mx-auto max-w-7xl px-6 lg:px-12">
				<div className="h-px w-full bg-border" />
			</div>
			<Reveal>
				<SkillsSection />
			</Reveal>
			<div className="mx-auto max-w-7xl px-6 lg:px-12">
				<div className="h-px w-full bg-border" />
			</div>
			<Reveal>
				<EducationSection />
			</Reveal>
			<div className="mx-auto max-w-7xl px-6 lg:px-12">
				<div className="h-px w-full bg-border" />
			</div>
			<Reveal>
				<ContactSection />
			</Reveal>
		</>
	);
}
