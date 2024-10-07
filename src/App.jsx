import { ContactSection } from "./components/ContactSection";
import { FeaturesSection } from "./components/FeaturesSection";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { LogoSection } from "./components/LogoSection";
import Navbar from "./components/Navbar";
import { ProductImageSection } from "./components/ProductImageSection";
import { TestimonialSection } from "./components/TestimonialSection";

export default function App() {
	return (
		<>
			<header className=" h-screen flex flex-col">
				<Navbar />
				<Hero />
			</header>

			<main>
				<LogoSection />
				<ProductImageSection />
				<FeaturesSection />
				<TestimonialSection />
				<ContactSection />
			</main>
			<Footer />
		</>
	);
}
