import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Highlighter from "../components/Code";
import CodeBlock from "react-copy-code";
import Scroller from "../components/Scroller";
import { Link } from "react-scroll";
import { Box } from "@mui/material";
import {TextArea,Button} from "m2p-dsl";
import FeedbackForm from "../components/feedBack";
import ModalPopup from "../components/Modal";
import IssueForm from "../components/IssueForm";

function TextAreas() {
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
          <p className="component_title">TextArea</p>
          <p className="component_content">
          The Textarea Autosize component gives you a textarea HTML element that
          automatically adjusts its height to match the length of the content within.
          </p>
        </Row>
        <Row>
          <Col lg={10} className="component_content_col">
            <Box id="tag1" className="equal-spacing">
              <p className="doc-heading-text">Text Area</p>
              <p className="doc-content-text">By default, an empty Textarea Autosize component
              renders as a single row, as shown in the following demo.</p>
              <Box className="component_expl_hrz">
                <Box className="output_bg">
                  <Row>
                    <Col item xs={12} md={12} lg={12}>
                        <TextArea
                        labelfor="label"
                        label="Label" 
                        className="textarea-box"
                        placeholder="text area"
                        />
                    </Col>
                  </Row>
                </Box>
                <Box className="component_code">
                  {/* code block */}
                  <CodeBlock className={`${sessionStorage.getItem('role') === "DSL-User" ? "active" : ""}`}>
                  <button className="issueTrigger" onClick={handleShow}>Having issues.?</button>
                    <pre className="Code-bg">
                      <Highlighter>{`import { TextArea } from "m2p-dsl";

<TextArea
labelfor="label"
label="Label" 
className='textarea-box'
placeholder='text area'
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
                Helper Text 
              </p>
              {/* <p className="doc-content-text">
              Tab bar with Icons.</p>  */}
              <Box className="component_expl_hrz">
                <Box className="output_bg">
                  <Row>
                    <Col item xs={12} md={6} lg={6}>
                      <TextArea
                        labelfor="label"
                        label="Label" 
                        className="textarea-box"    
                        placeholder="text area" 
                        status="success"  
                        helperText="Success" 
                        />
                    </Col>
                    <Col item xs={12} md={6} lg={6}>
                      <TextArea
                        labelfor="label"
                        label="Label" 
                        className="textarea-box"    
                        placeholder="text area" 
                        status="error"
                        helperText="Error"  
                        />  
                    </Col>
                  </Row>
                </Box>
                <Box className="component_code">
                {/* code block */}
                <CodeBlock className={`${sessionStorage.getItem('role') === "DSL-User" ? "active" : ""}`}>
                  <button className="issueTrigger" onClick={handleShow}>Having issues.?</button>
                  <pre className="Code-bg">
                    <Highlighter>{`import { TextArea } from "m2p-dsl";
// Success 

<TextArea
  labelfor="label"
  label="Label" 
  className="textarea-box"    
  placeholder="text area" 
  status="success"  
  helperText="Success" 
/>

// Error 

<TextArea
  labelfor="label"
  label="Label" 
  className="textarea-box"    
  placeholder="text area" 
  status="error"
  helperText="Error"    
/>  

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
                Disabled
              </p>
              {/* <p className="doc-content-text">
              Tab bar with Icons.</p>  */}
              <Box className="component_expl_hrz">
                <Box className="output_bg">
                  <Row>
                    <Col item xs={12} md={12} lg={12}>
                      <TextArea
                        labelfor="label"
                        label="Label" 
                        className="textarea-box"  
                        placeholder="text area"
                        disabled={true} 
                        />
                    </Col>
                  </Row>
                </Box>
                <Box className="component_code">
                {/* code block */}
                <CodeBlock className={`${sessionStorage.getItem('role') === "DSL-User" ? "active" : ""}`}>
                  <button className="issueTrigger" onClick={handleShow}>Having issues.?</button>
                  <pre className="Code-bg">
                    <Highlighter>{`import { TextArea } from "m2p-dsl";

<TextArea
  labelfor="label"
  label="Label" 
  className="textarea-box"  
  placeholder="text area"
  disabled={true}
/>`}  
                    </Highlighter>
                  </pre>
                </CodeBlock>
                {/* code block */}
                </Box>
              </Box>
            </Box>

            <Box id="tag4" className="equal-spacing">
              <p variant="h5" className="doc-heading-text">Text Area Resizer Disabler</p> 
              <p className="doc-content-text"> Add Class <span className="string-color"> .resize-disabler </span></p>  
              <Box className="component_expl_hrz">
                <Box className="output_bg">
                  <Row>
                    <Col item xs={12} md={12} lg={12}>
                      <TextArea
                        labelfor="label"
                        label="Label" 
                        className="textarea-box resize-disabler"  
                        placeholder="Disable Resizer"
                        />
                    </Col>
                  </Row>
                </Box>
                <Box className="component_code">
                {/* code block */}
                <CodeBlock className={`${sessionStorage.getItem('role') === "DSL-User" ? "active" : ""}`}>
                  <button className="issueTrigger" onClick={handleShow}>Having issues.?</button>
                  <pre className="Code-bg">
                    <Highlighter>{`import { TextArea } from "m2p-dsl";

<TextArea
  labelfor="label"
  label="Label" 
  className="textarea-box resize-disabler"     
  placeholder="Disable Resizer"
/>
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
                            Textarea.
                          </p>
                        </div>
                      </div>
                      {/*  */}
                      <div className="props_div">
                        <div className="props_name">
                          <p>status ?</p>
                          <p className="string">
                            <pre>string</pre>
                          </p>
                        </div>
                        <div className="props_content">
                          <p>The status property could be 
                            <span className="string-color">Success</span>
                            <span className="string-color">Error</span>.</p>
                        </div>
                      </div>  
                      {/*  */}
                      <div className="props_div">
                        <div className="props_name">
                          <p>helperText ?</p>
                          <p className="string">
                            <pre>string</pre>
                          </p>
                        </div>
                        <div className="props_content">
                          <p>The helpertext.</p>
                        </div>
                      </div>  
                      {/*  */}
                      <div className="props_div">
                        <div className="props_name">
                          <p>placeholder ?</p>
                          <p className="string">
                            <pre>string</pre>
                          </p>
                        </div>
                        <div className="props_content">
                          <p>The placeholder of the TextArea.</p>
                        </div>
                      </div>
                      {/*  */}
                      <div className="props_div">
                        <div className="props_name">
                          <p>disabled ?</p>
                          <p className="string">
                            <pre>boolean</pre>
                          </p>
                        </div>
                        <div className="props_content">
                          <p>The disabled property keeps the textarea disabled.</p>
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
                      <Link
                        activeClass="active"
                        to="tag1"
                        spy={true}
                        smooth={false}
                        offset={-100}
                        onSetActive={handleScroll}>
                        TextArea
                      </Link>
                    </li>
                    <li>
                      <Link
                        activeClass="active"
                        to="tag2"
                        spy={true}
                        smooth={false}
                        offset={-100}
                        onSetActive={handleScroll}>
                        Helper Text 
                      </Link>
                    </li>
                    <li>
                      <Link
                        activeClass="active"
                        to="tag3"
                        spy={true}
                        smooth={false}
                        offset={-100}
                        onSetActive={handleScroll}>
                        Disabled  
                      </Link>
                    </li> 
                    <li>
                      <Link
                        activeClass="active"
                        to="tag4"
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

export default TextAreas;
