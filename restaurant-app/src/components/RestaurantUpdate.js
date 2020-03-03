import React, { Component } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

export default class RestaurantUpdate extends Component {
  constructor() {
    super();

    this.state = {
      name: null,
      email: null,
      address: null,
      rating: null,
      id: null
    };
  }

  componentDidMount() {
    fetch(
      "http://localhost:3000/restaurant/" + this.props.match.params.id
    ).then(response => {
      response.json().then(result => {
        this.setState({
          name: result.name,
          email: result.email,
          address: result.address,
          id: result.id,
          rating: result.rating
        });
        // console.log(result);
      });
    });
  }

  update() {
    fetch("http://localhost:3000/restaurant/" + this.state.id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state)
    }).then(result => {
      result.json().then(resp => {
        alert("Restaurant has been updated");
      });
    });
  }

  render() {
    console.warn(this.state);
    return (
      <div>
        <h1>Restaurant Update</h1>
        <div>
          <Form.Group as={Row} controlId="formHorizontalName">
            <Form.Label column sm={2}>
              Name
            </Form.Label>
            <Col sm={4}>
              <Form.Control
                type="text"
                value={this.state.name}
                onChange={event => {
                  this.setState({ name: event.target.value });
                }}
                placeholder="Name"
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
              Email
            </Form.Label>
            <Col sm={4}>
              <Form.Control
                type="email"
                value={this.state.email}
                onChange={event => {
                  this.setState({ email: event.target.value });
                }}
                placeholder="Email"
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formHorizontalRating">
            <Form.Label column sm={2}>
              Rating
            </Form.Label>
            <Col sm={4}>
              <Form.Control
                type="text"
                value={this.state.rating}
                onChange={event => {
                  this.setState({ rating: event.target.value });
                }}
                placeholder="Rating"
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formHorizontalLocation">
            <Form.Label column sm={2}>
              Location
            </Form.Label>
            <Col sm={4}>
              <Form.Control
                type="text"
                value={this.state.address}
                onChange={event => {
                  this.setState({ address: event.target.value });
                }}
                placeholder="Location"
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row}>
            <Col sm={6}>
              <Button
                type="submit"
                onClick={() => {
                  this.update();
                }}
              >
                Update Restaurant
              </Button>
            </Col>
          </Form.Group>
        </div>
      </div>
    );
  }
}
