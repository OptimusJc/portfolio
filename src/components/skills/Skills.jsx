import "./Skills.modules.css";
import "../about/About.modules.css";

import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { SiPostgresql } from "react-icons/si";
import { FaSass } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";

const Skills = () => {
	return (
		<section className="skills__section">
			<div className="container">
				<div className="row">
					<div className="col">
						<h3>Skills</h3>
						<div className="skills__section_container">
							<p>
								HTML
								<span>
									<FaHtml5 />
								</span>
							</p>
							<p>
								CSS3
								<span>
									<FaCss3 />
								</span>
							</p>
							<p>
								Scss
								<span>
									<FaSass />
								</span>
							</p>
							<p>
								JavaScript
								<span>
									<IoLogoJavascript />
								</span>
							</p>
							<p>
								React.js
								<span>
									<FaReact />
								</span>
							</p>
							<p>
								Postgreql
								<span>
									<SiPostgresql />
								</span>
							</p>
							<p>
								Git
								<span>
									<FaGitAlt />
								</span>
							</p>

							<p>
								Cloud Firestore
								<span></span>
							</p>
							<p>
								Bootstrap
								<span>
									<FaBootstrap />
								</span>
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Skills;
