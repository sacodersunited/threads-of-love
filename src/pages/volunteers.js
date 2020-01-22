import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Row, Col, Card } from "react-bootstrap"

const data = [
  {
    name: "Jane Doe",
    position: "Founder & CEO",
    imgSrc: "https://randomuser.me/api/portraits/women/23.jpg",
    text:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
  {
    name: "John Doe",
    position: "Co-founder & CTO",
    imgSrc: "https://randomuser.me/api/portraits/men/24.jpg",
    text:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
  {
    name: "Jenny Popovich",
    position: "Volunteer Coordinator",
    imgSrc: "https://randomuser.me/api/portraits/women/56.jpg",
    text:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
  {
    name: "Jimmy Palon",
    position: "Outreach",
    imgSrc: "https://randomuser.me/api/portraits/men/88.jpg",
    text:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },

  {
    name: "Janet Donohon",
    position: "Public Relations",
    imgSrc: "https://randomuser.me/api/portraits/women/64.jpg",
    text:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
  {
    name: "Jeremy Riddle",
    position: "IT Director",
    imgSrc: "https://randomuser.me/api/portraits/men/34.jpg",
    text:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
]

const Volunteers = () => (
  <Layout>
    <SEO title="Volunteers" />
    <Container>
      <h1>Board of Directors</h1>
      <Row className="mt-5 mb-5">
        {data.map(user => (
          <Col className="mb-3">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={user.imgSrc} />
              <Card.Body>
                <Card.Title>{user.name}</Card.Title>
                <Card.Text>
                  <h4 className="text-uppercase h6 text-muted">
                    {user.position}
                  </h4>
                  {user.text}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  </Layout>
)

export default Volunteers
