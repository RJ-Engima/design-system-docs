import React,{useRef,useState} from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const delay = 1;


function Resources() {
  return (
    <React.Fragment>
      <Container fluid className="content_div">
        <Row className="component_content_div">
            <Col>
                <div>
                    <p className="component_title">Resources</p>
                    <p className="component_content">
                    A collection of tools, kits, plugins and guides to help simplify the creation process for our users.
                    </p>
                </div>
            </Col>
        </Row>
      </Container>
    </React.Fragment>
  )}
export default Resources;
