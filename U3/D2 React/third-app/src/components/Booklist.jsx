import { Component } from "react";
import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import fantasy from "../data/fantasy.json";
import SingleBook from "./SingleBook";

class Booklist extends Component {
    render (){
        return(
            
            <Container>
                <Row className="text-center">
                    <Col md={12} lg={4} className="my-3">
                        <Badge bg="secondary" className="fs-5">
                        <span className="text-decoration-none fw-bold text-light">
                            Fantasy
                        </span>
                        </Badge>
                        <SingleBook genere="fantasy"/>
                    </Col>
                </Row>
            </Container>

            

        )

    }


};

export default Booklist