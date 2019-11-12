import React from "react"
import { Navbar, Nav, Container, Col } from "react-bootstrap"
import { Link } from "gatsby"
import { FaFacebookF } from "react-icons/fa"

const Footer = () => (
  <Navbar bg="primary" variant="dark" className="pt-5 pb-5">
    <Container>
      <Col md={3}>
        <Link to="/">
          <Navbar.Brand>Threads of Love</Navbar.Brand>
        </Link>
        <p className="text-white">
          {" "}
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org" className="text-white">
            Gatsby
          </a>
        </p>
      </Col>

      <Col md={3} className="text-white">
        <Link className="text-white nav-link" to="/about">
          About Us
        </Link>
        <Link className="text-white nav-link" to="/">
          Contact
        </Link>
        <Link className="text-white nav-link" to="/">
          Terms and Conditions
        </Link>
      </Col>
      <Col md={3} className="text-white">
        <a className="text-white nav-link" href="https://facebook.com">
          <FaFacebookF /> Facebook
        </a>
      </Col>
      <Col md={4} className="text-white">
        <address>497 Evergreen Rd. Roseville, CA 95673</address>
        <a className="text-white" href="tel:+44 345 678 903">
          +44 345 678 903
        </a>
        <br />
        <a href="mailto:threadsoflove@gmail.com" className="text-white">
          threadsoflove@gmail.com
        </a>
      </Col>
    </Container>
  </Navbar>
)

export default Footer
