import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Col, Image, Button } from "react-bootstrap"

const Donate = () => (
  <Layout>
    <SEO title="Get Involved with Threads of Love" />
    <h1>Donate Now</h1>
    <Container className="mb-5 mt-5">
      <Image src="https://picsum.photos/id/179/800/400" className="mb-3" />
      <Col md={7}>
        <p className="lead">
          As with any volunteer ministry, we can always use more hands and
          donations. All items are made by volunteers. Materials and labor are
          donated by members and friends who are part of the Threads of Love
          ministry. Threads of Love for Heaven's Sake at Community Bible Church
          is a 501(c)3 tax deferred charity organization. We accept funds and
          provide receipts ot donors for their tax records.
        </p>
        <Button>Donate Now</Button>
      </Col>
    </Container>
  </Layout>
)

export default Donate
