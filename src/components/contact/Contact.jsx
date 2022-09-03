import "./Contact.modules.css";

const Contact = () => {
	return (
		<section className="contact__section" id="contact">
			<div className="container">
				<div className="row">
					<div className="col">
						<div className="card">
							<div className="card-body">
								<h6 className="card-subtitle">Lets Connect</h6>
								<h5 className="card-title">Lets Work Together</h5>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
									dicta vitae qui reprehenderit voluptates velit. Voluptates
									odio iure saepe, odit optio nulla, aliquam deserunt sapiente
									earum veniam facere possimus quia.
								</p>

								<a
									href="mailto:otienoj.cruz@gmail.com"
									className="btn btn-primaryAlt"
								>
									lets talk
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
