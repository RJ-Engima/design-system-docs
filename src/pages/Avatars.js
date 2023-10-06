import React, {useState} from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Highlighter from "../components/Code";
import CodeBlock from "react-copy-code";
import Scroller from "../components/Scroller";
import { Link } from "react-scroll";
import { Tab,Button } from "m2p-dsl";
import { Box} from "@mui/material";
import {Avatar,AvatarUpload} from "m2p-dsl";

// testing for image
import Image1 from '../assets/img/avatar_img.png';
import Image2 from '../assets/img/avatar-img.png';
import FeedbackForm from "../components/feedBack";
import ModalPopup from "../components/Modal";
import IssueForm from "../components/IssueForm";

function Avatars() {
  const [show, setShow] = useState(false);
  const [heading, setHeading] = useState("");
  const [imageUrl, setImageUrl] = useState("https://res.cloudinary.com/gildcards/image/upload/v1687436750/Design%20system/avatar_img.png");  
  
  const getBase64 = (img, callback) => {  
    const reader = new FileReader();  
    reader.addEventListener('load', () => callback(reader.result)); 
    reader.readAsDataURL(img);  
  };    

  const handleChange = (info) => {
    if (info.file.status === 'uploading') {
        console.log("uploading")  
      return;
    }
    if (info.file.status === 'done') {      
      getBase64(info.file.originFileObj, (url) => { 
        setImageUrl(url);   
        console.log(url);   
      });   
    }   
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
          <p className="component_title">Avatar</p>
          <p className="component_content">Avatars are used
          in everything from tables to dialog menus.</p>
        </Row>
        <Row>
          <Col lg={10} className="component_content_col">
            <Box id="tag1" className="equal-spacing">
              <p className="doc-heading-text">Image avatars</p>
              <p className="doc-content-text">
              Image avatars can be created by passing standard img props src or srcSet to the component.</p>
              <Box className="component_expl_vrtl">
                <Box className="output_bg">
                  <Row>
                    <Col item xs={12} md={2} lg={2}>
                      <Avatar className="avatar-md" src={Image1} alt={'Image'} />
                    </Col>
                    <Col item xs={12} md={2} lg={2}>
                      <Avatar className="avatar-md" src={Image2} alt={'Image'} />
                    </Col>
                  </Row>
                </Box>
                <Box className="component_code">
                {/* code block */}
                <CodeBlock className={`${sessionStorage.getItem('role') === "DSL-User" ? "active" : ""}`}>
                  <button className="issueTrigger" onClick={handleShow}>Having issues.?</button>

                  <pre className="Code-bg">
                    <Highlighter>
                      {`import { Avatar } from "m2p-dsl";

import Image1 from '../assets/img/avatar_img.png';
import Image2 from '../assets/img/avatar-img.png';

<Avatar className="avatar-md" src={Image1} alt={'Image'} />

<Avatar className="avatar-md" src={Image2} alt={'Image'} />`}
                    </Highlighter>
                  </pre>
                </CodeBlock>
                {/* code block */}

                </Box>
              </Box>
            </Box>
            <Box id="tag2" className="equal-spacing">
              <p variant="h5" className="doc-heading-text">
                Letter Avatars
              </p>
              <p className="doc-content-text">Avatars containing simple characters
              can be created by passing a string as children.</p>
              <Box className="component_expl_vrtl" >
                <Box className="output_bg">
                  <Row>
                  <Col item xs={12} md={2} lg={2}>
                      <Avatar className="avatar-md">NF</Avatar>
                  </Col>
                  <Col item xs={12} md={2} lg={2}>
                    <Avatar className="avatar-md">AF</Avatar>
                  </Col>
                  </Row>
                </Box>
                <Box className="component_code">
                {/* code block */}
                <CodeBlock className={`${sessionStorage.getItem('role') === "DSL-User" ? "active" : ""}`}>
                  <button className="issueTrigger" onClick={handleShow}>Having issues.?</button>
                  <pre className="Code-bg">
                    <Highlighter>{`import { Avatar } from "m2p-dsl";

<Avatar className="avatar-md">NF</Avatar>

<Avatar className="avatar-md">AF</Avatar>
`}</Highlighter>
                  </pre>
                </CodeBlock>
                {/* code block */}

                </Box>
              </Box>
            </Box>
            <Box id="tag3" className="equal-spacing">
              <p variant="h5" className="doc-heading-text">
              Avatar Uplaod 
              </p>
              <p className="doc-content-text">
              Upload Accepts only <span className="string-color">Jpeg / Png</span> format of Images.</p>
              <Box className="component_expl_vrtl">
                <Box className="output_bg">
                  <Row>
                    <Col item xs={12} md={2} lg={2}>
                      <AvatarUpload 
                      className="avatar-md"        
                      onChange={handleChange}>      
                        {imageUrl ? (
                            <img
                              src={imageUrl}
                              alt="avatar"
                              style={{
                                width: '100%',      
                              }}    
                            />
                          ) : (
                            <></> 
                          )}
                      </AvatarUpload>
                    </Col>
                  </Row>
                </Box>
                <Box className="component_code">
                {/* code block */}
                <CodeBlock className={`${sessionStorage.getItem('role') === "DSL-User" ? "active" : ""}`}>
                  <button className="issueTrigger" onClick={handleShow}>Having issues.?</button>
                  <pre className="Code-bg">
                    <Highlighter>{`import {AvatarUpload} from "m2p-dsl";

const [imageUrl, setImageUrl] = useState("https://res.cloudinary.com/gildcards/image/upload/v1687436750/Design%20system/avatar_img.png");   
  
const getBase64 = (img, callback) => {  
  const reader = new FileReader();  
  reader.addEventListener('load', () => callback(reader.result)); 
  reader.readAsDataURL(img);  
};    

const handleChange = (info) => {
  if (info.file.status === 'uploading') {
      console.log("uploading")  
    return;
  }
  if (info.file.status === 'done') {      
    getBase64(info.file.originFileObj, (url) => {     
      setImageUrl(url);   
      console.log(url);   // get Uploaded image 
    }); 
  }   
};


<AvatarUpload 
  className="avatar-lg"       
  onChange={handleChange}>  // getUpload details       
    {imageUrl ? (
        <img
          src={imageUrl}
          alt="avatar"
          style={{
            width: '100%',
          }}
        />
      ) : (
        <></>
      )}
</AvatarUpload>   



`}</Highlighter>
                  </pre>
                </CodeBlock>
                {/* code block */}
                </Box>
              </Box>
            </Box>
            <Box id="tag4" className="equal-spacing">
              <p variant="h5" className="doc-heading-text">
              Sizes
              </p>
              <p className="doc-content-text">
              Three Medium of Sizes</p>
              <Box className="component_expl_vrtl">
                <Box className="output_bg">
                  <Row>
                    <Col item xs={12} md={2} lg={2}>
                    <Avatar className="avatar-sm">sm</Avatar>
                    </Col>
                    <Col item xs={12} md={2} lg={2}>
                    <Avatar className="avatar-md">md</Avatar>
                    </Col>
                    <Col item xs={12} md={2} lg={2}>
                    <Avatar className="avatar-lg">lg</Avatar>
                    </Col>
                  </Row>
                </Box>
                <Box className="component_code">
                {/* code block */}
                <CodeBlock className={`${sessionStorage.getItem('role') === "DSL-User" ? "active" : ""}`}>
                  <button className="issueTrigger" onClick={handleShow}>Having issues.?</button>
                  <pre className="Code-bg">
                    <Highlighter>{`import { Avatar } from "m2p-dsl";

<Avatar className="avatar-sm">sm</Avatar>

<Avatar className="avatar-md">md</Avatar>

<Avatar className="avatar-lg">lg</Avatar>
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
                          <p>The className property allows you to change size ,backgroundColor,
                             Text-Color and position of the Avatar.</p>
                        </div>
                      </div>
                      {/*  */}
                      <div className="props_div">
                        <div className="props_name">
                          <p>style ?</p>
                          <p className="string"><pre>string</pre></p>
                        </div>
                        <div className="props_content">
                            <p>The Style property enables you to  write inline styling whereEver Necessary.</p>
                        </div>
                      </div>
                      {/*  */}
                      <div className="props_div">
                        <div className="props_name">
                          <p>status ?</p>
                          <p className="string"><pre>string</pre></p>
                        </div>  
                        <div className="props_content">
                            <p>Upload status. Show different style when configured	
                              <span className="string-color">error</span>
                              <span className="string-color">success</span>
                              <span className="string-color">done</span>
                              <span className="string-color">uploading</span>
                              <span className="string-color">removed</span>
                              .</p>
                        </div>
                      </div>
                        {/*  */}
                        <div className="props_div">
                        <div className="props_name">
                          <p>url ?</p>
                          <p className="string"><pre>string</pre></p>
                        </div>
                        <div className="props_content">
                            <p>Download url.</p>
                        </div>
                      </div>
                        {/*  */}
                        <div className="props_div">
                        <div className="props_name">
                          <p>name ?</p>
                          <p className="string"><pre>string</pre></p>
                        </div>
                        <div className="props_content">
                            <p>File name	.</p>
                        </div>
                      </div>
                        {/*  */}
                        <div className="props_div">
                        <div className="props_name">
                          <p>crossOrigin ?</p>
                          <p className="string"><pre>string</pre></p>
                        </div>
                        <div className="props_content">
                            <p>CORS settings attributes .</p> 
                        </div>
                      </div>
                        {/*  */}
                        <div className="props_div">
                        <div className="props_name">
                          <p>onChange ?</p>
                          <p className="string"><pre>function</pre></p>
                        </div>
                        <div className="props_content">
                            <p>A callback function, can be executed when uploading state is changing, see onChange .</p> 
                        </div>
                      </div>
                        {/*  */}
                        <div className="props_div">
                        <div className="props_name">
                          <p>isImageUrl ?</p>
                          <p className="boolean"><pre>(file: UploadFile)  boolean</pre></p>
                        </div>
                        <div className="props_content">
                            <p>Customize if render <img /> in thumbnail .</p> 
                        </div>
                      </div>
                        {/*  */}
                        <div className="props_div">
                        <div className="props_name">
                          <p>accept ?</p>
                          <p className="boolean"><pre>string</pre></p>
                        </div>
                        <div className="props_content">
                            <p>File types that can be accepted. See input accept Attribute	 .</p> 
                        </div>
                      </div>
                        {/*  */}
                        <div className="props_div">
                        <div className="props_name">
                          <p>action ?</p>
                          <p className="boolean"><pre>string</pre></p>  
                        </div>
                        <div className="props_content">
                            <p>Uploading URL.</p>   
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
                      <Link activeClass="active" to="tag1" spy={true} smooth={false} onSetActive={handleScroll}>
                        Image
                      </Link>
                    </li>
                    <li>
                      <Link activeClass="active" to="tag2" spy={true} smooth={false} onSetActive={handleScroll}>
                        Letters
                      </Link>
                    </li>
                    <li>
                      <Link activeClass="active" to="tag3" spy={true} smooth={false} onSetActive={handleScroll}>
                       Img Upload 
                      </Link>
                    </li>
                    <li>
                      <Link activeClass="active" to="tag4" spy={true} smooth={false} onSetActive={handleScroll}>
                        Sizes
                      </Link>
                    </li>
                    <li>
                      <Link activeClass="active" to="tag5" spy={true} smooth={false} onSetActive={handleScroll}>
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

export default Avatars;
