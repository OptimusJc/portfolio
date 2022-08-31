import "./Hero.modules.css";

import my_image from "../../assets/my_transparent_image.png";

const Hero = () => {
	return (
		<section className="hero">
			<div className="container">
				<div className="row">
					<div className="col">
						<div className="intro__section">
							<p>Hello I'm,</p>
							<h1>
								Joseph <span>Otieno</span>
							</h1>
							<p>
								Enthusiastic developer eager to contribute to team success
								through hard work, attention to detail and excellent
								organizational skills. Clear understanding of JavaScript, CSS,
								HTML, React and currently training on Python. Motivated to
								learn, grow and excel in the entire fullstack development
								module.
							</p>
							<p className="title">Fullstack Web Developer</p>
							<a href="#">download cv</a>
						</div>
						<div className="image__section">
							<span></span>
							<img src={my_image} alt="" />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
