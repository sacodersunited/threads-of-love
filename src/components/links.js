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
            Our Work
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
          <Link to="/volunteers" className="nav-link" activeClassName="active">
            Volunteers
          </Link>
          <Link to="/calendar" className="nav-link" activeClassName="active">
            Calendar
          </Link>
        </Nav>
        <Link to="/donate">
          <Button variant="primary">Donate Now</Button>
        </Link>
      </Navbar.Collapse>
    </Container>
  )
}

export default Links
