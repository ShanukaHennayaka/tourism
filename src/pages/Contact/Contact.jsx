import React, { useEffect } from "react";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import {
  Col,
  Container,
  Row,
  Card,
  ListGroup,
  Form,
  FloatingLabel,
} from "react-bootstrap";
import image from "../../assets/images/new/contact-us.png";

const Contact = () => {
  useEffect(() => {
    document.title = "Contact us";
    window.scroll(0, 0);
  }, []);

  return (
    <>
      <Breadcrumbs title="Contact us" pagename="Contact us" />
      <section className="contact pt-5">
        <Container>
          <Row>
            <Col md="12">
              <h1 className="mb-2 h1 font-bold">
                Let's connect and get to know each other
              </h1>
              <p className="body-text mt-1">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard{" "}
              </p>
            </Col>
          </Row>
          <Row className="py-5">
            <Col lg="4" md="6" className="mb-4 mb-lg-0">
              <Card className="border-0 shadow rounded-3 mb-4">
                <Card.Body className="text-center">
                  <div className="d-flex justify-content-center align-item-search my-2">
                    <div className="bg-info rounded-circle text-info shadow-sm bg-opacity-10 p-3 mb-2">
                      <i className="bi bi-headset h3"></i>
                    </div>
                  </div>
                  <Card.Title className="fw-bold h5">Call US</Card.Title>
                  <p className="mb-3 body-text">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                  <div className="d-block justify-content-between">
                    <a href="tel:+123456789" className="btn btn-light me-2 btn-sm">
                      <i className="bi bi-phone me-1"></i>
                      +12 3456 789
                    </a>
                    <a href="tel:+123456789" className="btn btn-light me-2 btn-sm">
                      <i className="bi bi-telephone me-1"></i>
                      +12 3456 789
                    </a>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            <Col lg="4" md="6" className="mb-4 mb-lg-0">
              <Card className="border-0 shadow rounded-3 mb-4">
                <Card.Body className="text-center">
                  <div className="d-flex justify-content-center align-item-search my-2">
                    <div className="bg-danger rounded-circle text-danger shadow-sm bg-opacity-10 p-3 mb-2">
                      <i className="bi bi-envelope h3"></i>
                    </div>
                  </div>
                  <Card.Title className="fw-bold h5">Email Us</Card.Title>
                  <p className="mb-3 body-text">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                  <div className="d-block justify-content-between">
                    <a href="mailto:demo@gmail.com" className="btn btn-light me-2 btn-sm">
                      <i className="bi bi-envelope me-2"></i>
                      demo@gmail.com
                    </a>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            <Col lg="4" md="12" className="mb-4 mb-lg-0">
              <Card className="border-0 shadow rounded-3 mb-4">
                <Card.Body className="text-center">
                  <div className="d-flex justify-content-center align-item-search my-2">
                    <div className="bg-warning rounded-circle text-warning shadow-sm bg-opacity-10 p-3 mb-2">
                      <i className="bi bi-globe h3"></i>
                    </div>
                  </div>
                  <Card.Title className="fw-bold h5">Social Media</Card.Title>
                  <p className="mb-3 body-text">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                  <div className="d-block justify-content-center">
                    <ListGroup horizontal className="justify-content-center">
                      <ListGroup.Item className="border-0">
                        <a href="https://youtube.com" target="_blank" rel="noreferrer">
                          <i className="bi bi-youtube"></i>
                        </a>
                      </ListGroup.Item>
                      <ListGroup.Item className="border-0">
                        <a href="https://instagram.com" target="_blank" rel="noreferrer">
                          <i className="bi bi-instagram"></i>
                        </a>
                      </ListGroup.Item>
                      <ListGroup.Item className="border-0">
                        <a href="https://twitter.com" target="_blank" rel="noreferrer">
                          <i className="bi bi-twitter"></i>
                        </a>
                      </ListGroup.Item>
                      <ListGroup.Item className="border-0">
                        <a href="https://youtube.com" target="_blank" rel="noreferrer">
                          <i className="bi bi-youtube"></i>
                        </a>
                      </ListGroup.Item>
                    </ListGroup>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Rest of the component remains the same */}
          <Row className="py-5 align-items-center">
            <Col xl="6" md="6" className="d-none d-md-block">
              <img src={image} alt="Contact us" className="img-fluid me-3" />
            </Col>
            <Col xl="6" md="6">
              <Card className="bg-light p-4 border-0 shadow-sm">
                <div className="form-box">
                  <h1 className="h3 font-bold mb-4">Send us message</h1>
                  <Form>
                    <Row>
                      <Col md="6">
                        <FloatingLabel
                          controlId="name"
                          label="Full Name"
                          className="mb-4"
                        >
                          <Form.Control type="text" placeholder="Full Name" />
                        </FloatingLabel>
                      </Col>
                      <Col md="6">
                        <FloatingLabel
                          controlId="email"
                          label="Email address"
                          className="mb-4"
                        >
                          <Form.Control
                            type="email"
                            placeholder="name@example.com"
                          />
                        </FloatingLabel>
                      </Col>

                      <Col md="12">
                        <FloatingLabel
                          controlId="phone"
                          label="Phone Number"
                          className="mb-4"
                        >
                          <Form.Control
                            type="text"
                            placeholder="Phone Number"
                          />
                        </FloatingLabel>
                      </Col>

                      <Col md="12">
                        <FloatingLabel controlId="message" label="Message">
                          <Form.Control
                            as="textarea"
                            placeholder="Message"
                            style={{ height: "126px" }}
                          />
                        </FloatingLabel>
                      </Col>
                    </Row>
                    <button className="primaryBtn mt-3" type="submit">
                      Send Message
                    </button>
                  </Form>
                </div>
              </Card>
            </Col>
          </Row>

          <Row className="py-5">
            <Col md="12">
              <h2 className="mb-4">Find Us On Map</h2>
              <div className="map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15845.14643012811!2d79.8538016!3d6.9270786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2593cf65a1e9d%3A0xe13da4b400e2d38c!2sColombo!5e0!3m2!1sen!2slk!4v1716980000000!5m2!1sen!2slk"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Google Map Location"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Contact;