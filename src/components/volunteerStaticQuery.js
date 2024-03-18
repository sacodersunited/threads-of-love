import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { VolunteerPage } from "./VolunteerPage"

const boardMembers = [
  {
    id: 1637,
    name: "Linda Tougaw",
    position: "Manager/Coordinator of Hospital Deliveries",
    imgSrc:
      "https://res.cloudinary.com/azrael/image/upload/c_scale,w_300/v1579835178/board%20members/D25A1637-Edit_crcxqb.jpg",
  },

  {
    id: 1152,
    name: "Penni Harben",
    position: "Manager - Yarn Production",
    imgSrc:
      "https://res.cloudinary.com/azrael/image/upload/c_scale,w_300/v1579835178/board%20members/D25A1152_kywyv8.jpg",
  },
  {
    id: 1168,
    name: "Linda Coward",
    position: "Chapter Director",
    imgSrc:
      "https://res.cloudinary.com/azrael/image/upload/c_scale,w_300/v1606097411/board%20members/linda-new2_eqdwgb.jpg",
  },

  {
    id: 1164,
    name: "Jerry Coward",
    position: "Treasurer/Accounts Manager/Associate Director",
    imgSrc:
      "https://res.cloudinary.com/azrael/image/upload/c_scale,w_300/v1579835178/board%20members/D25A1164-Edit_l6nbwb.jpg",
  },
  {
    id: 1165,
    name: "Phyllis Graham",
    position: "Directer of Internment",
    imgSrc:
      "https://res.cloudinary.com/azrael/image/upload/c_scale,w_300/v1579835178/board%20members/PhyllisGraham.jpg",
  },
  {
    id: 1166,
    name: "Volunteer!",
    position: "Empty Position",
    imgSrc: "",
  },
]

const VolunteerStaticQuery = (props) => (
  <StaticQuery
    query={graphql`
      query volunteerImages {
        allCloudinaryMedia(filter: { tags: { eq: "volunteer" } }) {
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
    render={(data) => (
      <VolunteerPage
        boardMembers={boardMembers}
        images={data.allCloudinaryMedia.edges}
      />
    )}
  />
)
export default VolunteerStaticQuery
