import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Col, Row, Image } from "react-bootstrap"
import { Link } from "gatsby"
import CalendarDoc from "../docs/TOL 2020 CALENDAR JPG FILE.jpg"

const data = [
  {
    title: "TOL February Meeting",
    date: "28 FEB 2020",
    time: "9:30AM",
    location: "Community Bible Church",
    imageSrc:
      "https://res.cloudinary.com/azrael/image/upload/c_scale,w_300/v1573314518/cbcTOL/D25A9943_aifraa.jpg",
    description:
      "We meet 9:30 am until 2:30 pm in room 221A at CBC's Administration and Education building. At 1:00 pm we break for lunch, devotions, prayer, and discuss any Threads of Love business.",
  },
  {
    title: "TOL March Meeting",
    date: "9 MAR 2020",
    time: "9:30AM",
    location: "Community Bible Church",
    imageSrc:
      "https://res.cloudinary.com/azrael/image/upload/c_scale,w_300/v1573314518/cbcTOL/D25A9943_aifraa.jpg",
    description:
      "We meet 9:30 am until 2:30 pm in room 221A at CBC's Administration and Education building. At 1:00 pm we break for lunch, devotions, prayer, and discuss any Threads of Love business.",
  },
  {
    title: "TOL March Meeting",
    date: "23 MAR 2020",
    time: "9:30AM",
    location: "Community Bible Church",
    imageSrc:
      "https://res.cloudinary.com/azrael/image/upload/c_scale,w_300/v1573314518/cbcTOL/D25A9943_aifraa.jpg",
    description:
      "We meet 9:30 am until 2:30 pm in room 221A at CBC's Administration and Education building. At 1:00 pm we break for lunch, devotions, prayer, and discuss any Threads of Love business.",
  },
  {
    title: "TOL April Meeting",
    date: "6 April 2020",
    time: "9:30AM",
    location: "Community Bible Church",
    imageSrc:
      "https://res.cloudinary.com/azrael/image/upload/c_scale,w_300/v1573314518/cbcTOL/D25A9943_aifraa.jpg",
    description:
      "We meet 9:30 am until 2:30 pm in room 221A at CBC's Administration and Education building. At 1:00 pm we break for lunch, devotions, prayer, and discuss any Threads of Love business.",
  },
  {
    title: "TOL April Meeting",
    date: "20 April 2020",
    time: "9:30AM",
    location: "Community Bible Church",
    imageSrc:
      "https://res.cloudinary.com/azrael/image/upload/c_scale,w_300/v1573314518/cbcTOL/D25A9943_aifraa.jpg",
    description:
      "We meet 9:30 am until 2:30 pm in room 221A at CBC's Administration and Education building. At 1:00 pm we break for lunch, devotions, prayer, and discuss any Threads of Love business.",
  },

  {
    title: "TOL May Meeting",
    date: "4 MAY 2020",
    time: "9:30AM",
    location: "Community Bible Church",
    imageSrc:
      "https://res.cloudinary.com/azrael/image/upload/c_scale,w_300/v1573314518/cbcTOL/D25A9943_aifraa.jpg",
    description:
      "We meet 9:30 am until 2:30 pm in room 221A at CBC's Administration and Education building. At 1:00 pm we break for lunch, devotions, prayer, and discuss any Threads of Love business.",
  },
  {
    title: "TOL May Meeting",
    date: "18 MAY 2020",
    time: "9:30AM",
    location: "Community Bible Church",
    imageSrc:
      "https://res.cloudinary.com/azrael/image/upload/c_scale,w_300/v1573314518/cbcTOL/D25A9943_aifraa.jpg",
    description:
      "We meet 9:30 am until 2:30 pm in room 221A at CBC's Administration and Education building. At 1:00 pm we break for lunch, devotions, prayer, and discuss any Threads of Love business.",
  },
  {
    title: "TOL June Meeting",
    date: "8 JUN 2020",
    time: "9:30AM",
    location: "Community Bible Church",
    imageSrc:
      "https://res.cloudinary.com/azrael/image/upload/c_scale,w_300/v1573314518/cbcTOL/D25A9943_aifraa.jpg",
    description:
      "We meet 9:30 am until 2:30 pm in room 221A at CBC's Administration and Education building. At 1:00 pm we break for lunch, devotions, prayer, and discuss any Threads of Love business.",
  },
  {
    title: "TOL June Meeting",
    date: "22 JUN 2020",
    time: "9:30AM",
    location: "Community Bible Church",
    imageSrc:
      "https://res.cloudinary.com/azrael/image/upload/c_scale,w_300/v1573314518/cbcTOL/D25A9943_aifraa.jpg",
    description:
      "We meet 9:30 am until 2:30 pm in room 221A at CBC's Administration and Education building. At 1:00 pm we break for lunch, devotions, prayer, and discuss any Threads of Love business.",
  },
  {
    title: "TOL July Meeting",
    date: "13 JUL 2020",
    time: "9:30AM",
    location: "Community Bible Church",
    imageSrc:
      "https://res.cloudinary.com/azrael/image/upload/c_scale,w_300/v1573314518/cbcTOL/D25A9943_aifraa.jpg",
    description:
      "We meet 9:30 am until 2:30 pm in room 221A at CBC's Administration and Education building. At 1:00 pm we break for lunch, devotions, prayer, and discuss any Threads of Love business.",
  },
  {
    title: "TOL July Meeting",
    date: "27 JUL 2020",
    time: "9:30AM",
    location: "Community Bible Church",
    imageSrc:
      "https://res.cloudinary.com/azrael/image/upload/c_scale,w_300/v1573314518/cbcTOL/D25A9943_aifraa.jpg",
    description:
      "We meet 9:30 am until 2:30 pm in room 221A at CBC's Administration and Education building. At 1:00 pm we break for lunch, devotions, prayer, and discuss any Threads of Love business.",
  },
  {
    title: "TOL August Meeting",
    date: "10 AUG 2020",
    time: "9:30AM",
    location: "Community Bible Church",
    imageSrc:
      "https://res.cloudinary.com/azrael/image/upload/c_scale,w_300/v1573314518/cbcTOL/D25A9943_aifraa.jpg",
    description:
      "We meet 9:30 am until 2:30 pm in room 221A at CBC's Administration and Education building. At 1:00 pm we break for lunch, devotions, prayer, and discuss any Threads of Love business.",
  },
  {
    title: "TOL August Meeting",
    date: "24 AUG 2020",
    time: "9:30AM",
    location: "Community Bible Church",
    imageSrc:
      "https://res.cloudinary.com/azrael/image/upload/c_scale,w_300/v1573314518/cbcTOL/D25A9943_aifraa.jpg",
    description:
      "We meet 9:30 am until 2:30 pm in room 221A at CBC's Administration and Education building. At 1:00 pm we break for lunch, devotions, prayer, and discuss any Threads of Love business.",
  },
  {
    title: "TOL September Meeting",
    date: "14 SEP 2020",
    time: "9:30AM",
    location: "Community Bible Church",
    imageSrc:
      "https://res.cloudinary.com/azrael/image/upload/c_scale,w_300/v1573314518/cbcTOL/D25A9943_aifraa.jpg",
    description:
      "We meet 9:30 am until 2:30 pm in room 221A at CBC's Administration and Education building. At 1:00 pm we break for lunch, devotions, prayer, and discuss any Threads of Love business.",
  },
  {
    title: "TOL September Meeting",
    date: "28 SEP 2020",
    time: "9:30AM",
    location: "Community Bible Church",
    imageSrc:
      "https://res.cloudinary.com/azrael/image/upload/c_scale,w_300/v1573314518/cbcTOL/D25A9943_aifraa.jpg",
    description:
      "We meet 9:30 am until 2:30 pm in room 221A at CBC's Administration and Education building. At 1:00 pm we break for lunch, devotions, prayer, and discuss any Threads of Love business.",
  },
  {
    title: "TOL October Meeting",
    date: "12 OCT 2020",
    time: "9:30AM",
    location: "Community Bible Church",
    imageSrc:
      "https://res.cloudinary.com/azrael/image/upload/c_scale,w_300/v1573314518/cbcTOL/D25A9943_aifraa.jpg",
    description:
      "We meet 9:30 am until 2:30 pm in room 221A at CBC's Administration and Education building. At 1:00 pm we break for lunch, devotions, prayer, and discuss any Threads of Love business.",
  },
  {
    title: "TOL October Meeting",
    date: "26 OCT 2020",
    time: "9:30AM",
    location: "Community Bible Church",
    imageSrc:
      "https://res.cloudinary.com/azrael/image/upload/c_scale,w_300/v1573314518/cbcTOL/D25A9943_aifraa.jpg",
    description:
      "We meet 9:30 am until 2:30 pm in room 221A at CBC's Administration and Education building. At 1:00 pm we break for lunch, devotions, prayer, and discuss any Threads of Love business.",
  },
  {
    title: "TOL November Meeting",
    date: "9 NOV 2020",
    time: "9:30AM",
    location: "Community Bible Church",
    imageSrc:
      "https://res.cloudinary.com/azrael/image/upload/c_scale,w_300/v1573314518/cbcTOL/D25A9943_aifraa.jpg",
    description:
      "We meet 9:30 am until 2:30 pm in room 221A at CBC's Administration and Education building. At 1:00 pm we break for lunch, devotions, prayer, and discuss any Threads of Love business.",
  },
  {
    title: "TOL November Meeting",
    date: "23 NOV 2020",
    time: "9:30AM",
    location: "Community Bible Church",
    imageSrc:
      "https://res.cloudinary.com/azrael/image/upload/c_scale,w_300/v1573314518/cbcTOL/D25A9943_aifraa.jpg",
    description:
      "We meet 9:30 am until 2:30 pm in room 221A at CBC's Administration and Education building. At 1:00 pm we break for lunch, devotions, prayer, and discuss any Threads of Love business.",
  },
  {
    title: "TOL December Meeting",
    date: "14 DEC 2020",
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
