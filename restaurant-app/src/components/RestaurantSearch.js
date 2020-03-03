import React, { Component } from "react";
import { Form, Row, Col, Table, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";

export default class RestaurantSearch extends Component {
  constructor() {
    super();

    this.state = {
      searchData: null,
      noData: false,
      lastSearch: ""
    };
  }

  search(key) {
    console.log(key);
    this.setState({ lastSearch: key });
    fetch("http://localhost:3000/restaurant/?q=" + key).then(data => {
      data.json().then(resp => {
        console.warn("resp", resp);
        if (resp.length > 0) {
          this.setState({ searchData: resp, noData: false });
        } else {
          this.setState({ noData: true, searchData: false });
        }
      });
    });
  }

  delete(id) {
    fetch("http://localhost:3000/restaurant/" + id, {
      method: "DELETE"
      // headers: {
      //   "Content-Type": "application/json"
      // },
    }).then(result => {
      result.json().then(resp => {
        alert("Restaurant has been deleted");
        this.search(this.state.lastSearch);
      });
    });
  }

  render() {
    return (
      <Container>
        <h1>Restaurant Search</h1>
        <Form.Group as={Row} controlId="formHorizontalSearch">
          <Form.Label column sm={2}>
            Serach
          </Form.Label>

          <Col sm={6}>
            <Form.Control
              type="text"
              onChange={event => {
                this.search(event.target.value);
              }}
              placeholder="Serach"
            />
          </Col>
        </Form.Group>
        <div>
          {this.state.searchData ? (
            <div>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Rating</th>
                    <th>Location</th>
                    <th>Operation</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.searchData.map(item => (
                    <tr>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>{item.email}</td>
                      <td>{item.rating}</td>
                      <td>{item.address}</td>
                      <td>
                        <Link to={"/update/" + item.id}>
                          <FontAwesomeIcon icon={faEdit} color="orange" />
                        </Link>
                        <span onClick={() => this.delete(item.id)}>
                          <FontAwesomeIcon icon={faTrash} color="red" />
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          ) : (
            ""
          )}
          {this.state.noData ? <h3>No Data Found :)</h3> : null}
        </div>
      </Container>
    );
  }
}
