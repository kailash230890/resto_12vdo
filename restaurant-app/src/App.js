import React from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faList,
  faHome,
  faPlus,
  faSearch,
  faUser
} from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import RestaurantList from "./components/RestaurantList";
import RestaurantCreate from "./components/RestaurantCreate";
import RestaurantDetails from "./components/RestaurantDetails";
import RestaurantUpdate from "./components/RestaurantUpdate";
import RestaurantSearch from "./components/RestaurantSearch";
import Home from "./components/Home";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">Resto</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">
                <Link to="/">
                  {" "}
                  <FontAwesomeIcon icon={faHome} /> Home{" "}
                </Link>
              </Nav.Link>
              <Nav.Link href="#link">
                <Link to="/list">
                  {" "}
                  <FontAwesomeIcon icon={faList} /> List
                </Link>
              </Nav.Link>
              <Nav.Link href="#link">
                <Link to="/create">
                  {" "}
                  <FontAwesomeIcon icon={faPlus} /> Create
                </Link>
              </Nav.Link>
              <Nav.Link href="#link">
                <Link to="/search">
                  {" "}
                  <FontAwesomeIcon icon={faSearch} /> Search
                </Link>
              </Nav.Link>
              <Nav.Link href="#link">
                <Link to="/login">
                  {" "}
                  <FontAwesomeIcon icon={faUser} /> Login
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Route path="/list">
          <RestaurantList />
        </Route>
        <Route path="/create">
          <RestaurantCreate />
        </Route>
        <Route path="/details">
          <RestaurantDetails />
        </Route>
        <Route
          path="/update/:id"
          render={props => <RestaurantUpdate {...props} />}
        ></Route>

        <Route path="/login" render={props => <Login {...props} />}></Route>

        <Route path="/search">
          <RestaurantSearch />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Router>
    </div>
  );
}

export default App;
