import React,{useState} from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Highlighter from "../components/Code";
import CodeBlock from "react-copy-code";
import Scroller from "../components/Scroller";
import { Link } from "react-scroll";
import { Tab,Button } from "m2p-dsl";
import { Box} from "@mui/material";

import {Otp} from "m2p-dsl";
import ModalPopup from "../components/Modal";
import IssueForm from "../components/IssueForm";

function OtpInput() {
  // basic
  // state
  const [otp, setOtp] = useState('');
  const [otp1,setOtp1] = useState('');
  const [otp2,setOtp2] = useState('');
  const [otp3,setOtp3] = useState('');
  const [otp4,setOtp4] = useState('');
  const [otp5,setOtp5] = useState('');
  // change
  const onChange = (value) => setOtp(value);
  // change disabled
  const handleChange1 = (value) => setOtp1(value);
  // change password
  const handleChange2 = (value) => setOtp2(value);
  //  change error
  const handleChange3 = (value) => setOtp3(value);
  // underlined black
  const handleChange4 = (value) => setOtp4(value);
  // underlined error
  const handleChange5 = (value) => setOtp5(value);

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
          <p className="component_title">Otp</p>
          <p className="component_content">Otp Input.</p>
        </Row>
        <Row>
          <Col lg={10} className="component_content_col">
            <Box id="tag1" className="equal-spacing">
              <p className="doc-heading-text">
              Basic
              </p>
              <p className="doc-content-text">
              Outlined type Otp Input number type.</p>
              <Box className="component_expl_hrz">
                <Box className="output_bg">
                  <Row>
                        <Col item xs={12} md={6} lg={6}>
                          <Otp className={'otp'} value={otp} valueLength={6} onChange={onChange} />
                        </Col>
                        <Col item xs={12} md={6} lg={6}>
                          <Otp className={'otp'} value={otp1} valueLength={6} onChange={handleChange1} disabled />
                        </Col>
                  </Row>
                </Box>
                <Box className="component_code">
                {/* code block */}
                <CodeBlock className={`${sessionStorage.getItem('role') === "DSL-User" ? "active" : ""}`}>
                  <button className="issueTrigger" onClick={handleShow}>Having issues.?</button>
                  <pre className="Code-bg">
                    <Highlighter>{`import { Otp } from "m2p-dsl";
// basic otp
const [otp, setOtp] = useState('');
const handleChange = (value) => setOtp(value);  // console.log(otp);  to get values

<Otp className={'otp'} value={otp} valueLength={6} onChange={handleChange} />

// disabled

<Otp className={'otp'} value={otp} valueLength={6} onChange={handleChange} disabled />

`}
                    </Highlighter>
                  </pre>
                </CodeBlock>
                {/* code block */}

                </Box>
              </Box>
            </Box>
            <Box id="tag2" className="equal-spacing">
              <p variant="h5" className="doc-heading-text">
                Password
              </p>
              <p className="doc-content-text">Otp Input Password Input type.</p>
              <Box className="component_expl_hrz">
                <Box className="output_bg">
                  <Row>
                    <Col item xs={12} md={10} lg={10}>
                        <Otp className="otp otp-password" value={otp2} valueLength={6} onChange={handleChange2} />
                    </Col>
                  </Row>
                </Box>
                <Box className="component_code">
                {/* code block */}
                <CodeBlock className={`${sessionStorage.getItem('role') === "DSL-User" ? "active" : ""}`}>
                  <button className="issueTrigger" onClick={handleShow}>Having issues.?</button>
                  <pre className="Code-bg">
                    <Highlighter>{`import { Otp } from "m2p-dsl";

const [otp, setOtp] = useState('');
const handleChange = (value) => setOtp(value);  // console.log(otp);  to get values

<Otp className="otp otp-password" value={otp} valueLength={6} onChange={handleChange} />

`}
                    </Highlighter>
                  </pre>
                </CodeBlock>
                {/* code block */}

                </Box>
              </Box>
            </Box>
            <Box id="tag3" className="equal-spacing">
              <p variant="h5" className="doc-heading-text">
              Error
              </p>
              <p className="doc-content-text">
              Otp Input with error type.</p>
              <Box className="component_expl_hrz">
                <Box className="output_bg">
                  <Row style={{display: 'flex',justifyContent: 'left'}}>
                    <Col item xs={12} md={12} lg={12}>
                        <Otp className={'otp otp-error'} value={otp3} valueLength={6} onChange={handleChange3} />
                    </Col>
                  </Row>
                </Box>
                <Box className="component_code">
                {/* code block */}
                <CodeBlock className={`${sessionStorage.getItem('role') === "DSL-User" ? "active" : ""}`}>
                  <button className="issueTrigger" onClick={handleShow}>Having issues.?</button>
                  <pre className="Code-bg">
                    <Highlighter>{`import { Otp } from "m2p-dsl";

const [otp,setOtp] = React.useState('');

const handleChange = (value) => setOtp(value);
console.log(otp);

<Otp className={'otp otp-error'} value={otp} valueLength={6} onChange={handleChange} />

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
              Underlined
              </p>
              <p className="doc-content-text">Add Class <p className="classname">.underline</p> for dark underlined.
              Add class <p className="classname">.error-underline</p> for error state underlined style.</p>
              <Box className="component_expl_hrz">
                <Box className="output_bg">
                  <Row style={{display: 'flex', justifyContent: 'left'}}>
                    <Col item xs={12} md={6} lg={6}>
                      <Otp className={'otp otp-underline'} value={otp4} valueLength={6} onChange={handleChange4} />
                    </Col>
                    <Col item xs={12} md={6} lg={6}>
                        <Otp className={'otp otp-error-underline'} value={otp5} valueLength={6} onChange={handleChange5} />
                    </Col>
                  </Row>
                </Box>
                <Box className="component_code">
                {/* code block */}
                <CodeBlock className={`${sessionStorage.getItem('role') === "DSL-User" ? "active" : ""}`}>
                  <button className="issueTrigger" onClick={handleShow}>Having issues.?</button>
                  <pre className="Code-bg">
                    <Highlighter>{`import { Otp } from "m2p-dsl";

// otp underlined

const [otp,setOtp] = useState('');

const handleChange = (value) => setOtp(value);
console.log(otp);

// underline
<Otp className={'otp otp-underline'} value={otp} valueLength={6} onChange={handleChange} />

// error underline
<Otp className={'otp otp-error-underline'} value={otp} valueLength={6} onChange={handleChange} />

`}
                    </Highlighter>
                  </pre>
                </CodeBlock>
                {/* code block */}
                </Box>
              </Box>
            </Box>

            <Box id="tag5" className="equal-spacing">
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
                          <p>The className property allows you to change size ,background and position of the OtpInput.</p>
                        </div>
                      </div>
                      {/*  */}
                      <div className="props_div">
                        <div className="props_name">
                          <p>disabled ?</p>
                          <p className="string"><pre>string</pre></p>
                        </div>
                        <div className="props_content">
                            <p>The disabled property allows the user to  disable the OtpInput.</p>
                        </div>
                      </div>
                      {/*  */}
                      <div className="props_div">
                        <div className="props_name">
                          <p>valueLength ?</p>
                          <p className="string"><pre>string</pre></p>
                        </div>
                        <div className="props_content">
                          <p>The valueLength property determines the number of Otp boxes to be displayed.</p>
                        </div>
                      </div>
                      {/*  */}
                      <div className="props_div">
                        <div className="props_name">
                          <p>value ?</p>
                          <p className="string"><pre>string</pre></p>
                        </div>
                        <div className="props_content">
                          <p>The value property allows you to get the values from the Otp.</p>
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
                        Basic
                      </Link>
                    </li>
                    <li>
                      <Link activeClass="active" to="tag2" spy={true} smooth={false} offset={-100} onSetActive={handleScroll}>
                        Password
                      </Link>
                    </li>
                    <li>
                      <Link activeClass="active" to="tag3" spy={true} smooth={false} offset={-100} onSetActive={handleScroll}>
                        Error
                      </Link>
                    </li>
                    <li>
                      <Link activeClass="active" to="tag4" spy={true} smooth={false} offset={-100} onSetActive={handleScroll}>
                        Underline
                      </Link>
                    </li>
                    <li>
                      <Link activeClass="active" to="tag5" spy={true} smooth={false} offset={-100} onSetActive={handleScroll}>
                        props
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

export default OtpInput;
