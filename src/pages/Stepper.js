import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Highlighter from "../components/Code";
import CodeBlock from "react-copy-code";
import Scroller from "../components/Scroller";
import { Link } from "react-scroll";
import { Box} from "@mui/material";

import {Wizard,Button,CustomStepper,Inputs,InfoBadge } from "m2p-dsl";
import FeedbackForm from "../components/feedBack";
import ModalPopup from "../components/Modal";
import IssueForm from "../components/IssueForm";

function Stepper() {
  const [show, setShow] = useState(false);
  const [heading, setHeading] = useState(""); 
  const [current, setCurrent] = useState(0);

  const steps =  [
    {
      title: 'title one',
      content: <div> content  -1 Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
        took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
        but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 
        1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop 
        publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
    },
    {
      title: 'title two',
      content: <div> content  -2 Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
      took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
      but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 
      1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop 
      publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
    },
    {
      title: 'title three',
      content: <div> content  -3 Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
      took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
      but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 
      1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop 
      publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>,
      status: 'error'
    },
    {
      title: 'title four',  
      // disabled: true,  
      content: <div> content  -4 Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer 
      took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, 
      but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 
      1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop 
      publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>  
    },  
  ]
  

  const next = () => {
    setCurrent(current + 1)
  }

  const prev = () => {
    setCurrent(current - 1);
  };  

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
          <p className="component_title">Stepper.</p>
          <p className="component_content">Steppers convey progress through
          numbered steps. It provides a wizard-like workflow.</p>
        </Row>
        <Row>
          <Col lg={10} className="component_content_col">
            <Box id="tag1" className="equal-spacing">
              <p className="doc-heading-text">
              Horizontal
              </p>
              <p className="doc-content-text">Horizontal steppers are
               ideal when the contents of one step depend on an earlier step.</p>
               <p className="string">onChange trigger's the clickable state on wizard.</p>
              <Box className="component_expl_hrz">
                <Box className="output_bg">
                  <Row>
                    <Col item xs={12} md={12} lg={12}>
                        <Wizard   
                            steps={steps}  
                            type="navigation"
                            direction='horizontal'          
                            current={current}    
                            onChange={(value) => setCurrent(value)}  // onChange triggers  clickable      
                            children={ 
                            <div>
                              <div className="stepper-content">{steps[current].content}</div>   
                                <div style={{display: 'flex',justifyContent: 'space-between' }}>       
                                  {current < steps.length - 1 && (
                                    <Button value="Next" onClick={() => next()}  />
                                  )} 
                                  {current === steps.length - 1 && (
                                    <Button value="Done" onClick={ () => alert("SuccessFully Completed !")} /> 
                                  )}  
                                  {current > 0 && (
                                    <Button variant="outlined" value="Prev" onClick={ () => prev()} />      
                                  )}  
                                </div>  
                              </div>}       
                          />            
                    </Col>
                  </Row>
                </Box>
                <Box className="component_code">
                {/* code block */}
                <CodeBlock className={`${sessionStorage.getItem('role') === "DSL-User" ? "active" : ""}`}>
                  <button className="issueTrigger" onClick={handleShow}>Having issues.?</button>
                  <pre className="Code-bg">
                    <Highlighter>{`import { Wizard } from "m2p-dsl";

const [current, setCurrent] = useState(0);

const steps =  [
  {
    title: 'title one',
    content: <div> content  -1 Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
      took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
      but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 
      1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop 
      publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
  },
  {
    title: 'title two',
    content: <div> content  -2 Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
    took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
    but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 
    1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop 
    publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
  },
  {
    title: 'title three',
    content: <div> content  -3 Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
    took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
    but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 
    1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop 
    publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>,
    status: 'error'
  },
  {
    title: 'title four',  
    // disabled: true,  
    content: <div> content  -4 Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer 
    took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, 
    but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 
    1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop 
    publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>  
  },  
]


<Wizard   
steps={steps}  
type="navigation"
direction='horizontal'          
current={current}    
onChange={(value) => setCurrent(value)}  // onChange triggers  clickable      
children={ 
<div>
  <div className="stepper-content">{steps[current].content}</div>   
    <div style={{display: 'flex',justifyContent: 'space-between' }}>       
      {current < steps.length - 1 && (
        <Button value="Next" onClick={() => next()}  />
      )} 
      {current === steps.length - 1 && (
        <Button value="Done" onClick={ () => alert("SuccessFully Completed !")} /> 
      )}  
      {current > 0 && (
        <Button variant="outlined" value="Prev" onClick={ () => prev()} />      
      )}  
    </div>  
  </div>}       
/>      `}
                    </Highlighter>
                  </pre>
                </CodeBlock>
                {/* code block */}

                </Box>
              </Box>
            </Box>
            <Box id="tag2" className="equal-spacing">
              <p variant="h5" className="doc-heading-text">
                Vertical Stepper.
              </p>
              <p className="doc-content-text">Vertical steppers are designed for narrow screen sizes.
              They are ideal for mobile.</p>
              <p className="string">onChange trigger's the clickable state on wizard.</p>   
              <Box className="component_expl_hrz" >
                <Box className="output_bg">
                  <Row>
                    <Col item xs={12} md={12} lg={12}>
                      <Wizard   
                            steps={steps}  
                            type="default"
                            verticalStepper="verticalStepper"  
                            direction='vertical'          
                            current={current}    
                            onChange={(value) => setCurrent(value)}  // onChange triggers  clickable    
                            children={ 
                            <div>
                              <div className="stepper-content">{steps[current].content}</div>   
                                <div style={{display: 'flex',justifyContent: 'space-between' }}>       
                                  {current < steps.length - 1 && (
                                    <Button value="Next" onClick={() => next()}  />
                                  )} 
                                  {current === steps.length - 1 && (
                                    <Button value="Done" onClick={ () => alert("SuccessFully Completed !")} /> 
                                  )}  
                                  {current > 0 && (
                                    <Button variant="outlined" value="Prev" onClick={ () => prev()} />      
                                  )}  
                                </div>  
                              </div>}       
                          />          
                    </Col>
                  </Row>
                </Box>
                <Box className="component_code">
                {/* code block */}
                <CodeBlock className={`${sessionStorage.getItem('role') === "DSL-User" ? "active" : ""}`}>
                  <button className="issueTrigger" onClick={handleShow}>Having issues.?</button>
                  <pre className="Code-bg">
                    <Highlighter>{`import { Wizard } from "m2p-dsl";

const [current, setCurrent] = useState(0);

const steps =  [
  {
    title: 'title one',
    content: <div> content  -1 Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
      took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
      but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 
      1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop 
      publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
  },
  {
    title: 'title two',
    content: <div> content  -2 Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
    took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
    but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 
    1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop 
    publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
  },
  {
    title: 'title three',
    content: <div> content  -3 Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
    took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
    but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 
    1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop 
    publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>,
    status: 'error'
  },
  {
    title: 'title four', 
    content: <div> content  -4 Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer 
    took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, 
    but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 
    1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop 
    publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>  
  },  
]


<Wizard   
steps={steps}  
type="default"
verticalStepper="verticalStepper"  
direction='vertical'          
current={current}    
onChange={(value) => setCurrent(value)}  // onChange triggers  clickable    
children={ 
<div>
  <div className="stepper-content">{steps[current].content}</div>   
    <div style={{display: 'flex',justifyContent: 'space-between' }}>       
      {current < steps.length - 1 && (
        <Button value="Next" onClick={() => next()}  />
      )} 
      {current === steps.length - 1 && (
        <Button value="Done" onClick={ () => alert("SuccessFully Completed !")} /> 
      )}  
      {current > 0 && (
        <Button variant="outlined" value="Prev" onClick={ () => prev()} />      
      )}  
    </div>  
  </div>}       
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
                Props
              </p>
              <Box className="component_expl_hrz" >
                <Box className="props_head">
                  <Row>
                    <Col item xs={12} md={12} lg={12}>
                      <pre className="Code-bg">
                        Stepper Props.
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
                          <p>The className property allows you to change size ,background and position of the Wizard properties.</p>
                        </div>
                      </div>
                      {/*  */}
                      <div className="props_div">
                        <div className="props_name">
                          <p>type ?</p>
                          <p className="string"><pre>string</pre></p>
                        </div>
                        <div className="props_content">
                          <p>Type of steps, can be set to one of the following values<span className="string-color">default</span> and<span className="string-color">navigation</span></p> 
                        </div>  
                      </div>
                      <div className="props_div">
                        <div className="props_name">
                          <p>status ?</p>
                          <p className="string"><pre>string</pre></p>
                        </div>
                        <div className="props_content">
                          <p>To specify the status of current step, can be set to one of the following values:
                           <span className="string-color">wait</span>
                           <span className="string-color">process</span>
                           <span className="string-color">finish</span>
                           <span className="string-color">error</span>
                            </p> 
                        </div>  
                      </div>
                      {/*  */}
                      <div className="props_div">
                        <div className="props_name">
                          <p>direction ?</p>
                          <p className="string"><pre>string</pre></p>
                        </div>
                        <div className="props_content">
                          <p>Two type of direction 
                            <span className="string-color">horizontal</span>  
                            <span className="string-color">vertical</span>
                            </p> 
                        </div>  
                      </div>
                      {/*  */}
                      <div className="props_div">
                        <div className="props_name">
                          <p>onChange ?</p>
                          <p className="string"><pre>element</pre></p>
                        </div>
                        <div className="props_content">
                          <p>Adding onChange property to the component trigger s the Clickable state.</p> 
                        </div>
                      </div>
                      {/*  */}
                      <div className="props_div">
                        <div className="props_name">
                          <p>steps ?</p>
                          <p className="string"><pre>Array of Objects</pre></p>
                        </div>
                        <div className="props_content">
                          <p>The steps property allows each object with step title and content.</p>
                        </div>
                      </div>
                      {/*  */}
                      <div className="props_div">
                        <div className="props_name">
                          <p>children ?</p>
                          <p className="string"><pre>Element</pre></p>
                        </div>
                        <div className="props_content">
                          <p>The children property allows content.</p>
                        </div>
                      </div>
                      {/*  */}
                      <div className="props_div">
                        <div className="props_name">
                          <p>title ?</p>
                          <p className="string"><pre>string</pre></p>
                        </div>
                        <div className="props_content">
                          <p>The title becomes the title of the steps.</p>
                        </div>
                      </div>
                      {/*  */}
                      <div className="props_div">
                        <div className="props_name">
                          <p>content ?</p>
                          <p className="string"><pre>string</pre></p>
                        </div>
                        <div className="props_content">
                          <p>The content becomes the content of the steps.</p>
                        </div>
                      </div>
                      {/*  */}
                      <div className="props_div">
                        <div className="props_name">
                          <p>content ?</p>
                          <p className="string"><pre>element</pre></p>
                        </div>
                        <div className="props_content">
                          <p>The content becomes the content of the steps.</p>
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
                        Horizontal
                      </Link>
                    </li>
                    <li>
                      <Link activeClass="active" to="tag2" spy={true} smooth={false} offset={-100} onSetActive={handleScroll}>
                        Vertical
                      </Link>
                    </li>
                    <li>
                      <Link activeClass="active" to="tag3" spy={true} smooth={false} offset={-100} onSetActive={handleScroll}>
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

export default Stepper;
