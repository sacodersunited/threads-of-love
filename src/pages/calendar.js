import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Container, Col } from "react-bootstrap"

const Calendar = () => (
  <Layout>
    <Seo title="Calendar for Threads of Love" />
    <Container>
      <h1>Calendar of Events</h1>
      <Col md={7}>
        <p className="lead">
          Threads of Love For Heaven's Sake at Community Bible Church (CBC)
          meets the 2nd and 4th Mondays of the month. Hope to see you there.
        </p>
      </Col>
    </Container>
  </Layout>
)

export default Calendar
