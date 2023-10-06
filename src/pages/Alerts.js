import React, {useState} from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Highlighter from "../components/Code";
import CodeBlock from "react-copy-code";
import Scroller from "../components/Scroller";
import { Link } from "react-scroll";
import { Box } from "@mui/material";
import {Alert} from 'm2p-dsl' 
import '../assets/css/alertDocs.css'
import ModalPopup from "../components/Modal";
import IssueForm from "../components/IssueForm";


function Alerts() {
  const [show, setShow] = useState(false);
  const [heading, setHeading] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = (e) => {
    setShow(true)
  };

  function handleScroll(e) {
    let id = document.getElementById(e)
    setHeading(id.querySelector(".doc-heading-text").innerText)
  }
  return (
    <React.Fragment>
      <Scroller />
      <Container fluid className="content_div alert_comp">
        <Row className="component_content_div">
          <p className="component_title">Alerts</p>
          <p className="component_content">
            An alert displays a short, important message in a way that attracts the user's attention without interrupting the user's task.
          </p>
        </Row>
        <Row>
          <Col lg={10} className="component_content_col">
            <Box id="tag1" className="equal-spacing">
              <p className="doc-heading-text">
                Default
              </p>
              <p className="doc-content-text">The default form of a alert, used for most cases.</p>
              <Box className="component_expl_hrz" >
                <Box className="output_bg">
                  <Row>
                    <Col item xs={12} md={12} lg={12}>
                    <Alert
                      className="dsAlert"
                      showSubtitle 
                      subtext="Subtitle" 
                      status="alert-success"     
                     /> 
                    </Col>
                  </Row>
                </Box>
                <Box className="component_code">
                {/* code block */}
                <CodeBlock className={`${sessionStorage.getItem('role') === "DSL-User" ? "active" : ""}`}>
                  <button className="issueTrigger" onClick={handleShow}>Having issues.?</button>
                  <div className="check_tick">
                    <svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none"/><path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/></svg>
                  </div>
                  <pre className="Code-bg">
                    <Highlighter>{`import { Alert } from "m2p-dsl";
                    
<Alert
  className="dsAlert"
  showSubtitle 
  subtext="Subtitle" 
  status="alert-success"     
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
                Title 
              </p>
              <p>Alerts With <span> Title  </span> </p>    
              <Box className="component_expl_hrz" >
                <Box className="output_bg">
                  <Row>
                    <Col item xs={12} md={12} lg={12}>
                    <Alert 
                      className="dsAlert"     
                      showTitle    // showTitle 
                      showSubtitle // showSubtitle  
                      titletext="Success"  
                      subtext="Subtitle"    
                      status="alert-success"
                     /> 
                    </Col>
                  </Row>
                </Box>
                <Box className="component_code">
                {/* code block */}
                <CodeBlock className={`${sessionStorage.getItem('role') === "DSL-User" ? "active" : ""}`}>
                  <button className="issueTrigger" onClick={handleShow}>Having issues.?</button>
                  <pre className="Code-bg">
                    <Highlighter>{`import { Alert } from "m2p-dsl";

<Alert 
  className="dsAlert alert-success"     
  status="alert-success"
  showTitle    // show Title 
  showSubtitle // show Subtitle  
  titletext="Success"  
  subtext="Subtitle"    
/> `}</Highlighter>
                  </pre>
                </CodeBlock>
                {/* code block */}

                </Box>
              </Box>
            </Box>
            <Box id="tag3" className="equal-spacing">
              <p variant="h5" className="doc-heading-text">
                Varients
              </p>
              <Box className="component_expl_hrz" >
                <Box className="output_bg">
                  <Row>
                    <Col item xs={12} md={6} lg={6}>
                      <Alert 
                        className="dsAlert"     
                        status="alert-success"
                        showTitle    // show Title 
                        showSubtitle // show Subtitle  
                        titletext="Success"  
                        subtext="Subtitle"    
                      /> 
                    </Col>
                    <Col item xs={12} md={6} lg={6}>
                    <Alert 
                        className="dsAlert"    
                        status="alert-warning" 
                        showTitle    // showTitle 
                        showSubtitle // showSubtitle  
                        titletext="Success"  
                        subtext="Subtitle" 
                      /> 
                    </Col>
                  </Row>

                  <Row>
                    <Col item xs={12} md={6} lg={6}>
                    <Alert 
                        className="dsAlert"    
                        status="alert-danger" 
                        showTitle    // show Title 
                        showSubtitle // show Subtitle  
                        titletext="Success"  
                        subtext="Subtitle"  
                      /> 
                    </Col>
                    <Col item xs={12} md={6} lg={6}>
                    <Alert 
                        className="dsAlert"   
                        status="alert-info"
                        showTitle    // show Title 
                        showSubtitle // show Subtitle  
                        titletext="Success"  
                        subtext="Subtitle"    
                      /> 
                    </Col>
                    </Row>

                </Box>
                <Box className="component_code">
                {/* code block */}
                <CodeBlock className={`${sessionStorage.getItem('role') === "DSL-User" ? "active" : ""}`}>
                  <button className="issueTrigger" onClick={handleShow}>Having issues.?</button>
                  <pre className="Code-bg">
                  <Highlighter>{`import { Alert } from "m2p-dsl";
// success 

<Alert 
  className="dsAlert"     
  status="alert-success"
  showTitle    // show Title 
  showSubtitle // show Subtitle  
  titletext="Success"  
  subtext="Subtitle"    
/> 

// warning 

<Alert 
  className="dsAlert"    
  status="alert-warning" 
  showTitle    // showTitle 
  showSubtitle // showSubtitle  
  titletext="Success"  
  subtext="Subtitle" 
/> 

// danger

<Alert 
  className="dsAlert"    
  status="alert-danger" 
  showTitle    // show Title 
  showSubtitle // show Subtitle  
  titletext="Success"  
  subtext="Subtitle"  
/> 

// info 

<Alert 
  className="dsAlert"   
  status="alert-info"
  showTitle    // show Title 
  showSubtitle // show Subtitle  
  titletext="Success"  
  subtext="Subtitle"     
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
                HyperLink's
              </p>
              <p>Alerts With <span> Title  </span> </p>     
              <Box className="component_expl_hrz" >
                <Box className="output_bg">
                  <Row>
                    <Col item xs={12} md={6} lg={6}>
                    <Alert 
                      className="dsAlert"     
                      status="alert-success"
                      showTitle    // showTitle
                      titletext="Success"  
                      // title hyperLink
                      showTitleTextLink
                      titleTexthref="https://ant.design/components/button"
                      titleTexttarget="_blank"
                      titleTextLink="Hyperlink"  
                     /> 
                    </Col>
                    <Col item xs={12} md={6} lg={6}>
                    <Alert 
                      className="dsAlert"       
                      status="alert-danger"
                      showSubtitle // showSubtitle  
                      subtext='Subtitle' 
                      // subtitle hyperLink
                      showSubTextLink
                      subTexthref="https://ant.design/components/alert"
                      subTexttarget='_blank'  
                      subTextLink="Hyperlink"    
                     /> 
                    </Col>
                  </Row>  
                  <Row>
                    <Col item xs={12} md={12} lg={12}>
                    <Alert 
                      className="dsAlert"
                      status="alert-info"       
                      showTitle    // showTitle
                      showSubtitle // showSubtitle  
                      titletext="Success"  
                      subtext='Subtitle'  
                      // title hyperLink
                      showTitleTextLink
                      titleTexthref="https://ant.design/components/button"
                      titleTexttarget="_blank"
                      titleTextLink="Hyperlink"
                      // subtitle hyperLink
                      showSubTextLink
                      subTexthref="https://ant.design/components/alert"
                      subTexttarget='_blank'  
                      subTextLink="Hyperlink"    
                     /> 
                    </Col>  
                  </Row>

                </Box>
                <Box className="component_code">
                {/* code block */}
                <CodeBlock className={`${sessionStorage.getItem('role') === "DSL-User" ? "active" : ""}`}>
                  <button className="issueTrigger" onClick={handleShow}>Having issues.?</button>
                  <pre className="Code-bg">
                  <Highlighter>{`import { Alert } from "m2p-dsl";

// example 1

<Alert 
  className="dsAlert"     
  status="alert-success"
  showTitle    // showTitle
  titletext="Success"  
  // title hyperLink
  showTitleTextLink
  titleTexthref="https://ant.design/components/button"
  titleTexttarget="_blank"
  titleTextLink="Hyperlink"  
/> 

// example 2

<Alert 
  className="dsAlert"       
  status="alert-danger"
  showSubtitle // showSubtitle  
  subtext='Subtitle' 
  // subtitle hyperLink
  showSubTextLink
  subTexthref="https://ant.design/components/alert"
  subTexttarget='_blank'  
  subTextLink="Hyperlink"    
/> 

// example 3

<Alert 
  className="dsAlert"
  status="alert-info"       
  showTitle    // showTitle
  showSubtitle // showSubtitle  
  titletext="Success"  
  subtext='Subtitle'  
  // title hyperLink
  showTitleTextLink
  titleTexthref="https://ant.design/components/button"
  titleTexttarget="_blank"
  titleTextLink="Hyperlink"
  // subtitle hyperLink
  showSubTextLink
  subTexthref="https://ant.design/components/alert"
  subTexttarget='_blank'  
  subTextLink="Hyperlink"    
/>  
`}</Highlighter>
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
                        {/* <Highlighter>{`Button Props`}</Highlighter> */}
                        Props
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
                          <p className="string"><pre>string </pre></p>
                        </div>
                        <div className="props_content">
                          <p>The className property allows you to change the color, size, varients for the Alert.</p>
                        </div>
                      </div>
                      <div className="props_div">
                        <div className="props_name">
                          <p>status ?</p>
                          <p className="string"><pre> string </pre></p>
                        </div>
                        <div className="props_content">
                          <p>The Four Status are :- 
                            <span className="string-color">alert-success</span>
                            <span className="string-color">alert-warning</span>
                            <span className="string-color">alert-danger</span>
                            <span className="string-color">alert-info</span>
                             .</p>
                        </div>
                      </div>
                      <div className="props_div">
                        <div className="props_name">
                          <p>showTitle ?</p>
                          <p className="boolean"><pre>property</pre></p>
                        </div>
                        <div className="props_content">
                          <p>The showTitle allows the Title Text to be displayed.</p>
                        </div>
                      </div>
                      <div className="props_div">
                        <div className="props_name">
                          <p>titletext ?</p>
                          <p className="string"><pre>string</pre></p>
                        </div>
                        <div className="props_content">
                          <p>The titleText property allows to enter Text content.</p>
                        </div>
                      </div>
                      <div className="props_div">
                        <div className="props_name">
                          <p>showTitleTextLink ?</p>
                          <p className="boolean"><pre>property</pre></p>
                        </div>
                        <div className="props_content">
                          <p>The showTitleTextLink property displays the Hyperlink Text on the Title Text .</p>
                        </div>
                      </div>
                      <div className="props_div">
                        <div className="props_name">
                          <p>titleTexthref ?</p>
                          <p className="string"><pre>string</pre></p>
                        </div>
                        <div className="props_content">
                          <p>The titleTexthref points to the link to be redirected .</p>
                        </div>
                      </div>
                      <div className="props_div">
                        <div className="props_name">
                          <p>titleTexttarget ?</p>
                          <p className="string"><pre>string</pre></p>
                        </div>
                        <div className="props_content">
                          <p>The titleTexttarget works for the Link.</p>
                        </div>
                      </div>
                      <div className="props_div">
                        <div className="props_name">
                          <p>titleTextLink ?</p>
                          <p className="string"><pre>string</pre></p>
                        </div>
                        <div className="props_content">
                          <p>The titleTextLink enter's content on the title Hyperlink.</p>
                        </div>
                      </div>

                      <div className="props_div">
                        <div className="props_name">
                          <p>showSubtitle ?</p>
                          <p className="boolean"><pre>property</pre></p>
                        </div>
                        <div className="props_content">
                          <p>The showSubtitle allows the subTitle to be displayed.</p>
                        </div>
                      </div>
                      <div className="props_div">
                        <div className="props_name">
                          <p>subtext ?</p>
                          <p className="string"><pre>string</pre></p>
                        </div>
                        <div className="props_content">
                          <p>The subtext allow's to enter the subtext.</p>
                        </div>
                      </div>
                      <div className="props_div">
                        <div className="props_name">
                          <p>showSubTextLink ?</p>
                          <p className="boolean"><pre>property</pre></p>
                        </div>
                        <div className="props_content">
                          <p>The showSubTextLink allows the subText link to be displayed.</p>
                        </div>
                      </div>
                      <div className="props_div">
                        <div className="props_name">
                          <p>subTexthref ?</p>
                          <p className="string"><pre>string</pre></p>
                        </div>
                        <div className="props_content">
                          <p>The subTexthref points to the link to be redirected .</p>
                        </div>
                      </div>
                      <div className="props_div">
                        <div className="props_name">
                          <p>subTexthref ?</p>
                          <p className="string"><pre>string</pre></p>
                        </div>
                        <div className="props_content">
                        <p>The subTexthref works for the Link.</p>
                        </div>
                      </div>
                      <div className="props_div">
                        <div className="props_name">
                          <p>subTextLink ?</p>
                          <p className="string"><pre>string</pre></p>
                        </div>
                        <div className="props_content">
                        <p>The subTextLink allows to enter the subtitle link text.</p>
                        </div>
                      </div>  

                    </div>

                  </Col>
                </Box>
              </Box>
            </Box>

          </Col>
          <Col lg={2} className="scroll_content">
            <div id="fixed-box-container">
              <div id="myHeader" className="fixed-content">
                <h5>contents</h5>
                <div className="page_scroller">
                  <ul>
                    <li>
                      <Link activeClass="active" offset={-50} to="tag1" spy={true} smooth={false} onSetActive={handleScroll}>
                        Default
                      </Link>
                    </li>
                    <li>
                      <Link activeClass="active" offset={-90} to="tag2" spy={true} smooth={false} onSetActive={handleScroll}>
                        Title 
                      </Link>
                    </li>
                    <li>
                      <Link activeClass="active" offset={-90} to="tag3" spy={true} smooth={false} onSetActive={handleScroll}>
                        Varients
                      </Link>
                    </li>
                    <li>
                      <Link activeClass="active" offset={-90} to="tag4" spy={true} smooth={false} onSetActive={handleScroll}>
                        HyperLink 
                      </Link>
                    </li>
                    <li>
                      <Link activeClass="active" offset={-90} to="tag5" spy={true} smooth={false} onSetActive={handleScroll}>
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

export default Alerts;
