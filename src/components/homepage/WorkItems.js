import React from "react"
import { Row, Col, Card } from "react-bootstrap"
import { css } from "@emotion/core"
import { Link } from "gatsby"
import { productThumbs } from "../helpers"

const WorkItems = () => (
  <Row className="mb-5">
    {productThumbs.map(row => {
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
                <Card.Title className="d-flex align-items-end justify-content-center mx-auto h-80 text-dark">
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
