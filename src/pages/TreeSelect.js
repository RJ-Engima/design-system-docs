import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Highlighter from "../components/Code";
import CodeBlock from "react-copy-code";
import Scroller from "../components/Scroller";
import { Link } from "react-scroll";
import { Box} from "@mui/material";

import { TreeSelect,Button } from "m2p-dsl";
import FeedbackForm from "../components/feedBack";
import ModalPopup from "../components/Modal";
import IssueForm from "../components/IssueForm";

const treeData = [
  {
    title: 'Node1',
    value: '0-0',
    key: '0-0',
    children: [
      {
        title: 'Child Node1',
        value: '0-0-0',
        key: '0-0-0',
      },
      {
        title: 'Child Node2',
        value: '0-0-1',
        key: '0-0-1',   
      },
    ],
  },
  {
    title: 'Node2',
    value: '0-1',
    key: '0-1',
    children: [
      {
        title: 'Child Node3',
        value: '0-1-0',
        key: '0-1-0',
      },
      {
        title: 'Child Node4',
        value: '0-1-1',
        key: '0-1-1',
      },
      {
        title: 'Child Node5',
        value: '0-1-2',
        key: '0-1-2',
      },
    ],
  },
];  

function TreeSelector() {
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

  const [value, setValue] = React.useState(['Child Node1']);
  const handleChange = (newValue) => {
    console.log('onChange ', value);
    setValue(newValue);
  };

  // success
  const [success, setSuccess] = React.useState(['Child Node1']);
  const handleChange1 = (newValue1) => {
    console.log('onChange ', success);
    setSuccess(newValue1);
  };

  // error
  const [error, setError] = React.useState(['Child Node1']);  
  const handleChange2 = (newValue2) => {
    console.log('onChange ', success);
    setError(newValue2);
  };

    return (
    <React.Fragment>
      <Scroller />
      <Container fluid className="content_div">
        <Row className="component_content_div">
          <p className="component_title">Tree Selector.</p>
          <p className="component_content">TreeSelect is similar to Select, but the values are provided in a tree like structure.</p>
        </Row>
        <Row>
          <Col lg={10} className="component_content_col">
            <Box id="tag1" className="equal-spacing">
              <p className="doc-heading-text">CheckBox Selector.</p>
              <p className="doc-content-text">TreeSelector with Checkbox Selection.</p>
              <Box className="component_expl_hrz">
                <Box className="output_bg">
                  <Row>
                    <Col item xs={12} md={12} lg={12}>
                      <TreeSelect 
                        label="Label" 
                        className="drop-sm" 
                        value={value} 
                        treeData={treeData}  
                        onChange={handleChange}   
                      />  
                    </Col>
                  </Row>
                </Box>
                <Box className="component_code">
                {/* code block */}
                <CodeBlock className={`${sessionStorage.getItem('role') === "DSL-User" ? "active" : ""}`}>
                  <button className="issueTrigger" onClick={handleShow}>Having issues.?</button>
                  <pre className="Code-bg">
                    <Highlighter>{`import { TreeSelect } from "m2p-dsl";

const treeData = [
  {
    title: 'Node1',
    value: '0-0',
    key: '0-0',
    children: [
      {
        title: 'Child Node1',
        value: '0-0-0',
        key: '0-0-0',
      },
      {
        title: 'Child Node2',
        value: '0-0-1',
        key: '0-0-1',   
      },
    ],
  },
  {
    title: 'Node2',
    value: '0-1',
    key: '0-1',
    children: [
      {
        title: 'Child Node3',
        value: '0-1-0',
        key: '0-1-0',
      },
      {
        title: 'Child Node4',
        value: '0-1-1',
        key: '0-1-1',
      },
      {
        title: 'Child Node5',
        value: '0-1-2',
        key: '0-1-2',
      },
    ],
  },
];  


const [value, setValue] = React.useState(['Child Node1']); 

const handleChange = (newValue) => {  // getting selected Values 
  console.log('onChange ', value);
  setValue(newValue);
};

<TreeSelect 
  label="Label" 
  className="drop-sm" 
  value={value} 
  treeData={treeData}  
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
                Helper Text
              </p>
              <p className="doc-content-text">TreeSelect with helper text/icon</p>
              <Box className="component_expl_hrz" >
                <Box className="output_bg">
                  <Row>
                    <Col item xs={12} md={6} lg={6}>
                    <TreeSelect 
                      label="Label" 
                      className="drop-sm" 
                      value={value} 
                      treeData={treeData} 
                      onChange={handleChange}
                      status="success"
                      helperText="Success"  
                      /> 
                   </Col>
                   <Col item xs={12} md={6} lg={6}>
                    <TreeSelect 
                      label="Label" 
                      className="drop-sm" 
                      value={value} 
                      treeData={treeData}  
                      onChange={handleChange}
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
                    <Highlighter>{`import { TreeSelect } from "m2p-dsl";

const treeData = [
  {
    title: 'Node1',
    value: '0-0',
    key: '0-0',
    children: [
      {
        title: 'Child Node1',
        value: '0-0-0',
        key: '0-0-0',
      },
      {
        title: 'Child Node2',
        value: '0-0-1',
        key: '0-0-1',   
      },
    ],
  },
  {
    title: 'Node2',
    value: '0-1',
    key: '0-1',
    children: [
      {
        title: 'Child Node3',
        value: '0-1-0',
        key: '0-1-0',
      },
      {
        title: 'Child Node4',
        value: '0-1-1',
        key: '0-1-1',
      },
      {
        title: 'Child Node5',
        value: '0-1-2',
        key: '0-1-2',
      },
    ],
  },
];  


const [value, setValue] = React.useState(['Child Node1']); 

const handleChange = (newValue) => {  // getting selected Values 
  console.log('onChange ', value);
  setValue(newValue);
};


//  Success 

<TreeSelect 
  label="Label" 
  className="drop-sm" 
  value={value} 
  treeData={treeData} 
  onChange={handleChange}
  status="success"
  helperText="Success"  
/> 

//  Error

<TreeSelect 
  label="Label" 
  className="drop-sm" 
  value={value} 
  treeData={treeData}  
  onChange={handleChange}
  status="error"
  helperText="Error"  
/>  


`}</Highlighter>
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
              Two Medium of Sizes 
              &nbsp; <span className="string-color">Small</span>
              &nbsp; and <span className="string-color">Large</span>
               .</p>
              <Box className="component_expl_hrz">
                <Box className="output_bg">
                  <Row>
                    <Col item xs={12} md={6} lg={6}>
                      <TreeSelect 
                        label="Label" 
                        className="drop-sm" 
                        value={value} 
                        treeData={treeData} 
                        onChange={handleChange}  
                      /> 
                   </Col>
                   <Col item xs={12} md={6} lg={6}>
                      <TreeSelect 
                        label="Label" 
                        className="drop-lg" 
                        value={value} 
                        treeData={treeData} 
                        onChange={handleChange}  
                      /> 
                    </Col>
                </Row>    
                </Box>
                <Box className="component_code">
                {/* code block */}
                <CodeBlock className={`${sessionStorage.getItem('role') === "DSL-User" ? "active" : ""}`}>
                  <button className="issueTrigger" onClick={handleShow}>Having issues.?</button>
                  <pre className="Code-bg">
                    <Highlighter>{`import { TreeSelect } from "m2p-dsl";

const treeData = [
  {
    title: 'Node1',
    value: '0-0',
    key: '0-0',
    children: [
      {
        title: 'Child Node1',
        value: '0-0-0',
        key: '0-0-0',
      },
      {
        title: 'Child Node2',
        value: '0-0-1',
        key: '0-0-1',   
      },
    ],
  },
  {
    title: 'Node2',
    value: '0-1',
    key: '0-1',
    children: [
      {
        title: 'Child Node3',
        value: '0-1-0',
        key: '0-1-0',
      },
      {
        title: 'Child Node4',
        value: '0-1-1',
        key: '0-1-1',
      },
      {
        title: 'Child Node5',
        value: '0-1-2',
        key: '0-1-2',
      },
    ],
  },
];  


const [value, setValue] = React.useState(['Child Node1']); 

const handleChange = (newValue) => {  // getting selected Values 
  console.log('onChange ', value);
  setValue(newValue);
};


// Small 

<TreeSelect 
  label="Label" 
  className="drop-sm" 
  value={value} 
  treeData={treeData}
  onChange={handleChange}  
/> 

// Large 

<TreeSelect 
  label="Label" 
  className="drop-lg" 
  value={value} 
  treeData={treeData} 
  onChange={handleChange}  
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
                          <p>The className property allows you to change size ,background and position of the TreeSelect.</p>
                        </div>
                      </div>
                      {/*  */}
                      <div className="props_div">
                        <div className="props_name">
                          <p>showArrow ?</p>
                          <p className="boolean"><pre>boolean</pre></p>
                        </div>
                        <div className="props_content">
                          <p>If <p className="classname">true</p>, the arrow Icon is displayed.</p>
                        </div>
                      </div>
                      {/*  */}
                      <div className="props_div">
                        <div className="props_name">
                          <p>treeData ?</p>
                          <p className="classname"><pre>object</pre></p>
                        </div>
                        <div className="props_content">
                          <p>The treeData is the Data Object.</p>
                        </div>
                      </div>
                        {/*  */}
                        <div className="props_div">
                        <div className="props_name">
                          <p>disabled ?</p>
                          <p className="string"><pre>string</pre></p>
                        </div>
                        <div className="props_content">
                          <p>The disabled property is used to disable the TreeSelect</p>
                        </div>
                      </div>
                      {/*  */}
                      <div className="props_div">
                        <div className="props_name">
                          <p>defaultValue ?</p>
                          <p className="string"><pre>string</pre></p>
                        </div>
                        <div className="props_content">
                          <p>The defaultValue property sets the default value for the TreeSelect.</p>
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
                        Sizes
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

export default TreeSelector;
