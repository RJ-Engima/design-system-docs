import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Highlighter from "../components/Code";
import CodeBlock from "react-copy-code";
import Scroller from "../components/Scroller";
import { Link } from "react-scroll";
import { Tab } from "m2p-dsl";
import { Box } from "@mui/material";
import ModalPopup from "../components/Modal";
import IssueForm from "../components/IssueForm";

// btn-tab
const TabArrray = [
  {
    label: "Item one",
    labelkey: 0,
    Content: <div>Content one</div>,
  },
  {
    label: "Item Two",
    labelkey: 1,
    Content: <div>Content two</div>,
  },
  {
    label: "Item Three",
    labelkey: 2,
    Content: <div>Content three</div>,
  },
  {
    label: "Item four",
    labelkey: 3,
    Content: <div>Content four</div>,
  }
];

//

function Tabs() {
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
          <p className="component_title">Tab</p>
          <p className="component_content">Tabs make it easy to explore and switch between different views.
</p>
        </Row>
        <Row>
          <Col lg={10} className="component_content_col">
            <Box id="tag1" className="equal-spacing">
              <p className="doc-heading-text">
                Default
              </p>
              <p className="doc-content-text">
              Default first tab is active.</p>
              <Box className="component_expl_hrz">
                <Box className="output_bg">
                  <Row>
                    <Col item xs={12} md={12} lg={12}>
                      <Tab TabsContent={TabArrray} mainClass="ds-tabs" className="ds-tab-btn" />    
                    </Col>
                  </Row>
                </Box>
                <Box className="component_code">
                {/* code block */}
                <CodeBlock className={`${sessionStorage.getItem('role') === "DSL-User" ? "active" : ""}`}>
                  <button className="issueTrigger" onClick={handleShow}>Having issues.?</button>
                  <pre className="Code-bg">
                    <Highlighter>{`import { Tab } from "m2p-dsl";

const TabArrray = [
  {
    label: "Item one",
    labelkey: 0,
    Content: <div>Content one</div>,
  },
  {
    label: "Item Two",
    labelkey: 1,
    Content: <div>Content two</div>,
  },
  {
    label: "Item Three",
    labelkey: 2,
    Content: <div>Content three</div>,
  },
  {
    label: "Item four",
    labelkey: 3,
    Content: <div>Content four</div>,
  }
];

<Tab 
  TabsContent={TabArrray}
  mainClass="ds-tabs" 
  className="ds-tab-btn" 
/> `}
                    </Highlighter>
                  </pre>
                </CodeBlock>
                {/* code block */}

                </Box>
              </Box>
            </Box>
            <Box id="tag2" className="equal-spacing">
              <p variant="h5" className="doc-heading-text">
                Tab with bars
              </p>
              <p className="doc-content-text">Underlined Active tab bar.</p>
              <Box className="component_expl_hrz" >
                <Box className="output_bg">
                  <Row>
                    <Col item xs={12} md={12} lg={12}>
                    <Tab TabsContent={TabArrray} mainClass="ds-tabs-bar" className="ds-tab-bar"  />
                    </Col>
                  </Row>
                </Box>
                <Box className="component_code">
                {/* code block */}
                <CodeBlock className={`${sessionStorage.getItem('role') === "DSL-User" ? "active" : ""}`}>
                  <button className="issueTrigger" onClick={handleShow}>Having issues.?</button>
                  <pre className="Code-bg">
                    <Highlighter>{`import { Tab } from "m2p-dsl";

const TabArrray = [
  {
    label: "Item one",
    labelkey: 0,
    Content: <div>Content one</div>,
  },
  {
    label: "Item Two",
    labelkey: 1,
    Content: <div>Content two</div>,
  },
  {
    label: "Item Three",
    labelkey: 2,
    Content: <div>Content three</div>,
  },
  {
    label: "Item four",
    labelkey: 3,
    Content: <div>Content four</div>,
  }
]; 

<Tab 
  TabsContent={TabArrray} 
  mainClass="ds-tabs-bar" 
  className="ds-tab-bar"  
/> `}
                    </Highlighter>
                  </pre>
                </CodeBlock>
                {/* code block */}

                </Box>
              </Box>
            </Box>
            <Box id="tag3" className="equal-spacing">
              <p variant="h5" className="doc-heading-text">
                Tab with bars Underlined  
              </p>
              <p className="doc-content-text">Underlined Active tab bar.</p>
              <Box className="component_expl_hrz" >
                <Box className="output_bg">
                  <Row>
                    <Col item xs={12} md={12} lg={12}>
                    <Tab TabsContent={TabArrray} mainClass="ds-tabs-bar tab-underline" className="ds-tab-bar"  />
                    </Col>
                  </Row>
                </Box>
                <Box className="component_code">
                {/* code block */}
                <CodeBlock className={`${sessionStorage.getItem('role') === "DSL-User" ? "active" : ""}`}>
                  <button className="issueTrigger" onClick={handleShow}>Having issues.?</button>
                  <pre className="Code-bg">
                    <Highlighter>{`import { Tab } from "m2p-dsl";

const TabArrray = [
  {
    label: "Item one",
    labelkey: 0,
    Content: <div>Content one</div>,
  },
  {
    label: "Item Two",
    labelkey: 1,
    Content: <div>Content two</div>,
  },
  {
    label: "Item Three",
    labelkey: 2,
    Content: <div>Content three</div>,
  },
  {
    label: "Item four",
    labelkey: 3,
    Content: <div>Content four</div>,
  }
];

<Tab 
  TabsContent={TabArrray} 
  mainClass="ds-tabs-bar tab-underline" 
  className="ds-tab-bar"  
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
                Icons
              </p>
              <p className="doc-content-text">Icons Positioned Left  As Well As RightWays.</p>    
              <Box className="component_expl_hrz">
                <Box className="output_bg">
                  <Row>
                    <Tab TabsContent={TabArrray} mainClass="ds-tabs-bar" className="ds-tab-bar" iconPosition="start"
                    iconChildren={<i className="icon icon-Line-System-More-Vertical"></i>} /> 
                    <Tab TabsContent={TabArrray} mainClass="ds-tabs-bar" className="ds-tab-bar" 
                    iconChildren={<i className="icon icon-Line-System-More-Vertical"></i>} 
                     iconClass="tab-bar-icr" iconPosition="end" />  
                  </Row>  
                </Box>
                <Box className="component_code">
                {/* code block */}
                <CodeBlock className={`${sessionStorage.getItem('role') === "DSL-User" ? "active" : ""}`}>
                  <button className="issueTrigger" onClick={handleShow}>Having issues.?</button>
                  <pre className="Code-bg">
                    <Highlighter>{`
import { Tab } from "m2p-dsl";

// Icon On the Left

<Tab 
  TabsContent={TabArrray} 
  mainClass="ds-tabs-bar" 
  className="ds-tab-bar" 
  iconPosition="start"
  iconChildren={<i className="icon icon-Line-System-More-Vertical"></i>} // any Icon You need 
/>

// Icon On the Right 

<Tab 
  TabsContent={TabArrray} 
  mainClass="ds-tabs-bar" 
  className="ds-tab-bar" 
  iconPosition="end" 
  iconChildren={<i className="icon icon-Line-System-More-Vertical"></i>} // any Icon You need 
/>  `}
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
                        {/* <Highlighter>{`Button Props`}</Highlighter> */}
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
                          <p className="string"><pre>string </pre></p>
                        </div>
                        <div className="props_content">
                          <p>The className property allows you to change size ,background and position of the Tab.</p>
                        </div>
                      </div>
                      {/*  */}
                      <div className="props_div">
                        <div className="props_name">
                          <p>icon ?</p>
                          <p className="boolean"><pre>boolean</pre></p>
                        </div>
                        <div className="props_content">
                          <p>The icon property hides and shows the icon on the Tab.</p>
                        </div>
                      </div>
                      {/*  */}
                      <div className="props_div">
                        <div className="props_name">
                          <p>iconClass ?</p>
                          <p className="string"><pre>string</pre></p>
                        </div>
                        <div className="props_content">
                          <p>The iconClass property add icons on the left and right side of the tab header
                            you can add <p className="classname">.tab-bar-icl</p> for adding left side icon and
                            <p className="classname"> .tab-bar-icr</p> for adding on the right side. You can add your own icons by
                           overwritting the  <p className="classname">.tab-bar-icl</p> <p className="classname"> .tab-bar-icr</p> classes.</p>
                        </div>
                      </div>
                      {/*  */}
                      <div className="props_div">
                        <div className="props_name">
                          <p>iconPosition ?</p>
                          <p className="boolean"><pre>string</pre></p>
                        </div>
                        <div className="props_content">
                          <p>iconPosition property determines to wether the icon placement should be on the start or end of the text .</p>
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

export default Tabs;
