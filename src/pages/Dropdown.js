import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Highlighter from "../components/Code";
import CodeBlock from "react-copy-code";
import Scroller from "../components/Scroller";
import { Link } from "react-scroll";
import { Box} from "@mui/material";

import { Dropdown,Button } from "m2p-dsl";
import FeedbackForm from "../components/feedBack";
import ModalPopup from "../components/Modal";
import IssueForm from "../components/IssueForm";

const selectOptions = [
    {
      id: 0,
      value: 'India',
      label: 'India',
    },
    {
      id: 1,
      value: 'china',
      label: 'china',
    },
    {
      id: 2,
      value: 'England',
      label: 'England',
    },
    {
      id: 3,
      value: 'Russia',
      label: 'Russia',
    },
    {
      id: 4,
      value: 'Korea',
      label: 'Korea',
    },
    {
      id: 5,
      value: 'America',
      label : 'America',
    }
];

function DropdownSelect() {
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
          <p className="component_title">Dropdown.</p>
          <p className="component_content">When there are more than a few options to choose from, you can wrap them in a Dropdown. By hovering or clicking on the trigger,
           a dropdown menu will appear, which allows you to choose an option and execute the relevant action.</p>
        </Row>
        <Row>
          <Col lg={10} className="component_content_col">
            <Box id="tag1" className="equal-spacing">
              <p className="doc-heading-text">Basic Dropdown.</p>
              <p className="doc-content-text">The most basic dropdown menu.</p>
              <Box className="component_expl_hrz">
                <Box className="output_bg">
                  <Row>
                    <Col item xs={12} md={12} lg={12}>
                      <Dropdown
                        label="Label"
                        labelfor="label"
                        mode="single"
                        className="drop-sm"
                        defaultValue='India'
                        selectOptions={selectOptions}
                        onChange={(value) => console.log(value) }    // to get selected values
                      />
                    </Col>
                  </Row>
                </Box>
                <Box className="component_code">
                {/* code block */}
                <CodeBlock className={`${sessionStorage.getItem('role') === "DSL-User" ? "active" : ""}`}>
                  <button className="issueTrigger" onClick={handleShow}>Having issues.?</button>
                  <pre className="Code-bg">
                    <Highlighter>{`import { Dropdown } from "m2p-dsl";

const selectOptions = [
    {
      id: 0,
      value: 'china',
      label: 'china',
    },
    {
      id: 1,
      value: 'India',
      label: 'India',
    },
    {
      id: 2,
      value: 'England',
      label: 'England',
    },
    {
      id: 3,
      value: 'Russia',
      label: 'Russia',
    },
    {
      id: 4,
      value: 'Korea',
      label: 'Korea',
    },
    {
      id: 5,
      value: 'America',
      label : 'America',
    }
];

<Dropdown
  label="Label"
  labelfor="label"
  mode="single"
  className="drop-sm"
  defaultValue='India'
  selectOptions={selectOptions}
  onChange={(value) => console.log(value) }    // to get selected values
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
                Multiple Select Dropdown
              </p>
              <p className="doc-content-text">Enables to Select Multiple Options from the Dropdown</p>
              <Box className="component_expl_hrz" >
                <Box className="output_bg">
                  <Row>
                    <Col item xs={12} md={12} lg={12}>
                    <Dropdown
                      label="Label"
                      labelfor="label"
                      mode="multiple"
                      className="drop-sm"
                      defaultValue='India'
                      selectOptions={selectOptions}
                      onChange={(value) => console.log(value) }      // to get selected values
                      />
                    </Col>
                  </Row>
                </Box>
                <Box className="component_code">
                {/* code block */}
                <CodeBlock className={`${sessionStorage.getItem('role') === "DSL-User" ? "active" : ""}`}>
                  <button className="issueTrigger" onClick={handleShow}>Having issues.?</button>
                  <pre className="Code-bg">
                    <Highlighter>{`import { Dropdown } from "m2p-dsl";

const selectOptions = [
    {
      id: 0,
      value: 'India',
      label: 'India',
    },
    {
      id: 1,
      value: 'china',
      label: 'china',
    },
    {
      id: 2,
      value: 'England',
      label: 'England',
    },
    {
      id: 3,
      value: 'Russia',
      label: 'Russia',
    },
    {
      id: 4,
      value: 'Korea',
      label: 'Korea',
    },
    {
      id: 5,
      value: 'America',
      label : 'America',
    }
];

<Dropdown
  label="Label"
  labelfor="label"
  mode="multiple"
  className="drop-sm"
  defaultValue='India'
  selectOptions={selectOptions}
  onChange={(value) => console.log(value) }      // to get selected values
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
                Helper Text
              </p>
              <p className="doc-content-text">Dropdown with helper text/icon</p>
              <Box className="component_expl_hrz" >
                <Box className="output_bg">
                  <Row>
                    <Col item xs={12} md={6} lg={6}>
                      <Dropdown
                        label="Label"
                        labelfor="label"
                        mode="single"
                        className="drop-sm"
                        defaultValue='India'
                        selectOptions={selectOptions}
                        onChange={(value) => console.log(value) }      // to get selected values 
                        status="success" 
                        helperText="Success"
                      />
                    </Col>
                    <Col item xs={12} md={6} lg={6}>
                    <Dropdown
                      label="Label"
                      labelfor="label"
                      mode="multiple"
                      className="drop-sm"
                      defaultValue='India'
                      selectOptions={selectOptions}
                      onChange={(value) => console.log(value) }      // to get selected values
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
                    <Highlighter>{`import { Dropdown } from "m2p-dsl";

const selectOptions = [
    {
      id: 0,
      value: 'India',
      label: 'India',
    },
    {
      id: 1,
      value: 'china',
      label: 'china',
    },
    {
      id: 2,
      value: 'England',
      label: 'England',
    },
    {
      id: 3,
      value: 'Russia',
      label: 'Russia',
    },
    {
      id: 4,
      value: 'Korea',
      label: 'Korea',
    },
    {
      id: 5,
      value: 'America',
      label : 'America',
    }
];


// SUCCESS

<Dropdown
  label="Label"
  labelfor="label"
  mode="single"
  className="drop-sm"
  defaultValue='India'
  selectOptions={selectOptions}
  onChange={(value) => console.log(value) }      // to get selected values 
  status="success" 
  helperText="Success"
/>

// ERROR 

<Dropdown
  label="Label"
  labelfor="label"
  mode="multiple"
  className="drop-sm"
  defaultValue='India'
  selectOptions={selectOptions}
  onChange={(value) => console.log(value) }      // to get selected values
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

{/*  */}
            <Box id="tag4" className="equal-spacing">
              <p variant="h5" className="doc-heading-text">
              Sizes
              </p>
              <p className="doc-content-text">
              Two Medium of Sizes.</p>
              <Box className="component_expl_hrz">
                <Box className="output_bg">
                  <Row style={{paddingBottom: '30px'}}>
                    <Col item xs={12} md={6} lg={6}>
                        <Dropdown
                        label="Label"
                        labelfor="label"
                        mode="single"
                        className="drop-sm"
                        defaultValue='India'
                        selectOptions={selectOptions}
                        onChange={(value) => console.log(value) }      // to get selected values
                        />
                    </Col>
                    <Col item xs={12} md={6} lg={6}>
                        <Dropdown
                        label="Label"
                        labelfor="label"
                        mode="single"
                        className="drop-lg"
                        defaultValue='India'
                        selectOptions={selectOptions}
                        onChange={(value) => console.log(value) }      // to get selected values
                        />
                    </Col>
                  </Row>
                </Box>
                <Box className="component_code">
                {/* code block */}
                <CodeBlock className={`${sessionStorage.getItem('role') === "DSL-User" ? "active" : ""}`}>
                  <button className="issueTrigger" onClick={handleShow}>Having issues.?</button>
                  <pre className="Code-bg">
                    <Highlighter>{`import { Dropdown } from "m2p-dsl";
// Small

 <Dropdown
  label="Label"
  labelfor="label"
  mode="single"
  className="drop-sm"
  defaultValue='India'
  selectOptions={selectOptions}
  onChange={(value) => console.log(value) }      // to get selected values
/>


// Large

<Dropdown
  label="Label"
  labelfor="label"
  mode="single"
  className="drop-lg"
  defaultValue='India'
  selectOptions={selectOptions}
  onChange={(value) => console.log(value) }      // to get selected values
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
              Disabled
              </p>
              <p className="doc-content-text">
              Disabled State of dropdown.</p>
              <Box className="component_expl_hrz">
                <Box className="output_bg">
                  <Row style={{paddingBottom: '30px'}}>
                    <Col item xs={12} md={12} lg={12}>
                        <Dropdown
                        label="Label"
                        labelfor="label"
                        mode="single"
                        className="drop-sm"
                        defaultValue='India'
                        disabled={true}
                        selectOptions={selectOptions}
                        onChange={(value) => console.log(value) }      // to get selected values
                        />
                    </Col>
                  </Row>
                </Box>
                <Box className="component_code">
                {/* code block */}
                <CodeBlock className={`${sessionStorage.getItem('role') === "DSL-User" ? "active" : ""}`}>
                  <button className="issueTrigger" onClick={handleShow}>Having issues.?</button>
                  <pre className="Code-bg">
                    <Highlighter>{`import { Dropdown } from "m2p-dsl";
 
//  Disabled  

<Dropdown
  label="Label"
  labelfor="label"
  mode="single"
  className="drop-sm"
  defaultValue='India'
  disabled={true}
  selectOptions={selectOptions}
  onChange={(value) => console.log(value) }      // to get selected values
/>  
 
 `}
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
                          <p>The className property allows you to change size ,background,Color and position of the Dropdown.</p>
                        </div>
                      </div>
                      {/*  */}
                      <div className="props_div">
                        <div className="props_name">
                          <p>mode ?</p>
                          <p className="string"><pre>string</pre></p>
                        </div>
                        <div className="props_content">
                          <p>The mode property can be used as mode="<p className="classname">single</p>" for Single Selector Dropdown.
                          And mode="<p className="classname">multiple</p>" for multiple Selector Dropdown.</p>
                        </div>
                      </div>
                      {/*  */}
                      <div className="props_div">
                        <div className="props_name">
                          <p>defaultValue ?</p>
                          <p className="string"><pre>string</pre></p>
                        </div>
                        <div className="props_content">
                          <p>The defaultValue property sets the default value selected on the Dropdown.</p>
                        </div>
                      </div>
                      <div className="props_div">
                        <div className="props_name">
                          <p>label ?</p>
                          <p className="string"><pre>string</pre></p>
                        </div>
                        <div className="props_content">
                          <p>The label property allows to enter text above the Dropdown.</p>  
                        </div>
                      </div>
                      <div className="props_div">
                        <div className="props_name">
                          <p>Disabled ?</p>
                          <p className="boolean"><pre>boolean</pre></p>
                        </div>
                        <div className="props_content">
                          <p>The Disabled property allows the dropdown to be in disabled state.</p>
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
                        Basic
                      </Link>
                    </li>
                    <li>
                      <Link activeClass="active" to="tag2" spy={true} smooth={false} offset={-100} onSetActive={handleScroll}>
                        Multi-select
                      </Link>
                    </li>
                    <li>
                      <Link activeClass="active" to="tag3" spy={true} smooth={false} offset={-100} onSetActive={handleScroll}>
                          Helper text
                      </Link>
                    </li>
                    <li>
                      <Link activeClass="active" to="tag4" spy={true} smooth={false} offset={-100} onSetActive={handleScroll}>
                        Sizes
                      </Link>
                    </li>
                    <li>
                      <Link activeClass="active" to="tag5" spy={true} smooth={false} offset={-100} onSetActive={handleScroll}>
                        Disabled 
                      </Link>
                    </li>
                    <li>
                      <Link activeClass="active" to="tag6" spy={true} smooth={false} offset={-100} onSetActive={handleScroll}>
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

export default DropdownSelect;
