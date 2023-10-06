import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Highlighter from "../components/Code";
import CodeBlock from "react-copy-code";
import Scroller from "../components/Scroller";
import { Link } from "react-scroll";
import { Tab, Button } from "m2p-dsl";
import { Box } from "@mui/material";
import { Breadcrumb } from "m2p-dsl";
import FeedbackForm from "../components/feedBack";
import ModalPopup from "../components/Modal";
import IssueForm from "../components/IssueForm";

// Bread Items
const breaditms = [
    {
      href: '#one',
      text: 'Parent',
    },
    {
      href: '#two',
      text: 'Child',
    },
    {
      href: '#three',
      text: 'Child',
    },
  ];

function BreadCrumbs() {
  const [show, setShow] = useState(false);
  const [heading, setHeading] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = (e) => {
    setShow(true)
  };

  function handleScroll(e) {
    // console.log(e)
    let id = document.getElementById(e)
    setHeading(id.querySelector(".doc-heading-text").innerText)
  }
  return (
    <React.Fragment>
      {/* <Scroller /> */}
      <Container fluid className="content_div">
        <Row className="component_content_div">
          <p className="component_title">BreadCrumbs</p>
          <p className="component_content">
            Breadcrumbs consist of a list of links that help a user visualize a
            page's location within the hierarchical structure of a website, and
            allow navigation up to any of its "ancestors".
          </p>
        </Row>
        <Row>
          <Col lg={10} className="component_content_col">
            <Box id="tag1" className="equal-spacing">
              <p className="doc-heading-text">Breadcrumbs</p>
              {/* <p className="doc-content-text">Basic BreadCrumbs.</p> */}
              <Box className="component_expl_hrz">
                <Box className="output_bg">
                  <Row>
                    <Col item xs={12} md={12} lg={12}>
                        <Breadcrumb
                        items={breaditms}
                        className="default-color"
                        linktext="Current page"
                        />
                    </Col>
                  </Row>
                </Box>
                <Box className="component_code">
                  {/* code block */}
                  <CodeBlock className={`${sessionStorage.getItem('role') === "DSL-User" ? "active" : ""}`}>
                  <button className="issueTrigger" onClick={handleShow}>Having issues.?</button>
                    <pre className="Code-bg">
                      <Highlighter>{`import { Breadcrumb } from "m2p-dsl";

const breaditms = [
    {
      href: '#one',
      text: 'Parent',
    },
    {
      href: '#two',
      text: 'Child',
    },
    {
      href: '#three',
      text: 'Child',
    },
];

<Breadcrumb
items={breaditms}
className="default-color"
linktext="Current page"     // final step with text
/>`}
                      </Highlighter>
                    </pre>
                  </CodeBlock>
                  {/* code block */}
                </Box>
              </Box>
            </Box>

            <Box id="tag2" className="equal-spacing">
              <p variant="h5" className="doc-heading-text">
                Props
              </p>
              <Box className="component_expl_hrz">
                <Box className="props_head">
                  <Row>
                    <Col item xs={12} md={12} lg={12}>
                      <pre className="Code-bg">properties.</pre>
                    </Col>
                  </Row>
                </Box>
                <Box className="component_code">
                  <Col item xs={12} md={12} lg={12}>
                    <div className="component_props">
                      <div className="props_div">
                        <div className="props_name">
                          <p>className ?</p>
                          <p className="string">
                            <pre>string</pre>
                          </p>
                        </div>
                        <div className="props_content">
                          <p>
                            The className property allows you to change size
                            ,backgroundColor, Text-Color and position of the
                            BreadCrumb.
                          </p>
                        </div>
                      </div>
                      {/*  */}
                      <div className="props_div">
                        <div className="props_name">
                          <p>linktext ?</p>
                          <p className="string">
                            <pre>string</pre>
                          </p>
                        </div>
                        <div className="props_content">
                          <p>
                            The link property text shows the current page.
                          </p>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Box>
              </Box>
            </Box>
          </Col>
          <Col lg={2} className="scroll_content">
            <div id="fixed-box-container">
              <div id="myHeader" className="fixed-content">
                <h5>contents</h5>
                <div className="page_scroller">
                  <ul>
                    <li>
                      <Link
                        activeClass="active"
                        to="tag1"
                        spy={true}
                        smooth={false}
                        offset={-100}
                        onSetActive={handleScroll}
                      >
                        Default
                      </Link>
                    </li>
                    <li>
                      <Link
                        activeClass="active"
                        to="tag2"
                        spy={true}
                        smooth={false}
                        offset={-100}
                        onSetActive={handleScroll}
                      >
                        Props
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Col>
          {
            <ModalPopup className="issueModalForm" show={show} handleClose={handleClose} heading="Issue form" size="md" body={
              <IssueForm variant={heading} handleClose={handleClose} />
            } />
          }
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default BreadCrumbs;
