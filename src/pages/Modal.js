import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Highlighter from "../components/Code";
import CodeBlock from "react-copy-code";
import Scroller from "../components/Scroller";
import { Link } from "react-scroll";
import { Box, Grid } from "@mui/material";
import { Modal, Button } from "m2p-dsl";
import FeedbackForm from "../components/feedBack";
import ModalPopup from "../components/Modal";
import IssueForm from "../components/IssueForm";
import {Drawer} from 'm2p-dsl'; 

function Modals() { 
  const [show, setShow] = useState(false);
  const [heading, setHeading] = useState("");

  const [showModal,setShowModal] = useState(false);   // default  
  const [showModal1,setShowModal1] = useState(false);   // Small  
  const [showModal2,setShowModal2] = useState(false);   // Medium 
  const [showModal3,setShowModal3] = useState(false);   // Large    
  const [showModal4,setShowModal4] = useState(false); // rightSide 
  const [showModal5,setShowModal5] = useState(false);  // centered 

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
          <p className="component_title">Modal</p>
          <p className="component_content">
            The modal component provides a solid foundation for creating
            dialogs, popovers, lightboxes, or whatever else.
          </p>
        </Row>
        <Row>
          <Col lg={10} className="component_content_col">
            <Box id="tag1" className="equal-spacing">
              <p className="doc-heading-text">Small</p>
              <p className="doc-content-text">Small sized Modal Popup</p>
              <Box className="component_expl_hrz">
                <Box className="output_bg">
                  <Row>
                    <Col item xs={12} md={12} lg={12}>
                      <Modal 
                        className="modal-sm"
                        modalTitle={<div>Modal Title</div>} 
                        children={<div> 
                          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem typesetting industry.</p>
                        </div>}     
                        open={showModal1}
                        onCancel={() => setShowModal1(false)}
                        footer={<div style={{display: "flex",marginLeft: "auto",justifyContent: "space-around",width: "65%"}}>
                          <Button variant="outlined" value="cancel" onClick={() => setShowModal1(false)} />
                          <Button variant="contained" onClick={() => alert("steps completed")} value="Save" />   
                        </div>}  
                      />
                      <Button onClick={() => setShowModal1(true)} variant="contained" className="btn-primary"  value="Modal Small Sized" />     
                    </Col>
                  </Row>
                </Box>
                <Box className="component_code">
                  {/* code block */}
                  <CodeBlock className={`${sessionStorage.getItem('role') === "DSL-User" ? "active" : ""}`}>
                  {/* <button className="issueTrigger" onClick={handleShow}>Having issues.?</button> */}
                    <pre className="Code-bg">
                      <Highlighter>{`import { Modal, Button } from "m2p-dsl";

const [showModal,setShowModal] = React.useState(false); 

<Modal 
  className="modal-sm"
  modalTitle={<div>Modal Title</div>} 
  children={<div> 
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem typesetting industry.</p>
  </div>}     
  open={showModal1}
  onCancel={() => setShowModal(false)}
  footer={<div style={{display: "flex",marginLeft: "auto",justifyContent: "space-around",width: "65%"}}>
    <Button variant="outlined" value="cancel" onClick={() => setShowModal(false)} />
    <Button variant="contained" onClick={() => alert("steps completed")} value="Save" />   
  </div>}  
/>  

// onClick show Modal 

<Button onClick={() => setShowModal(true)} variant="contained" className="btn-primary"  value="Modal Small Sized" />     

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
                Medium
              </p>
              <p className="doc-content-text">Medium sized Modal Popup.</p>
              <Box className="component_expl_hrz">
                <Box className="output_bg">
                  <Row>
                    <Col item xs={12} md={12} lg={12}>
                    <Modal 
                        className="modal-md"    
                        modalTitle={<div>Modal Title</div>} 
                        children={<div> 
                          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem typesetting industry.</p>
                        </div>}     
                        open={showModal2}
                        onCancel={() => setShowModal2(false)}
                        footer={<div style={{display: "flex",marginLeft: "auto",justifyContent: "space-around",width: "36%"}}>    
                          <Button variant="outlined" value="cancel" onClick={() => setShowModal2(false)} />
                          <Button variant="contained" onClick={() => alert("steps completed")} value="Save" />   
                        </div>}  
                      />  
                      <Button onClick={() => setShowModal2(true)} variant="contained" className="btn-primary"  value="Modal Small Medium" />      
                    </Col>
                  </Row>
                </Box>
                <Box className="component_code">
                  {/* code block */}
                  <CodeBlock className={`${sessionStorage.getItem('role') === "DSL-User" ? "active" : ""}`}>
                  {/* <button className="issueTrigger" onClick={handleShow}>Having issues.?</button> */}
                    <pre className="Code-bg">
                      <Highlighter>{`import { Modal, Button } from "m2p-dsl";

const [showModal,setShowModal] = React.useState(false);   

<Modal 
  className="modal-md"  
  modalTitle={<div>Modal Title</div>} 
  children={<div> 
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem typesetting industry.</p>
  </div>}     
  open={showModal}
  onCancel={() => setShowModal(false)}
  footer={<div style={{display: "flex",marginLeft: "auto",justifyContent: "space-around",width: "65%"}}>
    <Button variant="outlined" value="cancel" onClick={() => setShowModal(false)} />
    <Button variant="contained" onClick={() => alert("steps completed")} value="Save" />   
  </div>}  
/>  

<Button onClick={() => setShowModal(true)} variant="contained" className="btn-primary"  value="Modal Small Sized" />     
                      
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
                Large
              </p>
              <p className="doc-content-text">Large sized Modal Popup.</p>
              <Box className="component_expl_hrz">
                <Box className="output_bg">
                  <Row>
                    <Col item xs={12} md={12} lg={12}>
                      <Modal 
                          className="modal-lg"
                          modalTitle={<div>Modal Title</div>} 
                          children={<div> 
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem typesetting industry.</p>
                          </div>}     
                          open={showModal3}
                          onCancel={() => setShowModal3(false)}
                          footer={<div style={{display: "flex",marginLeft: "auto",justifyContent: "space-around",width: "20%"}}>    
                            <Button variant="outlined" value="cancel" onClick={() => setShowModal3(false)} />
                            <Button variant="contained" onClick={() => alert("steps completed")} value="Save" />   
                          </div>}  
                        />  
                        <Button onClick={() => setShowModal3(true)} variant="contained" className="btn-primary"  value="Modal Small Large" />      
                    </Col>  
                  </Row>
                </Box>
                <Box className="component_code">
                  {/* code block */}
                  <CodeBlock className={`${sessionStorage.getItem('role') === "DSL-User" ? "active" : ""}`}>
                  {/* <button className="issueTrigger" onClick={handleShow}>Having issues.?</button> */}
                    <pre className="Code-bg">
                      <Highlighter>{`import { Modal, Button } from "m2p-dsl";

const [showModal,setShowModal] = React.useState(false);   

<Modal 
  className="modal-lg"    
  modalTitle={<div>Modal Title</div>} 
  children={<div> 
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem typesetting industry.</p>
  </div>}     
  open={showModal}
  onCancel={() => setShowModal(false)}
  footer={<div style={{display: "flex",marginLeft: "auto",justifyContent: "space-around",width: "65%"}}>
    <Button variant="outlined" value="cancel" onClick={() => setShowModal(false)} />
    <Button variant="contained" onClick={() => alert("steps completed")} value="Save" />   
  </div>}  
/>  

<Button onClick={() => setShowModal(true)} variant="contained" className="btn-primary"  value="Modal Small Sized" />      
                      
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
                Vertically Centered 
              </p>
              <p className="doc-content-text">Vertically centered Modal Popup.</p>
              <Box className="component_expl_hrz">
                <Box className="output_bg">
                  <Row>
                    <Col item xs={12} md={12} lg={12}>
                    <Modal 
                        className="modal-md"    
                        centered
                        modalTitle={<div>Modal Title</div>} 
                        children={<div> 
                          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem typesetting industry.</p>
                        </div>}     
                        open={showModal5}
                        onCancel={() => setShowModal5(false)}
                        footer={<div style={{display: "flex",marginLeft: "auto",justifyContent: "space-around",width: "36%"}}>    
                          <Button variant="outlined" value="cancel" onClick={() => setShowModal5(false)} />
                          <Button variant="contained" onClick={() => alert("steps completed")} value="Save" />   
                        </div>}  
                      />  
                      <Button onClick={() => setShowModal5(true)} variant="contained" className="btn-primary"  value="Modal Vertically Centered" />      
                    </Col>  
                  </Row>
                </Box>
                <Box className="component_code">
                  {/* code block */}
                  <CodeBlock className={`${sessionStorage.getItem('role') === "DSL-User" ? "active" : ""}`}>
                  {/* <button className="issueTrigger" onClick={handleShow}>Having issues.?</button> */}
                    <pre className="Code-bg">
                      <Highlighter>{`import { Modal, Button } from "m2p-dsl";

const [showModal,setShowModal] = React.useState(false);     

<Modal 
  className="modal-md"    
  centered
  modalTitle={<div>Modal Title</div>} 
  children={<div> 
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem typesetting industry.</p>
  </div>}     
  open={showModal}
  onCancel={() => setShowModal(false)}
  footer={<div style={{display: "flex",marginLeft: "auto",justifyContent: "space-around",width: "36%"}}>    
    <Button variant="outlined" value="cancel" onClick={() => setShowModal(false)} />
    <Button variant="contained" onClick={() => alert("steps completed")} value="Save" />   
  </div>}  
/>  
<Button onClick={() => setShowModal(true)} variant="contained" className="btn-primary"  value="Modal Vertically Centered" />      

                      `}
                      </Highlighter>
                    </pre>
                  </CodeBlock>
                  {/* code block */}
                </Box>
              </Box>
            </Box>
            {/* tag 4 content */}
            <Box id="tag4" className="equal-spacing">
              <p variant="h5" className="doc-heading-text"> 
                Drawer  
              </p>  
              <p className="doc-content-text">Add placement  &nbsp; 
              <span className="string-color">right</span> &nbsp;
              <span className="string-color">left</span> &nbsp;
              <span className="string-color">top</span> &nbsp;
              <span className="string-color">bottom</span> &nbsp;
               property to make the Drawer popup.</p>  
              <Box className="component_expl_hrz">
                <Box className="output_bg">
                  <Row>
                    <Col item xs={12} md={12} lg={12}>    
                      <Drawer 
                        modalTitle={<div>Modal Title</div>} 
                        open={showModal4} 
                        placement="right" 
                        children={<div>
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type 
                          specimen book.  Lorem I Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and 
                          scrambled it to make a type specimen book.  Lorem I Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer 
                          took a galley of type and scrambled it to make a type specimen book.  Lorem I Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and scrambled it to make a type specimen book.  Lorem I Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and scrambled it to make a type specimen book.  Lorem I Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                          when an unknown printer took a galley of type and scrambled it to make a type specimen book.  Lorem I Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                          when an unknown printer took a galley of type and scrambled it to make a type specimen book.  Lorem I Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text 
                          ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.    
                        </div>} 
                        footer={<div style={{display: "flex",marginLeft: "auto",justifyContent: "space-between",width: "50%"}}>  
                          <Button variant="contained" value="cancel" onClick={() => setShowModal4(false)} />
                          <Button variant="outlined" value="Save" onClick={() => alert("steps Completed!") } />   
                        </div>}
                        onCancel={() => setShowModal4(false)} />    
                      <Button variant="contained" value="DrawerRight" onClick={() => setShowModal4(true)} />    
                    </Col>  
                  </Row>
                </Box>
                <Box className="component_code">
                  {/* code block */}
                  <CodeBlock className={`${sessionStorage.getItem('role') === "DSL-User" ? "active" : ""}`}>
                  {/* <button className="issueTrigger" onClick={handleShow}>Having issues.?</button> */}
                    <pre className="Code-bg">
                      <Highlighter>{`import {Drawer,Button} from 'm2p-dsl';   

const [showModal,setShowModal] = useState(false);   

<Drawer 
  modalTitle={<div>Modal Title</div>} 
  open={showModal}  
  placement="right" 
  children={<div>
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type 
    specimen book.  Lorem I Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and 
    scrambled it to make a type specimen book.  Lorem I Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer 
    took a galley of type and scrambled it to make a type specimen book.  Lorem I Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
    when an unknown printer took a galley of type and scrambled it to make a type specimen book.  Lorem I Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
    when an unknown printer took a galley of type and scrambled it to make a type specimen book.  Lorem I Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
    when an unknown printer took a galley of type and scrambled it to make a type specimen book.  Lorem I Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
    when an unknown printer took a galley of type and scrambled it to make a type specimen book.  Lorem I Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text 
    ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.    
  </div>} 
  footer={<div style={{display: "flex",marginLeft: "auto",justifyContent: "space-between",width: "50%"}}>  
    <Button variant="contained" value="cancel" onClick={() => setShowModal(false)} />
    <Button variant="outlined" value="Save" onClick={() => alert("steps Completed!") } />   
  </div>} 
  onCancel={() => setShowModal(false)} />      

<Button variant="contained" value="DrawerRight" onClick={() => setShowModal(true)} />  
                      
                      `}
                      </Highlighter>
                    </pre>
                  </CodeBlock>
                  {/* code block */}
                </Box>
              </Box>
            </Box>
            {/* tag 4 content */}
            {/* tag 5 content */}

            <Box id="tag6" className="equal-spacing">
              <p variant="h5" className="doc-heading-text">
                Props 
              </p>
              <Box className="component_expl_hrz">
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
                          <p className="string">
                            <pre>string</pre>
                          </p>
                        </div>
                        <div className="props_content">
                          <p>
                            The className property allows you to change size
                            ,background and position of the Modal.
                          </p>
                        </div>
                      </div> 
                      {/*  */}
                      <div className="props_div">
                        <div className="props_name">
                          <p>modalTitle ?</p>
                          <p className="string">
                            <pre>string</pre>
                          </p>
                        </div>
                        <div className="props_content">
                          <p>
                            The modal dialog's title.
                          </p>
                        </div>
                      </div>  
                      {/*  */}
                      <div className="props_div">
                        <div className="props_name">
                          <p>children ?</p>
                          <p className="string">
                            <pre>string || any</pre>
                          </p>
                        </div>
                        <div className="props_content">
                          <p>
                            The Modal Body Content .  
                          </p>
                        </div>
                      </div>  
                      {/*  */}
                      <div className="props_div"> 
                        <div className="props_name">
                          <p>footer ?</p>
                          <p className="string">
                            <pre> string || ReactNode.</pre> 
                          </p>
                        </div>
                        <div className="props_content">
                          <p>
                            The Modal Body Content.   
                          </p>
                        </div>
                      </div>  
                      {/*  */}
                      <div className="props_div"> 
                        <div className="props_name">
                          <p>open ?</p>
                          <p className="boolean">
                            <pre>boolean </pre> 
                          </p>
                        </div>
                        <div className="props_content">
                          <p>
                              Whether the modal dialog is visible or not .  
                          </p>
                        </div>
                      </div>  
                      {/*  */}
                      <div className="props_div"> 
                        <div className="props_name">
                          <p>open ?</p>
                          <p className="boolean">
                            <pre>function </pre> 
                          </p>
                        </div>
                        <div className="props_content">
                          <p>
                            Specify a function that will be called when a user clicks mask, close button on top right or Cancel button  
                          </p>  
                        </div>
                      </div>  
                      {/*  */}
                      <div className="props_div"> 
                        <div className="props_name">
                          <p>onOk ?</p>
                          <p className="boolean">
                            <pre>function </pre> 
                          </p>
                        </div>
                        <div className="props_content">
                          <p>
                            Specify a function that will be called when a user clicks the OK button	    
                          </p>  
                        </div>
                      </div>  
                      {/*  */}
                      <div className="props_div"> 
                        <div className="props_name">
                          <p>zIndex ?</p>
                          <p className="boolean">
                            <pre>number </pre> 
                          </p>
                        </div>
                        <div className="props_content">
                          <p>
                            The z-index of the Modal. Default set to 1000   
                          </p>  
                        </div>
                      </div>  
                      {/*  */}
                      <div className="props_div"> 
                        <div className="props_name">
                          <p>zIndex ?</p>
                          <p className="boolean">
                            <pre>number </pre> 
                          </p>
                        </div>
                        <div className="props_content">
                          <p>
                            The z-index of the Modal	
                          </p>  
                        </div>
                      </div>  
                      {/*  */}
                      <div className="props_div"> 
                        <div className="props_name">
                          <p>closable	 ?</p>
                          <p className="boolean">
                            <pre>boolean </pre> 
                          </p>
                        </div>
                        <div className="props_content">
                          <p>
                            Whether a close (x) button is visible on top right of the modal dialog or not	
                          </p>      
                        </div>
                      </div>  
                    </div>
                  </Col>
                </Box>
              </Box>
            </Box>
          </Col>
          <Col lg={2} className={'scroll_content'}>
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
                        Small
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
                        Medium
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
                        Large 
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
                        Centered
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
                        Drawer 
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
                        props 
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default Modals;
