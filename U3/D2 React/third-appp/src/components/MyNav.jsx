import { Container, Nav, Navbar } from "react-bootstrap";

const MyNav = () => (
  <>
    <Navbar
      className="py-2"
      expand="lg"
      style={{
        backgroundColor: "#f8caff",
        boxShadow: "2px 2px 20px 0px #ffffff",
      }}
    >
      <Container
        fluid
        className="mx-4 my-3 px-5 py-3"
        style={{
          backgroundColor: "#f8caff",
          boxShadow: "2px 2px 20px 10px #e0a1c0",
        }}
      >
        <Navbar.Brand href="#">
          <strong>🎈React-Books-Shop</strong>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#">
              <strong>🏠Home</strong>
            </Nav.Link>
            <Nav.Link href="#">
              <strong>✏About</strong>
            </Nav.Link>
            <Nav.Link href="#">
              <strong>💻Browse</strong>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </>
);

export default MyNav;