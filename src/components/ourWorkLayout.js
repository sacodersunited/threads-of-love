import React from "react"
import { Container, Row, Col, Card } from "react-bootstrap"
import { css } from "@emotion/core"
import "../css/ourwork.css"

const ourWorkLayout = props => {
  const newImages = props.images.map(imageUrl => {
    const returnUrl = imageUrl.node.url
    const newUrl = returnUrl.replace("upload/", "upload/w_100,h_100/")
    return newUrl
  })

  const bottomImages = props.images.map(imageUrl => {
    const returnUrl = imageUrl.node.url
    const newUrl = returnUrl.replace("upload/", "upload/w_340,c_scale/")
    return newUrl
  })
  console.log("newImages", newImages)
  console.log("bottom IMages", bottomImages)
  return (
    <Container>
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
                  maxHeight: "100px",
                }}
              >
                <Card.Img
                  variant="top"
                  src={newImages[3]}
                  style={{
                    maxHeight: "100px",
                  }}
                />
              </Card>
            </Col>
            <Col md={3}>
              <Card
                style={{
                  maxHeight: "100px",
                }}
              >
                <Card.Img
                  variant="top"
                  src={newImages[4]}
                  style={{
                    maxHeight: "100px",
                  }}
                />
              </Card>
            </Col>
            <Col md={3}>
              <Card
                style={{
                  maxHeight: "100px",
                }}
              >
                <Card.Img
                  variant="top"
                  src={newImages[5]}
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
                  maxHeight: "100px",
                }}
              >
                <Card.Img
                  variant="top"
                  src={newImages[6]}
                  style={{
                    maxHeight: "100px",
                  }}
                />
              </Card>
            </Col>
            <Col md={3}>
              <Card
                style={{
                  maxHeight: "100px",
                }}
              >
                <Card.Img
                  variant="top"
                  src={newImages[7]}
                  style={{
                    maxHeight: "100px",
                  }}
                />
              </Card>
            </Col>
            <Col md={3}>
              <Card
                style={{
                  maxHeight: "100px",
                }}
              >
                <Card.Img
                  variant="top"
                  src={newImages[8]}
                  style={{
                    maxHeight: "100px",
                  }}
                />
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        {["OUR WORK", "CAPS", "BOOTIES"].map((row, index, items) => {
          return (
            <Col md={4} key={`${row}${index}`}>
              <Card
                css={css`
                  max-height: 250px;
                  margin-bottom: 10px;
                `}
              >
                <Card.Img src={bottomImages[index + 1]} />
                <Card.ImgOverlay className="d-flex">
                  <Card.Title className="d-flex align-items-center justify-content-center mx-auto h-100">
                    {row}
                  </Card.Title>
                </Card.ImgOverlay>
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
                    maxHeight: "250px",
                    marginBottom: "10px",
                  }}
                >
                  <Card.Img
                    src={bottomImages[index]}
                    // style={{
                    //   width: "100%!important",
                    //   height: "250px",
                    //   objectFit: "cover",
                    //   opacity: "0.5",
                    // }}
                  />
                  <Card.ImgOverlay className="d-flex">
                    <Card.Title className="d-flex align-items-center justify-content-center mx-auto h-100">
                      {row}
                    </Card.Title>
                  </Card.ImgOverlay>
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
                  maxHeight: "250px",
                  marginBottom: "10px",
                }}
              >
                <Card.Img src={bottomImages[index + 6]} />
                <Card.ImgOverlay className="d-flex">
                  <Card.Title className="d-flex align-items-center justify-content-center mx-auto h-100">
                    {row}
                  </Card.Title>
                </Card.ImgOverlay>
              </Card>
            </Col>
          )
        })}
      </Row>
    </Container>
  )
}

export default ourWorkLayout
