import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Col, Image, Button } from "react-bootstrap"

const Donate = () => (
  <Layout>
    <SEO title="Get Involved with Threads of Love" />
    <h1>Donate Now</h1>
    <Container className="mb-5 mt-5">
      <Image
        src="https://res.cloudinary.com/azrael/image/upload/c_scale,w_800/v1573686130/IMG_2758_uycliv.jpg"
        className="mb-3"
        fluid
      />
      <Col md={7}>
        <blockquote class="blockquote">
          <p className="mt-0 text-italic mb-1">
            For even the Son of Man did not come to be served, but to serve as a
            ransom for many.
          </p>
          <p className="mt-0 text-muted font-italic">Mark 10:45</p>
        </blockquote>
        <p className="lead">
          As with any volunteer ministry, we can always use more hands and
          donations. All items are made by volunteers. Materials and labor are
          donated by members and friends who are part of the Threads of Love
          ministry. Threads of Love for Heaven's Sake at Community Bible Church
          is a 501(c)3 tax deferred charity organization. We accept funds and
          will provide receipts to donors for their tax records upon request.
        </p>
        <Button>Donate Now</Button>
      </Col>
    </Container>
  </Layout>
)

export default Donate
