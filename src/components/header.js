import React from "react";
import {
  Button,
  Container,
  Form,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { category } from "./../cotegory";

const Header = (props) => {
  const { filtrData, cart, homeClick, btnSearch,val,setVal } = props;

  return (
    <Navbar expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand onClick={homeClick}>
          <Link to="/">Home</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link>
              <Link to="/cart">Card {cart.length}</Link>
            </Nav.Link>
            <NavDropdown title="Category" id="navbarScrollingDropdown">
              {category.map((elem, i) => {
                return (
                  <NavDropdown.Item onClick={() => filtrData(elem)} key={i}>
                    {elem}
                  </NavDropdown.Item>
                );
              })}
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={val}
              onChange={(e) => setVal(e.target.value)}
            />
            <Button onClick={btnSearch} variant="outline-success">
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Header;
