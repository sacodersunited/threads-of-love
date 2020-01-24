import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import VolunteerStaticQuery from "../components/volunteerStaticQuery"

const Volunteers = ({ images }) => (
  <Layout>
    <SEO title="Volunteers" />
    <VolunteerStaticQuery />
  </Layout>
)

export default Volunteers
