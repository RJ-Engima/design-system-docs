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

import {RadioButton} from "m2p-dsl";
import FeedbackForm from "../components/feedBack";
import ModalPopup from "../components/Modal";
import IssueForm from "../components/IssueForm";

function Radiobutton() {
  const [show, setShow] = useState(false);
  const [heading, setHeading] = useState("");
  const [value, setValue] = useState(''); 

  const handleClose = () => setShow(false);
  const handleShow = (e) => {
    setShow(true)
  };

  function handleScroll(e) {
    // console.log(e)
    let id = document.getElementById(e)
    setHeading(id.querySelector(".doc-heading-text").innerText)
  }


  const RadioArray = [
    {
      label: 'option1',
      value : 'option1',
      name: 'name', 
    },
    {
      label: 'option2',
      value: 'option2',
      name: 'name',
    },
    {
      label: 'option3',
      value: 'option3',
      name: 'name'
    }
  ];

  const RadioArrayButtons = [
    {
      label: 'option1',
      value : 'option1',
      name: 'name' 
    },
    {
      label: 'option2',
      value: 'option2',
      name: 'name'
    },
    {
      label: 'option3',
      value: 'option3',
      name: 'name'
    },
    {
      label: 'option4',
      value: 'option4',
      name: 'name',
      disabled : true 
    } 
  ];

  const RadioArrayDisabled = [
    {
      label: 'option1',
      value : 'option1',
      name: 'name', 
      disabled: true 
    },
    {
      label: 'option2',
      value: 'option2',
      name: 'name',
      disabled: true,
    }
  ];



const handleChange = (e) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
};

  return (
    <React.Fragment>
      <Scroller />
      <Container fluid className="content_div">
        <Row className="component_content_div">
          <p className="component_title">Radio Button</p>
          <p className="component_content">Radio buttons allow the user to select one parameter from a set.</p>
        </Row>
        <Row>
          <Col lg={10} className="component_content_col">
            <Box id="tag1" className="equal-spacing">
              <p className="doc-heading-text">
              Basic Radio Button
              </p>
              <p className="doc-content-text">
              You can provide a label to the Radio button.</p>
              <Box className="component_expl_hrz">
                <Box className="output_bg">
                  <Row>
                    <Col item xs={12} md={12} lg={12}>
                        <Col item md={12} lg={12}>
                          <RadioButton 
                            radioOptions={RadioArray}   
                            onChange={handleChange} 
                            defaultValue={"option1"}  
                          />  
                        </Col>
                    </Col>
                  </Row>
                </Box>
                <Box className="component_code">
                {/* code block */}
                <CodeBlock className={`${sessionStorage.getItem('role') === "DSL-User" ? "active" : ""}`}>
                  <button className="issueTrigger" onClick={handleShow}>Having issues.?</button>
                  <pre className="Code-bg">
                    <Highlighter>{`import { RadioButton } from "m2p-dsl";

const [value, setValue] = useState(''); 

const RadioArray = [
  {
    label: 'option1',
    value : 'option1',
    name: 'name', 
  },
  {
    label: 'option2',
    value: 'option2',
    name: 'name',
  },
  {
    label: 'option3',
    value: 'option3',
    name: 'name'
  }
];

const handleChange = (e) => {
  console.log('radio checked', e.target.value);
  setValue(e.target.value);
};  

<RadioButton 
  radioOptions={RadioArray}   
  onChange={handleChange}  // get checked Value 
  defaultValue={"option1"}  
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
              <p className="doc-heading-text">
              Radio Button Type 
              </p>
              <p className="doc-content-text">
              Radio With Button Type Selection .</p>
              <Box className="component_expl_hrz">
                <Box className="output_bg">
                  <Row>
                    <Col item xs={12} md={12} lg={12}>
                        <Col item md={12} lg={12}>
                          <RadioButton 
                            radioOptions={RadioArrayButtons}   
                            onChange={handleChange} 
                            type="button"
                            defaultValue={"option1"}  
                          />  
                        </Col>
                    </Col>
                  </Row>
                </Box>
                <Box className="component_code">
                {/* code block */}
                <CodeBlock className={`${sessionStorage.getItem('role') === "DSL-User" ? "active" : ""}`}>
                  <button className="issueTrigger" onClick={handleShow}>Having issues.?</button>
                  <pre className="Code-bg">
                    <Highlighter>{`import { RadioButton } from "m2p-dsl";

const [value, setValue] = useState(''); 

const RadioArray = [
  {
    label: 'option1',
    value : 'option1',
    name: 'name' 
  },
  {
    label: 'option2',
    value: 'option2',
    name: 'name'
  },
  {
    label: 'option3',
    value: 'option3',
    name: 'name'
  },
  {
    label: 'option4',
    value: 'option4',
    name: 'name',
    disabled : true 
  } 
];

const handleChange = (e) => {
  console.log('radio checked', e.target.value);
  setValue(e.target.value);
};  

<RadioButton 
  radioOptions={RadioArray}    
  onChange={handleChange} 
  type="button"
  defaultValue={"option1"}  
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
              <p className="doc-heading-text">
              Error Text 
              </p>
              <p className="doc-content-text">
              The Disabled State of the Radio Button.</p>
              <Box className="component_expl_hrz">
                <Box className="output_bg">
                  <Row>
                    <Col item xs={12} md={12} lg={12}>
                        <Col item md={12} lg={12}>
                        <RadioButton 
                            radioOptions={RadioArray}   
                            onChange={handleChange} 
                            defaultValue={"option1"}
                            errorStatus={true}
                            helperText="Error"  
                          />  
                        </Col>
                    </Col>
                  </Row>
                </Box>
                <Box className="component_code">
                {/* code block */}
                <CodeBlock className={`${sessionStorage.getItem('role') === "DSL-User" ? "active" : ""}`}>
                  <button className="issueTrigger" onClick={handleShow}>Having issues.?</button>
                  <pre className="Code-bg">
                    <Highlighter>{`import { RadioButton } from "m2p-dsl";

const [value, setValue] = useState(''); 

const RadioArray = [
  {
    label: 'option1',
    value : 'option1',
    name: 'name', 
  },
  {
    label: 'option2',
    value: 'option2',
    name: 'name',
  },
  {
    label: 'option3',
    value: 'option3',
    name: 'name'
  }
];

const handleChange = (e) => {
  console.log('radio checked', e.target.value);
  setValue(e.target.value);
};  

<RadioButton 
  radioOptions={RadioArray}   
  onChange={handleChange} 
  defaultValue={"option1"}
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
            <Box id="tag4" className="equal-spacing">
              <p className="doc-heading-text">
              Disabled Radio Button
              </p>
              <p className="doc-content-text">
              You can provide a label to the Radio button.</p>
              <Box className="component_expl_hrz">
                <Box className="output_bg">
                  <Row>
                    <Col item xs={12} md={12} lg={12}>
                        <Col item md={12} lg={12}>
                          <RadioButton 
                            radioOptions={RadioArrayDisabled}   
                            onChange={handleChange} 
                            defaultValue={"option2"}
                          />    
                        </Col>
                    </Col>
                  </Row>
                </Box>
                <Box className="component_code">
                {/* code block */}
                <CodeBlock className={`${sessionStorage.getItem('role') === "DSL-User" ? "active" : ""}`}>
                  <button className="issueTrigger" onClick={handleShow}>Having issues.?</button>
                  <pre className="Code-bg">
                    <Highlighter>{`import { RadioButton } from "m2p-dsl";

const [value, setValue] = useState(''); 

const RadioArray = [
  {
    label: 'option1',
    value : 'option1',
    name: 'name', 
    disabled: true 
  },
  {
    label: 'option2',
    value: 'option2',
    name: 'name',
    disabled: true,
  }
];


const handleChange = (e) => {
  console.log('radio checked', e.target.value);
  setValue(e.target.value);
};  

<RadioButton 
  radioOptions={RadioArrayDisabled}   
  onChange={handleChange} 
  defaultValue={"option2"}
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
                          <p>radioGroupClass ?</p>
                          <p className="classname"><pre>string</pre></p>
                        </div>
                        <div className="props_content">
                          <p>The radioGroupClass is the className for radio Group.</p>
                        </div>
                      </div>
                      <div className="props_div">
                        <div className="props_name">
                          <p>className ?</p>
                          <p className="string"><pre>String</pre></p>
                        </div>
                        <div className="props_content">
                          <p>The className property is for the radio button.</p>
                        </div>
                      </div>
                      {/*  */}
                      <div className="props_div">
                        <div className="props_name">
                          <p>RadioOptions ?</p>
                          <p className="string"><pre>Array of objects</pre></p>
                        </div>
                        <div className="props_content">
                          <p>The RadioOptions contains 
                            <span className="string-color">label</span>
                            <span className="string-color">value</span>
                            <span className="string-color">name</span>
                            <span className="string-color">id</span>and
                            <span className="string-color">disabled</span>
                             .</p>
                        </div>
                      </div>
                      {/*  */}
                      <div className="props_div">
                        <div className="props_name">
                          <p>onChange ?</p>
                          <p className="classname"><pre>function</pre></p>
                        </div>
                        <div className="props_content">
                          <p>The onChange sets up a function to change the radio selection.</p>
                        </div>
                      </div>
                      <div className="props_div">
                        <div className="props_name">
                          <p>errorStatus ?</p>
                          <p className="boolean"><pre>boolean</pre></p>
                        </div>
                        <div className="props_content">
                          <p>The  Errorstatus show the Error Helper text.</p>
                        </div>
                      </div>
                      <div className="props_div">
                        <div className="props_name">
                          <p>helperText ?</p>
                          <p className="string"><pre>string</pre></p>
                        </div>
                        <div className="props_content">
                          <p>The helperText adds content to the radio label.</p>
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
                        Error status
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

export default Radiobutton;
