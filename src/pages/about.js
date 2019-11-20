import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {
  Container,
  Row,
  Col,
  Image,
  Button,
  ButtonToolbar,
} from "react-bootstrap"

const About = () => (
  <Layout>
    <SEO title="About Threads Of Love" />
    <Container>
      <h1>About Us </h1>
    </Container>
    <Row className="mt-5 mb-5">
      <Col md={6} className="mt-5 mb-5">
        <Image src="https://picsum.photos/id/10/600/300" fluid />
      </Col>
      <Col md={6} className="mt-5 mb-5">
        <h2>Who We Are</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae labore
          ullam excepturi possimus voluptates harum sunt ut suscipit obcaecati
          fuga! Debitis officiis vero cupiditate maiores qui sequi, repudiandae
          ipsam doloribus. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Ut, ipsa cupiditate. Nobis fugiat reiciendis voluptatem
          consectetur non dolorem odio, neque facilis sit qui nisi delectus
          dicta aut suscipit consequatur explicabo? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Ut, ipsa cupiditate. Nobis fugiat
          reiciendis voluptatem consectetur non dolorem odio, neque facilis sit
          qui nisi delectus dicta aut suscipit consequatur explicabo?
        </p>
      </Col>

      <Col md={6} className="mt-5 mb-5">
        <h2>What We Do</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae labore
          ullam excepturi possimus voluptates harum sunt ut suscipit obcaecati
          fuga! Debitis officiis vero cupiditate maiores qui sequi, repudiandae
          ipsam doloribus. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Ut, ipsa cupiditate. Nobis fugiat reiciendis voluptatem
          consectetur non dolorem odio, neque facilis sit qui nisi delectus
          dicta aut suscipit consequatur explicabo?
        </p>
      </Col>
      <Col md={6} className="mt-5 mb-5">
        <Image src="https://picsum.photos/id/1001/600/300" fluid />
      </Col>

      <Col md={6} className="mt-5 mb-5">
        <Image src="https://picsum.photos/id/1010/600/300" fluid />
      </Col>
      <Col md={6} className="mt-5 mb-5">
        <h2>Our Mission and Ministry</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae labore
          ullam excepturi possimus voluptates harum sunt ut suscipit obcaecati
          fuga! Debitis officiis vero cupiditate maiores qui sequi, repudiandae
          ipsam doloribus. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Ut, ipsa cupiditate. Nobis fugiat reiciendis voluptatem
          consectetur non dolorem odio, neque facilis sit qui nisi delectus
          dicta aut suscipit consequatur explicabo?
        </p>
      </Col>

      <Col md={6} className="mt-5 mb-5">
        <h2>How Can You Help?</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae labore
          ullam excepturi possimus voluptates harum sunt ut suscipit obcaecati
          fuga! Debitis officiis vero cupiditate maiores qui sequi, repudiandae
          ipsam doloribus. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Ut, ipsa cupiditate. Nobis fugiat reiciendis voluptatem
          consectetur non dolorem odio, neque facilis sit qui nisi delectus
          dicta aut suscipit consequatur explicabo?
        </p>
        <ButtonToolbar>
          <Button variant="primary">Donate</Button>
          <Button variant="outline-primary" className="ml-3">
            Volunteer
          </Button>
        </ButtonToolbar>
      </Col>
      <Col md={6} className="mt-5 mb-5">
        <Image src="https://picsum.photos/id/1066/600/300" fluid />
      </Col>

      <Col md={6} className="mt-5 mb-5">
        <Image src="https://picsum.photos/id/312/600/300" fluid />
      </Col>
      <Col md={6} className="mt-5 mb-5">
        <h2>What are the Primary Needs of the Ministry?</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae labore
          ullam excepturi possimus voluptates harum sunt ut suscipit obcaecati
          fuga! Debitis officiis vero cupiditate maiores qui sequi, repudiandae
          ipsam doloribus. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Ut, ipsa cupiditate. Nobis fugiat reiciendis voluptatem
          consectetur non dolorem odio, neque facilis sit qui nisi delectus
          dicta aut suscipit consequatur explicabo?
        </p>
      </Col>
    </Row>
  </Layout>
)

export default About
