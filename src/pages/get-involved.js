import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Image, Col } from "react-bootstrap"
import { FaPhoneSquare, FaEnvelope } from "react-icons/fa"

const GetInvolved = () => (
  <Layout>
    <SEO title="Get Involved with Threads of Love" />
    <h1>Get Involved</h1>
    <Container className="mb-5 mt-5">
      <Image
        src="https://res.cloudinary.com/azrael/image/upload/v1580952914/20200123_1552071_fxwc4f.jpg"
        className="mb-3"
      />
      <Col md={7}>
        <p className="lead">
          If you attend Community Bible Church (CBC) we are listed under adult
          groups at CBC. You may list as an interested party and email the
          Threads of Love at CBC ministry group. You will be contacted by our
          director, Linda Coward, or other members, either by phone, email,
          depending on the information given.
        </p>
        <p>
          <a href="tel:+1210-268-4351">
            <FaPhoneSquare size="24px" /> 210-268-4351
          </a>
        </p>
        <p>
          <a href="mailto:tolatcbc@gmail.com">
            <FaEnvelope size="24px" /> tolatcbc@gmail.com
          </a>
        </p>
      </Col>
    </Container>
  </Layout>
)

export default GetInvolved
