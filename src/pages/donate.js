import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Container, Col, Image } from "react-bootstrap"

const Donate = () => (
  <Layout>
    <Seo title="Donate to Threads of Love" />
    <h1>Donate</h1>
    <Container className="mb-5 mt-5">
      <Image
        src="https://res.cloudinary.com/azrael/image/upload/c_scale,w_800/v1573686130/IMG_2758_uycliv.jpg"
        className="mb-3"
        fluid
      />
      <Col md={7}>
        <blockquote className="blockquote">
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
        <form
          action="https://www.paypal.com/cgi-bin/webscr"
          method="post"
          target="_top"
        >
          <input type="hidden" name="cmd" value="_s-xclick" />
          <input type="hidden" name="hosted_button_id" value="S2BNR8FEE3UUU" />
          <input
            type="image"
            src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif"
            border="0"
            name="submit"
            title="PayPal - The safer, easier way to pay online!"
            alt="Donate with PayPal button"
            width="210"
          />
          <img
            alt=""
            border="0"
            src="https://www.paypal.com/en_US/i/scr/pixel.gif"
            width="1"
            height="1"
          />
        </form>
      </Col>
    </Container>
  </Layout>
)

export default Donate
