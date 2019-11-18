import React from "react"
import {
  Carousel,
  Form,
  Button,
  Container,
  Row,
  Col,
  Image,
} from "react-bootstrap"
import InputMask from "react-input-mask"
import contactImage from "../images/contact.jpg"
import "../contact.css"

class ContactUsForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      contactUsForm: {
        name: "",
        email: "",
        phone: "",
      },
      validated: false,
      isDone: false,
    }

    this.onDropdownProgram = this.onDropdownProgram.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.onChangeForm = this.onChangeForm.bind(this)
    this.callGoogleScript = this.callGoogleScript.bind(this)
  }

  onChangeForm(e) {
    e.preventDefault()

    const contactInfo = this.state.contactUsForm

    switch (e.target.placeholder) {
      case "Name":
        contactInfo.name = e.target.value
        break
      case "Email":
        contactInfo.email = e.target.value
        break
      case "Phone Number":
        contactInfo.phone = e.target.value
        break
      default:
        break
    }

    this.setState({
      contactUsForm: contactInfo,
    })
  }

  handleSubmit(e) {
    e.preventDefault()

    const form = e.currentTarget
    if (form.checkValidity() === true) {
      e.preventDefault()
      e.stopPropagation()

      this.callGoogleScript()

      this.setState({
        validated: true,
      })
    }
  }

  onDropdownProgram(e) {
    e.preventDefault()

    if (e.target.value) {
      const oldProgram = this.state.contactUsForm

      oldProgram.program = e.target.value
      this.setState({
        contactUsForm: oldProgram,
      })
    }
  }

  callGoogleScript() {
    let eName = `${encodeURIComponent("name")}=${encodeURIComponent(
      this.state.contactUsForm.name
    )}`

    let eEmail = `${encodeURIComponent("email")}=${encodeURIComponent(
      this.state.contactUsForm.email
    )}`

    let ePhone = `${encodeURIComponent("phone")}=${encodeURIComponent(
      this.state.contactUsForm.phone
    )}`

    const querystring = `${eName}&${eEmail}&${ePhone}&formGoogleSheetName=responses`

    fetch(
      "https://script.google.com/macros/s/AKfycbzDuxNglZMjY0LJhHH0kBS6Wtkg9uquHA5AXgf_w1oQQg0zpUyf/exec?" +
        querystring,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    ).then(response => {
      if (!response.ok) {
        throw Error("Network request failed")
      }

      this.setState({
        isDone: true,
        validated: false,
        contactUsForm: {
          name: "",
          email: "",
          phone: "",
        },
      })

      setTimeout(() => {
        this.setState({
          isDone: false,
        })
      }, 3500)
      return response
    })
  }

  render() {
    return (
      <Container className="contact-container">
        <Row>
          <Col md={6}>
            <Image
              id="contact-image"
              src={contactImage}
              //   style={{ minHeight: "500px", width: "100%" }}
            ></Image>
          </Col>
          <Col md={6}>
            {/* <Carousel.Caption style={{ color: "black", textAlign: "left" }}> */}
            <Form
              validated={this.state.validated}
              onSubmit={e => this.handleSubmit(e)}
            >
              <h4>GET INVOLVED</h4>

              <Form.Group controlId="formBasicName">
                <Form.Label>Name</Form.Label>

                <Form.Control
                  required
                  type="text"
                  placeholder="Name"
                  value={this.state.contactUsForm.name}
                  onChange={e => this.onChangeForm(e)}
                />
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>

                <Form.Control
                  type="email"
                  placeholder="Email"
                  onChange={e => this.onChangeForm(e)}
                  value={this.state.contactUsForm.email}
                />
              </Form.Group>

              <Form.Group controlId="formBasicPhone">
                <Form.Label>Phone</Form.Label>

                <InputMask
                  {...this.props}
                  mask="(999) 999-9999"
                  maskChar=" "
                  onChange={e => this.onChangeForm(e)}
                  value={this.state.contactUsForm.phone}
                >
                  {inputProps => (
                    <Form.Control
                      {...inputProps}
                      type="tel"
                      placeholder="Phone Number"
                    />
                  )}
                </InputMask>
              </Form.Group>

              <Button type="submit">Submit</Button>
            </Form>
            {/* </Carousel.Caption> */}
          </Col>
        </Row>
      </Container>
    )
  }
}

export default ContactUsForm
