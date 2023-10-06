import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Highlighter from "../components/Code";
import CodeBlock from "react-copy-code";
import Scroller from "../components/Scroller";
import { Link } from "react-scroll";
import { Button } from "m2p-dsl";
import { Outlet } from "react-router-dom";
import { Box, Grid } from "@mui/material";
import image from "../assets/img/components@2x.png";
import { useLocation } from "react-router-dom";

function Components() {

  const location = useLocation()

  return (
    <>
      <Container fluid className="content_div componentWrap">
        {location.pathname === "/components" && (
          <Row className="component_content_div">
            <p className="component_title">Components</p>
            <Col>
              <div>
                <p className="component_content">
                  Components are the reusable building blocks of our design
                  system. Each component meets a specific interaction or UI
                  need, and has been specifically created to work together to
                  create patterns and intuitive user experiences.
                </p>
              </div>
            </Col>
          </Row>
        )}

        <Row>
          <Outlet />
        </Row>
      </Container>
    </>
  );
  <Outlet />;
}

export default Components;
