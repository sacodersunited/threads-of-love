import React from "react"
import { Navbar, Container, Col, Row } from "react-bootstrap"
import { Link } from "gatsby"
import { css } from "@emotion/core"

const Footer = () => (
  <>
    <Navbar
      bg="primary"
      variant="dark"
      className="pt-5 pb-5"
      css={css`
        background-color: #2f124d !important;
      `}
    >
      <Container style={{ display: "initial" }}>
        <Row>
          <Col md={4}>
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
          <Col md={4} className="text-white">
            <Link className="text-white nav-link" to="/about">
              About Us
            </Link>
            <Link className="text-white nav-link" to="/get-involved">
              Volunteer
            </Link>
            <Link className="text-white nav-link" to="/donate">
              Donate
            </Link>
            <Link to="/#contact" className="text-white nav-link">
              Contact Us
            </Link>
          </Col>

          <Col md={4} className="text-white">
            <address>2477 N Loop 1604 East</address>
            <address>San Antonio, TX 78232</address>
            c/o Linda Coward
            <p>
              <a href="mailto:threadsoflove@gmail.com" className="text-white">
                tolatcbc@gmail.com
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </Navbar>
    <nav
      className="navbar navbar-expand navbar-dark bg-primary"
      css={css`
        background-color: #2f124d !important;
      `}
    >
      <a href="https://sacodersunited.com" className="navbar-brand">
        ©sacodersunited
      </a>
    </nav>
  </>
)
export default Footer
