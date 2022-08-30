import "./index.css";

import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";

function App() {
	return (
		<div>
			<section className="hero__background">
				<Header />
				<Hero />
			</section>
		</div>
	);
}
export default App;
