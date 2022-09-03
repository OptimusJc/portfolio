import "./Footer.modules.css";

import { IoMdMail } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
	return (
		<section className="footer__section">
			<div className="container">
				<div className="row">
					<div className="col">
						<p>copyright&#169;2022</p>

						<ul className="footer__section_icons">
							<li>
								<a href="#">
									<IoMdMail />
								</a>
							</li>
							<li>
								<a href="#">
									<FaGithub />
								</a>
							</li>
							<li>
								<a href="#">
									<FaLinkedin />
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Footer;
