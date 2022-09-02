import "./OtherProjects.modules.css";
import "../../about/About.modules.css";

import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFolder } from "react-icons/fa";

const OtherProjects = () => {
	return (
		<section className="otherProjects__section">
			<div className="container">
				<div className="row">
					<div className="col">
						<h3>Other Notable Projects</h3>

						<div className="otherProjects__section_container">
							<div className="card">
								<div className="icon">
									<FaFolder />
								</div>
								<div className="card-body">
									<h5 className="card-title">Calculator</h5>
									<p>
										In this project i built a basic implementation of a working
										calculator
									</p>

									<div className="technologies_used_container">
										<ul className="external_links">
											<li>
												<a href="https://github.com/OptimusJc/CalcApp-v2">
													<FaGithub />
												</a>
											</li>
											<li>
												<a href="#">
													<FaTwitter />
												</a>
											</li>
										</ul>

										<ul className="technologies_used">
											<li>HTML</li>
											<li>CSS3</li>
											<li>JavaScript</li>
										</ul>
									</div>
								</div>
							</div>
							<div className="card">
								<div className="icon">
									<FaFolder />
								</div>
								<div className="card-body">
									<h5 className="card-title">Calculator</h5>
									<p>
										In this project i built a basic implementation of a working
										calculator
									</p>

									<div className="technologies_used_container">
										<ul className="external_links">
											<li>
												<a href="#">
													<FaGithub />
												</a>
											</li>
											<li>
												<a href="#">
													<FaTwitter />
												</a>
											</li>
										</ul>

										<ul className="technologies_used">
											<li>HTML</li>
											<li>CSS3</li>
											<li>JavaScript</li>
										</ul>
									</div>
								</div>
							</div>
							<div className="card">
								<div className="icon">
									<FaFolder />
								</div>
								<div className="card-body">
									<h5 className="card-title">Calculator</h5>
									<p>
										In this project i built a basic implementation of a working
										calculator
									</p>

									<div className="technologies_used_container">
										<ul className="external_links">
											<li>
												<a href="#">
													<FaGithub />
												</a>
											</li>
											<li>
												<a href="#">
													<FaTwitter />
												</a>
											</li>
										</ul>

										<ul className="technologies_used">
											<li>HTML</li>
											<li>CSS3</li>
											<li>JavaScript</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default OtherProjects;
