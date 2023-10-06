import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Highlighter from "../components/Code";
import CodeBlock from "react-copy-code";
import Scroller from "../components/Scroller";
import { Link } from "react-scroll";
import { Button, Accordion } from "m2p-dsl";

import { Box, Grid } from "@mui/material";
import FeedbackForm from "../components/feedBack";
import FeedIcon from "../assets/img/feedback.png"
import Modal from 'react-bootstrap/Modal';
import ModalPopup from "../components/Modal";
import IssueForm from "../components/IssueForm";



function GetStarted() {


  return (
    <React.Fragment>
      <Scroller />
      <Container fluid className="content_div check">
        <Row className="component_content_div">
          <p className="component_title">Getting started</p>
          <p className="component_content">The below set of configurations will help to use the Design system package.</p>
        </Row>
        <Row>
          <Col lg={12} className="component_content_col">
            <Box id="tag1" className="equal-spacing">
              <Box className="component_expl_hrz">
                <Box className="output_bg">
                  <Row>
                      <p className="doc-heading-text catchHeading">Package Registry</p>
                      <p className="doc-content-text">Create a new file named  <span style={{ color: "#D02127", fontStyle: "italic" }}>.npmrc</span> in your project folder and define the registry as give below.</p>
                      <Col item xs={12} md={12} lg={12}>
                        <CodeBlock>
                          <pre className="Code-bg">
                            <Highlighter>
                              {`registry=https://repo.m2pfintech.com/repository/npm-group/`}
                            </Highlighter>
                          </pre>
                        </CodeBlock>

                      </Col>
                  </Row>
                  <Row>
                      <p className="doc-heading-text catchHeading">Package installation:</p>
                      <p className="doc-content-text">Use the below command for installing the DLS package.</p>
                      <Col item xs={12} md={12} lg={12}>
                        <CodeBlock>
                          <pre className="Code-bg">
                            <Highlighter>
                              {`npm install m2p-dsl@1.0.0-beta`}
                            </Highlighter>
                          </pre>
                        </CodeBlock>

                      </Col>
                  </Row>
                </Box>
                <Box className="component_code">

                </Box>
              </Box>
            </Box>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default GetStarted;
