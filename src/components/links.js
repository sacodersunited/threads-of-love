import React from "react"
import { Link } from "gatsby"
import { Navbar, Nav, Button, Container } from "react-bootstrap"

const Links = ({ siteTitle }) => {
  return (
    <Container>
      <Link to="/">
        <Navbar.Brand> {siteTitle}</Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link to="/our-work" className="nav-link" activeClassName="active">
            Ministry Favorites
          </Link>
          <Link to="/about" className="nav-link" activeClassName="active">
            About Us
          </Link>
          <Link
            to="/get-involved"
            className="nav-link"
            activeClassName="active"
          >
            Get Involved
          </Link>
          <Link to="/donate" className="nav-link" activeClassName="active">
            Donate
          </Link>
          <Link to="/volunteers" className="nav-link" activeClassName="active">
            Volunteers
          </Link>
          <Link to="/calendar" className="nav-link" activeClassName="active">
            Calendar
          </Link>
          <Link to="/#contact" className="nav-link" activeClassName="active">
            Contact Us
          </Link>
        </Nav>
        <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=S2BNR8FEE3UUU&source=url">
          <Button variant="primary">Donate Now</Button>
        </a>
      </Navbar.Collapse>
    </Container>
  )
}

export default Links
