import React, { Component } from "react"
import { Jumbotron, Container, Col, Row } from "react-bootstrap"
import CountUp from "react-countup"
import VisibilitySensor from "react-visibility-sensor"
import TextLoop from "react-text-loop"
import { FaBaby, FaHospital } from "react-icons/fa"
import { css } from "@emotion/core"

class Donations extends Component {
  state = {
    didViewCountUp: false,
  }

  onVisibilityChange = (isVisible) => {
    if (isVisible) {
      this.setState({ didViewCountUp: true })
    }
  }

  render() {
    return (
      <Jumbotron style={{ background: "rebeccapurple" }}>
        <Container>
          <Row>
            <Col md={6} style={{ margin: "0 auto" }}>
              <div style={{ textAlign: "center" }}>
                <div style={{ color: "white", display: "inline" }}>
                  <FaHospital
                    size={100}
                    style={{ padding: "5px" }}
                    css={css`
                      @media (max-width: 575.98px) {
                        width: 60px;
                      }
                    `}
                  />
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
                    end={this.state.didViewCountUp ? 7 : 0}
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
                  css={css`
                    font-size: x-large;
                    color: white;
                    font-weight: 900px;
                    display: inline;
                    margin-right: 50px;
                    vertical-align: middle;
                    @media (max-width: 575.98px) {
                      font-size: 16px;
                    }
                  `}
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
                    "Christus Santa Rosa Children’s Hospital – downtown San Antonio TX",
                    "Christus Santa Rosa – Westover Hills San Antonio TX",
                    "Christus Santa Rosa – New Braunfels TX",
                    "St. Luke’s Baptist - San Antonio TX",
                    "Methodist Hospital – Stone Oak, San Antonio TX",
                    "Driscoll Children’s Hospital – Corpus Christi TX",
                    "Methodist Hospital Medical Center",
                    "Eden’s Song ministry",
                  ]}
                  css={css`
                    @media (max-width: 575.98px) {
                      font-size: 16px;
                    }
                  `}
                ></TextLoop>
              </div>
            </Col>
            <Col md={6}>
              <div
                css={css`
                  text: white;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  color: white;
                `}
              >
                <FaBaby
                  size={100}
                  style={{ padding: "5px" }}
                  css={css`
                    @media (max-width: 575.98px) {
                      width: 60px;
                    }
                  `}
                />
                <VisibilitySensor
                  onChange={this.onVisibilityChange}
                  offset={{
                    top: 10,
                  }}
                  delayedCall
                >
                  <CountUp
                    delay={2}
                    end={this.state.didViewCountUp ? 8205 : 0}
                    size={300}
                    separator=","
                    duration="200"
                    style={{
                      fontSize: "1.5rem",
                      paddingLeft: "10px",
                      paddingRight: "10px",
                      color: "white",
                      verticalAlign: "middle",
                      fontFamily: "cursive",
                    }}
                  />
                </VisibilitySensor>
                <span
                  css={css`
                    font-size: x-large;
                    color: white;
                    font-weight: 900px;
                    display: inline;
                    margin-right: 50px;
                    vertical-align: middle;
                    @media (max-width: 575.98px) {
                      font-size: 16px;
                    }
                  `}
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
