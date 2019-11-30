import React, { Component } from "react"
import { Jumbotron, Container, Col, Row } from "react-bootstrap"
import CountUp from "react-countup"
import VisibilitySensor from "react-visibility-sensor"
import { FaRegLifeRing } from "react-icons/fa"

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
            <Col md={12} style={{ margin: "0 auto" }}>
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
                    end={this.state.didViewCountUp ? 2568 : 0}
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
          </Row>
        </Container>
      </Jumbotron>
    )
  }
}

export default Donations
