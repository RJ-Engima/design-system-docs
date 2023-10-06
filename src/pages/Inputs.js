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

import { Inputs } from "m2p-dsl";
import FeedbackForm from "../components/feedBack";
import ModalPopup from "../components/Modal";
import IssueForm from "../components/IssueForm";

function Input() {
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
          <p className="component_title">Inputs</p>
          <p className="component_content">
            The TextField wrapper component is a complete form control including
            a label, input, and help text. It comes with three variants:
            outlined (default), filled, and standard.
          </p>
        </Row>
        <Row>
          <Col lg={10} className="component_content_col">
            <Box id="tag1" className="equal-spacing">
              <p className="doc-heading-text">Basic Inputs</p>
              <p className="doc-content-text">
                The default form of a text field.
              </p>
              <Box className="component_expl_hrz">
                <Box className="output_bg">
                  <Row style={{ display: "flex", justifyContent: "left" }}>
                    <Col item xs={12} md={2} lg={2}>
                      <Inputs
                        labeltext="Label"
                        htmlFor="name"
                        name="name"
                        className="input-sm"
                        autocomplete="off"
                        type="text"          
                        placeholder="placeholder"
                      />
                    </Col>
                  </Row>
                </Box>
                <Box className="component_code">
                  {/* code block */}
                  <CodeBlock className={`${sessionStorage.getItem('role') === "DSL-User" ? "active" : ""}`}>
                  <button className="issueTrigger" onClick={handleShow}>Having issues.?</button>
                    <pre className="Code-bg">
                      <Highlighter>{`import { Inputs } from "m2p-dsl";

<Inputs
  labeltext="Label"
  htmlFor="name"
  name="name"
  className="input-sm"
  autocomplete="off"
  type="text"          
  placeholder="placeholder"
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
                Input Password
              </p>
              <p className="doc-content-text">Password Type for TextField's.</p>
              <Box className="component_expl_hrz">
                <Box className="output_bg">
                  <Row>
                    <Col item xs={12} md={12} lg={12}>
                      <Inputs
                        labeltext="Label"
                        htmlFor="name"
                        className="input-sm"               
                        autocomplete="off"
                        type="password" 
                        placeholder={"placeholder"}
                        name="name"
                      />
                    </Col>
                  </Row>
                </Box>
                <Box className="component_code">
                  {/* code block */}
                  <CodeBlock className={`${sessionStorage.getItem('role') === "DSL-User" ? "active" : ""}`}>
                  <button className="issueTrigger" onClick={handleShow}>Having issues.?</button>
                    <pre className="Code-bg">
                      <Highlighter>{`import { Inputs } from "m2p-dsl";

// Password 

<Inputs
  labeltext="Label"
  htmlFor="name"
  className="input-sm"               
  autocomplete="off"
  type="password" 
  placeholder="placeholder"
  name="name"
/>`}
                      </Highlighter>
                    </pre>
                  </CodeBlock>
                  {/* code block */}
                </Box>
              </Box>
            </Box>
            <Box id="tag3" className="equal-spacing">
              <p variant="h5" className="doc-heading-text">
                Form Helper Text
              </p>
              <p className="doc-content-text">
                The helperText prop can then be used to provide feedback to the
                user about the error or success state. 
              </p>
              <p style={{ fontSize: "12px", marginBottom: "5px" }}>
                Add property as <p className="classname">status</p> for adding
                success and error state.
              </p>
              <p style={{ fontSize: "12px", marginBottom: "5px" }}>
                Add property as <p className="classname">helperText</p>  to add helperText.
              </p>
              <Box className="component_expl_hrz">
                <Box className="output_bg">
                  <Row>
                    <Col item xs={12} md={6} lg={6}>
                      <Inputs
                        labeltext="Label"
                        htmlFor="name"
                        className="input-sm" 
                        autocomplete="off"
                        type="text"
                        placeholder="placeholder"
                        name="name"
                        status="success"  
                        helperText="Success"
                      />  
                    </Col>
                    <Col item xs={12} md={6} lg={6}>
                      <Inputs
                        labeltext="Label"
                        htmlFor="name"
                        className="input-sm"
                        autocomplete="off"
                        type="text"
                        placeholder="placeholder"
                        name="name"
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
                      <Highlighter>{`import { Inputs } from "m2p-dsl";

// Success

<Inputs
  labeltext="Label"
  htmlFor="name"
  className="input-sm" 
  autocomplete="off"
  type="text"
  placeholder="placeholder"
  name="name"
  status="success"  
  helperText="Success"
/>  

// Error 

<Inputs
  labeltext="Label"
  htmlFor="name"
  className="input-sm"
  autocomplete="off"
  type="text"
  placeholder="placeholder"
  name="name"
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

            {/* disabled */}

            <Box id="tag4" className="equal-spacing">
              <p variant="h5" className="doc-heading-text">
                Disabled
              </p>
              <p className="doc-content-text">
                The disabled property disable's the Input.
              </p>
              <Box className="component_expl_hrz">
                <Box className="output_bg">
                  <Row>
                    <Col item xs={12} md={6} lg={6}>
                        <Inputs 
                          labeltext='Label' 
                          htmlFor='name' 
                          className='input-sm' 
                          autocomplete='off' 
                          type="text" 
                          placeholder='placeholder' 
                          name='name' 
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
                      <Highlighter style={{display: 'flex',justifyContent: 'space-between'}}>{`import { Inputs } from "m2p-dsl";

// Disabled

<Inputs 
  labeltext='Label' 
  htmlFor='name' 
  className='input-sm' 
  autocomplete='off' 
  type="text" 
  placeholder='placeholder' 
  name='name' 
  disabled={true}
/>  `}
                      </Highlighter>
                    </pre>
                  </CodeBlock>
                  {/* code block */}
                </Box>
              </Box>
            </Box>
            {/* disabled */}

            <Box id="tag5" className="equal-spacing">
              <p variant="h5" className="doc-heading-text">
                Sizes
              </p>
              <p className="doc-content-text">
                Two Medium of Input Sizes. For small add class
                <p className="classname"> input-sm </p>
                For large add class<p className="classname"> input-lg </p>
              </p>
              <Box className="component_expl_hrz">
                <Box className="output_bg">
                  <Row >
                    <Col item xs={12} md={6} lg={6}>
                      <Inputs
                        labeltext="Label"
                        htmlFor="label"
                        className="input-sm"
                        placeholder="placeholder"
                        type="text"
                        name="name"
                        autocomplete="off"
                      />
                    </Col>
                    <Col item xs={12} md={6} lg={6}>
                      <Inputs
                        labeltext="Label"
                        htmlFor="label"
                        className="input-lg"
                        placeholder="placeholder"
                        type="text"
                        name="name"
                        autocomplete="off"
                      />
                    </Col>
                    </Row>
                </Box>
                <Box className="component_code">
                  {/* code block */}
                  <CodeBlock className={`${sessionStorage.getItem('role') === "DSL-User" ? "active" : ""}`}>
                  <button className="issueTrigger" onClick={handleShow}>Having issues.?</button>
                    <pre className="Code-bg">
                      <Highlighter>{`import { Inputs } from "m2p-dsl";

// Small

<Inputs
  labeltext="Label"
  htmlFor="label"
  className="input-sm"
  placeholder="placeholder"
  type="text"
  name="name"
  autocomplete="off"
/>

<Inputs
  labeltext="Label"
  htmlFor="label"
  className="input-lg"
  placeholder="placeholder"
  type="text"
  name="name"
  autocomplete="off" 
/> `}   
                      </Highlighter>
                    </pre>
                  </CodeBlock>
                  {/* code block */}
                </Box>
              </Box>
            </Box>

            <Box id="tag6" className="equal-spacing">
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
                          <p>className ?</p>
                          <p className="string">
                            <pre>string</pre>
                          </p>
                        </div>
                        <div className="props_content">
                          <p>
                            The className property acts as{" "}
                            <p className="classname">className property</p>{" "}
                            allows you to change size ,background and color of
                            the Input.
                          </p>
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
                          <p>
                            The short hint displayed in the input before the
                            user enters a value.
                          </p>
                        </div>
                      </div>
                      {/*  */}
                      <div className="props_div">
                        <div className="props_name">
                          <p>disabled ?</p>
                          <p className="string">
                            <pre>string</pre>
                          </p>
                        </div>
                        <div className="props_content">
                          <p>
                            The disabled property allows the user to disable the
                            Input.
                          </p>
                        </div>
                      </div>
                      {/*  */}
                      <div className="props_div">
                        <div className="props_name">
                          <p>autoComplete ?</p>
                          <p className="string">
                            <pre>string</pre>
                          </p>
                        </div>
                        <div className="props_content">
                          <p>
                            This prop helps users to fill forms faster,
                            especially on mobile devices.
                          </p>
                        </div>
                      </div>
                      {/*  */}
                      {/*  */}
                      <div className="props_div">
                        <div className="props_name">
                          <p>autoFocus ?</p>
                          <p className="boolean">
                            <pre>boolean</pre>
                          </p>
                        </div>
                        <div className="props_content">
                          <p>
                            If true, the input element is focused during the
                            first mount.
                          </p>
                        </div>
                      </div>
                      {/*  */}
                      <div className="props_div">
                        <div className="props_name">
                          <p>defaultValue ?</p>
                          <p className="boolean">
                            <pre>any</pre>
                          </p>
                        </div>
                        <div className="props_content">
                          <p>
                            The default value. Use when the component is not
                            controlled.
                          </p>
                        </div>
                      </div>
                      {/*  */}
                      <div className="props_div">
                        <div className="props_name">
                          <p>id ?</p>
                          <p className="boolean">
                            <pre>string</pre>
                          </p>
                        </div>
                        <div className="props_content">
                          <p>The id of the input element.</p>
                        </div>
                      </div>
                      {/*  */}
                      <div className="props_div">
                        <div className="props_name">
                          <p>readOnly ?</p>
                          <p className="boolean">
                            <pre>boolean</pre>
                          </p>
                        </div>
                        <div className="props_content">
                          <p>
                            It prevents the user from changing the value of the
                            field (not from interacting with the field).
                          </p>
                        </div>
                      </div>
                      {/*  */}
                      <div className="props_div">
                        <div className="props_name">
                          <p>required ?</p>
                          <p className="boolean">
                            <pre>boolean</pre>
                          </p>
                        </div>
                        <div className="props_content">
                          <p>If true, the input element is required.</p>
                        </div>
                      </div>
                      {/*  */}
                      <div className="props_div">
                        <div className="props_name">
                          <p>type ?</p>
                          <p className="boolean">
                            <pre>string</pre>
                          </p>
                        </div>
                        <div className="props_content">
                          <p>Type of the input element.</p>
                        </div>
                      </div>
                      {/*  */}
                      <div className="props_div">
                        <div className="props_name">
                          <p>value ?</p>
                          <p className="boolean">
                            <pre>any</pre>
                          </p>
                        </div>
                        <div className="props_content">
                          <p>
                            The value of the input element, required for a
                            controlled component.
                          </p>
                        </div>
                      </div>
                      <div className="props_div">
                        <div className="props_name">
                          <p>showPasswordIcon ?</p>
                          <p className="boolean">
                            <pre>boolean</pre>  
                          </p>
                        </div>
                        <div className="props_content">
                          <p>The prooerty allows to toggle text and password in the password type Input Field.</p>
                        </div>
                      </div>
                      {/*  */}
                      <div className="props_div">
                        <div className="props_name">
                          <p>minLength ?</p>
                          <p className="boolean">
                            <pre>number</pre>
                          </p>
                        </div>
                        <div className="props_content">
                          <p>The Minimum Length of the Input.</p>
                        </div>
                      </div>
                      {/*  */}
                      <div className="props_div">
                        <div className="props_name">
                          <p>maxLength ?</p>
                          <p className="boolean">
                            <pre>number</pre>
                          </p>
                        </div>
                        <div className="props_content">
                          <p>The Maximum Length of the Input.</p>
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
                          <p>
                            The event source of the callback. You can pull out
                            the new value by accessing event.target.value
                            (string)..
                          </p>
                        </div>
                      </div>
                      {/* ending */}
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
                        onSetActive={handleScroll}
                      >
                        Basic
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
                        Password
                      </Link>
                    </li>
                    <li>
                      <Link
                        activeClass="active"
                        to="tag3"
                        spy={true}
                        smooth={false}
                        offset={-100}
                        onSetActive={handleScroll}
                      >
                        Helper Text
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
                        Disabled
                      </Link>
                    </li>
                    <li>
                      <Link
                        activeClass="active"
                        to="tag5"
                        spy={true}
                        smooth={false}
                        offset={-100}
                        onSetActive={handleScroll}
                      >
                       Sizes
                      </Link>
                    </li>
                    <li>
                      <Link
                        activeClass="active"
                        to="tag6"
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

export default Input;
