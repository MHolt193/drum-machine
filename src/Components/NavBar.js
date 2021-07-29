import "./NavBar.css";
import Volume from "./Volume";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
const NavBar = (props) => {
  return (
    <Navbar className="ms-5 fixed-top navbar-dark" bg="dark">
      <Container>
        {
          //Power Control
          props.power === "false" ? (
            <Navbar.Brand
              className="btn power-btn off"
              href="#"
              onClick={props.powerHandler}
            >
              <i className="fas fa-power-off"></i>
            </Navbar.Brand>
          ) : (
            <Navbar.Brand
              className="btn power-btn on"
              href="#"
              onClick={props.powerHandler}
            >
              <i className="fas fa-power-off"></i>
            </Navbar.Brand>
          )
        }
          <Nav className="ms-auto">
            <NavDropdown
              className="btn"
              title={<i class="fas fa-volume-up"></i>}
            >
              <NavDropdown.Item>
                <Volume onChange={props.volumeHandler} />
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              className="btn"
              title={<i class="fas fa-compact-disc"></i>}
              onChange={props.modeHandler}
            >
              <NavDropdown.Item>Drums</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>Guitar</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>Piano</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className="info-btn btn">
              <i class="fas fa-info-circle"></i>
            </Nav.Link>
          </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
