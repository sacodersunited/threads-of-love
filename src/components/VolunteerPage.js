import React from "react"
import { Container, Row, Col, Card, Image } from "react-bootstrap"
import { css } from "@emotion/core"

export const VolunteerPage = ({ boardMembers, images }) => (
  <Container>
    <h1>Board of Directors</h1>
    <Row className="mt-5 mb-5">
      {boardMembers.map((user) => (
        <Col className="mb-3" key={user.id}>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={user.imgSrc} />
            <Card.Body
              css={css`
                min-height: 140px;
              `}
            >
              <Card.Title>{user.name}</Card.Title>
              <Card.Text className="text-uppercase h6 text-muted">
                {user.position}
                {user.text}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    <h2>Volunteers</h2>
    <Row className="mt-5 mb-5">
      {images.map((image) => (
        <Col key={image.id} md={3}>
          <a href={image.node.secure_url}>
            <Image
              src={image.node.secure_url.replace(
                "upload/",
                "upload/w_800,h_800,c_fit/"
              )}
              alt="image.id"
              thumbnail
              fluid
            />
          </a>
        </Col>
      ))}
    </Row>
  </Container>
)
