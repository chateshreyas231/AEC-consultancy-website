import Hero from "./components/Hero";
import ClientCarousel from "./components/ClientCarousel";
import Services from "./components/Services";
import SolutionsSection from "./components/SolutionsSection";
import IndustriesSection from "./components/IndustriesSection";
import TechStackSection from "./components/TechStackSection";
import AboutSection from "./components/AboutSection";
import TeamSection from "./components/TeamSection";
import TestimonialsSection from "./components/TestimonialsSection";
import CaseStudiesSection from "./components/CaseStudiesSection";
import ResourcesSection from "./components/ResourcesSection";
import ContactSection from "./components/ContactSection";
import ChatbotSection from "./components/ChatbotSection";
import Nav from "./components/Nav";
import { Footer } from "./components/Footer";

export default function Home() {
	return (
		<div className="relative min-h-screen overflow-hidden text-slate-100">
      <Nav />
      <main className="relative">
				<div className="pt-16">
					<Hero />
				</div>
				<ClientCarousel />
				<Services />
				<SolutionsSection />
				<IndustriesSection />
				<TechStackSection />
				<AboutSection />
				<TeamSection />
				<TestimonialsSection />
				<CaseStudiesSection />
				<ResourcesSection />
				<ContactSection />
				<ChatbotSection />
			</main>
      <Footer />
			<div className="pointer-events-none fixed inset-0 -z-20 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.25),transparent_55%),radial-gradient(circle_at_80%_20%,rgba(56,189,248,0.18),transparent_55%),radial-gradient(circle_at_50%_80%,rgba(236,72,153,0.16),transparent_55%)] opacity-70" />
			<div className="pointer-events-none fixed inset-0 -z-30 bg-slate-950" />
			</div>
		);
		}

