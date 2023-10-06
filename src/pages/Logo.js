import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Highlighter from "../components/Code";
import CodeBlock from "react-copy-code";
import Scroller from "../components/Scroller";
import { Link } from "react-scroll";
import { Tab,Button } from "m2p-dsl";
import { Box} from "@mui/material";

import {Logos} from "m2p-dsl";
import FeedbackForm from "../components/feedBack";
import ModalPopup from "../components/Modal";
import IssueForm from "../components/IssueForm";

function SocialMediaLogo() {
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
          <p className="component_title">Logos</p>
          <p className="component_content">The Logo component consists of all Social Media Logos.</p>
        </Row>
        <Row>
          <Col lg={10} className="component_content_col">
          <Box id="tag1" className="equal-spacing">
              <p variant="h5" className="doc-heading-text">
              Filled Red Background white colored Icon.
              </p>
              <p className="doc-content-text">Red Background with white colored thin Icon.</p>
              <Box className="component_expl_hrz">
                <Box className="output_bg">
                  <Row>
                    <Col item xs={12} md={1} lg={1}>
                        <Logos className="fb-rbg-i" />
                    </Col>
                    <Col item xs={12} md={1} lg={1}>
                        <Logos className="twitter-rbg-i" />
                    </Col>
                    <Col item xs={12} md={1} lg={1}>
                        <Logos className="insta-rbg-i" />
                    </Col>
                    <Col item xs={12} md={1} lg={1}>
                        <Logos className="apple-rbg-i" />
                    </Col>
                    <Col item xs={12} md={1} lg={1}>
                        <Logos className="app-rbg-i" />
                    </Col>
                    <Col item xs={12} md={1} lg={1}>
                        <Logos className="android-rbg-i" />
                    </Col>
                    <Col item xs={12} md={1} lg={1}>
                        <Logos className="whatsapp-rbg-i" />
                    </Col>
                    <Col item xs={12} md={1} lg={1}>
                        <Logos className="pinterest-rbg-i" />
                    </Col>
                    <Col item xs={12} md={1} lg={1}>
                        <Logos className="linkedin-rbg-i" />
                    </Col>
                    <Col item xs={12} md={1} lg={1}>
                        <Logos className="google-rbg-i" />
                    </Col>
                    <Col item xs={12} md={1} lg={1}>
                        <Logos className="youtube-rbg-i" />
                    </Col>
                  </Row>
                </Box>
                <Box className="component_code">
                {/* code block */}
                <CodeBlock className={`${sessionStorage.getItem('role') === "DSL-User" ? "active" : ""}`}>
                  <button className="issueTrigger" onClick={handleShow}>Having issues.?</button>
                  <pre className="Code-bg">
                    <Highlighter>{`import { Logos } from "m2p-dsl";

<Logos className="fb-rbg-i" />

<Logos className="twitter-rbg-i" />

<Logos className="insta-rbg-i" />

<Logos className="apple-rbg-i" />

<Logos className="app-rbg-i" />

<Logos className="android-rbg-i" />

<Logos className="whatsapp-rbg-i" />

<Logos className="pinterest-rbg-i" />

<Logos className="linkedin-rbg-i" />

<Logos className="google-rbg-i" />

<Logos className="youtube-rbg-i" />`}
                    </Highlighter>
                  </pre>
                </CodeBlock>
                {/* code block */}

                </Box>
              </Box>
            </Box>
            {/*  */}
            <Box id="tag2" className="equal-spacing">
              <p variant="h5" className="doc-heading-text">
              Filled Black Background white colored Icon.
              </p>
              <p className="doc-content-text">Black Background with white colored thin Icon.</p>
              <Box className="component_expl_hrz">
                <Box className="output_bg">
                  <Row>
                    <Col item xs={12} md={1} lg={1}>
                        <Logos className="fb-bbg-i" />
                    </Col>
                    <Col item xs={12} md={1} lg={1}>
                        <Logos className="twitter-bbg-i" />
                    </Col>
                    <Col item xs={12} md={1} lg={1}>
                        <Logos className="insta-bbg-i" />
                    </Col>
                    <Col item xs={12} md={1} lg={1}>
                        <Logos className="apple-bbg-i" />
                    </Col>
                    <Col item xs={12} md={1} lg={1}>
                        <Logos className="app-bbg-i" />
                    </Col>
                    <Col item xs={12} md={1} lg={1}>
                        <Logos className="android-bbg-i" />
                    </Col>
                    <Col item xs={12} md={1} lg={1}>
                        <Logos className="whatsapp-bbg-i" />
                    </Col>
                    <Col item xs={12} md={1} lg={1}>
                        <Logos className="pinterest-bbg-i" />
                    </Col>
                    <Col item xs={12} md={1} lg={1}>
                        <Logos className="linkedin-bbg-i" />
                    </Col>
                    <Col item xs={12} md={1} lg={1}>
                        <Logos className="google-bbg-i" />
                    </Col>
                    <Col item xs={12} md={1} lg={1}>
                        <Logos className="youtube-bbg-i" />
                    </Col>
                  </Row>
                </Box>
                <Box className="component_code">
                {/* code block */}
                <CodeBlock className={`${sessionStorage.getItem('role') === "DSL-User" ? "active" : ""}`}>
                  <button className="issueTrigger" onClick={handleShow}>Having issues.?</button>
                  <pre className="Code-bg">
                    <Highlighter>{`import { Logos } from "m2p-dsl";

<Logos className="fb-bbg-i" />

<Logos className="twitter-bbg-i" />

<Logos className="insta-bbg-i" />

<Logos className="apple-bbg-i" />

<Logos className="app-bbg-i" />

<Logos className="android-bbg-i" />

<Logos className="whatsapp-bbg-i" />

<Logos className="pinterest-bbg-i" />

<Logos className="linkedin-bbg-i" />

<Logos className="google-bbg-i" />

<Logos className="youtube-bbg-i" />`}
                    </Highlighter>
                  </pre>
                </CodeBlock>
                {/* code block */}

                </Box>
              </Box>
            </Box>
            {/*  */}
            <Box id="tag3" className="equal-spacing">
              <p className="doc-heading-text">
                Filled Light Background red colored Icon.
              </p>
              <p className="doc-content-text">White Background with red colored thin Icon.</p>
              <Box className="component_expl_hrz">
                <Box className="output_bg" style={{backgroundColor: '#151515' , paddingLeft: '12px', paddingRight: '12px'}}>
                  <Row style={{display: 'flex', justifyContent: 'left',backgroundColor: '#151515', borderRadius: '4px'}}>
                        <Col item xs={12} md={1} lg={1}>
                            <Logos className={'fb-wbg-i'} />
                        </Col>
                        <Col item xs={12} md={1} lg={1}>
                            <Logos className="twitter-wbg-i" />
                        </Col>
                        <Col item xs={12} md={1} lg={1}>
                            <Logos className="insta-wbg-i" />
                        </Col>
                        <Col item xs={12} md={1} lg={1}>
                            <Logos className='apple-wbg-i' />
                        </Col>
                        <Col item xs={12} md={1} lg={1}>
                            <Logos className='app-wbg-i' />
                        </Col>
                        <Col item xs={12} md={1} lg={1}>
                            <Logos className='android-wbg-i' />
                        </Col>
                        <Col item xs={12} md={1} lg={1}>
                            <Logos className="whatsapp-wbg-i"  />
                        </Col>
                        <Col item xs={12} md={1} lg={1}>
                            <Logos className='pinterest-wbg-i' />
                        </Col>
                        <Col item xs={12} md={1} lg={1}>
                            <Logos className='linkedin-wbg-i' />
                        </Col>
                        <Col item xs={12} md={1} lg={1}>
                            <Logos className="google-wbg-i" />
                        </Col>
                        <Col item xs={12} md={1} lg={1}>
                            <Logos className="youtube-wbg-i" />
                        </Col>
                  </Row>
                </Box>
                <Box className="component_code">
                {/* code block */}
                <CodeBlock className={`${sessionStorage.getItem('role') === "DSL-User" ? "active" : ""}`}>
                  <button className="issueTrigger" onClick={handleShow}>Having issues.?</button>
                  <pre className="Code-bg">
                    <Highlighter>{`import { Logos } from "m2p-dsl";

// Solid white background

<Logos className={'fb-wbg-i'} />

<Logos className="twitter-wbg-i" />

<Logos className="insta-wbg-i" />

<Logos className='apple-wbg-i' />

<Logos className='app-wbg-i' />

<Logos className='android-wbg-i' />

<Logos className="whatsapp-wbg-i"  />

<Logos className='pinterest-wbg-i' />

<Logos className='linkedin-wbg-i' />

<Logos className="google-wbg-i" />

<Logos className="youtube-wbg-i" />`}
                    </Highlighter>
                  </pre>
                </CodeBlock>
                {/* code block */}

                </Box>
              </Box>
            </Box>
            <Box id="tag4" className="equal-spacing">
              <p variant="h5" className="doc-heading-text">
              Filled Light Background white colored Icon.
              </p>
              <p className="doc-content-text">White Background with black colored thin Icon.</p>
              <Box className="component_expl_hrz">
                <Box className="output_bg" style={{backgroundColor: '#151515' ,paddingLeft: '12px',paddingRight: '12px'}}>
                  <Row style={{backgroundColor: '#151515' , borderRadius: '4px'}}>
                    <Col item xs={12} md={1} lg={1}>
                        <Logos className='fb-wbgb-i' />
                    </Col>
                    <Col item xs={12} md={1} lg={1}>
                        <Logos className='twitter-wbgb-i' />
                    </Col>
                    <Col item xs={12} md={1} lg={1}>
                        <Logos className='insta-wbgb-i' />
                    </Col>
                    <Col item xs={12} md={1} lg={1}>
                        <Logos className='apple-wbgb-i' />
                    </Col>
                    <Col item xs={12} md={1} lg={1}>
                        <Logos className='app-wbgb-i' />
                    </Col>
                    <Col item xs={12} md={1} lg={1}>
                        <Logos className='android-wbgb-i' />
                    </Col>
                    <Col item xs={12} md={1} lg={1}>
                        <Logos className='whatsapp-wbgb-i' />
                    </Col>
                    <Col item xs={12} md={1} lg={1}>
                        <Logos className='pinterest-wbgb-i' />
                    </Col>
                    <Col item xs={12} md={1} lg={1}>
                        <Logos className='linkedin-wbgb-i' />
                    </Col>
                    <Col item xs={12} md={1} lg={1}>
                        <Logos className="google-wbgb-i" />
                    </Col>
                    <Col item xs={12} md={1} lg={1}>
                        <Logos className="youtube-wbgb-i" />
                    </Col>
                  </Row>
                </Box>
                <Box className="component_code">
                {/* code block */}
                <CodeBlock className={`${sessionStorage.getItem('role') === "DSL-User" ? "active" : ""}`}>
                  <button className="issueTrigger" onClick={handleShow}>Having issues.?</button>
                  <pre className="Code-bg">
                    <Highlighter>{`import { Logos } from "m2p-dsl";

<Logos className='fb-wbgb-i' />

<Logos className='twitter-wbgb-i' />

<Logos className='insta-wbgb-i' />

<Logos className='apple-wbgb-i' />

<Logos className='app-wbgb-i' />

<Logos className='android-wbgb-i' />

<Logos className='whatsapp-wbgb-i' />

<Logos className='pinterest-wbgb-i' />

<Logos className='linkedin-wbgb-i' />

<Logos className="google-wbgb-i" />

<Logos className="youtube-wbgb-i" />`}
                    </Highlighter>
                  </pre>
                </CodeBlock>
                {/* code block */}

                </Box>
              </Box>
            </Box>

            <Box id="tag5" className="equal-spacing">
              <p variant="h5" className="doc-heading-text">
              Outlined Dark with Icon.
              </p>
              <p className="doc-content-text">Transparent Background with dark colored thin Icon.</p>
              <Box className="component_expl_hrz">
                <Box className="output_bg">
                  <Row >
                    <Col item xs={12} md={1} lg={1}>
                        <Logos className='fb-bdb-i' />
                    </Col>
                    <Col item xs={12} md={1} lg={1}>
                        <Logos className='twitter-bdb-i' />
                    </Col>
                    <Col item xs={12} md={1} lg={1}>
                        <Logos className='insta-bdb-i' />
                    </Col>
                    <Col item xs={12} md={1} lg={1}>
                        <Logos className='apple-bdb-i' />
                    </Col>
                    <Col item xs={12} md={1} lg={1}>
                        <Logos className='app-bdb-i' />
                    </Col>
                    <Col item xs={12} md={1} lg={1}>
                        <Logos className='android-bdb-i' />
                    </Col>
                    <Col item xs={12} md={1} lg={1}>
                        <Logos className='whatsapp-bdb-i' />
                    </Col>
                    <Col item xs={12} md={1} lg={1}>
                        <Logos className='pinterest-bdb-i' />
                    </Col>
                    <Col item xs={12} md={1} lg={1}>
                        <Logos className='linkedin-bdb-i' />
                    </Col>
                    <Col item xs={12} md={1} lg={1}>
                        <Logos className="google-bdb-i" />
                    </Col>
                    <Col item xs={12} md={1} lg={1}>
                        <Logos className="youtube-bdb-i" />
                    </Col>
                  </Row>
                </Box>
                <Box className="component_code">
                {/* code block */}
                <CodeBlock className={`${sessionStorage.getItem('role') === "DSL-User" ? "active" : ""}`}>
                  <button className="issueTrigger" onClick={handleShow}>Having issues.?</button>
                  <pre className="Code-bg">
                    <Highlighter>{`import { Logos } from "m2p-dsl";

<Logos className='fb-bdb-i' />

<Logos className='twitter-bdb-i' />

<Logos className='insta-bdb-i' />

<Logos className='apple-bdb-i' />

<Logos className='app-bdb-i' />

<Logos className='android-bdb-i' />

<Logos className='whatsapp-bdb-i' />

<Logos className='pinterest-bdb-i' />

<Logos className='linkedin-bdb-i' />

<Logos className="google-bdb-i" />

<Logos className="youtube-bdb-i" />`}
                    </Highlighter>
                  </pre>
                </CodeBlock>
                {/* code block */}

                </Box>
              </Box>
            </Box>

            <Box id="tag6" className="equal-spacing">
              <p variant="h5" className="doc-heading-text">
              Outlined Red with Icon.
              </p>
              <p className="doc-content-text">Transparent Background with Red colored thin Icon.</p>
              <Box className="component_expl_hrz">
                <Box className="output_bg">
                  <Row>
                    <Col item xs={12} md={1} lg={1}>
                        <Logos className='fb-bdr-i' />
                    </Col>
                    <Col item xs={12} md={1} lg={1}>
                        <Logos className='twitter-bdr-i' />
                    </Col>
                    <Col item xs={12} md={1} lg={1}>
                        <Logos className='insta-bdr-i' />
                    </Col>
                    <Col item xs={12} md={1} lg={1}>
                        <Logos className='apple-bdr-i' />
                    </Col>
                    <Col item xs={12} md={1} lg={1}>
                        <Logos className='app-bdr-i' />
                    </Col>
                    <Col item xs={12} md={1} lg={1}>
                        <Logos className='android-bdr-i' />
                    </Col>
                    <Col item xs={12} md={1} lg={1}>
                        <Logos className='whatsapp-bdr-i' />
                    </Col>
                    <Col item xs={12} md={1} lg={1}>
                        <Logos className='pinterest-bdr-i' />
                    </Col>
                    <Col item xs={12} md={1} lg={1}>
                        <Logos className='linkedin-bdr-i' />
                    </Col>
                    <Col item xs={12} md={1} lg={1}>
                        <Logos className="google-bdr-i" />
                    </Col>
                    <Col item xs={12} md={1} lg={1}>
                        <Logos className="youtube-bdr-i" />
                    </Col>
                  </Row>
                </Box>
                <Box className="component_code">
                {/* code block */}
                <CodeBlock className={`${sessionStorage.getItem('role') === "DSL-User" ? "active" : ""}`}>
                  <button className="issueTrigger" onClick={handleShow}>Having issues.?</button>
                  <pre className="Code-bg">
                    <Highlighter>{`import { Logos } from "m2p-dsl";

<Logos className='fb-bdr-i' />

<Logos className='twitter-bdr-i' />

<Logos className='insta-bdr-i' />

<Logos className='apple-bdr-i' />

<Logos className='app-bdr-i' />

<Logos className='android-bdr-i' />

<Logos className='whatsapp-bdr-i' />

<Logos className='pinterest-bdr-i' />

<Logos className='linkedin-bdr-i' />

<Logos className="google-bdr-i" />

<Logos className="youtube-bdr-i" />`}
                    </Highlighter>
                  </pre>
                </CodeBlock>
                {/* code block */}

                </Box>
              </Box>
            </Box>

            <Box id="tag7" className="equal-spacing">
              <p variant="h5" className="doc-heading-text">
              Outlined White with Icon.
              </p>
              <p className="doc-content-text">Transparent Background with White colored thin Icon.</p>
              <Box className="component_expl_hrz">
                <Box className="output_bg" style={{ backgroundColor: '#151515',paddingLeft: '12px',paddingRight: '12px' }}>
                  <Row style={{backgroundColor: '#151515',borderRadius: '4px'}}>
                    <Col item xs={12} md={1} lg={1}>
                        <Logos className='fb-bdw-i' />
                    </Col>
                    <Col item xs={12} md={1} lg={1}>
                        <Logos className='twitter-bdw-i' />
                    </Col>
                    <Col item xs={12} md={1} lg={1}>
                        <Logos className='insta-bdw-i' />
                    </Col>
                    <Col item xs={12} md={1} lg={1}>
                        <Logos className='apple-bdw-i' />
                    </Col>
                    <Col item xs={12} md={1} lg={1}>
                        <Logos className='app-bdw-i' />
                    </Col>
                    <Col item xs={12} md={1} lg={1}>
                        <Logos className='android-bdw-i' />
                    </Col>
                    <Col item xs={12} md={1} lg={1}>
                        <Logos className='whatsapp-bdw-i' />
                    </Col>
                    <Col item xs={12} md={1} lg={1}>
                        <Logos className='pinterest-bdw-i' />
                    </Col>
                    <Col item xs={12} md={1} lg={1}>
                        <Logos className='linkedin-bdw-i' />
                    </Col>
                    <Col item xs={12} md={1} lg={1}>
                        <Logos className="google-bdw-i" />
                    </Col>
                    <Col item xs={12} md={1} lg={1}>
                        <Logos className="youtube-bdw-i" disabled />
                    </Col>
                  </Row>
                </Box>
                <Box className="component_code">
                {/* code block */}
                <CodeBlock className={`${sessionStorage.getItem('role') === "DSL-User" ? "active" : ""}`}>
                  <button className="issueTrigger" onClick={handleShow}>Having issues.?</button>
                  <pre className="Code-bg">
                    <Highlighter>{`import { Logos } from "m2p-dsl";

<Logos className='fb-bdw-i' />

<Logos className='twitter-bdw-i' />

<Logos className='insta-bdw-i' />

<Logos className='apple-bdw-i' />

<Logos className='app-bdw-i' />

<Logos className='android-bdw-i' />

<Logos className='whatsapp-bdw-i' />

<Logos className='pinterest-bdw-i' />

<Logos className='linkedin-bdw-i' />

<Logos className="google-bdw-i" />

<Logos className="youtube-bdw-i" />`}
                    </Highlighter>
                  </pre>
                </CodeBlock>
                {/* code block */}

                </Box>
              </Box>
            </Box>
            {/*  */}
            <Box id="tag8" className="equal-spacing">
              <p variant="h5" className="doc-heading-text">
                Props
              </p>
              <Box className="component_expl_hrz" >
                <Box className="props_head">
                  <Row>
                    <Col item xs={12} md={12} lg={12}>
                      <pre className="Code-bg">
                      properties
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
                          <p>The className property allows you to change size ,background and position of the Logos.</p>
                        </div>
                      </div>
                      {/*  */}
                      <div className="props_div">
                        <div className="props_name">
                          <p>onClick ?</p>
                          <p className="classname"><pre>function</pre></p>
                        </div>
                        <div className="props_content">
                            <p>The OnClick property Trigger's an event when Logos is Clicked.</p>
                        </div>
                      </div>
                      {/*  */}
                      <div className="props_div">
                        <div className="props_name">
                          <p>style ?</p>
                          <p className="string"><pre>string</pre></p>
                        </div>
                        <div className="props_content">
                          <p>The style property enables write inline styling of the Logos Component.</p>
                        </div>
                      </div>
                      {/*  */}
                    </div>
                  </Col>
                </Box>
              </Box>
            </Box>
            {/*  */}

            <Box id="tag10" className="equal-spacing">
              <Box className="component_expl_hrz" >
                <Box className="props_head">
                  <Row>
                    <Col item xs={12} md={12} lg={12}>
                     <p className="doc-heading-text">Feedback</p>
                    </Col>
                  </Row>
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
                      <Link activeClass="active" to="tag1" spy={true} smooth={false}>
                        Filled Red
                      </Link>
                    </li>
                    <li>
                      <Link activeClass="active" to="tag2" spy={true} smooth={false}>
                        Filled Dark
                      </Link>
                    </li>
                    <li>
                      <Link activeClass="active" to="tag3" spy={true} smooth={false}>
                        Filled Light
                      </Link>
                    </li>
                    <li>
                      <Link activeClass="active" to="tag4" spy={true} smooth={false} offset={-100} onSetActive={handleScroll}>
                        Light Fill Outline
                      </Link>
                    </li>
                    <li>
                      <Link activeClass="active" to="tag5" spy={true} smooth={false} offset={-100} onSetActive={handleScroll}>
                        Outline Dark
                      </Link>
                    </li>
                    <li>
                      <Link activeClass="active" to="tag6" spy={true} smooth={false} offset={-100} onSetActive={handleScroll}>
                        Outline Red
                      </Link>
                    </li>
                    <li>
                      <Link activeClass="active" to="tag7" spy={true} smooth={false} offset={-100} onSetActive={handleScroll}>
                        Outline White
                      </Link>
                    </li>
                    <li>
                      <Link activeClass="active" to="tag8" spy={true} smooth={false} offset={-100} onSetActive={handleScroll}>
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

export default SocialMediaLogo;