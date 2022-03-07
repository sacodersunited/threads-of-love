import React from "react"
import Seo from "../components/seo"
import LayoutHomepage from "../components/homepage/layoutHomepage"
import Hero from "../components/homepage/hero"
import ContactUsForm from "../components/homepage/ContactUsForm"
import Mission from "../components/homepage/mission"
import Donations from "../components/Donations"

const IndexPage = () => (
  <LayoutHomepage>
    <Seo title="Home" />
    <Hero />
    <Mission />
    <Donations />
    <ContactUsForm />
  </LayoutHomepage>
)

export default IndexPage
