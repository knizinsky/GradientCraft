import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import favicon from "../../assets/img/icons/favicon.svg";

import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { NavbarBrand } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function CollapsibleExample() {
    const currentPath = window.location.pathname;


	return (
		<Navbar
			collapseOnSelect
			data-bs-spy="scroll"
			expand="lg"
			className={`navbar navbar-dark bg-dark fixed-top scrollspy-example ${styles.navbar}`}
		>
			<Container>
			<Navbar.Brand as={currentPath == '/' ? NavLink : NavLink} to="/" href="#" className=" d-flex align-items-center">
					<img src={favicon} alt="Logo Crazy Gradients" />{" "}
					<strong className="ms-2">GradientCraft</strong>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link href="#gradient-creator">Gradient creator</Nav.Link>
						<Nav.Link href="#browse-gradients">Browse</Nav.Link>
					</Nav>
					<Nav>
						<NavDropdown title="Find gradient" id="collasible-nav-dropdown">
							<NavDropdown.Item href="#red">Red</NavDropdown.Item>
							<NavDropdown.Item href="#yellow">Yellow</NavDropdown.Item>
							<NavDropdown.Item href="#green">Green</NavDropdown.Item>
							<NavDropdown.Item href="#blue">Blue</NavDropdown.Item>
							<NavDropdown.Item href="#purple">Purple</NavDropdown.Item>
							<NavDropdown.Item href="#dark">Dark</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href="#action/3.4">Other</NavDropdown.Item>
						</NavDropdown>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default CollapsibleExample;
