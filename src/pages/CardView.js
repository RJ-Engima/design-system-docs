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

import {CardView} from "m2p-dsl";
import FeedbackForm from "../components/feedBack";
import ModalPopup from "../components/Modal";
import IssueForm from "../components/IssueForm";

function CardViews() {
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
          <p className="component_title">CardView</p>
          <p className="component_content">Cards contain content and actions about a single subject.</p>
        </Row>
        <Row>
          <Col lg={10} className="component_content_col">
            <Box id="tag1" className="equal-spacing">
              <p className="doc-heading-text">
              Basic card
              </p>
              <p className="doc-content-text">
              Although cards can support multiple actions, UI controls, and an overflow menu,
              use restraint and remember that cards are entry points to more complex and detailed information.</p>
              <Box className="component_expl_hrz">
                <Box className="output_bg">
                  <Row style={{display: "flex",flexDirection: "row"}}>
                        <Col>   
                            <CardView    
                              className="dsCard" 
                              captionText="Total Cards" 
                              bodyText="33.33" 
                            /> 
                        </Col>
                        <Col>
                            <CardView    
                              className="dsCard cardUnderline"   
                              captionText="Total Cards" 
                              bodyText="33.33" 
                            /> 
                        </Col>  
                  </Row>
                </Box>
                <Box className="component_code">
                {/* code block */}
                <CodeBlock className={`${sessionStorage.getItem('role') === "DSL-User" ? "active" : ""}`}>
                  <button className="issueTrigger" onClick={handleShow}>Having issues.?</button>
                  <pre className="Code-bg">
                    <Highlighter>{`import { CardView } from "m2p-dsl";
// default 

<CardView    
  className="dsCard" 
  captionText="Total Cards" 
  bodyText="33.33" 
/> 

// underline 

<CardView    
  className="dsCard cardUnderline"     
  captionText="Total Cards" 
  bodyText="33.33" 
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
                Left Icon 
              </p>
              <p className="doc-content-text">Image on the left</p>
              <Box className="card_view component_expl_vrtl" >
                <Box className="output_bg">
                  <Row>
                    <Col item xs={12} md={12} lg={12}>
                        <CardView 
                          className="dsCard" 
                          captionText="Total Cards" 
                          bodyText="33.33" 
                          showLeftIcon={true}  
                          leftIcon={<i className="icon icon-Line-Finance-Card-Inactive"></i>}
                        />  
                    </Col>
                  </Row>
                </Box>
                <Box className="component_code">
                {/* code block */}
                <CodeBlock className={`${sessionStorage.getItem('role') === "DSL-User" ? "active" : ""}`}>
                  <button className="issueTrigger" onClick={handleShow}>Having issues.?</button>
                  <pre className="Code-bg">
                    <Highlighter>{`import {CardView} from "m2p-dsl";
// Left Icon 

<CardView 
  className="dsCard" 
  captionText="Total Cards" 
  bodyText="33.33" 
  showLeftIcon={true}  
  leftIcon={<i className="icon icon-Line-Finance-Card-Inactive"></i>}
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
              Right Icon 
              </p>
              <p className="doc-content-text">
              Image on the right.</p>
              <Box className="card_view component_expl_vrtl">
                <Box className="output_bg">
                  <Row>
                  <Col item xs={12} md={12} lg={12}>
                       <CardView 
                          className="dsCard" 
                          captionText="Total Cards" 
                          bodyText="33.33" 
                          showRightIcon={true} 
                          rightIcon={<i className="icon icon-Line-Finance-Card-Inactive"></i>}
                        />  
                    </Col>
                  </Row>
                </Box>
                <Box className="component_code">
                {/* code block */}
                <CodeBlock className={`${sessionStorage.getItem('role') === "DSL-User" ? "active" : ""}`}>
                  <button className="issueTrigger" onClick={handleShow}>Having issues.?</button>
                  <pre className="Code-bg">
                    <Highlighter>{`import {CardView} from "m2p-dsl";

<CardView 
  className="dsCard" 
  captionText="Total Cards" 
  bodyText="33.33" 
  showRightIcon={true} 
  rightIcon={<i className="icon icon-Line-Finance-Card-Inactive"></i>} 
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
              Double Side Icon 
              </p>
              <p className="doc-content-text">
              Image on both sides.</p>
              <Box className="card_view component_expl_hrz">
                <Box className="output_bg">
                  <Row>
                  <Col item xs={12} md={12} lg={12}>
                        <CardView 
                          className="dsCard" 
                          captionText="Total Cards"   
                          bodyText="33.33" 
                          showRightIcon={true} 
                          showLeftIcon={true} 
                          leftIcon={<i className="icon icon-Line-Finance-Card-Inactive"></i>} 
                          rightIcon={<i className="icon icon-Line-Finance-Card-Inactive"></i>}  
                        />  
                    </Col>
                  </Row>
                </Box>
                <Box className="component_code">
                {/* code block */}
                <CodeBlock className={`${sessionStorage.getItem('role') === "DSL-User" ? "active" : ""}`}>
                  <button className="issueTrigger" onClick={handleShow}>Having issues.?</button>
                  <pre className="Code-bg">
                    <Highlighter>{`import {CardView} from "m2p-dsl";

<CardView 
  className="dsCard" 
  captionText="Total Cards"   
  bodyText="33.33" 
  showRightIcon={true} 
  showLeftIcon={true} 
  leftIcon={<i className="icon icon-Line-Finance-Card-Inactive"></i>} 
  rightIcon={<i className="icon icon-Line-Finance-Card-Inactive"></i>}  
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
                          <p>className ?</p>
                          <p className="string"><pre>string</pre></p>
                        </div>
                        <div className="props_content">
                          <p>The className property allows you to change size ,background and position of the Card Component.</p>
                        </div>
                      </div>
                      {/*  */}
                      <div className="props_div">
                        <div className="props_name">
                          <p>captionText ?</p>
                          <p className="string"><pre>string</pre></p>
                        </div>
                        <div className="props_content">
                          <p>The sub text of the Card.</p> 
                        </div>
                      </div>
                      {/*  */}
                      <div className="props_div">
                        <div className="props_name">
                          <p>bodyText ?</p>
                          <p className="string"><pre>string</pre></p>
                        </div>
                        <div className="props_content">
                          <p>The Title text of the Card.</p>
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
                        Bars
                      </Link>
                    </li>
                    <li>
                      <Link activeClass="active" to="tag3" spy={true} smooth={false} offset={-100} onSetActive={handleScroll}>
                        Icons
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

export default CardViews;
