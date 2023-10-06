import React, { useState,useRef } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Highlighter from "../components/Code";
import CodeBlock from "react-copy-code";
import Scroller from "../components/Scroller";
import { Link } from "react-scroll";
import { Box } from "@mui/material";
import {Tagify} from "m2p-dsl";
import ModalPopup from "../components/Modal";
import IssueForm from "../components/IssueForm";
import {Button} from 'm2p-dsl';

function Tagifys() {
  const [show, setShow] = useState(false);
  const [heading, setHeading] = useState("");
  const [selected,setSelected] = useState([]); 

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
          <p className="component_title">Tagify</p>
          <p className="component_content">
            Tagify Inputs are good for multiple options selecting on an Input.
          </p>
        </Row>
        <Row>
          <Col lg={10} className="component_content_col">
            <Box id="tag1" className="equal-spacing">
              <p className="doc-heading-text">Tagify Input</p>
              <p className="doc-content-text">Tagify Input attaches inputValue on the input.</p>
              <Box className="component_expl_hrz">
                <Box className="output_bg">
                  <Row>
                    <Col item xs={12} md={12} lg={12}>
                          <Tagify 
                            className="tagSm"
                            label="Label"
                            labelfor="label"
                            placeholder="placeholder"   
                            onChange={(event,value) => setSelected(value)}  
                          />      
                          <br/>
                          <Button onClick={() => alert(selected)}>getValues</Button>  
                    </Col>
                  </Row>
                </Box>
                <Box className="component_code">
                  {/* code block */}
                  <CodeBlock className={`${sessionStorage.getItem('role') === "DSL-User" ? "active" : ""}`}>
                  <button className="issueTrigger" onClick={handleShow}>Having issues.?</button>
                    <pre className="Code-bg">
                      <Highlighter>{`import { Tagify,Button } from "m2p-dsl";

const [selected,setSelected] = useState([]); 

<Tagify 
  className="tagSm"
  label="Label"
  labelfor="label"
  placeholder="placeholder"   
  onChange={(event,value) => setSelected(value)}  // get chip values 
/>   

</br>  // spacing   

<Button onClick={() => alert(selected)}>getValues</Button>   // to get Tagged Values      

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
                Sizes
              </p>
              {/* <p className="doc-content-text">
              Tab bar with Icons.</p>  */}
              <Box className="component_expl_hrz">
                <Box className="output_bg">
                  <Row>
                    <Col item xs={12} md={6} lg={6}>  
                      <Tagify 
                        className="tagSm"
                        label="Label"
                        labelfor="label"
                        placeholder="placeholder"   
                      />     
                    </Col>  
                    <Col item xs={12} md={6} lg={6}>  
                        <Tagify 
                          className="tagLg"
                          label="Label"
                          labelfor="label"
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
                    <Highlighter>{`import { Tagify } from "m2p-dsl";

// Small

<Tagify 
  className="tagSm"
  label="Label"
  labelfor="label"
  placeholder="placeholder"   
/>  

// Large

<Tagify 
  className="tagLg"
  label="Label"
  labelfor="label"
  placeholder="placeholder"   
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
                          <p>The ClassName Property allows to Change the Color,Background, and Position of the Tagify Input.</p>
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
                            <pre>placeholder</pre>
                          </p>
                        </div>
                        <div className="props_content">
                          <p>The placeholder Property specifies a short hint that describes the expected value of a Tagify Input.</p>
                        </div>
                      </div>
                      {/*  */}
                      <div className="props_div">
                        <div className="props_name">
                          <p>label ?</p>
                          <p className="string">
                            <pre>string</pre>
                          </p>
                        </div>
                        <div className="props_content">
                          <p>The content of the label.</p>
                        </div>
                      </div>
                      {/*  */}
                      <div className="props_div">
                        <div className="props_name">
                          <p>labelfor ?</p>
                          <p className="string">
                            <pre>string</pre>
                          </p>
                        </div>
                        <div className="props_content">
                          <p>The for / Htmlfor label.</p>
                        </div>
                      </div>
                      {/*  */}
                      <div className="props_div"> 
                        <div className="props_name">
                          <p>labelfor ?</p>
                          <p className="string">
                            <pre>string</pre>
                          </p>
                        </div>
                        <div className="props_content">
                          <p>The for / Htmlfor label.</p>
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
                        Sizes
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

export default Tagifys;
