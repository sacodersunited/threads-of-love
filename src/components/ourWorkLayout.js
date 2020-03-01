import React from "react"
import { Container, Row, Col, Card } from "react-bootstrap"

const OurWorkLayout = () => (
  <Container>
    <h3>Quilts and Blankets</h3>
    <Row style={{ minHeight: "500px" }}>
      <Col md={6}>1 of 2</Col>
      <Col md={6}>
        <Row style={{ paddingBottom: "10px" }}>
          <Col md={3}>
            <Card
              style={{
                minHeight: "100px",
                background: "gray",
                padding: "10px",
              }}
            ></Card>
          </Col>
          <Col md={3}>
            <Card
              style={{
                minHeight: "100px",
                background: "gray",
                padding: "10px",
              }}
            ></Card>
          </Col>
          <Col md={3}>
            <Card
              style={{
                minHeight: "100px",
                background: "gray",
                padding: "10px",
              }}
            ></Card>
          </Col>
        </Row>
        <Row style={{ paddingBottom: "10px" }}>
          <Col md={3}>
            <Card
              style={{
                minHeight: "100px",
                background: "gray",
                padding: "10px",
              }}
            ></Card>
          </Col>
          <Col md={3}>
            <Card
              style={{
                minHeight: "100px",
                background: "gray",
                padding: "10px",
              }}
            ></Card>
          </Col>
          <Col md={3}>
            <Card
              style={{
                minHeight: "100px",
                background: "gray",
                padding: "10px",
              }}
            ></Card>
          </Col>
        </Row>
        <Row style={{ paddingBottom: "10px" }}>
          <Col md={3}>
            <Card
              style={{
                minHeight: "100px",
                background: "gray",
                padding: "10px",
              }}
            ></Card>
          </Col>
          <Col md={3}>
            <Card
              style={{
                minHeight: "100px",
                background: "gray",
                padding: "10px",
              }}
            ></Card>
          </Col>
          <Col md={3}>
            <Card
              style={{
                minHeight: "100px",
                background: "gray",
                padding: "10px",
              }}
            ></Card>
          </Col>
        </Row>
      </Col>
    </Row>
    <Row>
      {[
        "OUR WORK",
        "CAPS",
        "BOOTIES",
        "QUILTS & BLANKETS",
        "CASKETS",
        "POSITIONING AID COVERS",
        "MEMORY BOXES",
        "DIAPER SHIRTS",
        "LEG WARMERS",
      ].map(row => {
        return (
          <Col md={4}>
            <Card
              style={{
                padding: "10px",
                minHeight: "250px",
                marginBottom: "10px",
              }}
            >
              <Card.Body>
                <Card.Title>{row}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        )
      })}
    </Row>
  </Container>
)

export default OurWorkLayout
