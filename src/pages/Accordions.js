import React, {useState} from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Highlighter from "../components/Code";
import CodeBlock from "react-copy-code";
import Scroller from "../components/Scroller";
import { Link } from "react-scroll";
import { Button, Accordion } from "m2p-dsl";

import { Box, Grid } from "@mui/material";
import FeedbackForm from "../components/feedBack";
import FeedIcon from "../assets/img/feedback.png"
import Modal from 'react-bootstrap/Modal';
import ModalPopup from "../components/Modal";
import IssueForm from "../components/IssueForm";

// UnControlled accordion
const AccordionContent = [
  {
    id: 0,
    Accheader: 'Accordion Header 1',
    Accbody: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took",
    defaultExpanded: true,
  },
  {
    id: 1,
    Accheader: 'Accordion Header 2',
    Accbody: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took",
  },
  {
    id: 2,
    Accheader: 'Accordion Header 3',
    Accbody: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took",
  },
];

// Controlled accordion
const AccordionContent1 = [
  {
    id: 0,
    Accheader: 'Accordion Header 1',
    Accbody: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took",
  },
  {
    id: 1,
    Accheader: 'Accordion Header 2',
    Accbody: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took",
  },
  {
    id: 2,
    Accheader: 'Accordion Header 3',
    Accbody: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took",
  },
  {
    id: 3,
    Accheader: 'Accordion Header 4',
    Accbody: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took",
    disabled:  true,
  }
];

const AccordionIconsContent = [
  {
    id: 0,
    icon: <i className="icon icon-Line-Business-Briefcase"></i>,
    Accheader: 'Accordion Header 1',
    Accbody: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took",
  },
  {
    id: 1,
    icon: <i className="icon icon-Line-Emoji-Like"></i>,
    Accheader: 'Accordion Header 2',
    Accbody: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took",
  },
  {
    id: 2,
    icon: <i className="icon icon-Line-System-Setting"></i>,
    Accheader: 'Accordion Header 3',
    Accbody: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took",
  },
  {
    id: 3,
    icon: <i className="icon icon-Line-Table-Cloumn"></i>,
    Accheader: 'Accordion Header 4',
    Accbody: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took",
    disabled:  true,
  }
];

// nested accordion
const AccordionContent2 = [
  {
    id: 0,
    Accheader: 'Accordion Header 1',
    Accbody: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took",
    defaultExpanded: true,
    Nested : [
      {
        Subheader : 'nested panel 1',
        Subbody: 'nested panel 1'
      },
      {
        Subheader : 'nested panel 2',
        Subbody: 'nested panel 2',
      },
    ],
  },
  {
    id: 1,
    Accheader: 'Accordion Header 2',
    Accbody: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took",
    Nested : [
      {
        Subheader : 'nested panel 3',
        Subbody: 'nested panel 3'
      },
      {
        Subheader : 'nested panel 4',
        Subbody: 'nested panel 4',
      },
    ],
  },
  {
    id: 2,
    Accheader: 'Accordion Header 3',
    Accbody: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took",
    Nested : [
      {
        Subheader : 'nested panel 5',
        Subbody: 'nested panel 5'
      },
      {
        Subheader : 'nested panel 6',
        Subbody: 'nested panel 6',
      },
    ],
  }
];


