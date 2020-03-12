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
          url("https://res.cloudinary.com/azrael/image/upload/c_scale,q_auto:best,w_1440/v1579986774/gabby-orcutt-crbxjQ4xisQ-unsplash_pdbzlb.jpg");
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
      `}
    >
      <Container
        css={css`
          position: absolute;
          top: 70%;
          left: 50%;
          width: 400px;
          -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
          color: white;

          @media (max-width: 575.98px) {
            max-width: 300px;
          }
        `}
      >
        <h1
          className="display-1"
          css={css`
            @media (max-width: 575.98px) {
              font-size: 32px;
            }
          `}
        >
          Threads of Love
        </h1>
        <h1
          css={css`
            @media (max-width: 575.98px) {
              font-size: 32px;
            }
          `}
        >
          For Heaven's Sake
        </h1>
        <p
          className="lead"
          css={css`
            @media (max-width: 575.98px) {
              font-size: 16px;
            }
          `}
        >
          Who knew that such small feet could leave such big imprints on your
          heart.
        </p>
      </Container>
    </div>
  </div>
)
export default Hero
