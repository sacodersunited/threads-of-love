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
      <p className="lead font-weight-light">
        Our mission is to provide necessary clothing and aid to premature babies
        in hospitals and burial items to families whose baby was unable to
        survive the premature birth.
      </p>
      <p className="lead font-weight-light">
        Our ministry is not only to the infant but also to family members. We
        pray to reach them during their pain and fears or when stress may be too
        difficult to endure.
      </p>
    </Col>
  </Container>
)

export default Mission
