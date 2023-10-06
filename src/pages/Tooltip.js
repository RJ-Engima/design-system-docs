import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Highlighter from "../components/Code";
import CodeBlock from "react-copy-code";
import Scroller from "../components/Scroller";
import { Link } from "react-scroll";
import { Box} from "@mui/material";
import { Infotips,Button } from "m2p-dsl";
import FeedbackForm from "../components/feedBack";
import ModalPopup from "../components/Modal";
import IssueForm from "../components/IssueForm";

function Tooltips() {
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
      <Scroller />
      <Container fluid className="content_div">
        <Row className="component_content_div">
          <p className="component_title">Tooltip</p>
          <p className="component_content">The tip is shown on mouse enter, and is hidden on mouse leave.
          The Tooltip doesn't support complex text or operations.</p>
        </Row>
        <Row>
          <Col lg={10} className="component_content_col">
            <Box id="tag1" className="equal-spacing">
              <p className="doc-heading-text" style={{marginTop: '20px'}}>
                Primary 
              </p>
              <p className="doc-content-text">Primary Colored Tooltip.</p> 
              <Box className="component_expl_hrz">
                <Box className="output_bg">
                  <Row style={{display: 'flex', justifyContent: 'space-around'}}>
                    <Col item xs={12} md={2} lg={2}>
                      <Infotips className="tooltip-primary" title={"title"}  placement={'topLeft'}><Button>.topLeft</Button></Infotips> 
                    </Col>
                    <Col item xs={12} md={2} lg={2}>
                    <Infotips className="tooltip-primary" title={'title'}  placement={'top'}><Button>.top</Button></Infotips>
                    </Col>
                    <Col item xs={12} md={2} lg={2}>
                    <Infotips className="tooltip-primary" title={'title'}  placement={'topRight'}><Button>.topRight</Button></Infotips>
                    </Col>
                    <Col item xs={12} md={2} lg={2}>
                      <Infotips className="tooltip-primary" title={'title'}  placement={'rightTop'}><Button>.rightTop</Button></Infotips>
                    </Col>
                    <Col item xs={12} md={2} lg={2}>
                    <Infotips className="tooltip-primary" title={'title'}  placement={'right'}><Button>.right</Button></Infotips>
                    </Col>
                    <Col item xs={12} md={2} lg={2}>
                    <Infotips className="tooltip-primary" title={'title'}  placement={'rightBottom'}><Button>.topBottom</Button></Infotips>
                    </Col>
                  </Row>

                  <Row>
                  <Col item xs={12} md={2} lg={2}>
                    <Infotips className="tooltip-primary" title={'title'}  placement={'left'}><Button>.left</Button></Infotips>
                    </Col>
                    <Col item xs={12} md={2} lg={2}>
                    <Infotips className="tooltip-primary" title={'title'}  placement={'leftTop'}><Button>.leftTop</Button></Infotips>
                    </Col>
                    <Col item xs={12} md={2} lg={2}>
                    <Infotips className="tooltip-primary" title={'title'}  placement={'leftBottom'}><Button>.leftBottom</Button></Infotips>
                    </Col>
                    <Col item xs={12} md={2} lg={2}>
                    <Infotips className="tooltip-primary" title={'title'}  placement={'bottomLeft'}><Button>.bottomLeft</Button></Infotips>
                    </Col>
                    <Col item xs={12} md={2} lg={2}>
                    <Infotips className="tooltip-primary" title={'title'}  placement={'bottom'}><Button>.bottom</Button></Infotips>
                    </Col>
                    <Col item xs={12} md={2} lg={2}>
                    <Infotips className="tooltip-primary" title={'title'}  placement={'bottomRight'}><Button>.bottomRight</Button></Infotips>
                    </Col>
                  </Row>
                </Box>
                <Box className="component_code">
                {/* code block */}
                <CodeBlock className={`${sessionStorage.getItem('role') === "DSL-User" ? "active" : ""}`}>
                  <Button className="issueTrigger" onClick={handleShow}>Having issues.?</Button>
                  <pre className="Code-bg">
                    <Highlighter>{`import { Infotips } from "m2p-dsl";

<Infotips className="tooltip-primary" title={'title'}  placement={'topLeft'}><Button>.topLeft</Button></Infotips>

<Infotips className="tooltip-primary" title={'title'}  placement={'top'}><Button>.top</Button></Infotips>

<Infotips className="tooltip-primary" title={'title'}  placement={'topRight'}><Button>.topRight</Button></Infotips>

<Infotips className="tooltip-primary" title={'title'}  placement={'rightTop'}><Button>.rightTop</Button></Infotips>

<Infotips className="tooltip-primary" title={'title'}  placement={'right'}><Button>.right</Button></Infotips>

<Infotips className="tooltip-primary" title={'title'}  placement={'rightBottom'}><Button>.topBottom</Button></Infotips>

<Infotips className="tooltip-primary" title={'title'}  placement={'left'}><Button>.left</Button></Infotips>

<Infotips className="tooltip-primary" title={'title'}  placement={'leftTop'}><Button>.leftTop</Button></Infotips>

<Infotips className="tooltip-primary" title={'title'}  placement={'leftBottom'}><Button>.leftBottom</Button></Infotips>

<Infotips className="tooltip-primary" title={'title'}  placement={'bottomLeft'}><Button>.bottomLeft</Button></Infotips>

<Infotips className="tooltip-primary" title={'title'}  placement={'bottom'}><Button>.bottom</Button></Infotips>

<Infotips className="tooltip-primary" title={'title'}  placement={'bottomRight'}><Button>.bottomRight</Button></Infotips>`}
                    </Highlighter>
                  </pre>
                </CodeBlock>
                {/* code block */}

                </Box>
              </Box>
            </Box>
            <Box id="tag2" className="equal-spacing">
              <p variant="h5" className="doc-heading-text">
                Light
              </p>
              <p className="doc-content-text">Light Colored Tooltip.</p>
              <Box className="component_expl_hrz" >
                <Box className="output_bg">
                <Row style={{display: 'flex', justifyContent: 'space-around'}}>
                    <Col item xs={12} md={2} lg={2}>
                      <Infotips className="tooltip-light" title={'title'}  placement={'topLeft'}><Button>.topLeft</Button></Infotips>
                    </Col>
                    <Col item xs={12} md={2} lg={2}>
                    <Infotips className="tooltip-light" title={'title'}  placement={'top'}><Button>.top</Button></Infotips>
                    </Col>
                    <Col item xs={12} md={2} lg={2}>
                    <Infotips className="tooltip-light" title={'title'}  placement={'topRight'}><Button>.topRight</Button></Infotips>
                    </Col>
                    <Col item xs={12} md={2} lg={2}>
                      <Infotips className="tooltip-light" title={'title'}  placement={'rightTop'}><Button>.rightTop</Button></Infotips>
                    </Col>
                    <Col item xs={12} md={2} lg={2}>
                    <Infotips className="tooltip-light" title={'title'}  placement={'right'}><Button>.right</Button></Infotips>
                    </Col>
                    <Col item xs={12} md={2} lg={2}>
                    <Infotips className="tooltip-light" title={'title'}  placement={'rightBottom'}><Button>.topBottom</Button></Infotips>
                    </Col>
                  </Row>

                  <Row>
                  <Col item xs={12} md={2} lg={2}>
                    <Infotips className="tooltip-light" title={'title'}  placement={'left'}><Button>.left</Button></Infotips>
                    </Col>
                    <Col item xs={12} md={2} lg={2}>
                    <Infotips className="tooltip-light" title={'title'}  placement={'leftTop'}><Button>.leftTop</Button></Infotips>
                    </Col>
                    <Col item xs={12} md={2} lg={2}>
                    <Infotips className="tooltip-light" title={'title'}  placement={'leftBottom'}><Button>.leftBottom</Button></Infotips>
                    </Col>
                    <Col item xs={12} md={2} lg={2}>
                    <Infotips className="tooltip-light" title={'title'}  placement={'bottomLeft'}><Button>.bottomLeft</Button></Infotips>
                    </Col>
                    <Col item xs={12} md={2} lg={2}>
                    <Infotips className="tooltip-light" title={'title'}  placement={'bottom'}><Button>.bottom</Button></Infotips>
                    </Col>
                    <Col item xs={12} md={2} lg={2}>
                    <Infotips className="tooltip-light" title={'title'}  placement={'bottomRight'}><Button>.bottomRight</Button></Infotips>
                    </Col>
                  </Row>
                </Box>
                <Box className="component_code">
                {/* code block */}
                <CodeBlock className={`${sessionStorage.getItem('role') === "DSL-User" ? "active" : ""}`}>
                  <Button className="issueTrigger" onClick={handleShow}>Having issues.?</Button>
                  <pre className="Code-bg">
                    <Highlighter>{`import { Infotips } from "m2p-dsl";

<Infotips className="tooltip-light" title={'title'}  placement={'topLeft'}><Button>.topLeft</Button></Infotips>

<Infotips className="tooltip-light" title={'title'}  placement={'top'}><Button>.top</Button></Infotips>

<Infotips className="tooltip-light" title={'title'}  placement={'topRight'}><Button>.topRight</Button></Infotips>

<Infotips className="tooltip-light" title={'title'}  placement={'rightTop'}><Button>.rightTop</Button></Infotips>

<Infotips className="tooltip-light" title={'title'}  placement={'right'}><Button>.right</Button></Infotips>

<Infotips className="tooltip-light" title={'title'}  placement={'rightBottom'}><Button>.topBottom</Button></Infotips>

<Infotips className="tooltip-light" title={'title'}  placement={'left'}><Button>.left</Button></Infotips>

<Infotips className="tooltip-light" title={'title'}  placement={'leftTop'}><Button>.leftTop</Button></Infotips>

<Infotips className="tooltip-light" title={'title'}  placement={'leftBottom'}><Button>.leftBottom</Button></Infotips>

<Infotips className="tooltip-light" title={'title'}  placement={'bottomLeft'}><Button>.bottomLeft</Button></Infotips>

<Infotips className="tooltip-light" title={'title'}  placement={'bottom'}><Button>.bottom</Button></Infotips>

<Infotips className="tooltip-light" title={'title'}  placement={'bottomRight'}><Button>.bottomRight</Button></Infotips>`}
                    </Highlighter>
                  </pre>
                </CodeBlock>
                {/* code block */}

                </Box>
              </Box>
            </Box>

            <Box id="tag3" className="equal-spacing">
              <p variant="h5" className="doc-heading-text">
                Tooltip With Title and Content 
              </p>
              <p className="doc-content-text">extend the <p className="string-color d-inline"> title  props</p>  by adding custom elements inside and style accordingly.</p>
              <Box className="component_expl_hrz" >
                <Box className="output_bg">
                <Row style={{display: 'flex', justifyContent: 'space-around'}}>
                    <Col item xs={12} md={2} lg={2}>
                      <Infotips className="tooltip-primary" title={<div><h5>Title</h5><p>content</p></div>}  placement={'topLeft'}><Button>.topLeft</Button></Infotips>
                    </Col>
                    <Col item xs={12} md={2} lg={2}>
                    <Infotips className="tooltip-light" title={<div><h5>Title</h5><p>content</p></div>}  placement={'top'}><Button>.top</Button></Infotips>
                    </Col>
                    <Col item xs={12} md={2} lg={2}>
                      <Infotips className="tooltip-primary" title={<div><h5>Title</h5><p>content</p></div>}  placement={'topRight'}><Button>.topRight</Button></Infotips>  
                    </Col>  
                  </Row>  
                </Box>
                <Box className="component_code">
                {/* code block */}
                <CodeBlock className={`${sessionStorage.getItem('role') === "DSL-User" ? "active" : ""}`}>
                  <Button className="issueTrigger" onClick={handleShow}>Having issues.?</Button>
                  <pre className="Code-bg">
                    <Highlighter>{`import { Infotips } from "m2p-dsl";

// title with Subtext     

<Infotips className="tooltip-primary" title={<div><h5>Title</h5><p>content</p></div>}  placement={'topLeft'}><Button>.topLeft</Button></Infotips>

<Infotips className="tooltip-light" title={<div><h5>Title</h5><p>content</p></div>}  placement={'top'}><Button>.top</Button></Infotips>

<Infotips className="tooltip-primary" title={<div><h5>Title</h5><p>content</p></div>}  placement={'topRight'}><Button>.topRight</Button></Infotips>   

`}
                    </Highlighter>
                  </pre>
                </CodeBlock>
                {/* code block */}

                </Box>
              </Box>
            </Box>

            <Box id="tag4" className="equal-spacing">
              <p variant="h5" className="doc-heading-text">
                Props
              </p>
              <Box className="component_expl_hrz" >
                <Box className="props_head">
                  <Row>
                    <Col item xs={12} md={12} lg={12}>
                      <pre className="Code-bg">
                      Props.
                      </pre>
                    </Col>
                  </Row>
                </Box>
                <Box className="component_code">
                  <Col item xs={12} md={12} lg={12}>
                    <div className="component_props">
                      <div className="props_div">
                        <div className="props_name">
                          <p>className ?</p>
                          <p className="string"><pre>string</pre></p>
                        </div>
                        <div className="props_content">
                          <p>The className property allows you to change size ,background and position of the Infotips.</p>
                        </div>
                      </div>
                      {/*  */}
                      <div className="props_div">
                        <div className="props_name">
                          <p>title ?</p>
                          <p className="string"><pre>string</pre></p>
                        </div>
                        <div className="props_content">
                            <p>The title property adds text Content inside the tooptip popup.</p>
                        </div>
                      </div>
                      {/*  */}
                      <div className="props_div">
                        <div className="props_name">
                          <p>placement ?</p>
                          <p className="string"><pre>string</pre></p>
                        </div>
                        <div className="props_content">
                          <p>The position of the tooltip relative to the target, which can be one of
                            <p className="classname"> top left right bottom topLeft topRight bottomLeft bottomRight leftTop leftBottom rightTop rightBottom</p></p>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Box>
              </Box>
            </Box>

          </Col>
          <Col lg={2} className='scroll_content'>
            <div id="fixed-box-container">
              <div id="myHeader" className="fixed-content">
                <h5>contents</h5>
                <div className="page_scroller">
                  <ul>
                    <li>
                      <Link activeClass="active" to="tag1" spy={true} smooth={false} offset={-100} onSetActive={handleScroll}>
                        Dark
                      </Link>
                    </li>
                    <li>
                      <Link activeClass="active" to="tag2" spy={true} smooth={false} offset={-100} onSetActive={handleScroll}>
                        Light
                      </Link>
                    </li>
                    <li>
                      <Link activeClass="active" to="tag3" spy={true} smooth={false} offset={-100} onSetActive={handleScroll}>
                        With Title and Content 
                      </Link>
                    </li>
                    <li>
                      <Link activeClass="active" to="tag4" spy={true} smooth={false} offset={-100} onSetActive={handleScroll}>
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

export default Tooltips;
