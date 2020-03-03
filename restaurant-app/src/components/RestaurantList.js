import React, { Component } from "react";
import { Table, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";

export default class RestaurantList extends Component {
  constructor() {
    super();

    this.state = {
      list: null
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    fetch("http://localhost:3000/restaurant").then(response => {
      response.json().then(result => {
        this.setState({ list: result });
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
        this.getData();
      });
    });
  }

  render() {
    console.warn(this.state);
    return (
      <Container>
        <h1>Restaurant List</h1>
        {this.state.list ? (
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
                {this.state.list.map(item => (
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
          <p>Please wait...</p>
        )}
      </Container>
    );
  }
}
