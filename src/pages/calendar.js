import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Col, Row, Image } from "react-bootstrap"

const data = [
  {
    title: "Event Title One",
    date: "21 DEC 2019",
    time: "7:00PM",
    location: "Community Bible Church",
    imageSrc:
      "https://res.cloudinary.com/azrael/image/upload/c_scale,w_300/v1573314518/cbcTOL/D25A9943_aifraa.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero error vitae id quas. Beatae quisquam magnam at voluptatem eos quasi, ab tempora incidunt recusandae, sunt quis perspiciatis expedita! Rerum, tempora?",
  },
  {
    title: "Event Title Two",
    date: "15 DEC 2019",
    time: "7:00PM",
    location: "Community Bible Church",
    imageSrc:
      "https://res.cloudinary.com/azrael/image/upload/c_scale,w_300/v1573314518/cbcTOL/D25A9943_aifraa.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero error vitae id quas. Beatae quisquam magnam at voluptatem eos quasi, ab tempora incidunt recusandae, sunt quis perspiciatis expedita! Rerum, tempora?",
  },
  {
    title: "Event Title Three",
    date: "21 NOV 2019",
    time: "7:00PM",
    location: "Community Bible Church",
    imageSrc:
      "https://res.cloudinary.com/azrael/image/upload/c_scale,w_300/v1573314518/cbcTOL/D25A9943_aifraa.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero error vitae id quas. Beatae quisquam magnam at voluptatem eos quasi, ab tempora incidunt recusandae, sunt quis perspiciatis expedita! Rerum, tempora?",
  },
  {
    title: "Event Title Four",
    date: "18 NOV 2019",
    time: "7:00PM",
    location: "Community Bible Church",
    imageSrc:
      "https://res.cloudinary.com/azrael/image/upload/c_scale,w_300/v1573314518/cbcTOL/D25A9943_aifraa.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero error vitae id quas. Beatae quisquam magnam at voluptatem eos quasi, ab tempora incidunt recusandae, sunt quis perspiciatis expedita! Rerum, tempora?",
  },
]

const Calendar = () => (
  <Layout>
    <SEO title="Calendar for Threads of Love" />
    <Container>
      <h1>Calendar of Events</h1>
      <Col md={7}>
        <p className="lead">
          TOL For Heaven's Sake at Community Bible Church (CBC) meet the 2nd and
          4th Monday of the month at 9:30 am until 2:30 pm in room 221A at CBC's
          Administration and Education building. At 1:00 pm we break for lunch,
          devotions, prayer, and discuss any Threads of Love business.
        </p>
      </Col>
      {/* FSP@sacoders: maybe we can order by date */}
      {data.map(event => (
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
