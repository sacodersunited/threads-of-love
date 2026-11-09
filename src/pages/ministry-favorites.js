import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Container, ResponsiveEmbed } from "react-bootstrap"

const OurWork = () => (
  <Layout isFullWidth>
    <Container>
      <Seo title="Ministry Favorites" />
      <h1>Ministry Favorites</h1>
      <ResponsiveEmbed aspectRatio="16by9">
        <iframe
          width="560"
          height="315"
          title="TOL invite"
          src="https://www.youtube.com/embed/GJiMz0E09eM"
          referrerPolicy="strict-origin-when-cross-origin"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </ResponsiveEmbed>
    </Container>
  </Layout>
)

export default OurWork
