import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Container, Col, Row, Image } from "react-bootstrap"
import CalendarDoc from "../docs/TOL 2024 TOLFHS MEETINGS CALENDAR 1 FEB 2024.pdf"

const MTG_IMG =
  "https://res.cloudinary.com/azrael/image/upload/c_scale,w_300/v1573314518/cbcTOL/D25A9943_aifraa.jpg"

const MTG_DESCR =
  "We meet 9:30 am until 2:30 pm in room 221A at CBC's Administration and Education building. At 1:30 pm we break for lunch, devotions, prayer, and discuss any Threads of Love business."

const data = [
  {
    title: "TOL January Meeting",
    date: "9 JAN 2023",
  },
  {
    title: "TOL January Meeting",
    date: "23 JAN 2023",
  },
  {
    title: "TOL February Meeting",
    date: "13 FEB 2023",
  },
  {
    title: "TOL February Meeting",
    date: "27 FEB 2023",
  },
  {
    title: "TOL March Meeting",
    date: "13 MAR 2023",
  },
  {
    title: "TOL March Meeting",
    date: "27 MAR 2023",
  },
  {
    title: "TOL April Meeting",
    date: "10 April 2023",
  },
  {
    title: "TOL April Meeting",
    date: "24 April 2023",
  },

  {
    title: "TOL May Meeting",
    date: "8 MAY 2023",
  },
  {
    title: "TOL May Meeting",
    date: "22 MAY 2023",
  },
  {
    title: "TOL June Meeting",
    date: "12 JUN 2023",
  },
  {
    title: "TOL June Meeting",
    date: "26 JUN 2023",
  },
  {
    title: "TOL July Meeting",
    date: "10 JUL 2023",
  },
  {
    title: "TOL July Meeting",
    date: "24 JUL 2023",
  },
  {
    title: "TOL August Meeting",
    date: "14 AUG 2023",
  },
  {
    title: "TOL August Meeting",
    date: "28 AUG 2023",
  },
  {
    title: "TOL September Meeting",
    date: "11 SEP 2023",
  },
  {
    title: "TOL September Meeting",
    date: "25 SEP 2023",
  },
  {
    title: "TOL October Meeting",
    date: "9 OCT 2023",
  },
  {
    title: "TOL October Meeting",
    date: "23 OCT 2023",
  },
  {
    title: "TOL November Meeting",
    date: "13 NOV 2023",
  },
  {
    title: "TOL November Meeting",
    date: "27 NOV 2023",
  },
  {
    title: "TOL December Meeting",
    date: "11 DEC 2023",
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