function AccordionComp() {
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
      <Container fluid className="content_div check">
        <Row className="component_content_div">
          <p className="component_title">Accordion</p>
          <p className="component_content">
          The Accordion component allows the user to show and hide sections of related content on a page.
          </p>
        </Row>
        <Row>
          <Col lg={10} className="component_content_col">
            <Box id="tag1" className="equal-spacing">
              <p className="doc-heading-text catchHeading">
                Basic
              </p>
              <p className="doc-content-text">
              UnControlled Accordion, opens any number of panels can be expanded at a time.</p>
              <Box className="component_expl_hrz">
                <Box className="output_bg">
                  <Row>
                    <Col item xs={12} md={12} lg={12}>
                      <Accordion className="accordion-item" AccContent={AccordionContent}
                      controlled={false} IconArrrow={true}  />
                    </Col>
                  </Row>
                </Box>
                <Box className="component_code">
                {/* code block */}
                <CodeBlock className={`${sessionStorage.getItem('role') === "DSL-User" ? "active" : ""}`}>
                  <button className="issueTrigger" onClick={handleShow}>Having issues.?</button>
                  <pre className="Code-bg">
                    <Highlighter>{`import { Accordion } from "m2p-dsl";

const AccordionContent = [
  {
    id: 0,
    Accheader: 'Accordion Header 1',
    Accbody: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took",
    defaultExpanded: true,
  },
  {
    id: 1,
    Accheader: 'Accordion Header 2',
    Accbody: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took",
  },
  {
    id: 2,
    Accheader: 'Accordion Header 3',
    Accbody: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took",
  },

];

<Accordion className="accordion-item" AccContent={AccordionContent} controlled={false} IconArrrow={true} />
`}</Highlighter>
                  </pre>
                </CodeBlock>
                {/* code block */}
                </Box>
              </Box>
            </Box>
            <Box id="tag2" className="equal-spacing">
              <p variant="h5" className="doc-heading-text catchHeading">
                Controlled
              </p>
              <p className="doc-content-text">Controlled Accordion is a special kind of Collapse,
              which allows only one panel to be expanded at a time.</p>
              <Box className="component_expl_hrz" >
                <Box className="output_bg">
                  <Row>
                    <Col item xs={12} md={12} lg={12}>
                        <Accordion className="accordion-item" AccContent={AccordionContent1}
                         controlled={true} IconArrrow={true} />
                    </Col>
                  </Row>
                </Box>
                <Box className="component_code">
                {/* code block */}
                <CodeBlock className={`${sessionStorage.getItem('role') === "DSL-User" ? "active" : ""}`}>
                  <button className="issueTrigger" onClick={handleShow}>Having issues.?</button>
                  <pre className="Code-bg">

                    <Highlighter>{`import { Accordion } from "m2p-dsl";

const AccordionContent = [
  {
    id: 0,
    Accheader: 'Accordion Header 1',
    Accbody: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took',
  },
  {
    id: 1,
    Accheader: 'Accordion Header 2',
    Accbody: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took',
  },
  {
    id: 2,
    Accheader: 'Accordion Header 3',
    Accbody: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took',
  },
  {
    id: 3,
    Accheader: 'Accordion Header 4',
    Accbody: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took',
    disabled:  true,
  }
];

<Accordion className="accordion-item" AccContent={AccordionContent} controlled={true} IconArrow={true} />
`}</Highlighter>
                  </pre>
                </CodeBlock>
                {/* code block */}

                </Box>
              </Box>
            </Box>
            <Box id="tag3" className="equal-spacing">
              <p variant="h5" className="doc-heading-text catchHeading">
                Icons 
              </p>
              <p className="doc-content-text">Accordion with Icons.</p>
              <Box className="component_expl_hrz" >
                <Box className="output_bg">
                  <Row>
                    <Col item xs={12} md={12} lg={12}>
                        <Accordion 
                        className="accordion-item"
                        customIcon={true}
                        AccContent={AccordionIconsContent}
                        controlled={true} 
                        IconArrrow={true} /> 
                    </Col>
                  </Row>
                </Box>
                <Box className="component_code">
                {/* code block */}
                <CodeBlock className={`${sessionStorage.getItem('role') === "DSL-User" ? "active" : ""}`}>
                  <button className="issueTrigger" onClick={handleShow}>Having issues.?</button>
                  <pre className="Code-bg">

                    <Highlighter>{`import { Accordion } from "m2p-dsl";

const AccordionContent = [
  {
    id: 0,
    icon: <i className="icon icon-Line-Business-Briefcase"></i>,
    Accheader: 'Accordion Header 1',
    Accbody: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took",
  },
  {
    id: 1,
    icon: <i className="icon icon-Line-Emoji-Like"></i>,
    Accheader: 'Accordion Header 2',
    Accbody: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took",
  },
  {
    id: 2,
    icon: <i className="icon icon-Line-System-Setting"></i>,
    Accheader: 'Accordion Header 3',
    Accbody: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took",
  },
  {
    id: 3,
    icon: <i className="icon icon-Line-Table-Cloumn"></i>,
    Accheader: 'Accordion Header 4',
    Accbody: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took",
    disabled:  true,
  }
];

<Accordion customIcon={true} className="accordion-item" AccContent={AccordionContent} controlled={true} IconArrow={true} />
`}</Highlighter>
                  </pre>
                </CodeBlock>
                {/* code block */}

                </Box>
              </Box>
            </Box>
            <Box id="tag4" className="equal-spacing">
              <p variant="h5" className="doc-heading-text catchHeading">
                Nested
              </p>
              <p className="doc-content-text">
              Nested Accordion , has new Accordion panel inside it.</p>
              <Box className="component_expl_hrz">
                <Box className="output_bg">
                  <Row>
                  <Accordion customIcon={true} AccContent={AccordionContent2} className="accordion-item" controlled={false} IconArrrow={true} />
                  </Row>
                </Box>
                <Box className="component_code">
                {/* code block */}
                <CodeBlock className={`${sessionStorage.getItem('role') === "DSL-User" ? "active" : ""}`}>
                  <button className="issueTrigger" onClick={handleShow}>Having issues.?</button>
                  <pre className="Code-bg">

                    <Highlighter>{`import { Accordion } from "m2p-dsl";

const AccordionContent = [
  {
    id: 0,
    Accheader: 'Accordion Header 1',
    Accbody: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took",
    defaultExpanded: true,
    Nested : [
      {
        Subheader : 'nested panel 1',
        Subbody: 'nested panel 1'
      },
      {
        Subheader : 'nested panel 2',
        Subbody: 'nested panel 2',
      },
    ],
  },
  {
    id: 1,
    Accheader: 'Accordion Header 2',
    Accbody: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took",
    Nested : [
      {
        Subheader : 'nested panel 3',
        Subbody: 'nested panel 3'
      },
      {
        Subheader : 'nested panel 4',
        Subbody: 'nested panel 4',
      },
    ],
  },
  {
    id: 2,
    Accheader: 'Accordion Header 3',
    Accbody: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took",
    Nested : [
      {
        Subheader : 'nested panel 5',
        Subbody: 'nested panel 5'
      },
      {
        Subheader : 'nested panel 6',
        Subbody: 'nested panel 6',
      },
    ],
  }
];

<Accordion AccContent={AccordionContent} className="accordion-item" controlled={false} IconArrrow={true} />
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
                          <p>The className property allows you to change size ,background and position of the Accordion.</p>
                        </div>
                      </div>
                      {/*  */}
                      <div className="props_div">
                        <div className="props_name">
                          <p>controlled ?</p>
                          <p className="boolean"><pre>boolean</pre></p>
                        </div>
                        <div className="props_content">
                          <p>The controlled property switches between Single opening Accordion and Multiple opening Accordion.</p>
                        </div>
                      </div>
                      {/*  */}
                      <div className="props_div">
                        <div className="props_name">
                          <p>IconArrrow ?</p>
                          <p className="boolean"><pre>boolean</pre></p>
                        </div>
                        <div className="props_content">
                          <p>The IconArrow property allows you to show and hide the Arrow Icon.</p>
                        </div>
                      </div>
                      <div className="props_div">
                        <div className="props_name">
                          <p>customIcon ?</p>
                          <p className="boolean"><pre>boolean</pre></p>
                        </div>
                        <div className="props_content">
                          <p>The IconArrow property allows you to show and hide the customIcon on the Left.</p>     
                        </div>
                      </div>
                      {/*  */}
                      <div className="props_div">
                        <div className="props_name">
                          <p>disabled ?</p>
                          <p className="boolean"><pre>boolean</pre></p>
                        </div>
                        <div className="props_content">
                          <p>Disabled property allows to set state for the particular accordion panel to be Disabled.</p>
                        </div>
                      </div>
                      {/*  */}
                      <div className="props_div">
                        <div className="props_name">
                          <p>defaultExpanded ?</p>
                          <p className="boolean"><pre>boolean</pre></p>
                        </div>
                        <div className="props_content">
                          <p>The defaultExpanded property opens the particular Accordion Panel open.</p>
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
                      <Link activeClass="active" to="tag1" spy={true} offset={-100} smooth={false} onSetActive={handleScroll}>
                        Basic
                      </Link>
                    </li>
                    <li>
                      <Link activeClass="active" to="tag2" spy={true} offset={-100} smooth={false} onSetActive={handleScroll}>
                        Controlled
                      </Link>
                    </li>
                    <li>
                      <Link activeClass="active" to="tag3" spy={true} offset={-100} smooth={false} onSetActive={handleScroll}>
                        Icons
                      </Link>
                    </li>   
                    <li>
                      <Link activeClass="active" to="tag4" spy={true} offset={-100} smooth={false} onSetActive={handleScroll}>
                        Nested
                      </Link>
                    </li>
                    <li>
                      <Link activeClass="active" to="tag5" spy={true} offset={-100} smooth={false} onSetActive={handleScroll}>
                        Props
                      </Link>
                    </li>
                  </ul>
                    {/* <div className="feedIcon" onClick={()=>{setShowForm(!showForm)}}>
                      <img src={FeedIcon} />
                    </div>
                    <FeedbackForm show={showForm} className={`${showForm === true ? "showForm" : "hideForm"}`} /> */}
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

export default AccordionComp;
