import React from "react"
import SEO from "../components/seo"
import LayoutHomepage from "../components/homepage/layoutHomepage"
import Hero from "../components/homepage/hero"
import ContactUsForm from "../components/homepage/ContactUsForm"
import Mission from "../components/homepage/mission"
import WorkItems from "../components/homepage/WorkItems"

const IndexPage = () => (
  <LayoutHomepage>
    <SEO title="Home" />
    <Hero />
    <Mission />
    <WorkItems />
    <ContactUsForm />
  </LayoutHomepage>
)

export default IndexPage
