/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Container } from "react-bootstrap"
import { Header } from "./header"
import Footer from "./footer"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"

const Layout = ({ children, isFullWidth = false }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      {isFullWidth ? (
        <main style={{ minHeight: "800px", paddingTop: "96px" }}>
          {children}
        </main>
      ) : (
        <Container>
          <main style={{ minHeight: "800px", paddingTop: "96px" }}>
            {children}
          </main>
        </Container>
      )}
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
