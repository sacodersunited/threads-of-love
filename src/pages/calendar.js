import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Container, Col, Row, Image } from "react-bootstrap"
import CalendarDoc from "../docs/TOL-2022-calendar.jpeg"

const MTG_IMG =
  "https://res.cloudinary.com/azrael/image/upload/c_scale,w_300/v1573314518/cbcTOL/D25A9943_aifraa.jpg"

const MTG_DESCR =
  "We meet 9:30 am until 2:30 pm in room 221A at CBC's Administration and Education building. At 1:30 pm we break for lunch, devotions, prayer, and discuss any Threads of Love business."

const data = [
  {
    title: "TOL February Meeting",
    date: "28 FEB 2022",
  },
  {
    title: "TOL March Meeting",
    date: "14 MAR 2022",
  },
  {
    title: "TOL March Meeting",
    date: "28 MAR 2022",
  },
  {
    title: "TOL April Meeting",
    date: "11 April 2022",
  },
  {
    title: "TOL April Meeting",
    date: "25 April 2022",
  },

  {
    title: "TOL May Meeting",
    date: "9 MAY 2022",
  },
  {
    title: "TOL May Meeting",
    date: "23 MAY 2022",
  },
  {
    title: "TOL June Meeting",
    date: "13 JUN 2022",
  },
  {
    title: "TOL June Meeting",
    date: "27 JUN 2022",
  },
  {
    title: "TOL July Meeting",
    date: "11 JUL 2022",
  },
  {
    title: "TOL July Meeting",
    date: "25 JUL 2022",
  },
  {
    title: "TOL August Meeting",
    date: "8 AUG 2022",
  },
  {
    title: "TOL August Meeting",
    date: "22 AUG 2022",
  },
  {
    title: "TOL September Meeting",
    date: "12 SEP 2022",
  },
  {
    title: "TOL September Meeting",
    date: "26 SEP 2022",
  },
  {
    title: "TOL October Meeting",
    date: "10 OCT 2022",
  },
  {
    title: "TOL October Meeting",
    date: "24 OCT 2022",
  },
  {
    title: "TOL November Meeting",
    date: "14 NOV 2022",
  },
  {
    title: "TOL November Meeting",
    date: "28 NOV 2022",
  },
  {
    title: "TOL December Meeting",
    date: "12 DEC 2022",
  },
]
const Today = new Date()
const Events = data.filter((event) => {
  let eventDate = new Date(event.date)
  if (Today < eventDate) {
    return event
  }

  return null
})

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
        <a href={CalendarDoc} className="btn btn-primary">
          Download Calendar
        </a>
      </Col>
      {/* FSP@sacoders: maybe we can order by date */}
      {Events.map((event) => (
        <>
          <Row className="mb-5 mt-5">
            <Col md={3}>
              <Image src={MTG_IMG} className="mb-1" fluid />
              <p className="m-0 font-weight-bold">{event.date} </p>
              <p className="m-0">9:30 am</p>
              <p className="m-0 font-weight-light">Community Bible Church</p>
            </Col>
            <Col md={3}>
              <h2 className="display-5 font-weight-light">{event.title}</h2>
            </Col>
            <Col>
              <p className="text-muted">{MTG_DESCR}</p>
            </Col>
          </Row>
          <hr />
        </>
      ))}
    </Container>
  </Layout>
)

export default Calendar
