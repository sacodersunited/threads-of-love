// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"
import { Navbar } from "react-bootstrap"
import Links from "./links"

export const Header = ({ siteTitle, homepage }) => {
  const [headerShow, setHeaderShow] = useState(false)

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setHeaderShow(true)
    } else {
      setHeaderShow(false)
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return homepage ? (
    <Navbar
      bg={!headerShow ? "dark" : "light"}
      variant={!headerShow ? "dark" : "light"}
      expand="lg"
      fixed="top"
      className={!headerShow ? "bg-transparent" : null}
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
