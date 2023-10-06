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

import {InfoBadge} from "m2p-dsl";
import FeedbackForm from "../components/feedBack";
import ModalPopup from "../components/Modal";
import IssueForm from "../components/IssueForm";

function Badges() {
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
          <p className="component_title">Info Badge</p>
          <p className="component_content">InfoBadge allow users to enter information, make selections,
          filter content, or trigger actions.</p>
        </Row>
        <Row>
          <Col lg={10} className="component_content_col">
            <Box id="tag1" className="equal-spacing">
              <p className="doc-heading-text">
                Badge Filled
              </p>
              <p className="doc-content-text">
              The Chip component supports filled styling.</p>
              <Box className="component_expl_hrz">
                <Box className="output_bg">
                  <Row style={{display: 'flex', justifyContent: 'space-around'}}>
                    <Col item xs={12} md={2} lg={2} style={{display:'flex',justifyContent:'center'}}>
                      <InfoBadge  className="badge-primary" label="Primary" />
                    </Col>
                    <Col item xs={12} md={2} lg={2} style={{display:'flex',justifyContent:'center'}}>
                        <InfoBadge className="badge-success" label="Success" />
                    </Col>
                    <Col item xs={12} md={2} lg={2} style={{display:'flex',justifyContent:'center'}}>
                        <InfoBadge className="badge-warning" label="Warning" />
                    </Col>
                    <Col item xs={12} md={2} lg={2} style={{display:'flex',justifyContent:'center'}}>
                        <InfoBadge className="badge-declined" label="Declined" />
                    </Col>
                    <Col item xs={12} md={2} lg={2} style={{display:'flex',justifyContent:'center'}}>
                        <InfoBadge className="badge-info" label="Info" />
                    </Col>
                    <Col item xs={12} md={2} lg={2} style={{display:'flex',justifyContent:'center'}}>
                        <InfoBadge className="badge-neutral" label="Neutral" />
                    </Col>
                  </Row>
                </Box>
                <Box className="component_code">
                {/* code block */}
                <CodeBlock className={`${sessionStorage.getItem('role') === "DSL-User" ? "active" : ""}`}>
                  <button className="issueTrigger" onClick={handleShow}>Having issues.?</button>
                  <pre className="Code-bg">
                    <Highlighter>{`import { InfoBadge } from "m2p-dsl";

<InfoBadge  className="badge-primary" label="Primary" />

<InfoBadge className="badge-success" label="Success" />

<InfoBadge className="badge-warning" label="Warning" />

<InfoBadge className="badge-declined" label="Declined" />

<InfoBadge className="badge-info" label="Info" />

<InfoBadge className="badge-neutral" label="Neutral" />
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
                Badge Outlined
              </p>
              <p className="doc-content-text">The Chip component supports Outlined styling.</p>
              <Box className="component_expl_hrz" >
                <Box className="output_bg">
                  <Row>
                    <Col item xs={12} md={2} lg={2} style={{display:'flex',justifyContent:'center'}}>
                        <InfoBadge className="primary-ol" label="primary" />
                    </Col>
                    <Col item xs={12} md={2} lg={2} style={{display:'flex',justifyContent:'center'}}>
                        <InfoBadge className="success-ol" label="success" />
                    </Col>
                    <Col item xs={12} md={2} lg={2} style={{display:'flex',justifyContent:'center'}}>
                        <InfoBadge className='warning-ol' label='warning' />
                    </Col>
                    <Col item xs={12} md={2} lg={2} style={{display:'flex',justifyContent:'center'}}>
                        <InfoBadge className='declined-ol' label='declined' />
                    </Col>
                    <Col item xs={12} md={2} lg={2} style={{display:'flex',justifyContent:'center'}}>
                        <InfoBadge className='info-ol' label="Info" />
                    </Col>
                    <Col item xs={12} md={2} lg={2} style={{display:'flex',justifyContent:'center'}}>
                        <InfoBadge className='neutral-ol' label="Neutral" />
                    </Col>
                  </Row>
                </Box>
                <Box className="component_code">
                {/* code block */}
                <CodeBlock className={`${sessionStorage.getItem('role') === "DSL-User" ? "active" : ""}`}>
                  <button className="issueTrigger" onClick={handleShow}>Having issues.?</button>
                  <pre className="Code-bg">
                    <Highlighter>{`import { InfoBadge } from "m2p-dsl";

<InfoBadge className="primary-ol" label="primary" />

<InfoBadge className="success-ol" label="success" />

<InfoBadge className='warning-ol' label='warning' />

<InfoBadge className='declined-ol' label='declined' />

<InfoBadge className='info-ol' label="Info" />

<InfoBadge className='neutral-ol' label="Neutral" />`}
                    </Highlighter>
                  </pre>
                </CodeBlock>
                {/* code block */}

                </Box>
              </Box>
            </Box>
            <Box id="tag3" className="equal-spacing">
              <p variant="h5" className="doc-heading-text">
              Badge left Icon
              </p>
              <p className="doc-content-text">
              Icon on left</p>
              <Box className="component_expl_hrz">
                <Box className="output_bg">
                  <Row>
                    <Col item xs={12} md={2} lg={2} style={{display:'flex',justifyContent:'center'}}>
                        <InfoBadge className='badge-primary primary-icl' label="Primary">  
                          <i className="icon icon-Line-System-User"></i> 
                        </InfoBadge>
                        
                    </Col>
                    <Col item xs={12} md={2} lg={2} style={{display:'flex',justifyContent:'center'}}>
                        <InfoBadge className='success-ol success-ol-icl' label='Success'>
                          <i className="icon icon-Line-System-User"></i> 
                        </InfoBadge>
                    </Col>
                    <Col item xs={12} md={2} lg={2} style={{display:'flex',justifyContent:'center'}}>
                        <InfoBadge className='badge-warning warning-icl' label="Warning">
                          <i className="icon icon-Line-System-User"></i> 
                        </InfoBadge>
                    </Col>
                    <Col item xs={12} md={2} lg={2} style={{display:'flex',justifyContent:'center'}}>
                        <InfoBadge className='declined-ol declined-ol-icl' label="Declined">
                          <i className="icon icon-Line-System-User"></i> 
                        </InfoBadge>
                    </Col>
                    <Col item xs={12} md={2} lg={2} style={{display:'flex',justifyContent:'center'}}>
                        <InfoBadge className='badge-info info-icl' label="Info">
                          <i className="icon icon-Line-System-User"></i> 
                        </InfoBadge>
                    </Col>
                    <Col item xs={12} md={2} lg={2} style={{display:'flex',justifyContent:'center'}}>
                        <InfoBadge className='neutral-ol neutral-ol-icl' label="Neutral">
                          <i className="icon icon-Line-System-User"></i>  
                        </InfoBadge>
                    </Col>
                  </Row>
                </Box>
                <Box className="component_code">
                {/* code block */}
                <CodeBlock className={`${sessionStorage.getItem('role') === "DSL-User" ? "active" : ""}`}>
                  <button className="issueTrigger" onClick={handleShow}>Having issues.?</button>
                  <pre className="Code-bg">
                    <Highlighter>{`import { InfoBadge } from "m2p-dsl";

<InfoBadge className='badge-primary primary-icl' label="Primary">  
  <i className="icon icon-Line-System-User"></i> 
</InfoBadge>

<InfoBadge className='badge-warning warning-icl' label="Warning">
  <i className="icon icon-Line-System-User"></i> 
</InfoBadge>

<InfoBadge className='badge-warning warning-icl' label="Warning">
  <i className="icon icon-Line-System-User"></i> 
</InfoBadge>

<InfoBadge className='declined-ol declined-ol-icl' label="Declined">
  <i className="icon icon-Line-System-User"></i> 
</InfoBadge>

<InfoBadge className='badge-info info-icl' label="Info">
  <i className="icon icon-Line-System-User"></i> 
</InfoBadge>

<InfoBadge className='neutral-ol neutral-ol-icl' label="Neutral">
  <i className="icon icon-Line-System-User"></i>  
</InfoBadge>

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
              Badge Right Icon
              </p>
              <p className="doc-content-text">
              Icon on Right.</p>
              <Box className="component_expl_hrz">
                <Box className="output_bg">
                  <Row>
                    <Col item xs={12} md={2} lg={2} style={{display:'flex',justifyContent:'center'}}>
                        <InfoBadge className='primary-ol primary-ol-icr' label="Primary">
                          <i className="icon icon-Line-System-User"></i> 
                        </InfoBadge>
                    </Col>
                    <Col item xs={12} md={2} lg={2} style={{display:'flex',justifyContent:'center'}}>
                        <InfoBadge className='badge-success success-icr' label="Success">
                          <i className="icon icon-Line-System-User"></i> 
                        </InfoBadge>
                    </Col>
                    <Col item xs={12} md={2} lg={2} style={{display:'flex',justifyContent:'center'}}>
                        <InfoBadge className="warning-ol warning-ol-icr" label="Warning">
                          <i className="icon icon-Line-System-User"></i> 
                        </InfoBadge>  
                    </Col>
                    <Col item xs={12} md={2} lg={2} style={{display:'flex',justifyContent:'center'}}>
                        <InfoBadge className='badge-declined declined-icr' label="Declined">
                          <i className="icon icon-Line-System-User"></i> 
                        </InfoBadge>
                        
                    </Col>
                    <Col item xs={12} md={2} lg={2} style={{display:'flex',justifyContent:'center'}}>
                        <InfoBadge className='info-ol info-ol-icr' label="Info">
                          <i className="icon icon-Line-System-User"></i> 
                        </InfoBadge>
                    </Col>
                    <Col item xs={12} md={2} lg={2} style={{display:'flex',justifyContent:'center'}}>
                        <InfoBadge className='badge-neutral neutral-icr' label="Neutral"> 
                          <i className="icon icon-Line-System-User"></i>  
                        </InfoBadge>
                    </Col>
                  </Row>
                </Box>
                <Box className="component_code">
                {/* code block */}
                <CodeBlock className={`${sessionStorage.getItem('role') === "DSL-User" ? "active" : ""}`}>
                  <button className="issueTrigger" onClick={handleShow}>Having issues.?</button>
                  <pre className="Code-bg">
                    <Highlighter>{`import { InfoBadge } from "m2p-dsl";

<InfoBadge className='primary-ol primary-ol-icr' label="Primary">
  <i className="icon icon-Line-System-User"></i> 
</InfoBadge>

<InfoBadge className='badge-success success-icr' label="Success">
  <i className="icon icon-Line-System-User"></i> 
</InfoBadge>

<InfoBadge className="warning-ol warning-ol-icr" label="Warning">
  <i className="icon icon-Line-System-User"></i> 
</InfoBadge>  

<InfoBadge className='badge-declined declined-icr' label="Declined">
  <i className="icon icon-Line-System-User"></i> 
</InfoBadge>

<InfoBadge className='info-ol info-ol-icr' label="Info">
  <i className="icon icon-Line-System-User"></i> 
</InfoBadge>

<InfoBadge className='badge-neutral neutral-icr' label="Neutral"> 
  <i className="icon icon-Line-System-User"></i>  
</InfoBadge>  

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
                          <p>The className property allows you to change size ,background and position of the InfoBadge.</p>
                        </div>
                      </div>
                      {/*  */}
                      <div className="props_div">
                        <div className="props_name">
                          <p>label ?</p>
                          <p className="string"><pre>string</pre></p>
                        </div>
                        <div className="props_content">
                          <p>The label property allows the user to add text inside the Infobadge.</p>
                        </div>
                      </div>
                      {/*  */}
                        {/*  */}
                        <div className="props_div">
                        <div className="props_name">
                          <p>onClick ?</p>
                          <p className="string"><pre>function</pre></p>
                        </div>
                        <div className="props_content">
                          <p>The onClick property allows to add action once the InfoBadge is Clicked.</p>
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
                      <Link activeClass="active" to="tag1" spy={true} smooth={false} offset={-100} onSetActive={handleScroll} >
                        Default
                      </Link>
                    </li>
                    <li>
                      <Link activeClass="active" to="tag2" spy={true} smooth={false} offset={-100} onSetActive={handleScroll} >
                        Bars
                      </Link>
                    </li>
                    <li>
                      <Link activeClass="active" to="tag3" spy={true} smooth={false} offset={-100} onSetActive={handleScroll} >
                        Icons
                      </Link>
                    </li>
                    <li>
                      <Link activeClass="active" to="tag4" spy={true} smooth={false} offset={-100} onSetActive={handleScroll} >
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

export default Badges;
