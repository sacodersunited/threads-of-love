// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Navbar } from "react-bootstrap"
import Links from "./links"

const Header = ({ siteTitle, homepage }) => {
  return homepage ? (
    <Navbar
      bg="dark"
      variant="dark"
      expand="lg"
      fixed="top"
      className="bg-transparent"
    >
      <Links siteTitle={siteTitle} />
    </Navbar>
  ) : (
    <Navbar bg="light" variant="light" expand="lg" fixed="top">
      <Links siteTitle={siteTitle} />
    </Navbar>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `TOL`,
}

export default Header
