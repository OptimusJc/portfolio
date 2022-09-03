import { HiMenuAlt4 } from "react-icons/hi";
import "./Header.modules.css";

const Header = () => {
	return (
		<nav className="navbar navbar-expand-lg">
			<div className="container">
				<a href="/home" className="navbar-brand fw-bold">
					Joseph's Portfolio
				</a>

				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<HiMenuAlt4 className="navbar-toggler-icon" />
				</button>

				<div className="collapse navbar-collapse" id="navbarContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<a href="#home" className="nav-link active" aria-current="page">
								Home
							</a>
						</li>
						<li className="nav-item">
							<a href="#about" className="nav-link">
								About
							</a>
						</li>
						<li className="nav-item">
							<a href="#projects" className="nav-link">
								Projects
							</a>
						</li>
						<li className="nav-item">
							<a href="#contact" className="nav-link">
								Contact
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Header;
