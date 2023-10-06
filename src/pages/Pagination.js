import React, {useState} from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Highlighter from "../components/Code";
import CodeBlock from "react-copy-code";
import Scroller from "../components/Scroller";
import { Link } from "react-scroll";
import { Button, Accordion, Pagination } from "m2p-dsl";
import Code from "../components/prismCode";
import { Box, Grid } from "@mui/material";
import ModalPopup from "../components/Modal";
import IssueForm from "../components/IssueForm";

const code = `import { Pagination } from "m2p-dsl";

<Pagination
    total = "200"
    defaultPageSize = "10"
    defaultCurrent = "1
    onChange={(page,pageSize)=>{
      console.log(page,"page");
      console.log(pageSize,"pageSize");
    }}
/>
`;
const codeControlled = `import { Pagination } from "m2p-dsl";

const [current, setCurrent] = useState(3);
    const onChange = (page) => {
        setCurrent(page);
};

<Pagination
    total = "200"
    defaultPageSize = "10"
    defaultCurrent = {current}
    onChange={onChange}
/>
`;
function PaginationComp() {
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

  const [current, setCurrent] = useState(3);
  const onChange = (page) => {
      console.log(page);
      setCurrent(page);
  };
  return (
    <React.Fragment>
      <Scroller />
      <Container fluid className="content_div">
        <Row className="component_content_div">
          <p className="component_title">Pagination</p>
          <p className="component_content">
            A long list can be divided into several pages using Pagination, and only one page will be loaded at a time.
          </p>
        </Row>
        <Row>
          <Col lg={10} className="component_content_col">
            <Box id="tag1" className="equal-spacing">
              <p className="doc-heading-text">
                Default
              </p>
              {/* <p className="doc-content-text">
              UnControlled Accordion, opens any number of panels can be expanded at a time.</p> */}
              <Box className="component_expl_hrz">
                <Box className="output_bg">
                  <Row>
                    <Col item xs={12} md={12} lg={12}>
                      <Pagination
                        total = "100"
                        defaultCurrent ="1"
                        pageSizeOptions= {['10', '20', '30', '40']}
                        showSizeChanger
                        defaultPageSize={5}
                        onChange={(page,pageSize)=>{
                          console.log(page,"page");
                          console.log(pageSize,"pageSize");
                        }}
                      />
                    </Col>
                  </Row>
                </Box>
                <Box className="component_code">
                {/* code block */}
                <CodeBlock className={`${sessionStorage.getItem('role') === "DSL-User" ? "active" : ""}`}>
                  <button className="issueTrigger" onClick={handleShow}>Having issues.?</button>
                    {/* <Code code={code} language="javascript"/> */}
                    <pre className="Code-bg">
                        <Highlighter>
                            {code}
                        </Highlighter>
                  </pre>
                </CodeBlock>
                {/* code block */}
                </Box>
              </Box>
            </Box>
            <Box id="tag2" className="equal-spacing">
              <p className="doc-heading-text">
                Controlled
              </p>
              <p className="doc-content-text">
              Controlled pagination allows you to show particular page as default.</p>
              <Box className="component_expl_hrz">
                <Box className="output_bg">
                  <Row>
                    <Col item xs={12} md={12} lg={12}>
                      <Pagination
                        total = {200}
                        defaultPageSize = {10}
                        defaultCurrent = {current}
                        onChange={onChange}
                      />
                    </Col>
                  </Row>
                </Box>
                <Box className="component_code">
                {/* code block */}
                <CodeBlock className={`${sessionStorage.getItem('role') === "DSL-User" ? "active" : ""}`}>
                  <button className="issueTrigger" onClick={handleShow}>Having issues.?</button>
                    {/* <Code code={codeControlled} language="javascript"/> */}
                  <pre className="Code-bg">
                    <Highlighter>
                        {codeControlled}
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
                          <p>total ?</p>
                          <p className="string"><pre>string ||</pre></p>
                          <p style={{color:"#de7315"}}><pre>number </pre></p>
                        </div>
                        <div className="props_content">
                          <p>Total number of data for pagination</p>
                        </div>
                      </div>
                      <div className="props_div">
                        <div className="props_name">
                          <p>defaultPageSize ?</p>
                          <p className="string"><pre>string ||</pre></p>
                          <p style={{color:"#de7315"}}><pre>number </pre></p>
                        </div>
                        <div className="props_content">
                          <p>defaultPageSize sets you number of data per page as default</p>
                        </div>
                      </div>
                      <div className="props_div">
                        <div className="props_name">
                          <p>defaultCurrent ?</p>
                          <p className="string"><pre>string ||</pre></p>
                          <p style={{color:"#de7315"}}><pre>number </pre></p>
                        </div>
                        <div className="props_content">
                          <p>defaultCurrent sets you current page to be shown as default</p>
                        </div>
                      </div>
                      <div className="props_div">
                        <div className="props_name">
                          <p>onChange ?</p>
                          <p className="void"><pre>void ()</pre></p>
                        </div>
                        <div className="props_content">
                          <p>Called when the page number or pageSize is changed, and it takes the resulting page number and pageSize as its arguments.</p>
                        </div>
                      </div>
                      <div className="props_div">
                        <div className="props_name">
                          <p>onShowSizeChange ?</p>
                          <p className="string"><pre>function(current, size)</pre></p>
                        </div>
                        <div className="props_content">
                          <p>Called when pageSize is changed.</p>
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
                      <Link activeClass="active" to="tag1" spy={true} smooth={false} offset={-100} onSetActive={handleScroll}>
                        Default
                      </Link>
                    </li>
                    <li>
                      <Link activeClass="active" to="tag2" spy={true} smooth={false} offset={-100} onSetActive={handleScroll}>
                        Controlled
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

export default PaginationComp;
