import "./index.css";

import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import OtherProjects from "./components/projects/otherProjects/OtherProjects";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

function App() {
	return (
		<div>
			<section className="hero__background">
				<Header />
				<Hero />
				<About />
				<Skills />
				<Projects />
				<OtherProjects />
				<Contact />
				<Footer />
			</section>
		</div>
	);
}
export default App;
