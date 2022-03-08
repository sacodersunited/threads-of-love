import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Link } from "gatsby"
import {
  Container,
  Row,
  Col,
  Image,
  Button,
  ButtonToolbar,
  ResponsiveEmbed,
} from "react-bootstrap"
import styled from "@emotion/styled"

const RowStyles = styled.div`
  color: ${(props) => (props.txtColor ? props.txtColor : "#212529")};
  background-color: ${(props) => (props.bkColor ? props.bkColor : "white")};
  min-height: 35rem;
  padding: 20px 0;
`

const RowWrapper = ({ children, bkColor, txtColor }) => (
  <RowStyles bkColor={bkColor} txtColor={txtColor}>
    <Container>
      <Row>{children}</Row>
    </Container>
  </RowStyles>
)

const About = () => (
  <Layout isFullWidth>
    <Container>
      <Seo title="About Threads Of Love" />

      <h1>About Us </h1>
      <span>Threads of Love Radio Interview with Linda Coward.</span>
      <iframe
        src="https://omny.fm/shows/project-one/project-one-threads-of-love-9-22-18/embed"
        width="100%"
        height="180px"
        frameBorder="0"
        title="threads of love radio spot"
      />
    </Container>

    <RowWrapper bkColor="rebeccapurple" txtColor="white">
      <Col md={6} className="mt-5 mb-5">
        {/* <ResponsiveEmbed aspectRatio="16by9" style={{ marginBottom: "10px" }}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/oymnIcZMMjU"
            frameborder="0"
            title="TOL invite"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </ResponsiveEmbed> */}
        <ResponsiveEmbed aspectRatio="16by9">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/Fyb91qeHCJc"
            frameborder="0"
            title="TOL Radio"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </ResponsiveEmbed>
      </Col>
      <Col md={6} className="mt-5 mb-5">
        <h2>Who We Are</h2>
        <p>
          Threads of Love (TOL) is a Christian faith based nationally known
          organization, dedicated to the production and distribution of clothing
          and care items for premature babies (living and deceased). Threads of
          Love For Heavens Sake at Community Bible Church (CBC) is an outreach
          ministry, made up of a diverse group of men and women volunteers. All
          donated materials and funds are used for charitable purposes. No
          officer, director, or individual associated with the organization
          receives compensation for services.
        </p>
        <h2>How Threads of Love Started</h2>
        <p>
          We're often asked why and how this ministry began. Click the button
          below to listen as Founder <b>Sissy Davis</b> tells her Threads of
          Love story and song Stitches of Love.
        </p>
        <a
          href="https://threadsoflove.org/videos/"
          target="_blank"
          rel="noreferrer"
        >
          <Button variant="primary">Learn More</Button>
        </a>
      </Col>
    </RowWrapper>

    <RowWrapper>
      <Col md={6} className="mt-5 mb-5">
        <h2>What We Do</h2>
        <p>
          We are a ministry providing a variety of hand-crafted items to
          premature newborns who are unable to leave the hospital NICU or PICU.
          Volunteers make quilts, blankets, caps, booties, positioning aids,
          laundry bags, swaddling blankets used to swaddle drug addicted babies
          born to mothers with drug addition. The items mentioned above are only
          a few of the handmade items made by our TOL volunteers. The gifts are
          then donated to hospital Neonatal Intensive Care Units and Pediatric
          Intensive Care Unit. Items produced by Threads of Love chapters are
          donated with no charge to the recipients.
        </p>
        <p>
          Hospitals presently receiving donations from TOL For Heaven's Sake
          are:
        </p>

        <ul>
          <li>
            Christus Santa Rosa Children's Hospital - Downtown San Antonio TX
          </li>
          <li>
            Christus Santa Rosa - Westover Hills, - Northwest San Antonio, TX
          </li>
          <li>Christus Santa Rosa - New Braunfels, TX</li>
          <li>St. Luke's Baptist Hospital San Antonio, Tx</li>
          <li>Methodist Hospital Stone Oak - San Antonio, TX</li>
          <li>Driscoll Children' s Hospital - Corpus Christi, TX</li>
          <li>Methodist Hospital Medical Center</li>
          <li>
            Eden' s Song Ministry - Home based in Lewiston, Idaho - Missionaries
            to 60 countries
          </li>
        </ul>
        <p>
          We also design and provide Internment Gowns and Blankets that are
          affectionately called Banquet Gowns or Angel Gowns, used for burial of
          premature babies that do not survive their early birth. Grieving
          parents or another family member is given a Memory Box. Memory Boxes
          contain items that help remind parents their tiny baby is being rocked
          in Heaven by Our Lord Jesus. When needed, a beautifully designed small
          casket or urn can be provided for the infants' burial.
        </p>
      </Col>
      <Col md={6} className="mt-5 mb-5">
        <Image
          alt="women sewing baby clothes"
          src="https://res.cloudinary.com/azrael/image/upload/c_scale,w_800/v1573686139/IMG_8555_cyagdo.jpg"
          fluid
          thumbnail
        />
      </Col>
    </RowWrapper>

    <RowWrapper bkColor="rebeccapurple" txtColor="white">
      <Col md={6} className="mt-5 mb-5">
        <Image
          src="https://res.cloudinary.com/azrael/image/upload/c_scale,w_800/v1573314518/cbcTOL/IMG_2736_bpwevr.jpg"
          fluid
          thumbnail
          alt="Threads of Love meeting with CBC"
        />
      </Col>
      <Col md={6} className="mt-5 mb-5">
        <h2>Our Mission and Ministry</h2>
        <p>
          Our mission is to provide necessary clothing and aids to premature
          babies in hospitals and burial items to families whose baby was unable
          to survive the premature birth.
        </p>
        <p>
          Our ministry is not only to the infant but also to family members. We
          pray to receive them during the time of their pain, fears, or stress
          may be too difficult to endure.
        </p>
      </Col>
    </RowWrapper>

    <RowWrapper>
      <Col md={6} className="mt-5 mb-5">
        <h2>How Can You Help?</h2>
        <p>Pray for our Threads of Love for Heaven's Sake.</p>
        <p>
          <Link to="/get-involved">Become involved.</Link>
        </p>
        <p>
          Come be part of the work, sew, crochet, knit, paint, or there are many
          items that require cutting and other hand work. This ministry includes
          men who help carry and setup the work rooms. We use sewing machines
          that are set up and packed away after each meeting, containers,
          cutting boards, etc. Their labor is an important to the other areas of
          our ministry. We also have members who are unable to attend meetings.
          Yet, they work at home and donate through our chapter.
        </p>
        <p>
          We accept donations of fabric, tools, art items, machines, and funds
          that are used to purchase and supply the items needed that are not
          otherwise provided by donations.
        </p>
        <ButtonToolbar>
          <Link to="/donate">
            <Button variant="primary">Donate</Button>
          </Link>
          <Link to="/get-involved">
            <Button variant="outline-primary" className="ml-3">
              Volunteer
            </Button>
          </Link>
          <Link to="/get-involved">
            <Button variant="outline-primary" className="ml-3">
              Get Involved
            </Button>
          </Link>
        </ButtonToolbar>
      </Col>
      <Col md={6} className="mt-5 mb-5">
        <Image
          alt="Threads of Love Baby products displayed on a table"
          src="https://res.cloudinary.com/azrael/image/upload/q_auto,f_auto/v1646016831/volunteers/DSC_0450_lofcjj.jpg"
          fluid
          thumbnail
        />
      </Col>
    </RowWrapper>

    <RowWrapper bkColor="rebeccapurple" txtColor="white">
      <Col md={6} className="mt-5 mb-5">
        <Image
          alt="Group of heart pillows"
          src="https://res.cloudinary.com/azrael/image/upload/c_scale,w_800/v1573686134/IMG_8533_c4qvg4.jpg"
          fluid
          thumbnail
        />
      </Col>
      <Col md={6} className="mt-5 mb-5">
        <h2>What are the Primary Needs of the Ministry?</h2>
        <p>
          As with any volunteer ministry, we can always use more hands and
          donations. All items are made by volunteers. Materials and labor are
          donated by members and friends who are part of the Threads of Love
          ministry. Threads of Love for Heaven's Sake at Community Bible Church
          is a 501(c)3 tax deferred charity organization. We accept funds and
          provide receipts to donors for their tax records upon request.
        </p>
      </Col>
    </RowWrapper>
  </Layout>
)

export default About
