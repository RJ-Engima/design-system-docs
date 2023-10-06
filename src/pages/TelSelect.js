import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Highlighter from "../components/Code";
import CodeBlock from "react-copy-code";
import Scroller from "../components/Scroller";
import { Link } from "react-scroll";
import { Box } from "@mui/material";
import {Button} from "m2p-dsl";
import {TelSelect} from "m2p-dsl";
import FeedbackForm from "../components/feedBack";
import ModalPopup from "../components/Modal";
import IssueForm from "../components/IssueForm";

function CodeSelect() {
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
          <p className="component_title">Country Code Selector</p>
          <p className="component_content">
            Country code selector is basically used in forms for Country code selection.
          </p>
        </Row>
        <Row>
          <Col lg={10} className="component_content_col">
            <Box id="tag1" className="equal-spacing">
              <p className="doc-heading-text">Country Code Picker.</p>
              <p className="doc-content-text">Basic Tel-select Picker.</p>
              <Box className="component_expl_hrz">
                <Box className="output_bg">
                  <Row>
                    <Col item xs={12} md={12} lg={12}>
                        <TelSelect 
                          labelfor='label' 
                          label="Label"    
                          inputClass="input-sm"   
                          name="phoneInput"
                          value="+91"
                          searchPlaceholder="search ..."
                          id="someid"
                          enableSearch={true}
                          onChange={(value) => console.log( '+' + value)} />  
                    </Col>
                  </Row>
                </Box>
                <Box className="component_code">
                  {/* code block */}
                  <CodeBlock className={`${sessionStorage.getItem('role') === "DSL-User" ? "active" : ""}`}>
                  <button className="issueTrigger" onClick={handleShow}>Having issues.?</button>
                    <pre className="Code-bg">
                      <Highlighter>{`import {TelSelect} from "m2p-dsl";

<TelSelect 
  labelfor='label' 
  label="Label"    
  inputClass="input-sm"   
  name="phoneInput"
  value="+91"
  searchPlaceholder="search ..."
  id="someid"
  enableSearch={true}
  onChange={(value) => console.log( '+' + value)} />    

                    `}</Highlighter>
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
              <p className="doc-content-text">
              Tel Select with succes and error helper text.</p>
              <Box className="component_expl_hrz">
                <Box className="output_bg">
                  <Row>
                    <Col item xs={12} md={6} lg={6}>
                        <TelSelect 
                          labelfor='label' 
                          label="Label"    
                          inputClass="input-sm"   
                          name="phoneInput"
                          status="success"
                          helperText="success"
                          value="+91"
                          searchPlaceholder="search ..."
                          id="someid"
                          enableSearch={true}
                          onChange={(value) => console.log( '+' + value)} />  
                    </Col>
                    <Col item xs={12} md={6} lg={6}>
                        <TelSelect 
                          labelfor='label' 
                          label="Label"    
                          inputClass="input-sm"   
                          name="phoneInput"
                          status="error"
                          helperText="error"
                          value="+91"
                          searchPlaceholder="search ..."
                          id="someid"
                          enableSearch={true}
                          onChange={(value) => console.log( '+' + value)} />  
                    </Col>
                  </Row>
                </Box>
                <Box className="component_code">
                {/* code block */}
                <CodeBlock className={`${sessionStorage.getItem('role') === "DSL-User" ? "active" : ""}`}>
                  <button className="issueTrigger" onClick={handleShow}>Having issues.?</button>
                  <pre className="Code-bg">
                    <Highlighter>{`import { TelSelect } from "m2p-dsl";

// Success 

<TelSelect 
  labelfor='label' 
  label="Label"    
  inputClass="input-sm"   
  name="phoneInput"
  status="success"
  helperText="success"
  value="+91"
  searchPlaceholder="search ..."
  id="someid"
  enableSearch={true}
  onChange={(value) => console.log( '+' + value)}
 />  

// error helper text

<TelSelect 
  labelfor='label' 
  label="Label"    
  inputClass="input-sm"   
  name="phoneInput"
  status="error"
  helperText="error"
  value="+91"
  searchPlaceholder="search ..."
  id="someid"
  enableSearch={true}
  onChange={(value) => console.log( '+' + value)} 
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
              Two sizes.</p>
              <Box className="component_expl_hrz">
                <Box className="output_bg">
                  <Row style={{paddingBottom: '30px'}}>
                    <Col item xs={12} md={6} lg={6} >
                        <TelSelect 
                          labelfor='label' 
                          label="Label"    
                          inputClass="input-sm"   
                          name="phoneInput"
                          value="+91"
                          searchPlaceholder="search ..."
                          id="someid"
                          enableSearch={true}
                          onChange={(value) => console.log( '+' + value)} />  
                    </Col>
                    <Col item xs={12} md={6} lg={6} >
                        <TelSelect 
                          labelfor='label' 
                          label="Label"    
                          inputClass="input-lg"   
                          name="phoneInput"
                          value="+91"
                          searchPlaceholder="search ..."
                          id="someid"
                          enableSearch={true}
                          onChange={(value) => console.log( '+' + value)} />  
                    </Col>
                  </Row>
                </Box>
                <Box className="component_code">
                {/* code block */}
                <CodeBlock className={`${sessionStorage.getItem('role') === "DSL-User" ? "active" : ""}`}>
                  <button className="issueTrigger" onClick={handleShow}>Having issues.?</button>
                  <pre className="Code-bg">
                    <Highlighter>{`import { TelSelect } from "m2p-dsl";

// Small 

<TelSelect 
  labelfor='label' 
  label="Label"    
  inputClass="input-sm"   
  name="phoneInput"
  value="+91"
  searchPlaceholder="search ..."
  id="someid"
  enableSearch={true}
  onChange={(value) => console.log( '+' + value)} 
/>  

// Large 

<TelSelect 
  labelfor='label' 
  label="Label"    
  inputClass="input-lg"    
  name="phoneInput"
  value="+91"
  searchPlaceholder="search ..."
  id="someid"
  enableSearch={true}
  onChange={(value) => console.log( '+' + value)} 
/>  

`}</Highlighter>
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
              Add the Disabled to true .</p>  
              <Box className="component_expl_hrz">
                <Box className="output_bg">
                  <Row style={{paddingBottom: '30px'}}>
                    <Col item xs={12} md={6} lg={6} >
                        <TelSelect 
                          labelfor='label' 
                          label="Label"    
                          inputClass="input-sm"   
                          name="phoneInput"
                          value="+91"
                          searchPlaceholder="search ..."
                          disabled={true}
                          id="someid"
                          enableSearch={true}
                          onChange={(value) => console.log( '+' + value)} />  
                    </Col>
                  </Row>
                </Box>
                <Box className="component_code">
                {/* code block */}
                <CodeBlock className={`${sessionStorage.getItem('role') === "DSL-User" ? "active" : ""}`}>
                  <button className="issueTrigger" onClick={handleShow}>Having issues.?</button>
                  <pre className="Code-bg">
                    <Highlighter>{`import { TelSelect } from "m2p-dsl";

// Disabled 

<TelSelect 
  labelfor='label' 
  label="Label"    
  inputClass="input-sm"   
  name="phoneInput"
  value="+91"
  searchPlaceholder="search ..."
  disabled={true}
  id="someid"
  enableSearch={true}
  onChange={(value) => console.log( '+' + value)} 
/>      

`}</Highlighter>
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
                      <pre className="Code-bg">properties</pre>
                    </Col>
                  </Row>
                </Box>
                <Box className="component_code">
                  <Col item xs={12} md={12} lg={12}>
                    <div className="component_props">
                      <div className="props_div">
                        <div className="props_name">
                          <p>inputClass ?</p>
                          <p className="string">
                            <pre>string</pre>
                          </p>
                        </div>
                        <div className="props_content">
                          <p>The inputClass Property allows to Change the Color,Background, and Position of the TelSelect Input.</p>
                        </div>
                      </div>
                      <div className="props_div">
                        <div className="props_name">
                          <p>label ?</p>
                          <p className="string">
                            <pre>string</pre>
                          </p>
                        </div>
                        <div className="props_content">
                          <p>The label Property allows you to add label Text above the Input.</p>
                        </div>
                      </div>  
                      <div className="props_div">
                        <div className="props_name">
                          <p>labelfor ?</p>
                          <p className="string">
                            <pre>string</pre>
                          </p>
                        </div>
                        <div className="props_content">
                          <p>The labelfor becomes the for in the label.</p>
                        </div>
                      </div>  
                      <div className="props_div">
                        <div className="props_name">
                          <p>status ?</p>
                          <p className="string">
                            <pre>string</pre>
                          </p>
                        </div>
                        <div className="props_content">
                          <p>The status are 
                            <span className="string-color">success</span><span className="string-color">error</span> of the input.
                            .</p>
                        </div>
                      </div>  
                      <div className="props_div">
                        <div className="props_name">
                          <p>helperText ?</p>
                          <p className="string">
                            <pre>string</pre>
                          </p>
                        </div>
                        <div className="props_content">
                          <p>The Content of the helperText.</p>
                        </div>
                      </div>  
                      <div className="props_div">
                        <div className="props_name">
                          <p>Disabled ?</p>
                          <p className="boolean">
                            <pre>boolean</pre>
                          </p>
                        </div>
                        <div className="props_content">
                          <p> The Disabled property of the Input.</p>  
                        </div>
                      </div>
                      {/*  */}
                      <div className="props_div">
                        <div className="props_name">
                          <p>onChange ?</p>
                          <p className="boolean">
                            <pre>function</pre>
                          </p>
                        </div>
                        <div className="props_content">
                          <p>The onchange Property fires the moment when the value of the element is changed.</p>
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
                          <p>The placeholder Property specifies a short hint that describes the expected value of a TelSelect Input.</p>
                        </div>
                      </div>
                      {/*  */}
                      <div className="props_div">
                        <div className="props_name">
                          <p>enableSearch ?</p>
                          <p className="boolean">
                            <pre>boolean</pre>
                          </p>
                        </div>
                        <div className="props_content">
                          <p>The enableSearch Property allows to add searchBox on the Input select.</p>
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
                        offset={-100} onSetActive={handleScroll}
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
                        offset={-100} onSetActive={handleScroll}
                      >
                       Helper Text
                      </Link>
                    </li>
                    <li>
                      <Link
                        activeClass="active"
                        to="tag3"
                        spy={true}
                        smooth={false}
                        offset={-100} onSetActive={handleScroll}
                      >
                       Sizes
                      </Link>
                    </li>

                    <li>
                      <Link
                        activeClass="active"
                        to="tag4"
                        spy={true}
                        smooth={false}
                        offset={-100} onSetActive={handleScroll}
                      >
                       Disabled 
                      </Link>
                    </li>
                    <li>
                      <Link
                        activeClass="active"
                        to="tag5"
                        spy={true}
                        smooth={false}
                        offset={-100} onSetActive={handleScroll}
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

export default CodeSelect;
