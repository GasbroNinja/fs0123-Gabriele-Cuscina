
import { Container, Row, Col, Badge } from "react-bootstrap";
import SingleBook from "./SingleBook";
import fantasy from "../data/fantasy.json";

function Booklist () {
    
    return (
      <Container>
        <Row className="text-center d-flex justify-content-center">
          <Col md={8} className="my-3">
            <Badge bg="secondary" className="fs-5 mb-5">
              <span className="text-decoration-none fw-bold text-light">
                Fantasy
              </span>
            </Badge>
            <Container>
              <Row>
                {fantasy.map((fantasy) => (
                  <SingleBook key={fantasy.asin} fantasy={fantasy} />
                ))}
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    );
};

export default Booklist