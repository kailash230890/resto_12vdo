import React, { Component } from "react";
import { Form, Button, Row, Col, Container } from "react-bootstrap";

class Login extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      password: ""
    };
  }
  login() {
    console.log(this.state);
    fetch("http://localhost:3000/login/?q=" + this.state.name).then(data => {
      data.json().then(resp => {
        console.warn("resp", resp);
       if(resp.length > 0)
       {
            console.warn(this.props.history.push('list'))
       } else {
           alert('Please check username & password')
       }
      });
    });
  }
  render() {
    return (
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
              placeholder="Name enter"
            />
          </Col>
        </Row>
        <br />
        <Row className="justify-content-md-center">
          <Col xs lg="2">
            Password :
          </Col>
          <Col xs={6}>
            <Form.Control
              type="password"
              onChange={event => {
                this.setState({ password: event.target.value });
              }}
              placeholder="Password enter"
            />
          </Col>
        </Row>
        <br />
        <Form.Group as={Row}>
          <Col className="justify-content-md-center">
            <Button 
              type="submit"
              onClick={() => {
                this.login();
              }}
            >
              Login
            </Button>
          </Col>
        </Form.Group>
      </Container>
    );
  }
}

export default Login;
