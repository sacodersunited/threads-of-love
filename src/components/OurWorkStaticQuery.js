import React from "react"
import { StaticQuery, graphql } from "gatsby"
import OurWorkLayout from "./ourWorkLayout"

const OurWorkStaticQuery = props => (
  <StaticQuery
    query={graphql`
      query ourWorkQuery {
        allCloudinaryMedia {
          edges {
            node {
              id
              type
              url
              bytes
              created_at
              format
              version
              width
              resource_type
              secure_url
              public_id
            }
          }
        }
      }
    `}
    render={data => <OurWorkLayout images={data.allCloudinaryMedia.edges} />}
  />
)
export default OurWorkStaticQuery
