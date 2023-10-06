import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Highlighter from "../components/Code";
import CodeBlock from "react-copy-code";
import Scroller from "../components/Scroller";
import { Link } from "react-scroll";
import { Box} from "@mui/material";

import { FlagSelect,Button } from "m2p-dsl";
import FeedbackForm from "../components/feedBack";
import ModalPopup from "../components/Modal";
import IssueForm from "../components/IssueForm";

function CountryPicker() {
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
          <p className="component_title">Country Picker.</p>
          <p className="component_content">country flag  Selector.</p>
        </Row>
        <Row>
          <Col lg={10} className="component_content_col">
            <Box id="tag1" className="equal-spacing">
              <p className="doc-heading-text">
              Basic Country Picker.
              </p>
              <p className="doc-content-text">Country Picker.</p>
              <Box className="component_expl_hrz">
                <Box className="output_bg">
                  <Row>
                    <Col item xs={12} md={12} lg={12}>
                      <FlagSelect
                        label="Label"
                        defaultValue={["India"]} 
                        onChange={(value) => console.log("Selected Country = " + value)}  
                      />  
                    </Col>
                  </Row>
                </Box>
                <Box className="component_code">
                {/* code block */}
                <CodeBlock className={`${sessionStorage.getItem('role') === "DSL-User" ? "active" : ""}`}>
                  <button className="issueTrigger" onClick={handleShow}>Having issues.?</button>
                  <pre className="Code-bg">
                    <Highlighter>{`import { FlagSelect } from "m2p-dsl";  

<FlagSelect
  label="Label"
  defaultValue={["India"]} 
  onChange={(value) => console.log("Selected Country = " + value)}  
/>  

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
                Helper Text
              </p>
              <p className="doc-content-text">Flag Select with helper text/icon</p>
              <Box className="component_expl_hrz" >
                <Box className="output_bg">
                  <Row>
                    <Col item xs={12} md={6} lg={6}>
                        <FlagSelect
                          label="Label"
                          defaultValue={["India"]} 
                          status="success"
                          helperText="Success Text"
                          onChange={(value) => console.log("Selected Country = " + value)}  
                        />    
                    </Col>
                    <Col item xs={12} md={6} lg={6}>
                        <FlagSelect
                          label="Label"
                          defaultValue={["India"]} 
                          status="error"
                          helperText="Error Text" 
                          onChange={(value) => console.log("Selected Country = " + value)}  
                        />  
                    </Col>
                  </Row>
                </Box>
                <Box className="component_code">
                {/* code block */}
                <CodeBlock className={`${sessionStorage.getItem('role') === "DSL-User" ? "active" : ""}`}>
                  <button className="issueTrigger" onClick={handleShow}>Having issues.?</button>
                  <pre className="Code-bg">
                    <Highlighter>{`import { FlagSelect } from "m2p-dsl";  


// Success 

<FlagSelect
  label="Label"
  defaultValue={["India"]} 
  status="success"
  helperText="Success Text"
  onChange={(value) => console.log("Selected Country = " + value)}  
/>    


// Error 

<FlagSelect
  label="Label"
  defaultValue={["India"]} 
  status="error"
  helperText="Error Text" 
  onChange={(value) => console.log("Selected Country = " + value)}    
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
              Sizes
              </p>
              <p className="doc-content-text">
              Two Medium of Sizes.</p>
              <Box className="component_expl_hrz">
                <Box className="output_bg">
                  <Row>
                    <Col item xs={12} md={6} lg={6}>
                      <FlagSelect
                        label="Label"
                        className="drop-sm"
                        defaultValue={["India"]} 
                        onChange={(value) => console.log("Selected Country = " + value)}  
                      />  
                    </Col>
                    <Col item xs={12} md={6} lg={6}>
                      <FlagSelect
                        label="Label"
                        className="drop-lg" 
                        defaultValue={["India"]} 
                        onChange={(value) => console.log("Selected Country = " + value)}  
                      />  
                    </Col>
                  </Row>
                </Box>
                <Box className="component_code">
                {/* code block */}
                <CodeBlock className={`${sessionStorage.getItem('role') === "DSL-User" ? "active" : ""}`}>
                  <button className="issueTrigger" onClick={handleShow}>Having issues.?</button>
                  <pre className="Code-bg">
                    <Highlighter>{`import { FlagSelect } from "m2p-dsl";  


// Small 

<FlagSelect
  label="Label"
  className="drop-sm"
  defaultValue={["India"]} 
  onChange={(value) => console.log("Selected Country = " + value)}  
/>  


// Large 

<FlagSelect
  label="Label"
  className="drop-lg" 
  defaultValue={["India"]} 
  onChange={(value) => console.log("Selected Country = " + value)}  
/>  


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
              Disabled 
              </p>
              <p className="doc-content-text">
              If Disabled is set to true the Picker is Disabled.</p>
              <Box className="component_expl_hrz">
                <Box className="output_bg">
                  <Row>
                    <Col item xs={12} md={12} lg={12}>
                        <FlagSelect 
                          label="Label"
                          defaultValue={["India"]}  
                          disabled={true}  
                          onChange={(value) => console.log("Selected Country = " + value)}  
                        />    
                    </Col>
                  </Row>
                </Box>
                <Box className="component_code">
                {/* code block */}
                <CodeBlock className={`${sessionStorage.getItem('role') === "DSL-User" ? "active" : ""}`}>
                  <button className="issueTrigger" onClick={handleShow}>Having issues.?</button>
                  <pre className="Code-bg">
                    <Highlighter>{`import { FlagSelect } from "m2p-dsl";  


// Disabled 

<FlagSelect 
  label="Label"
  defaultValue={["India"]}  
  disabled={true}  
  onChange={(value) => console.log("Selected Country = " + value)}  
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
                          <p>The className property allows you to change size ,background and position of the FlagSelect.</p>
                        </div>
                      </div>
                      {/*  */}
                      <div className="props_div">
                        <div className="props_name">
                          <p>defaultValue ?</p>
                          <p className="string"><pre>string</pre></p>
                        </div>
                        <div className="props_content">
                          <p>The defaultValue property sets the default value selected on the Input.</p>
                        </div>
                      </div>
                      <div className="props_div">
                        <div className="props_name">
                          <p>label ?</p>
                          <p className="string"><pre>string</pre></p>
                        </div>
                        <div className="props_content">
                          <p>The label property add's Text to the top of the Input.</p> 
                        </div>
                      </div>
                      <div className="props_div">
                        <div className="props_name">
                          <p>status ?</p>
                          <p className="string"><pre>string</pre></p>
                        </div>
                        <div className="props_content">
                          <p>The status<span className="string-color">success</span><span className="string-color">error</span>show along with the helperText.</p> 
                        </div>
                      </div>
                      <div className="props_div">
                        <div className="props_name">
                          <p>htmlFor ?</p>
                          <p className="string"><pre>string</pre></p>
                        </div>
                        <div className="props_content">
                          <p>The htmlFor is <span className="string-color">for</span> of the label.</p> 
                        </div>
                      </div>
                      <div className="props_div">
                        <div className="props_name">
                          <p>disabled ?</p>
                          <p className="boolean"><pre>boolean</pre></p>
                        </div>
                        <div className="props_content">
                          <p>The disabled property allows the Input to be in Disabled State.</p>  
                        </div>
                      </div>
                      {/*  */}
                      <div className="props_div">
                        <div className="props_name">
                          <p>helperText ?</p>
                          <p className="string"><pre>string</pre></p>
                        </div>
                        <div className="props_content">
                          <p>The Content of the helper Text.</p>
                        </div>
                      </div>
                      {/*  */}
                      <div className="props_div">
                        <div className="props_name">
                          <p>onChange ?</p>
                          <p className="string"><pre>onChange</pre></p>
                        </div>
                        <div className="props_content">
                          <p>The <span className="string-color">onChange</span>Property fires the moment when the value of the element is changed.</p>
                        </div>
                      </div>
                      {/*  */}
                      <div className="props_div">
                        <div className="props_name">
                          <p>value ?</p>
                          <p className="string"><pre>value</pre></p>
                        </div>
                        <div className="props_content">
                          <p>The <span className="string-color">value</span> property becomes the selected property of the picker.</p>
                        </div>
                      </div>
                      {/*  */}
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
                        Picker
                      </Link>
                    </li>
                    <li>
                      <Link activeClass="active" to="tag2" spy={true} smooth={false} offset={-100} onSetActive={handleScroll}>
                        Helper text
                      </Link>
                    </li>
                    <li>
                      <Link activeClass="active" to="tag3" spy={true} smooth={false} offset={-100} onSetActive={handleScroll}>
                        Sizes
                      </Link>
                    </li>
                    <li>
                      <Link activeClass="active" to="tag4" spy={true} smooth={false} offset={-100} onSetActive={handleScroll}>
                        Disabled
                      </Link>
                    </li>
                    <li>
                      <Link activeClass="active" to="tag5" spy={true} smooth={false} offset={-100} onSetActive={handleScroll}>
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

export default CountryPicker;
