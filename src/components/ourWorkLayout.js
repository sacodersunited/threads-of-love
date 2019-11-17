import React from "react"
import { Container, Row, Col, Card, Image } from "react-bootstrap"
import { css } from "@emotion/core"
import "../css/ourwork.css"

class OurWorkLayout extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      selected: "",
    }

    this.handleCategory = this.handleCategory.bind(this)
  }

  handleCategory(e, cat) {
    console.log("handleCat", e, cat)

    let category = this.state.selected
    category = cat
    this.setState({
      selected: category,
    })
  }

  render() {
    const newImages = this.props.images.map(imageUrl =>
      imageUrl.node.url.replace("upload/", "upload/w_100,h_100,c_scale/")
    )

    const bottomImages = this.props.images.map(imageUrl =>
      imageUrl.node.url.replace("upload/", "upload/w_340,c_scale/")
    )
    console.log("this.props", this.props)

    return (
      <Container>
        <h1>{this.state.selected}</h1>

        <Row
          style={{ minHeight: "500px" }}
          className="align-items-center justify-content-center mx-auto"
        >
          <Col md={6}>
            <Card>
              <Image
                src={this.props.images[0].node.url.replace(
                  "upload/",
                  "upload/w_400,h_400,c_scale/"
                )}
                style={{ maxHeight: "400px" }}
              />
            </Card>
          </Col>
          <Col md={6}>
            <Row
              style={{ paddingBottom: "10px" }}
              className="align-items-center justify-content-center mx-auto"
            >
              <Col md={3}>
                <Card>
                  <Card.Img
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
                    src={newImages[2]}
                    style={{
                      maxHeight: "100px",
                    }}
                  />
                </Card>
              </Col>
            </Row>
            <Row
              style={{ paddingBottom: "10px" }}
              className="align-items-center justify-content-center mx-auto"
            >
              <Col md={3}>
                <Card
                  style={{
                    maxHeight: "100px",
                  }}
                >
                  <Card.Img
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
                    src={newImages[5]}
                    style={{
                      maxHeight: "100px",
                    }}
                  />
                </Card>
              </Col>
            </Row>
            <Row
              style={{ paddingBottom: "10px" }}
              className="align-items-center justify-content-center mx-auto"
            >
              <Col md={3}>
                <Card
                  style={{
                    maxHeight: "100px",
                  }}
                >
                  <Card.Img
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
                    cursor: pointer;
                  `}
                >
                  <Card.Img
                    src={bottomImages[index + 1]}
                    onClick={e => this.handleCategory(e, row)}
                  />
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
                    css={css`
                      max-height: 250px;
                      margin-bottom: 10px;
                      cursor: pointer;
                    `}
                  >
                    <Card.Img src={bottomImages[index]} />
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

          {["MEMORY BOXES", "DIAPER SHIRTS", "LEG WARMERS"].map(
            (row, index) => {
              return (
                <Col md={4} key={`${row}${index}`}>
                  <Card
                    css={css`
                      max-height: 250px;
                      margin-bottom: 10px;
                      cursor: pointer;
                    `}
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
            }
          )}
        </Row>
      </Container>
    )
  }
}

export default OurWorkLayout
