import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Col, Row, Image } from "react-bootstrap"
import { Link } from "gatsby"
import CalendarDoc from "../docs/TOL-2021-calendar.jpg"

const data = [
  {
    title: "TOL February Meeting",
    date: "22 FEB 2021",
    time: "9:30AM",
    location: "Community Bible Church",
    imageSrc:
      "https://res.cloudinary.com/azrael/image/upload/c_scale,w_300/v1573314518/cbcTOL/D25A9943_aifraa.jpg",
    description:
      "We meet 9:30 am until 2:30 pm in room 221A at CBC's Administration and Education building. At 1:00 pm we break for lunch, devotions, prayer, and discuss any Threads of Love business.",
  },
  {
    title: "TOL March Meeting",
    date: "8 MAR 2021",
    time: "9:30AM",
    location: "Community Bible Church",
    imageSrc:
      "https://res.cloudinary.com/azrael/image/upload/c_scale,w_300/v1573314518/cbcTOL/D25A9943_aifraa.jpg",
    description:
      "We meet 9:30 am until 2:30 pm in room 221A at CBC's Administration and Education building. At 1:00 pm we break for lunch, devotions, prayer, and discuss any Threads of Love business.",
  },
  {
    title: "TOL March Meeting",
    date: "22 MAR 2021",
    time: "9:30AM",
    location: "Community Bible Church",
    imageSrc:
      "https://res.cloudinary.com/azrael/image/upload/c_scale,w_300/v1573314518/cbcTOL/D25A9943_aifraa.jpg",
    description:
      "We meet 9:30 am until 2:30 pm in room 221A at CBC's Administration and Education building. At 1:00 pm we break for lunch, devotions, prayer, and discuss any Threads of Love business.",
  },
  {
    title: "TOL April Meeting",
    date: "12 April 2021",
    time: "9:30AM",
    location: "Community Bible Church",
    imageSrc:
      "https://res.cloudinary.com/azrael/image/upload/c_scale,w_300/v1573314518/cbcTOL/D25A9943_aifraa.jpg",
    description:
      "We meet 9:30 am until 2:30 pm in room 221A at CBC's Administration and Education building. At 1:00 pm we break for lunch, devotions, prayer, and discuss any Threads of Love business.",
  },
  {
    title: "TOL April Meeting",
    date: "26 April 2021",
    time: "9:30AM",
    location: "Community Bible Church",
    imageSrc:
      "https://res.cloudinary.com/azrael/image/upload/c_scale,w_300/v1573314518/cbcTOL/D25A9943_aifraa.jpg",
    description:
      "We meet 9:30 am until 2:30 pm in room 221A at CBC's Administration and Education building. At 1:00 pm we break for lunch, devotions, prayer, and discuss any Threads of Love business.",
  },

  {
    title: "TOL May Meeting",
    date: "10 MAY 2021",
    time: "9:30AM",
    location: "Community Bible Church",
    imageSrc:
      "https://res.cloudinary.com/azrael/image/upload/c_scale,w_300/v1573314518/cbcTOL/D25A9943_aifraa.jpg",
    description:
      "We meet 9:30 am until 2:30 pm in room 221A at CBC's Administration and Education building. At 1:00 pm we break for lunch, devotions, prayer, and discuss any Threads of Love business.",
  },
  {
    title: "TOL May Meeting",
    date: "24 MAY 2021",
    time: "9:30AM",
    location: "Community Bible Church",
    imageSrc:
      "https://res.cloudinary.com/azrael/image/upload/c_scale,w_300/v1573314518/cbcTOL/D25A9943_aifraa.jpg",
    description:
      "We meet 9:30 am until 2:30 pm in room 221A at CBC's Administration and Education building. At 1:00 pm we break for lunch, devotions, prayer, and discuss any Threads of Love business.",
  },
  {
    title: "TOL June Meeting",
    date: "14 JUN 2021",
    time: "9:30AM",
    location: "Community Bible Church",
    imageSrc:
      "https://res.cloudinary.com/azrael/image/upload/c_scale,w_300/v1573314518/cbcTOL/D25A9943_aifraa.jpg",
    description:
      "We meet 9:30 am until 2:30 pm in room 221A at CBC's Administration and Education building. At 1:00 pm we break for lunch, devotions, prayer, and discuss any Threads of Love business.",
  },
  {
    title: "TOL June Meeting",
    date: "28 JUN 2021",
    time: "9:30AM",
    location: "Community Bible Church",
    imageSrc:
      "https://res.cloudinary.com/azrael/image/upload/c_scale,w_300/v1573314518/cbcTOL/D25A9943_aifraa.jpg",
    description:
      "We meet 9:30 am until 2:30 pm in room 221A at CBC's Administration and Education building. At 1:00 pm we break for lunch, devotions, prayer, and discuss any Threads of Love business.",
  },
  {
    title: "TOL July Meeting",
    date: "12 JUL 2021",
    time: "9:30AM",
    location: "Community Bible Church",
    imageSrc:
      "https://res.cloudinary.com/azrael/image/upload/c_scale,w_300/v1573314518/cbcTOL/D25A9943_aifraa.jpg",
    description:
      "We meet 9:30 am until 2:30 pm in room 221A at CBC's Administration and Education building. At 1:00 pm we break for lunch, devotions, prayer, and discuss any Threads of Love business.",
  },
  {
    title: "TOL July Meeting",
    date: "26 JUL 2021",
    time: "9:30AM",
    location: "Community Bible Church",
    imageSrc:
      "https://res.cloudinary.com/azrael/image/upload/c_scale,w_300/v1573314518/cbcTOL/D25A9943_aifraa.jpg",
    description:
      "We meet 9:30 am until 2:30 pm in room 221A at CBC's Administration and Education building. At 1:00 pm we break for lunch, devotions, prayer, and discuss any Threads of Love business.",
  },
  {
    title: "TOL August Meeting",
    date: "9 AUG 2021",
    time: "9:30AM",
    location: "Community Bible Church",
    imageSrc:
      "https://res.cloudinary.com/azrael/image/upload/c_scale,w_300/v1573314518/cbcTOL/D25A9943_aifraa.jpg",
    description:
      "We meet 9:30 am until 2:30 pm in room 221A at CBC's Administration and Education building. At 1:00 pm we break for lunch, devotions, prayer, and discuss any Threads of Love business.",
  },
  {
    title: "TOL August Meeting",
    date: "23 AUG 2021",
    time: "9:30AM",
    location: "Community Bible Church",
    imageSrc:
      "https://res.cloudinary.com/azrael/image/upload/c_scale,w_300/v1573314518/cbcTOL/D25A9943_aifraa.jpg",
    description:
      "We meet 9:30 am until 2:30 pm in room 221A at CBC's Administration and Education building. At 1:00 pm we break for lunch, devotions, prayer, and discuss any Threads of Love business.",
  },
  {
    title: "TOL September Meeting",
    date: "13 SEP 2021",
    time: "9:30AM",
    location: "Community Bible Church",
    imageSrc:
      "https://res.cloudinary.com/azrael/image/upload/c_scale,w_300/v1573314518/cbcTOL/D25A9943_aifraa.jpg",
    description:
      "We meet 9:30 am until 2:30 pm in room 221A at CBC's Administration and Education building. At 1:00 pm we break for lunch, devotions, prayer, and discuss any Threads of Love business.",
  },
  {
    title: "TOL September Meeting",
    date: "27 SEP 2021",
    time: "9:30AM",
    location: "Community Bible Church",
    imageSrc:
      "https://res.cloudinary.com/azrael/image/upload/c_scale,w_300/v1573314518/cbcTOL/D25A9943_aifraa.jpg",
    description:
      "We meet 9:30 am until 2:30 pm in room 221A at CBC's Administration and Education building. At 1:00 pm we break for lunch, devotions, prayer, and discuss any Threads of Love business.",
  },
  {
    title: "TOL October Meeting",
    date: "11 OCT 2021",
    time: "9:30AM",
    location: "Community Bible Church",
    imageSrc:
      "https://res.cloudinary.com/azrael/image/upload/c_scale,w_300/v1573314518/cbcTOL/D25A9943_aifraa.jpg",
    description:
      "We meet 9:30 am until 2:30 pm in room 221A at CBC's Administration and Education building. At 1:00 pm we break for lunch, devotions, prayer, and discuss any Threads of Love business.",
  },
  {
    title: "TOL October Meeting",
    date: "25 OCT 2021",
    time: "9:30AM",
    location: "Community Bible Church",
    imageSrc:
      "https://res.cloudinary.com/azrael/image/upload/c_scale,w_300/v1573314518/cbcTOL/D25A9943_aifraa.jpg",
    description:
      "We meet 9:30 am until 2:30 pm in room 221A at CBC's Administration and Education building. At 1:00 pm we break for lunch, devotions, prayer, and discuss any Threads of Love business.",
  },
  {
    title: "TOL November Meeting",
    date: "8 NOV 2021",
    time: "9:30AM",
    location: "Community Bible Church",
    imageSrc:
      "https://res.cloudinary.com/azrael/image/upload/c_scale,w_300/v1573314518/cbcTOL/D25A9943_aifraa.jpg",
    description:
      "We meet 9:30 am until 2:30 pm in room 221A at CBC's Administration and Education building. At 1:00 pm we break for lunch, devotions, prayer, and discuss any Threads of Love business.",
  },
  {
    title: "TOL November Meeting",
    date: "22 NOV 2021",
    time: "9:30AM",
    location: "Community Bible Church",
    imageSrc:
      "https://res.cloudinary.com/azrael/image/upload/c_scale,w_300/v1573314518/cbcTOL/D25A9943_aifraa.jpg",
    description:
      "We meet 9:30 am until 2:30 pm in room 221A at CBC's Administration and Education building. At 1:00 pm we break for lunch, devotions, prayer, and discuss any Threads of Love business.",
  },
  {
    title: "TOL December Meeting",
    date: "13 DEC 2021",
    time: "9:30AM",
    location: "Community Bible Church",
    imageSrc:
      "https://res.cloudinary.com/azrael/image/upload/c_scale,w_300/v1573314518/cbcTOL/D25A9943_aifraa.jpg",
    description:
      "We meet 9:30 am until 2:30 pm in room 221A at CBC's Administration and Education building. At 1:00 pm we break for lunch, devotions, prayer, and discuss any Threads of Love business.",
  },
]
const Today = new Date()
const Events = data.filter(event => {
  console.log("event data", event)
  let eventDate = new Date(event.date)
  if (Today < eventDate) {
    return event
  }

  return null
})

const Calendar = () => (
  <Layout>
    <SEO title="Calendar for Threads of Love" />
    <Container>
      <h1>Calendar of Events</h1>
      <Col md={7}>
        <p className="lead">
          Threads of Love For Heaven's Sake at Community Bible Church (CBC)
          meets the 2nd and 4th Mondays of the month. During the month of May,
          meetings are on the 11th and 25th. Hope to see you there.
        </p>
        <a href={CalendarDoc} className="btn btn-primary">
          Download Calendar
        </a>
      </Col>
      {/* FSP@sacoders: maybe we can order by date */}
      {Events.map(event => (
        <>
          <Row className="mb-5 mt-5">
            <Col md={3}>
              <Image src={event.imageSrc} className="mb-1" fluid />
              <p className="m-0 font-weight-bold">{event.date} </p>
              <p className="m-0">{event.time}</p>
              <p className="m-0 font-weight-light">{event.location}</p>
            </Col>
            <Col md={3}>
              <h2 className="display-5 font-weight-light">{event.title}</h2>
            </Col>
            <Col>
              <p className="text-muted">{event.description}</p>
            </Col>
          </Row>
          <hr />
        </>
      ))}
    </Container>
  </Layout>
)

export default Calendar
