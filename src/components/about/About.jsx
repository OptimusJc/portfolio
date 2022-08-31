import "./About.modules.css";
import about_image from "../../assets/my_image_blob.png";

function About() {
	return (
		<section className="about__section">
			<div className="container">
				<div className="row">
					<div className="col">
						<h3>About Me</h3>

						<div className="about__section_container">
							<div className="about__section_img">
								<img src={about_image} alt="" />
							</div>
							<div className="about__section_info">
								<p>
									Hey! I'm Joseph Otieno a<strong> Web Developer </strong>
									located in Nairobi, Kenya. I've done remote projects for small
									businesses and collaborated with talented people to create
									digital products for both business and consumer use.
								</p>
								<p>
									Fast forwad today, i've had the previledge of working with
									clients across different fields from photography, artisans, to
									a christian non-profit organisation.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default About;
