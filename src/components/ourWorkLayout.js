import React from "react"
import { Container, Row, Col, Card } from "react-bootstrap"

const ourWorkLayout = props => {
  const newImages = props.images.map(imageUrl => {
    // console.log(imageUrl.node.url)
    const returnUrl = imageUrl.node.url
    // const regexupload = /upload/ / g
    const newUrl = returnUrl.replace("upload/", "upload/w_100,h_100/")
    return newUrl
  })
  console.log("newImages", newImages)
  return (
    <Container>
      {console.log("newImages", newImages)}
      {/* {console.log("props", props)} */}
      <h3>Quilts and Blankets</h3>
      <Row style={{ minHeight: "500px" }}>
        <Col md={6}>1 of 2</Col>
        <Col md={6}>
          <Row style={{ paddingBottom: "10px" }}>
            <Col md={3}>
              <Card>
                <Card.Img
                  variant="top"
                  src={newImages[0]}
                  style={{
                    maxHeight: "100px",
                  }}
                />
              </Card>
            </Col>
            <Col md={3}>
              <Card>
                <Card.Img
                  variant="top"
                  src={newImages[1]}
                  style={{
                    maxHeight: "100px",
                  }}
                />
              </Card>
            </Col>
            <Col md={3}>
              <Card>
                <Card.Img
                  variant="top"
                  src={newImages[2]}
                  style={{
                    maxHeight: "100px",
                  }}
                />
              </Card>
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
        {["OUR WORK", "CAPS", "BOOTIES"].map((row, index) => {
          return (
            <Col md={4} key={`${row}${index}`}>
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

        {["QUILTS & BLANKETS", "CASKETS", "POSITIONING AID COVERS"].map(
          (row, index) => {
            return (
              <Col md={4} key={`${row}${index}`}>
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
          }
        )}

        {["MEMORY BOXES", "DIAPER SHIRTS", "LEG WARMERS"].map((row, index) => {
          return (
            <Col md={4} key={`${row}${index}`}>
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
}

export default ourWorkLayout
