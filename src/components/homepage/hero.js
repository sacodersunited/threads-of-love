import React from "react"
import { Link } from "gatsby"
import { Container } from "react-bootstrap"
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
          url("https://res.cloudinary.com/azrael/image/upload/c_scale,q_auto:best,w_1440/v1579662063/nyana-stoica-ikGJw9SYUuM-unsplash_iygdbp.jpg");
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
        <h1>For Heaven&apos;s Sake</h1>
        <p>
          We are a Christian faith based nationally known organization dedicated
          to the production and distribution of clothing and care items for
          premature babies.
        </p>
        <Link to="/donate" className="btn btn-primary">
          Donate Now
        </Link>
      </Container>
    </div>
  </div>
)
export default Hero
