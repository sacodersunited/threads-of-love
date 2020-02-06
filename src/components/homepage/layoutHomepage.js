/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Header } from "../header"
import Footer from "../footer"
import { css } from "@emotion/core"
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"

const LayoutHomepage = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQueryHomepage {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div>
      <Header siteTitle={data.site.siteMetadata.title} homepage={true} />
      {children}
      <Footer />
    </div>
  )
}

LayoutHomepage.propTypes = {
  children: PropTypes.node.isRequired,
}

export default LayoutHomepage
