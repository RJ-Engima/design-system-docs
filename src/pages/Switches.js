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

import {Switch} from "m2p-dsl";
import FeedbackForm from "../components/feedBack";
import ModalPopup from "../components/Modal";
import IssueForm from "../components/IssueForm";

function Switches() {
  const [checked, setChecked] = React.useState(true);

  const handleCheck = () => {
    if(!checked) {
      setChecked(true);
      console.log(checked);
    } else {
      setChecked(false);
      console.log(checked);
    }
  }
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
          <p className="component_title">Switches</p>
          <p className="component_content">Switches toggle the state of a single setting on or off.</p>
        </Row>
        <Row>
          <Col lg={10} className="component_content_col">
            <Box id="tag1" className="equal-spacing">
              <p className="doc-heading-text">
              Basic switches
              </p>
              <p className="doc-content-text">
              Outlined type Otp Input number type.</p>
              <Box className="component_expl_vrtl">
                <Box className="output_bg">
                  <Row>
                      <Col item xs={12} md={6} lg={6}>
                          <Switch
                          checked={checked}  
                          label={'label'}
                          labelPlacement={'top'}
                          onChange={handleCheck} 
                          />
                      </Col>
                      <Col item xs={12} md={6} lg={6}>
                          <Switch
                          checked={checked}
                          label={'label'}
                          labelPlacement={'top'}
                          onChange={handleCheck}
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
                    <Highlighter>{`import { Switch } from "m2p-dsl";

const [checked, setChecked] = React.useState(true);

const handleCheck = () => {
  if(!checked) {
    setChecked(true);
    console.log(checked);
  } else {
    setChecked(false);
    console.log(checked);
  }
};

// Default

<Switch
  checked={checked}
  label={'label'}
  labelPlacement={'top'}
  onChange={handleCheck} // to get Checked Status
/>

// Disabled

<Switch
checked={checked}
label={'label'}
disabled={true}
labelPlacement={'top'}
/>



                    `}</Highlighter>
                  </pre>
                </CodeBlock>
                {/* code block */}

                </Box>
              </Box>
            </Box>
            <Box id="tag2" className="equal-spacing">
              <p variant="h5" className="doc-heading-text">
                Variant
              </p>
              <p className="doc-content-text">
                Single Variant for Switch.</p>
              <Box className="component_expl_vrtl">
                <Box className="output_bg">
                  <Row>
                    <Col item xs={12} md={2} lg={2}>
                       
                    </Col>
                    <Col item xs={12} md={2} lg={2}>
                        {/* <Switch
                        className={'success-check'}
                        label={'label'}
                        defaultChecked
                        labelPlacement={'top'}
                        /> */}
                    </Col>
                    <Col item xs={12} md={2} lg={2}>
                        {/* <Switch
                        className={'warning-check'}
                        label={'label'}
                        defaultChecked
                        labelPlacement={'top'}
                        /> */}
                         <Switch
                        className={'primary-check'}
                        label={'label'} 
                        defaultChecked
                        labelPlacement={'top'}
                        />
                    </Col>
                    <Col item xs={12} md={2} lg={2}>
                        {/* <Switch
                        className={'declined-check'}
                        label={'label'}
                        defaultChecked
                        labelPlacement={'top'}
                        /> */}
                    </Col>
                    <Col item xs={12} md={2} lg={2}>
                        {/* <Switch
                        className={'info-check'}
                        label={'label'}
                        defaultChecked
                        labelPlacement={'top'}
                        /> */}
                    </Col>
                  </Row>
                </Box>
                <Box className="component_code">
                {/* code block */}
                <CodeBlock className={`${sessionStorage.getItem('role') === "DSL-User" ? "active" : ""}`}>
                  <button className="issueTrigger" onClick={handleShow}>Having issues.?</button>
                  <pre className="Code-bg">
                    <Highlighter>{`import { Switch } from "m2p-dsl";

// primary Color

<Switch
  className={'primary-check'}
  label={'label'} 
  defaultChecked
  labelPlacement={'top'}
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
              Label Placement
              </p>
              <p className="doc-content-text">
              Placement of the Switch label.</p>
              <Box className="component_expl_vrtl">
                <Box className="output_bg">
                  <Row>
                    <Col item xs={12} md={2} lg={2}>
                      {/* <Switch className={'primary-check'} label={'label'} defaultChecked labelPlacement={'start'} /> */}
                     </Col>
                    <Col item xs={12} md={2} lg={2}>
                      <Switch className={'primary-check'} label={'label'} defaultChecked labelPlacement={'top'} />
                     </Col>
                     <Col item xs={12} md={2} lg={2}>
                      <Switch className={'primary-check'} label={'label'}  defaultChecked labelPlacement={'start'} />
                     </Col>
                     <Col item xs={12} md={2} lg={2}>
                      <Switch className={'primary-check'} label={'label'}  defaultChecked labelPlacement={'bottom'} />
                     </Col>
                     <Col item xs={12} md={2} lg={2}>
                      <Switch className={'primary-check'} label={'label'}  defaultChecked labelPlacement={'end'} />
                     </Col>
                  </Row>
                </Box>
                <Box className="component_code">
                {/* code block */}
                <CodeBlock className={`${sessionStorage.getItem('role') === "DSL-User" ? "active" : ""}`}>
                  <button className="issueTrigger" onClick={handleShow}>Having issues.?</button>
                  <pre className="Code-bg">
                    <Highlighter>{`import { Switch } from "m2p-dsl";

// top
<Switch className={'primary-check'} label={'label'} defaultChecked labelPlacement={'top'} />

// start
<Switch className={'primary-check'} label={'label'}  defaultChecked labelPlacement={'start'} /> 

// bottom
<Switch className={'primary-check'} label={'label'}  defaultChecked labelPlacement={'bottom'} />

// end
<Switch className={'primary-check'} label={'label'}  defaultChecked labelPlacement={'end'} /> 


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
              Text Switches.
              </p>
              <p className="doc-content-text">
                when Toggled shows the text which needs to be shown.
              </p>
              <p>You can change  the text by eg:- <p className="classname">.primary-text::after</p> by adding content in css stylesheet.</p>
              <Box className="component_expl_vrtl">
                <Box className="output_bg">
                  <Row>
                    <Col item xs={12} md={2} lg={2}>
                      {/* <Switch
                      className={'warning-check warning-text'}
                      label={'label'}
                      defaultChecked
                      labelPlacement={'bottom'}
                      /> */}
                    </Col>
                    <Col item xs={12} md={2} lg={2}>
                      {/* <Switch
                      className={'success-check success-text'}
                      label={'label'}
                      defaultChecked
                      labelPlacement={'bottom'}
                      /> */}
                    </Col>
                    <Col item xs={12} md={2} lg={2}>
                    <Switch
                        className={'primary-check primary-text'}  
                        label={'label'} 
                        labelPlacement={'start'} 
                      />
                      {/* <Switch
                      className={'info-check info-text'}
                      label={'label'}
                      defaultChecked
                      labelPlacement={'bottom'}
                      /> */}
                    </Col>
                    <Col item xs={12} md={2} lg={2}>
                      {/* <Switch
                      className={'info-check info-text'}
                      label={'label'}
                      defaultChecked
                      labelPlacement={'bottom'}
                      /> */}
                    </Col>
                    <Col item xs={12} md={2} lg={2}>
                      {/* <Switch
                      className={'info-check info-text'}
                      label={'label'}
                      defaultChecked
                      labelPlacement={'bottom'}
                      /> */}
                      <Switch
                        className={'primary-check primary-text'}  
                        label={'label'} 
                        defaultChecked
                        labelPlacement={'start'} 
                      />
                    </Col>
                    <Col item xs={12} md={2} lg={2}>
                      {/* <Switch
                      className={'info-check info-text'}
                      label={'label'}
                      defaultChecked
                      labelPlacement={'bottom'}
                      /> */}
                    </Col>
                  </Row>
                </Box>
                <Box className="component_code">
                {/* code block */}
                <CodeBlock className={`${sessionStorage.getItem('role') === "DSL-User" ? "active" : ""}`}>
                  <button className="issueTrigger" onClick={handleShow}>Having issues.?</button>
                  <pre className="Code-bg">
                    <Highlighter>{`import { Switch } from 'designsytem';

// primary switch with text 

// unchecked 

<Switch
  className={'primary-check primary-text'}  
  label={'label'} 
  labelPlacement={'start'} 
/>

// checked 

<Switch
  className={'primary-check primary-text'}  
  label={'label'} 
  defaultChecked
  labelPlacement={'start'} 
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
              Icon Switches.
              </p>
              <p className="doc-content-text">
                when Toggled shows the Icons which needs to be shown.
              </p>
              <p>You can change  the text by eg:- <p className="classname">.primary-icon::after</p> by adding content in css stylesheet.</p>
              <Box className="component_expl_vrtl">
                <Box className="output_bg">
                  <Row>
                    <Col item xs={12} md={2} lg={2}>
                        {/* <Switch
                        className={'primary-check primary-icon'}
                        label={'label'}
                        defaultChecked
                        labelPlacement={'top'}
                        /> */}
                    </Col>
                    <Col item xs={12} md={2} lg={2}>
                    <Switch
                          className={'primary-check primary-icon'}
                          label={'label'}
                          labelPlacement={'top'}  
                        />
                    </Col>
                    <Col item xs={12} md={2} lg={2}>
                        {/* <Switch
                        className={'success-check success_icon'}
                        label={'label'}
                        defaultChecked
                        labelPlacement={'top'}
                        /> */}
                    </Col>
                    <Col item xs={12} md={2} lg={2}>
                    <Switch
                          className={'primary-check primary-icon'}
                          label={'label'}
                          defaultChecked 
                          labelPlacement={'top'}  
                        />
                    </Col>
                    <Col item xs={12} md={2} lg={2}>
                        {/* <Switch
                        className={'info-check info-icon'}
                        label={'label'}
                        defaultChecked
                        labelPlacement={'top'}
                        /> */}
                    </Col>

                  </Row>
                </Box>
                <Box className="component_code">
                {/* code block */}
                <CodeBlock className={`${sessionStorage.getItem('role') === "DSL-User" ? "active" : ""}`}>
                  <button className="issueTrigger" onClick={handleShow}>Having issues.?</button>
                  <pre className="Code-bg">
                    <Highlighter>{`import { Switch } from "m2p-dsl";

// primary switch with Icon 


// unchecked
<Switch
  className={'primary-check primary-icon'}
  label={'label'}
  labelPlacement={'top'}  
/>

// checked 
<Switch
  className={'primary-check primary-icon'}
  label={'label'}
  defaultChecked 
  labelPlacement={'top'}  
/>


`}</Highlighter>
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
                          <p>The className property allows you to change size ,background and position of the Switch.</p>
                        </div>
                      </div>
                      {/*  */}
                      <div className="props_div">
                        <div className="props_name">
                          <p>disabled ?</p>
                          <p className="string"><pre>disabled</pre></p>
                        </div>
                        <div className="props_content">
                            <p>The disabled property allows the user to  disable the Switch.</p>
                        </div>
                      </div>
                      {/*  */}
                      <div className="props_div">
                        <div className="props_name">
                          <p>label ?</p>
                          <p className="string"><pre>string</pre></p>
                        </div>
                        <div className="props_content">
                          <p>The Label property adds the label for the Swicth.</p>
                        </div>
                      </div>
                      {/*  */}
                      <div className="props_div">
                        <div className="props_name">
                          <p>labelPlacement ?</p>
                          <p className="string"><pre>string</pre></p>
                        </div>
                        <div className="props_content">
                          <p>The labelPlacement property places the label in <p className="classname">
                          start,top,end,bottom</p> respective to the Switch.</p>
                        </div>
                      </div>
                        {/*  */}
                        <div className="props_div">
                        <div className="props_name">
                          <p>defaultChecked ?</p>
                          <p className="string"><pre>string</pre></p>
                        </div>
                        <div className="props_content">
                          <p>The defaultChecked property allows the Switch component to be Checked by default.</p>
                        </div>
                      </div>
                      {/*  */}
                      <div className="props_div">
                        <div className="props_name">
                          <p>onChange ?</p>
                          <p className="classname"><pre>function</pre></p>
                        </div>
                        <div className="props_content">
                          <p>The onChange property trigger an event when the user Toggles the Switch.</p>
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
                      <Link activeClass="active" to="tag1" spy={true} smooth={false}>
                        Basic
                      </Link>
                    </li>
                    <li>
                      <Link activeClass="active" to="tag2" spy={true} smooth={false} offset={-100} onSetActive={handleScroll} >
                        Varient
                      </Link>
                    </li>
                    <li>
                      <Link activeClass="active" to="tag3" spy={true} smooth={false} offset={-100} onSetActive={handleScroll} >
                        Label Placement
                      </Link>
                    </li>
                    <li>
                      <Link activeClass="active" to="tag4" spy={true} smooth={false} offset={-100} onSetActive={handleScroll} >
                        Text Switches
                      </Link>
                    </li>
                    <li>
                      <Link activeClass="active" to="tag5" spy={true} smooth={false} offset={-100} onSetActive={handleScroll} >
                        Icon Switches
                      </Link>
                    </li>
                    <li>
                      <Link activeClass="active" to="tag6" spy={true} smooth={false} offset={-100} onSetActive={handleScroll} >
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

export default Switches;
