import React from "react"
import { Row, Col, Card } from "react-bootstrap"
import { css } from "@emotion/core"
import { Link } from "gatsby"

const WorkItems = () => (
  <Row className="mb-5">
    {[
      {
        title: "OUR WORK",
        imgUrl:
          "https://res.cloudinary.com/azrael/image/upload/c_thumb,w_400/v1573686152/other%20items/IMG_8580_gvubah.jpg",
      },
      {
        title: "CAPS",
        imgUrl:
          "https://res.cloudinary.com/azrael/image/upload/c_thumb,w_400/v1573686112/caps/IMG_8591_k3mmmk.jpg",
      },
      {
        title: "BOOTIES",
        imgUrl:
          "https://res.cloudinary.com/azrael/image/upload/c_thumb,w_400/v1573686151/booties/IMG_8579_fblmrl.jpg",
      },
      {
        title: "QUILTS & BLANKETS",
        imgUrl:
          "https://res.cloudinary.com/azrael/image/upload/c_thumb,h_600,w_400/v1573686111/quilts%20and%20blankets/IMG_8586_eznwnz.jpg",
      },
      {
        title: "CASKETS",
        imgUrl:
          "https://res.cloudinary.com/azrael/image/upload/c_thumb,w_400/v1573686155/caskets/IMG_8583_s6kmxh.jpg",
      },
      {
        title: "POSITIONING AID COVERS",
        imgUrl:
          "https://res.cloudinary.com/azrael/image/upload/c_thumb,h_267,w_400/v1573686112/positioning%20aid%20and%20covers/IMG_8593_h4yrxw.jpg",
      },
      {
        title: "MEMORY BOXES",
        imgUrl:
          "https://res.cloudinary.com/azrael/image/upload/c_thumb,h_600,w_400/v1573686152/memory%20boxes/IMG_8577_vdludm.jpg",
      },
      {
        title: "DIAPER SHIRTS",
        imgUrl:
          "https://res.cloudinary.com/azrael/image/upload/c_thumb,h_267,w_400/v1573686130/diaper%20shirts/IMG_2755_qthydx.jpg",
      },
      {
        title: "LEG WARMERS",
        imgUrl:
          "https://res.cloudinary.com/azrael/image/upload/c_thumb,h_600,w_400/v1573686155/leg%20warmers/IMG_8584_eovgve.jpg",
      },
    ].map(row => {
      return (
        <Col md={4} key={`tol${row}`}>
          <Link to="/our-work">
            <Card
              css={css`
                max-height: 250px;
                margin-bottom: 10px;
                cursor: pointer;
              `}
            >
              <Card.Img src={row.imgUrl} className="category" />
              <Card.ImgOverlay className="d-flex">
                <Card.Title className="d-flex align-items-center justify-content-center mx-auto h-100 text-dark">
                  {row.title}
                </Card.Title>
              </Card.ImgOverlay>
            </Card>
          </Link>
        </Col>
      )
    })}
  </Row>
)

export default WorkItems
