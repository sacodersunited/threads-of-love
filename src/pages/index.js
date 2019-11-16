import React from "react"
import LayoutHomepage from "../components/layoutHomepage"
import SEO from "../components/seo"
import Hero from "../components/hero"

const IndexPage = () => (
  <LayoutHomepage>
    <SEO title="Home" />
    <Hero />
  </LayoutHomepage>
)

export default IndexPage
