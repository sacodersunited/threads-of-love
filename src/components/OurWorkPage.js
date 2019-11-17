import React from "react"
import { Container, Row, Col, Card, Image } from "react-bootstrap"
import { css } from "@emotion/core"
import "../css/ourwork.css"

const categories = [
  "OUR WORK",
  "CAPS",
  "BOOTIES",
  "QUILTS & BLANKETS",
  "CASKETS",
  "POSITIONING & COVERS",
  "MEMORY BOXES",
  "DIAPER SHIRTS",
  "LEG WARMERS",
]

class OurWorkPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      selected: "Our Work",
      mobileSelectIndex: 0,
    }

    this.handleCategory = this.handleCategory.bind(this)
  }

  handleCategory(e, cat, indexNum) {
    let category = this.state.selected
    let menuIndex = this.state.mobileSelectIndex
    category = cat
    menuIndex = indexNum
    this.setState({
      selected: category,
      mobileSelectIndex: menuIndex,
    })
  }

  render() {
    const newImages = this.props.images.map(imageUrl =>
      imageUrl.node.url.replace("upload/", "upload/w_200,h_200,c_scale/")
    )

    const bottomImages = this.props.images.map(imageUrl =>
      imageUrl.node.url.replace("upload/", "upload/w_340,c_scale/")
    )
    console.log("this.props", this.props, newImages, bottomImages)

    return (
      <Container>
        <h1 id="desktop-title">{this.state.selected}</h1>

        {/* Mobile only */}
        <h3 id="mobile-title">{this.state.selected}</h3>
        <nav class="breadcrumb" id="mobile-select" aria-label="breadcrumb">
          {categories.map((cat, index) => {
            return (
              <a
                class={
                  index === this.state.mobileSelectIndex
                    ? "breadcrumb-item active"
                    : "breadcrumb-item"
                }
                href="#"
                onClick={e => this.handleCategory(e, cat, index)}
              >
                {cat}
              </a>
            )
          })}
        </nav>

        <Row
          className="align-items-center justify-content-center mx-auto"
          id="main-row"
        >
          <Col md={6}>
            <Card id="maincard" style={{ minHeight: "550px" }}>
              <Image
                src={this.props.images[0].node.url.replace(
                  "upload/",
                  "upload/w_500,h_550,c_scale/"
                )}
                className="main-image"
                style={{ maxHeight: "550px" }}
              />
            </Card>
          </Col>
          <Col md={6}>
            <Row className="align-items-center justify-content-center mx-auto items">
              <Col md={3}>
                <Card>
                  <Card.Img src={newImages[0]} className="thumbs" />
                </Card>
              </Col>
              <Col md={3}>
                <Card>
                  <Card.Img src={newImages[1]} className="thumbs" />
                </Card>
              </Col>
              <Col md={3}>
                <Card>
                  <Card.Img src={newImages[2]} className="thumbs" />
                </Card>
              </Col>
            </Row>
            <Row className="align-items-center justify-content-center mx-auto items">
              <Col md={3}>
                <Card>
                  <Card.Img src={newImages[3]} className="thumbs" />
                </Card>
              </Col>
              <Col md={3}>
                <Card>
                  <Card.Img src={newImages[4]} className="thumbs" />
                </Card>
              </Col>
              <Col md={3}>
                <Card>
                  <Card.Img src={newImages[5]} className="thumbs" />
                </Card>
              </Col>
            </Row>
            <Row className="align-items-center justify-content-center mx-auto items">
              <Col md={3}>
                <Card>
                  <Card.Img src={newImages[6]} className="thumbs" />
                </Card>
              </Col>
              <Col md={3}>
                <Card>
                  <Card.Img src={newImages[7]} className="thumbs" />
                </Card>
              </Col>
              <Col md={3}>
                <Card>
                  <Card.Img src={newImages[8]} className="thumbs" />
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row id="category-row">
          {["OUR WORK", "CAPS", "BOOTIES"].map((row, index) => {
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
                    className="category"
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
                    <Card.Img
                      src={bottomImages[index]}
                      className="category"
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
                    <Card.Img
                      src={bottomImages[index + 6]}
                      className="category"
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
            }
          )}
        </Row>
      </Container>
    )
  }
}

export default OurWorkPage
