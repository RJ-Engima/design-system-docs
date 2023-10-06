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

import {Checkbox} from "m2p-dsl";
import FeedbackForm from "../components/feedBack";
import ModalPopup from "../components/Modal";
import IssueForm from "../components/IssueForm";


function Checkboxes() {
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

  const handleCheckdefault = (value) => {
    console.log('checked = ', value); 
  };

  const handleCheckdefaultChecked = (value) => {
    console.log('checked = ', value); 
  };
  
  const handleCheckChangeerror = (value) => {
    console.log('checked = ' ,value);   
  }
  
  const handleDisabled = (value) => {
    console.log('checked = ' ,value);   
  }

  const options1 = [
    {
      label: 'default', 
      value: 'default',
    }
  ];  

  const options2 = [
    {
      label: 'defaultChecked',
      value: 'defaultChecked'
    }
  ]
  const options3 = [
    {
      label: 'error',
      value: 'error'
    }
  ]

  const options4 = [
    {
      label: 'disabled',
      value: 'disabled'
    }
  ]




  return (
    <React.Fragment>
      <Scroller />
      <Container fluid className="content_div">
        <Row className="component_content_div">
          <p className="component_title">Checkbox</p>
          <p className="component_content">Checkboxes allow the user to select one or more items from a set.</p>
        </Row>
        <Row>
          <Col lg={10} className="component_content_col">
            <Box id="tag1" className="equal-spacing">
              <p className="doc-heading-text">
              Basic checkboxes
              </p>
              <p className="doc-content-text">
              The Three Variations Shown Default type and defaultChecked and the disabled State.</p>
              <Box className="component_expl_hrz">
                <Box className="output_bg">
                  <Row>
                        <Col item xs={12} md={6} lg={6}>
                              <Checkbox      
                                // className="stephen"    
                                options={options1}   
                                onChange={handleCheckdefault} 
                              />
                        </Col>          
                        <Col item xs={12} md={6} lg={6}>  
                              <Checkbox      
                                options={options2}   
                                defaultValue={["defaultChecked"]}      
                                onChange={handleCheckdefaultChecked} 
                              />
                        </Col>          
                  </Row>  
                </Box>
                <Box className="component_code">
                {/* code block */}
                <CodeBlock className={`${sessionStorage.getItem('role') === "DSL-User" ? "active" : ""}`}>
                  <button className="issueTrigger" onClick={handleShow}>Having issues.?</button>
                  <pre className="Code-bg">
                    <Highlighter>{`import { Checkbox } from "m2p-dsl";

//  DEFAULT 

const options = [
  {
    label: 'default',
    value: 'default',
  }
];  

 // get Checked values 
const handleChange = (value) => {
  console.log('checked = ', value); 
};

<Checkbox   
  options={options}   
  onChange={handleChange} 
/>


// DEFAULT CHECKED 

const options = [
  {
    label: 'defaultChecked',
    value: 'defaultChecked',
  }
];  

// get Checked values 
const handleChange = (value) => {
  console.log('checked = ', value); 
};

<Checkbox   
  options={options} 
  defaultValue={["defaultChecked"]}  
  onChange={handleChange} 
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
                Error Text 
              </p>
              <p className="doc-content-text">The Helper text is used to denote the error or success state of the Checkbox.</p>
              <Box className="component_expl_hrz" >
                <Box className="output_bg">
                  <Row>
                    <Col item xs={12} md={6} lg={6}>
                      <Checkbox 
                        options={options3}
                        defaultValue={['error']}
                        onChange={handleCheckChangeerror}
                        errorStatus={true}
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
                    <Highlighter>{`import { Checkbox } from "m2p-dsl";

const options = [
  {
    label: 'error',
    value: 'error'
  }
]

const handleChange = (value) => {
  console.log('checked = ' ,value);   
}

<Checkbox 
  options={options}
  defaultValue={['error']}   
  onChange={handleChange}
  errorStatus={true}
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
              <p className="doc-content-text">The Disabled State of Checkbox.</p>
              <Box className="component_expl_hrz">
                <Box className="output_bg">
                  <Row>
                    <Col item xs={12} md={6} lg={6}>
                      <Checkbox 
                        options={options4} 
                        onChange={handleDisabled} 
                        disabled={true}
                        />    
                    </Col>
                    <Col item xs={12} md={6} lg={6}>
                      <Checkbox 
                        options={options4}
                        defaultValue={['disabled']}
                        onChange={handleDisabled} 
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
                    <Highlighter>{`import { Checkbox } from "m2p-dsl";


// Common options

const options = [
  {
    label: 'disabled',
    value: 'disabled'
  }
]

const handleChange = (value) => {
  console.log('checked = ' ,value);   
}


// DEFAULT  

<Checkbox 
  options={options} 
  onChange={handleChange}
  disabled={true}
/>    

 
// Checked DISABLED   

<Checkbox 
  options={options} 
  defaultValue={["disabled} 
  onChange={handleChange} 
  disabled={true}
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
                          <p>The className property allows you to change size ,background and position of the Checkbox.</p>
                        </div>
                      </div>
                      {/*  */}
                      <div className="props_div">
                        <div className="props_name">
                          <p>disabled ?</p>
                          <p className="boolean"><pre>boolean</pre></p>
                        </div>
                        <div className="props_content">
                          <p>The disabled property if <p className="classname">true</p> makes the Checkbox in disabled State.</p>
                        </div>
                      </div>
                      {/*  */}
                      <div className="props_div">
                        <div className="props_name">
                          <p>options ?</p>
                          <p className="boolean"><pre>Array of Objects</pre></p>
                        </div>
                        <div className="props_content">
                          <p>The options show the value and label of the checkbox.</p>  
                        </div>
                      </div>
                      {/*  */}  
                      <div className="props_div">
                        <div className="props_name">
                          <p>value ?</p>
                          <p className="string"><pre>String</pre></p>
                        </div>
                        <div className="props_content">
                          <p className="string">The Value of the Checkbox.</p>
                        </div>
                      </div>
                      {/*  */}  
                      <div className="props_div">
                        <div className="props_name">
                          <p>label ?</p>
                          <p className="string"><pre>string</pre></p>
                        </div>
                        <div className="props_content">
                          <p className="string">The label of the Checkbox.</p> 
                        </div>
                      </div>
                      {/*  */}
                      <div className="props_div">
                        <div className="props_name">
                          <p>errorStatus ?</p>
                          <p className="classname"><pre>Boolean</pre></p>
                        </div>
                        <div className="props_content">
                          <p>The Errorstatus  display's the Error text.</p>
                        </div>
                      </div>
                      {/*  */}
                      <div className="props_div">
                        <div className="props_name">
                          <p>helperText ?</p>
                          <p className="string"><pre>string</pre></p>
                        </div>
                        <div className="props_content">
                          <p>The content of the helperText.</p>
                        </div>
                      </div>
                      {/*  */}
                      <div className="props_div">
                        <div className="props_name">
                          <p>onChange ?</p>
                          <p className="boolean"><pre>function</pre></p>
                        </div>
                        <div className="props_content">
                          <p>The onChange property to get the checked State.</p>
                        </div>
                      </div>
                      {/*  */}
                      <div className="props_div">
                        <div className="props_name">
                          <p>defaultValue ?</p>
                          <p className="boolean"><pre>Array of string</pre></p>
                        </div>
                        <div className="props_content">
                          <p>It keeps the checkbox by default Checked.</p>
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
                        Default
                      </Link>
                    </li>
                    <li>
                      <Link activeClass="active" to="tag2" spy={true} smooth={false} offset={-100} onSetActive={handleScroll}>
                        Helper Text 
                      </Link>
                    </li>
                    <li>
                      <Link activeClass="active" to="tag3" spy={true} smooth={false} offset={-100} onSetActive={handleScroll}>
                        Disabled 
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
          {/* {
            <ModalPopup className="issueModalForm" show={show} handleClose={handleClose} heading="Issue form" size="md" body={
              <IssueForm variant={heading} handleClose={handleClose} />
            } />
          } */}
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default Checkboxes;
