import React from "react"
import { StaticQuery, graphql } from "gatsby"
import OurWorkPage from "./OurWorkPage"

const OurWorkStaticQuery = props => (
  <StaticQuery
    query={graphql`
      query ourProducts {
        other: allCloudinaryMedia(
          limit: 15
          filter: { tags: { eq: "other" } }
        ) {
          edges {
            node {
              id
              secure_url
              tags
            }
          }
        }
        caps: allCloudinaryMedia(limit: 15, filter: { tags: { eq: "caps" } }) {
          edges {
            node {
              id
              secure_url
              tags
            }
          }
        }
        booties: allCloudinaryMedia(
          limit: 15
          filter: { tags: { eq: "booties" } }
        ) {
          edges {
            node {
              id
              secure_url
              tags
            }
          }
        }
        quilts: allCloudinaryMedia(
          limit: 15
          filter: { tags: { eq: "quilts and blankets" } }
        ) {
          edges {
            node {
              id
              secure_url
              tags
            }
          }
        }
        caskets: allCloudinaryMedia(
          limit: 15
          filter: { tags: { eq: "caskets" } }
        ) {
          edges {
            node {
              id
              secure_url
              tags
            }
          }
        }
        positions: allCloudinaryMedia(
          limit: 15
          filter: { tags: { eq: "positioning aid" } }
        ) {
          edges {
            node {
              id
              secure_url
              tags
            }
          }
        }
        memoryBoxes: allCloudinaryMedia(
          limit: 15
          filter: { tags: { eq: "memory boxes" } }
        ) {
          edges {
            node {
              id
              secure_url
              tags
            }
          }
        }
        diaperShirts: allCloudinaryMedia(
          limit: 15
          filter: { tags: { eq: "diaper" } }
        ) {
          edges {
            node {
              id
              secure_url
              tags
            }
          }
        }
        legWarmers: allCloudinaryMedia(
          limit: 15
          filter: { tags: { eq: "leg warmers" } }
        ) {
          edges {
            node {
              id
              secure_url
              tags
            }
          }
        }
      }
    `}
    render={data => <OurWorkPage images={data} />}
  />
)
export default OurWorkStaticQuery
