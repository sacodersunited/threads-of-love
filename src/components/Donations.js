import React from "react"
import { Jumbotron, Container, Col, Row } from "react-bootstrap"
import CountUp from "react-countup"
import { FaRegLifeRing } from "react-icons/fa"

const Donations = () => (
  <Jumbotron style={{ background: "#007bff" }}>
    <Container>
      <Row>
        <Col md={12} style={{ margin: "0 auto" }}>
          <div style={{ textAlign: "center" }}>
            <div style={{ color: "white", display: "inline" }}>
              <FaRegLifeRing size={100} style={{ padding: "5px" }} />
            </div>
            <CountUp
              delay={2}
              end={2568}
              size={300}
              separator=","
              duration="5"
              style={{
                fontSize: "-webkit-xxx-large",
                paddingLeft: "10px",
                paddingRight: "10px",
                color: "white",
                verticalAlign: "middle",
                fontFamily: "cursive",
              }}
            />
            <span
              style={{
                fontSize: "xx-large",
                color: "white",
                fontWeight: "900px",
                display: "inline",
                marginRight: "50px",
                verticalAlign: "middle",
              }}
            >
              Donations!
            </span>
          </div>
        </Col>
      </Row>
    </Container>
  </Jumbotron>
)

export default Donations
