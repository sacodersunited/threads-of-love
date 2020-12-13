import React from "react"
import { Container, Row, Col, Card, Image } from "react-bootstrap"
import { css } from "@emotion/core"
import "../css/ourwork.css"
import { productThumbs } from "./helpers"

const categories = [
  "OUR WORK",
  "CAPS",
  "BOOTIES / LEG WARMERS",
  "QUILTS & BLANKETS",
  "CASKETS / URNS",
  "POSITIONING AID / Z-FLO COVERS",
  "MEMORY BOXES",
  "DIAPER SHIRTS",
  "GOWNS",
]

class OurWorkPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      selected: " Picture Perfect Especially For Babies",
      mobileSelectIndex: 0,
      mainImageIndex: 0,
    }

    this.handleCategory = this.handleCategory.bind(this)
    this.changeMainImage = this.changeMainImage.bind(this)
  }

  handleCategory(e, cat, indexNum) {
    let category = this.state.selected
    let menuIndex = this.state.mobileSelectIndex
    category = cat
    menuIndex = indexNum
    this.setState({
      selected: category,
      mobileSelectIndex: menuIndex,
      mainImageIndex: 0,
    })
  }

  changeMainImage(index) {
    this.setState({
      mainImageIndex: index,
    })
  }

  render() {
    const ourWorkImages = this.props.images.other.edges.map(imageUrl =>
      imageUrl.node.secure_url.replace("upload/", "upload/w_200,h_200,c_scale/")
    )

    const capsImages = this.props.images.caps.edges.map(imageUrl =>
      imageUrl.node.secure_url.replace("upload/", "upload/w_200,h_200,c_scale/")
    )

    const bootiesImages = this.props.images.booties.edges.map(imageUrl =>
      imageUrl.node.secure_url.replace("upload/", "upload/w_200,h_200,c_scale/")
    )

    const quiltImages = this.props.images.quilts.edges.map(imageUrl =>
      imageUrl.node.secure_url.replace("upload/", "upload/w_200,h_200,c_scale/")
    )

    const casketImages = this.props.images.caskets.edges.map(imageUrl =>
      imageUrl.node.secure_url.replace("upload/", "upload/w_200,h_200,c_scale/")
    )

    const positionImages = this.props.images.positions.edges.map(imageUrl =>
      imageUrl.node.secure_url.replace("upload/", "upload/w_200,h_200,c_scale/")
    )

    const memoryBoxImages = this.props.images.memoryBoxes.edges.map(imageUrl =>
      imageUrl.node.secure_url.replace("upload/", "upload/w_200,h_200,c_scale/")
    )

    const diaperShirtImages = this.props.images.diaperShirts.edges.map(
      imageUrl =>
        imageUrl.node.secure_url.replace(
          "upload/",
          "upload/w_200,h_200,c_scale/"
        )
    )

    const gowns = this.props.images.gowns.edges.map(imageUrl =>
      imageUrl.node.secure_url.replace("upload/", "upload/w_200,h_200,c_scale/")
    )

    const bottomImages = this.props.images.other.edges.map(imageUrl =>
      imageUrl.node.secure_url.replace("upload/", "upload/w_340,c_scale/")
    )
    console.log("this.props", this.props)

    return (
      <Container>
        <h1 id="desktop-title">{this.state.selected}</h1>

        {/* Mobile only */}
        <h3 id="mobile-title">{this.state.selected}</h3>
        <nav className="breadcrumb" id="mobile-select" aria-label="breadcrumb">
          {categories.map((cat, index) => {
            return (
              <a
                key={`nav-${index}`}
                className={
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
              {this.state.selected === "OUR WORK" && (
                <Image
                  src={this.props.images.other.edges[
                    this.state.mainImageIndex
                  ].node.secure_url.replace(
                    "upload/",
                    "upload/w_500,h_550,c_scale/"
                  )}
                  className="main-image"
                  style={{ maxHeight: "550px" }}
                />
              )}

              {this.state.selected === "CAPS" && (
                <Image
                  src={this.props.images.caps.edges[
                    this.state.mainImageIndex
                  ].node.secure_url.replace(
                    "upload/",
                    "upload/w_500,h_550,c_scale/"
                  )}
                  className="main-image"
                  style={{ maxHeight: "550px" }}
                />
              )}

              {this.state.selected === "BOOTIES / LEG WARMERS" && (
                <Image
                  src={this.props.images.booties.edges[
                    this.state.mainImageIndex
                  ].node.secure_url.replace(
                    "upload/",
                    "upload/w_500,h_550,c_scale/"
                  )}
                  className="main-image"
                  style={{ maxHeight: "550px" }}
                />
              )}

              {this.state.selected === "QUILTS & BLANKETS" && (
                <Image
                  src={this.props.images.quilts.edges[
                    this.state.mainImageIndex
                  ].node.secure_url.replace(
                    "upload/",
                    "upload/w_500,h_550,c_scale/"
                  )}
                  className="main-image"
                  style={{ maxHeight: "550px" }}
                />
              )}

              {this.state.selected === "CASKETS / URNS" && (
                <Image
                  src={this.props.images.caskets.edges[
                    this.state.mainImageIndex
                  ].node.secure_url.replace(
                    "upload/",
                    "upload/w_500,h_550,c_scale/"
                  )}
                  className="main-image"
                  style={{ maxHeight: "550px" }}
                />
              )}

              {this.state.selected === "POSITIONING AID / Z-FLO COVERS" && (
                <Image
                  src={this.props.images.positions.edges[
                    this.state.mainImageIndex
                  ].node.secure_url.replace(
                    "upload/",
                    "upload/w_500,h_550,c_scale/"
                  )}
                  className="main-image"
                  style={{ maxHeight: "550px" }}
                />
              )}
              {this.state.selected === "MEMORY BOXES" && (
                <Image
                  src={this.props.images.memoryBoxes.edges[
                    this.state.mainImageIndex
                  ].node.secure_url.replace(
                    "upload/",
                    "upload/w_500,h_550,c_scale/"
                  )}
                  className="main-image"
                  style={{ maxHeight: "550px" }}
                />
              )}
              {this.state.selected === "DIAPER SHIRTS" && (
                <Image
                  src={this.props.images.diaperShirts.edges[
                    this.state.mainImageIndex
                  ].node.secure_url.replace(
                    "upload/",
                    "upload/w_500,h_550,c_scale/"
                  )}
                  className="main-image"
                  style={{ maxHeight: "550px" }}
                />
              )}
              {this.state.selected === "GOWNS" && (
                <Image
                  src={this.props.images.gowns.edges[
                    this.state.mainImageIndex
                  ].node.secure_url.replace(
                    "upload/",
                    "upload/w_500,h_550,c_scale/"
                  )}
                  className="main-image"
                  style={{ maxHeight: "550px" }}
                />
              )}
            </Card>
          </Col>
          <Col md={6}>
            <Row>
              {this.state.selected === "OUR WORK" &&
                ourWorkImages.map((image, index) => (
                  <Col md={4} key={index}>
                    <Card>
                      <Card.Img
                        src={image}
                        className="thumbs"
                        onMouseEnter={this.changeMainImage.bind(this, index)}
                      />
                    </Card>
                  </Col>
                ))}
              {this.state.selected === "CAPS" &&
                capsImages.map((image, index) => (
                  <Col md={4} key={index}>
                    <Card>
                      <Card.Img
                        src={image}
                        className="thumbs"
                        onMouseEnter={this.changeMainImage.bind(this, index)}
                      />
                    </Card>
                  </Col>
                ))}
              {this.state.selected === "BOOTIES / LEG WARMERS" &&
                bootiesImages.map((image, index) => (
                  <Col md={4} key={index}>
                    <Card>
                      <Card.Img
                        src={image}
                        className="thumbs"
                        onMouseEnter={this.changeMainImage.bind(this, index)}
                      />
                    </Card>
                  </Col>
                ))}
              {this.state.selected === "QUILTS & BLANKETS" &&
                quiltImages.map((image, index) => (
                  <Col md={4} key={index}>
                    <Card>
                      <Card.Img
                        src={image}
                        className="thumbs"
                        onMouseEnter={this.changeMainImage.bind(this, index)}
                      />
                    </Card>
                  </Col>
                ))}
              {this.state.selected === "CASKETS / URNS" &&
                casketImages.map((image, index) => (
                  <Col md={4} key={index}>
                    <Card>
                      <Card.Img
                        src={image}
                        className="thumbs"
                        onMouseEnter={this.changeMainImage.bind(this, index)}
                      />
                    </Card>
                  </Col>
                ))}
              {this.state.selected === "POSITIONING AID / Z-FLO COVERS" &&
                positionImages.map((image, index) => (
                  <Col md={4} key={index}>
                    <Card>
                      <Card.Img
                        src={image}
                        className="thumbs"
                        onMouseEnter={this.changeMainImage.bind(this, index)}
                      />
                    </Card>
                  </Col>
                ))}
              {this.state.selected === "MEMORY BOXES" &&
                memoryBoxImages.map((image, index) => (
                  <Col md={4} key={index}>
                    <Card>
                      <Card.Img
                        src={image}
                        className="thumbs"
                        onMouseEnter={this.changeMainImage.bind(this, index)}
                      />
                    </Card>
                  </Col>
                ))}
              {this.state.selected === "DIAPER SHIRTS" &&
                diaperShirtImages.map((image, index) => (
                  <Col md={4} key={index}>
                    <Card>
                      <Card.Img
                        src={image}
                        className="thumbs"
                        onMouseEnter={this.changeMainImage.bind(this, index)}
                      />
                    </Card>
                  </Col>
                ))}
              {this.state.selected === "GOWNS" &&
                gowns.map((image, index) => (
                  <Col md={4} key={index}>
                    <Card>
                      <Card.Img
                        src={image}
                        className="thumbs"
                        onMouseEnter={this.changeMainImage.bind(this, index)}
                      />
                    </Card>
                  </Col>
                ))}
            </Row>
          </Col>
        </Row>
        <Row id="category-row">
          {productThumbs.map((row, index) => {
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
                    src={row.imgUrl}
                    onClick={e => this.handleCategory(e, row.title)}
                    className="category"
                  />
                  <Card.ImgOverlay className="d-flex">
                    <Card.Title className="d-flex align-items-end justify-content-center mx-auto h-80">
                      {row.title}
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
}

export default OurWorkPage
