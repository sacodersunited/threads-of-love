import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Container, Image, Col, Row } from "react-bootstrap"
import { FaPhoneSquare, FaEnvelope } from "react-icons/fa"

const GetInvolved = () => (
  <Layout>
    <Seo title="Get Involved with Threads of Love" />
    <h1>Get Involved</h1>
    <Container className="mb-5 mt-5">
      <Row>
        <Col md={7}>
          <Image
            src="https://res.cloudinary.com/azrael/image/upload/v1580952914/20200123_1552071_fxwc4f.jpg"
            className="mb-3 rounded w-100"
          />
          <div>
            <p className="lead">
              You're invited to help in our volunteer efforts for our community.
              Here are some ways for you to contact us. See the calendar section
              for the chapter schedule at Community Bible Church. We gather the
              2nd and 4th Monday of the month, 9:30 am until 2:30 pm
              Administration and Education Building 2nd Floor It isn't necessary
              to schedule ahead of time, unless it's more convenient for you.
              Everyone is welcome, drop in for a tour or stay as long as you
              like.
              <br />
              Contact Us by using the : Get Involved Sign Up Information, (on
              this website) email address:{" "}
              <a href="mailto:tolatcbc@gmail.com">tolatcbc@gmail.com</a>,
              <br />
              Call or Text Message: 210 268-4351 Linda Coward, Chapter Director
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
          </div>
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default GetInvolved
