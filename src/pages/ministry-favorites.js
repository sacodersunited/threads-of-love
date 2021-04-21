import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {
  Container,
  Row,
  Col,
  Image,
  Button,
  ButtonToolbar,
  ResponsiveEmbed,
} from "react-bootstrap"
import styled from "@emotion/styled"

const RowStyles = styled.div`
  color: ${(props) => (props.txtColor ? props.txtColor : "#212529")};
  background-color: ${(props) => (props.bkColor ? props.bkColor : "white")};
  min-height: 35rem;
  padding: 20px 0;
`

const RowWrapper = ({ children, bkColor, txtColor }) => (
  <RowStyles bkColor={bkColor} txtColor={txtColor}>
    <Container>
      <Row>{children}</Row>
    </Container>
  </RowStyles>
)

const OurWork = () => (
  <Layout isFullWidth>
    <Container>
      <SEO title="Ministry Favorites" />
      <h1>Ministry Favorites</h1>
      <ResponsiveEmbed aspectRatio="16by9">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/HO1uRmgfYws"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </ResponsiveEmbed>
    </Container>
  </Layout>
)

export default OurWork
