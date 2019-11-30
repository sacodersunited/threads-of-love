import React from "react"
import { Row, Col, Card } from "react-bootstrap"

const WorkItems = () => (
  <Row className="mb-5">
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
        <Col md={4} key={`tol${row}`}>
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
)

export default WorkItems
