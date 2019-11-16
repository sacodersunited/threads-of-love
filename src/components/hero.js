import React from "react"
import { Link } from "gatsby"
import { Container, Jumbotron } from "react-bootstrap"
import { css } from "@emotion/core"

const Hero = () => (
  <div
    css={css`
      position: relative;
    `}
  >
    <div
      css={css`
        overflow: hidden;
        height: 100vh;
        background-image: linear-gradient(
            rgba(0, 0, 0, 0.5),
            rgba(0, 0, 0, 0.5)
          ),
          url("https://picsum.photos/1440/800");
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
      `}
    >
      <Container
        css={css`
          position: absolute;
          top: 50%;
          left: 50%;
          width: 400px;
          -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
          color: white;
        `}
      >
        <h1 className="hero-title">Threads of Love</h1>
        <h1>For Heavan&apos;s Sake</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi
          aliquid sequi libero odit.
        </p>
        <Link to="/donate" className="btn btn-primary">
          Donate Now
        </Link>
      </Container>
    </div>
  </div>
)
export default Hero
