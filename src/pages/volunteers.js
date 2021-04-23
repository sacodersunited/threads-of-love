import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import VolunteerStaticQuery from "../components/volunteerStaticQuery"

const Volunteers = ({ images }) => (
  <Layout>
    <Seo title="Volunteers" />
    <VolunteerStaticQuery />
  </Layout>
)

export default Volunteers
