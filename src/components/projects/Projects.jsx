import { Link } from "react-router-dom";

import "./Projects.modules.css";
import "../about/About.modules.css";

import otieno_photography from "../../assets/projects/otieno_photography2.png";
import bcu_library from "../../assets/projects/bcu_library.png";
import bcu_medianetwork from "../../assets/projects/bcu_medianetwork.png";

const Projects = () => {
	return (
		<section className="projects__section" id="projects">
			<div className="container">
				<div className="row">
					<div className="col">
						<h3>Works</h3>

						<div className="projects__section_container">
							<a href="https://bcu-library.vercel.app">
								<div className="card">
									<img
										src={bcu_library ?? "https://via.placeholder.com/400"}
										alt=""
										className="card-img-top"
									/>
									<div className="card-body">
										<h5 className="card-title">BCU Library</h5>
										<p className="card-text">
											Lorem ipsum dolor sit amet consectetur adipisicing elit.
											Inventore odio dolorum voluptas harum laborum, vitae eum
											molestias libero mollitia facilis
										</p>

										<ul className="technologies_used">
											<li>React</li>
											<li>HTML</li>
											<li>CSS3</li>
											<li>Bootstrap</li>
										</ul>
									</div>
								</div>
							</a>
							<a href="http://otienophotography.com">
								<div className="card">
									<img
										src={
											otieno_photography ?? "https://via.placeholder.com/400"
										}
										alt=""
										className="card-img-top"
									/>
									<div className="card-body">
										<h5 className="card-title">Otieno Photography</h5>
										<p className="card-text">
											Lorem ipsum dolor sit amet consectetur adipisicing elit.
											Deleniti, enim?
										</p>

										<ul className="technologies_used">
											<li>JavaScript</li>
											<li>HTML</li>
											<li>CSS3</li>
										</ul>
									</div>
								</div>
							</a>
							<a href="https://bcu-international.vercel.app/">
								<div className="card">
									<img
										src={bcu_medianetwork ?? "https://via.placeholder.com/400"}
										alt=""
										className="card-img-top"
									/>
									<div className="card-body">
										<h5 className="card-title">BCU Media Network</h5>
										<p className="card-text">
											Lorem ipsum dolor sit amet consectetur adipisicing elit.
											Deleniti, enim?
										</p>
										<ul className="technologies_used">
											<li>React</li>
											<li>HTML</li>
											<li>CSS3</li>
											<li>Bootstrap</li>
										</ul>
									</div>
								</div>
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Projects;
