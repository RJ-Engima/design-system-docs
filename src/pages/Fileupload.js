import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Highlighter from "../components/Code";
import CodeBlock from "react-copy-code";
import Scroller from "../components/Scroller";
import { Link } from "react-scroll";
import { Box} from "@mui/material";

import {Upload,Button } from "m2p-dsl";
import FeedbackForm from "../components/feedBack";
import ModalPopup from "../components/Modal";
import IssueForm from "../components/IssueForm";


function FileUpload() {
  const [fileList, setFileList] = React.useState([]);

  const handleChange = ({ fileList: newFileList }) =>{
    setFileList(newFileList);
    console.log(fileList);
  };
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
          <p className="component_title">Upload.</p>
          <p className="component_content">Uploading is the process of publishing
          information (web pages, text, pictures, video
          , etc.) to a remote server via a web page or upload tool.</p>
        </Row>
        <Row>
          <Col lg={10} className="component_content_col">
            <Box id="tag1" className="equal-spacing">
              <p className="doc-heading-text">
              Upload File Basic
              </p>
              <p className="doc-content-text">A Basic Uploader for File and pdf.</p>
              <Box className="component_expl_hrz">
                <Box className="output_bg">
                  <Row style={{display: 'flex', justifyContent: 'left'}}>
                    <Col item xs={12} md={12} lg={12}>
                        {/* <Upload
                        className="file-upload"
                        action="https://60f6ed5fa9c8e3e7c09b44ec.mockapi.com/pet/901/uploadImage"
                        fileList={fileList}
                        name={'fileList'}
                        uid={'random id'}
                        multiple={true}
                        maxCount={5}
                        showUploadList={true}
                        iconClass={'file-upload'}
                        onChange={handleChange}
                        Icon={true}
                        Droptext="Upload File"
                        /> */}
                       <h1> In Progress</h1>
                    </Col>
                  </Row>
                </Box>
                <Box className="component_code">
                {/* code block */}
                <CodeBlock className={`${sessionStorage.getItem('role') === "DSL-User" ? "active" : ""}`}>
                  <button className="issueTrigger" onClick={handleShow}>Having issues.?</button>
                  <pre className="Code-bg">
                    <Highlighter>{``}
                    </Highlighter>
                  </pre>
                </CodeBlock>
                {/* code block */}

                </Box>
              </Box>
            </Box>

            <Box id="tag2" className="equal-spacing">
              <p className="doc-heading-text">
              Disabled
              </p>
              <p className="doc-content-text">A disabled state of file upload.</p>
              <Box className="component_expl_hrz">
                <Box className="output_bg">
                  <Row style={{display: 'flex', justifyContent: 'left'}}>
                    <Col item xs={12} md={12} lg={12}>
                      <h1> In Progress</h1>
                    </Col>
                  </Row>
                </Box>
                <Box className="component_code">
                {/* code block */}
                <CodeBlock className={`${sessionStorage.getItem('role') === "DSL-User" ? "active" : ""}`}>
                  <button className="issueTrigger" onClick={handleShow}>Having issues.?</button>
                  <pre className="Code-bg">
                    <Highlighter>{``}
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
                          <p>The className property allows you to change size ,background and position of the Upload File.</p>
                        </div>
                      </div>
                      {/*  */}
                      <div className="props_div">
                        <div className="props_name">
                          <p>action ?</p>
                          <p className="string"><pre>string</pre></p>
                        </div>
                        <div className="props_content">
                          <p>The action property defines the Uploading URL.</p>
                        </div>
                      </div>
                      {/*  */}
                      <div className="props_div">
                        <div className="props_name">
                          <p>maxCount  ?</p>
                          <p className="classname"><pre>string</pre></p>
                        </div>
                        <div className="props_content">
                          <p>The maxCount property limits the number of file to be uploaded.</p>
                        </div>
                      </div>
                      {/*  */}
                      <div className="props_div">
                        <div className="props_name">
                          <p>Icon ?</p>
                          <p className="boolean"><pre>boolean</pre></p>
                        </div>
                        <div className="props_content">
                          <p>The Icon property show / hides the icon when <p className="classname">true / false</p>.</p>
                        </div>
                      </div>
                        {/*  */}
                        <div className="props_div">
                        <div className="props_name">
                          <p>name ?</p>
                          <p className="string"><pre>string</pre></p>
                        </div>
                        <div className="props_content">
                          <p>The name property is the name of the uploadding file.</p>
                        </div>
                      </div>
                      {/*  */}
                      <div className="props_div">
                        <div className="props_name">
                          <p>nextbtn ?</p>
                          <p className="string"><pre>element</pre></p>
                        </div>
                        <div className="props_content">
                          <p>The backbtn property allows to add text Content on the back button.</p>
                        </div>
                      </div>
                      {/*  */}
                      <div className="props_div">
                        <div className="props_name">
                          <p>multiple ?</p>
                          <p className="boolean"><pre>boolean</pre></p>
                        </div>
                        <div className="props_content">
                          <p>The multiple property allows to upload multiple file.</p>
                        </div>
                      </div>
                      {/*  */}
                      <div className="props_div">
                        <div className="props_name">
                          <p>showUploadList ?</p>
                          <p className="boolean"><pre>boolean</pre></p>
                        </div>
                        <div className="props_content">
                          <p>The showUploadList if true hides the uploaded Content.</p>
                        </div>
                      </div>
                      {/*  */}
                      <div className="props_div">
                        <div className="props_name">
                          <p>Droptext ?</p>
                          <p className="string"><pre>string</pre></p>
                        </div>
                        <div className="props_content">
                          <p>The Droptext allows to add text inside the upload.</p>
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
                      <Link activeClass="active" to="tag1" spy={true} smooth={false} offset={-100} onSetActive={handleScroll} >
                        Basic
                      </Link>
                    </li>
                    <li>
                      <Link activeClass="active" to="tag2" spy={true} smooth={false} offset={-100} onSetActive={handleScroll} >
                        Disabled
                      </Link>
                    </li>
                    <li>
                      <Link activeClass="active" to="tag3" spy={true} smooth={false} offset={-100} onSetActive={handleScroll} >
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

export default FileUpload;
