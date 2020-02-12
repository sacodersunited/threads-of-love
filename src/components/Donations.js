import React, { Component } from "react"
import { Jumbotron, Container, Col, Row } from "react-bootstrap"
import CountUp from "react-countup"
import VisibilitySensor from "react-visibility-sensor"
import TextLoop from "react-text-loop"
import { FaRegLifeRing, FaHospital } from "react-icons"
// import { IoMdPerson } from "react-icons/md"

class Donations extends Component {
  state = {
    didViewCountUp: false,
  }

  onVisibilityChange = isVisible => {
    if (isVisible) {
      this.setState({ didViewCountUp: true })
    }
  }

  render() {
    return (
      <Jumbotron style={{ background: "#007bff" }}>
        <Container>
          <Row>
            <Col md={6} style={{ margin: "0 auto" }}>
              <div style={{ textAlign: "center" }}>
                <div style={{ color: "white", display: "inline" }}>
                  <FaHospital size={100} style={{ padding: "5px" }} />
                </div>
                <VisibilitySensor
                  onChange={this.onVisibilityChange}
                  offset={{
                    top: 10,
                  }}
                  delayedCall
                >
                  <CountUp
                    delay={2}
                    end={this.state.didViewCountUp ? 6 : 0}
                    size={300}
                    separator=","
                    duration="3"
                    style={{
                      fontSize: "-webkit-xxx-large",
                      paddingLeft: "10px",
                      paddingRight: "10px",
                      color: "white",
                      verticalAlign: "middle",
                      fontFamily: "cursive",
                    }}
                  />
                </VisibilitySensor>
                <span
                  style={{
                    fontSize: "x-large",
                    color: "white",
                    fontWeight: "900px",
                    display: "inline",
                    marginRight: "50px",
                    verticalAlign: "middle",
                  }}
                >
                  South Texas Hospitals
                </span>
              </div>
              <div
                style={{
                  fontSize: "x-large",
                  color: "white",
                  fontWeight: "900px",
                  verticalAlign: "middle",
                  marginTop: "26px",
                }}
              >
                <TextLoop
                  springConfig={{ stiffness: 70, damping: 31 }}
                  adjustingSpeed={500}
                  children={[
                    "Christus Santa Rosa Children’s Hospital – downtown SATX",
                    "Christus Santa Rosa – Westover Hills SATX",
                    "Christus Santa Rosa – New Braunfels TX",
                    "St. Luke’s Baptist - SATX",
                    "Methodist Hospital – Stone Oak, SATX",
                    "Driscoll Children’s Hospital – Corpus Christi TX",
                  ]}
                ></TextLoop>
              </div>
            </Col>
            <Col md={6}>
              <div style={{ textAlign: "center" }}>
                <div style={{ color: "white", display: "inline" }}>
                  <FaRegLifeRing size={100} style={{ padding: "5px" }} />
                </div>
                <VisibilitySensor
                  onChange={this.onVisibilityChange}
                  offset={{
                    top: 10,
                  }}
                  delayedCall
                >
                  <CountUp
                    delay={2}
                    end={this.state.didViewCountUp ? 4698 : 0}
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
                </VisibilitySensor>
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
            {/* <Col md={6}> */}
            {/* <IoMdPerson size={100} style={{ padding: "5px" }}></IoMdPerson> */}
            {/* </Col> */}
          </Row>
        </Container>
      </Jumbotron>
    )
  }
}

export default Donations
