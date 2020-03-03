import React, { Component } from "react";
import { Form, Button, Row, Col, Container } from "react-bootstrap";

export default class RestaurantCreate extends Component {
  constructor() {
    super();

    this.state = {
      name: null,
      email: null,
      address: null,
      rating: null
    };
  }

  create() {
    fetch("http://localhost:3000/restaurant", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state)
    }).then(result => {
      result.json().then(resp => {
        alert("Restaurant has been added");
      });
    });
  }

  render() {
    return (
      <div>
        <h1>Restaurant Create</h1>
        <Container>
          <br />
          <Row className="justify-content-md-center">
            <Col xs lg="2">
              Name :
            </Col>
            <Col xs={6}>
              <Form.Control
                type="text"
                onChange={event => {
                  this.setState({ name: event.target.value });
                }}
                placeholder="Name"
              />
            </Col>
          </Row>
          <br />

          <Row className="justify-content-md-center">
            <Col xs lg="2">
              Email :
            </Col>
            <Col xs={6}>
              <Form.Control
                type="email"
                onChange={event => {
                  this.setState({ email: event.target.value });
                }}
                placeholder="Email"
              />
            </Col>
          </Row>
          <br />

          <Row className="justify-content-md-center">
            <Col xs lg="2">
              Rating :
            </Col>
            <Col xs={6}>
              <Form.Control
                type="text"
                onChange={event => {
                  this.setState({ rating: event.target.value });
                }}
                placeholder="Rating"
              />
            </Col>
          </Row>
          <br />

          <Row className="justify-content-md-center">
            <Col xs lg="2">
              Location :
            </Col>
            <Col xs={6}>
              <Form.Control
                type="text"
                onChange={event => {
                  this.setState({ address: event.target.value });
                }}
                placeholder="Location"
              />
            </Col>
          </Row>
          <br />

          <Row className="justify-content-md-center">
            <Col xs={6}>
              <Button
                type="submit"
                onClick={() => {
                  this.create();
                }}
              >
                Add Restaurant
              </Button>
            </Col>
          </Row>
          <br />
        </Container>
      </div>
    );
  }
}
