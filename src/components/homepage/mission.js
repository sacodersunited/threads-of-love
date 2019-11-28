import React from "react"
import { Container, Col } from "react-bootstrap"
import { css } from "@emotion/core"

const Mission = () => (
  <Container
    css={css`
      min-height: 200px;
      padding: 5rem 0;
    `}
  >
    <Col md={6}>
      <h2 className="text-uppercase h4">Our Mission and Ministry</h2>
      <p className="display-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit
      </p>
    </Col>
  </Container>
)

export default Mission
