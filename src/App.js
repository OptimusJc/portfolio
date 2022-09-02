import "./index.css";

import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import OtherProjects from "./components/projects/otherProjects/OtherProjects";

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
			</section>
		</div>
	);
}
export default App;
