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
    <h2>Volunteers</h2>
    <Row className="mt-5 mb-5">
      {images.map((image) => (
        <Col md={3} key={image.id}>
          <a href={image.node.secure_url}>
            <Image
              src={image.node.secure_url.replace(
                "upload/",
                "upload/c_thumb,g_faces,w_400,h_300/"
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
