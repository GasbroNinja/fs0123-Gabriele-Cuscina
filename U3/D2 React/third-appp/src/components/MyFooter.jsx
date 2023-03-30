import { Container, Row, Col, Navbar, } from "react-bootstrap";

const MyFooter = () => (
  <>
    <Container>
      <Navbar
        fixed="bottom"
        className="p-3 justify-content-center"
        style={{
          backgroundColor: "#f8caff",
          boxShadow: "2px 2px 20px 0px #ffffff",
        }}
      >
        <Row className="w-100 text-center">
          <Col xs={4} className="p-2 fs-5"
          style={{
          backgroundColor: "#b9859e",
          boxShadow: "2px 2px 5px 0px #ffffff",
        }}>
            <a
              href="https://www.facebook.com/"
              className="text-dark fw-bold text-decoration-none"
            >
              Facebook
            </a>
          </Col>
          <Col xs={4} className="p-2 fs-5"
          style={{
          backgroundColor: "#b9859e",
          boxShadow: "2px 2px 5px 0px #ffffff",
        }}>
            <a
              href="https://www.instagram.com/"
              className="text-dark fw-bold text-decoration-none"
            >
              Instagram
            </a>
          </Col>
          <Col xs={4} className="p-2 fs-5" 
          style={{
          backgroundColor: "#b9859e",
          boxShadow: "2px 2px 5px 0px #ffffff",
        }}>
            <a
              href="https://www.youtube.com/"
              className="text-dark fw-bold text-decoration-none"
            >
              Youtube
            </a>
          </Col>
        </Row>
      </Navbar>
    </Container>
  </>
);



export default MyFooter