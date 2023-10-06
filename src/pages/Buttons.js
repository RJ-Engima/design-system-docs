import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Highlighter from "../components/Code";
import CodeBlock from "react-copy-code";
import Scroller from "../components/Scroller";
import { Link } from "react-scroll";
import { Button, IconButton } from "m2p-dsl";
import { Box} from "@mui/material";
import ModalPopup from "../components/Modal";
import IssueForm from "../components/IssueForm";

function Buttons() {
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
          <p className="component_title">Buttons</p>
          <p className="component_content">
            A button triggers an event or action. They let users know what will
            happen next.
          </p>
        </Row>
        <Row>
          <Col lg={10} className="component_content_col">
            <Box id="tag1" className="equal-spacing">
              <p className="doc-heading-text">
                Variants 
              </p>
              <p className="doc-content-text">  
                <ul style={{paddingLeft: "14px"}}>
                  <li><strong>Contained</strong></li>
                  <li><strong>Outlined</strong></li>
                  <li><strong>Text</strong></li>
                </ul>
              </p>  
              <Box className="component_expl_hrz" >
                <Box className="output_bg">
                  <Row>
                    <Col item xs={12} md={4} lg={4}>  
                      <Button value="Primary"  variant="contained" className="btnSmall btn-primary " />  
                    </Col>
                    <Col item xs={12} md={4} lg={4}>
                      <Button value="Primary"  variant="outlined" className="btnSmall btn-primary " />  
                    </Col>
                    <Col item xs={12} md={4} lg={4}>
                      <Button value="Primary"  variant="text" className="btnSmall btn-primary " />  
                    </Col>
                  </Row>
                </Box>
                <Box className="component_code">
                {/* code block */}
                <CodeBlock className={`${sessionStorage.getItem('role') === "DSL-User" ? "active" : ""}`}>
                  <button className="issueTrigger" onClick={handleShow}>Having issues.?</button>
                  <pre className="Code-bg">
                    <Highlighter>{`import { Button } from "m2p-dsl";

<Button value="Primary" variant="contained" className="btnSmall btn-primary " />  

<Button value="Primary" variant="outlined" className="btnSmall btn-primary " /> 

<Button value="Primary" variant="text" className="btnSmall btn-primary " />     
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
                Sizes 
              </p>
              <Box className="component_expl_hrz" >
                <Box className="output_bg">
                  <Row>
                    <Col item xs={12} md={6} lg={6}>
                      <Button variant="contained" value="Small" className="btnSmall btn-primary" />
                    </Col>
                    <Col item xs={12} md={6} lg={6}>
                      <Button variant="contained" value="Large" className="btnLarge btn-primary" />
                    </Col>
                  </Row>
                </Box>
                <Box className="component_code">
                {/* code block */}
                <CodeBlock className={`${sessionStorage.getItem('role') === "DSL-User" ? "active" : ""}`}>
                  <button className="issueTrigger" onClick={handleShow}>Having issues.?</button>
                  <pre className="Code-bg">
                    <Highlighter>{`import { Button } from "m2p-dsl";

<Button variant="contained" value="Small" className="btnSmall btn-primary" />

<Button variant="contained" value="Large" className="btnLarge btn-primary" /> 

`}</Highlighter>
                  </pre>
                </CodeBlock>
                {/* code block */}

                </Box>
              </Box>
            </Box>
            {/* Button Colors */}
            <Box id="tag3" className="equal-spacing">
              <p variant="h5" className="doc-heading-text">
                  Button With Directional Icons   
              </p>
              <Box className="component_expl_hrz" >
                <Box className="output_bg">
                  <Row>
                    <Col item xs={12} md={3} lg={3}>
                      <Button variant="contained" className="btn-primary btnSmall" value="Left Icon" 
                        startIcon={<i className="icon icon-Line-Gesture-Move"></i>}  
                      />
                    </Col>
                    <Col item xs={12} md={3} lg={3}>
                      <Button variant="outlined" className="btn-primary btnSmall" value="Right Icon"
                      endIcon={<i className="icon icon-Line-Gesture-Move"></i>}  
                      />
                    </Col>
                    <Col item xs={12} md={3} lg={3}>
                      <Button variant="text" className="btn-primary btnSmall" value="Left Icon" 
                      startIcon={<i className="icon icon-Line-Gesture-Move"></i>}  
                      />
                    </Col>
                    <Col item xs={12} md={3} lg={3}>
                      <Button variant="contained" className="btn-primary btnSmall" value="Multiple"   
                        startIcon={<i className="icon icon-Line-Gesture-Move"></i>}  
                        endIcon={<i className="icon icon-Line-Gesture-Move"></i>}  
                      />  
                    </Col>
                  </Row>
                </Box>
                <Box className="component_code">
                {/* code block */}
                <CodeBlock className={`${sessionStorage.getItem('role') === "DSL-User" ? "active" : ""}`}>
                  <button className="issueTrigger" onClick={handleShow}>Having issues.?</button>
                  <pre className="Code-bg">
                    <Highlighter>{`import { Button } from "m2p-dsl";

// Left Icon
<Button variant="contained" className="btn-primary btnSmall" value="Left Icon" 
  startIcon={<i className="icon icon-Line-Gesture-Move"></i>}  
/>

// Right Icon 
<Button variant="outlined" className="btn-primary btnSmall" value="Right Icon"
  endIcon={<i className="icon icon-Line-Gesture-Move"></i>}  
/>  

// Left Icon 
<Button variant="text" className="btn-primary btnSmall" value="Left Icon" 
  startIcon={<i className="icon icon-Line-Gesture-Move"></i>}  
/>

// Double Side Icons 
<Button variant="contained" className="btn-primary btnSmall" value="Multiple"   
  startIcon={<i className="icon icon-Line-Gesture-Move"></i>}  
  endIcon={<i className="icon icon-Line-Gesture-Move"></i>}  
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
                Disabled Buttons 
              </p>
              <Box className="component_expl_hrz">  
                <Box className="output_bg">
                  <Row>
                    <Col item xs={12} md={4} lg={4}>
                      <Button className="btnSmall btn-primary" variant="contained" value="Disabled" disabled />
                    </Col>
                    <Col item xs={12} md={4} lg={4}>
                      <Button className="btnLarge btn-primary" variant="outlined" value="Disabled" disabled />
                    </Col>
                    <Col item xs={12} md={4} lg={4}>
                      <Button className="btnSmall btn-primary" variant="text" value="Disabled" disabled />
                    </Col>
                  </Row>
                </Box>
                <Box className="component_code">
                {/* code block */}
                <CodeBlock className={`${sessionStorage.getItem('role') === "DSL-User" ? "active" : ""}`}>
                  <button className="issueTrigger" onClick={handleShow}>Having issues.?</button>
                  <pre className="Code-bg">
                    <Highlighter>{`import { Button } from "m2p-dsl";

// contained  
<Button className="btnSmall btn-primary" variant="contained" value="Disabled" disabled />

// outlined 
<Button className="btnLarge btn-primary" variant="outlined" value="Disabled" disabled />

// Text   
<Button className="btnSmall btn-primary" variant="text" value="Disabled" disabled />  

`}
                    </Highlighter>
                  </pre>
                </CodeBlock>
                {/* code block */}

                </Box>
              </Box>
            </Box>
            {/* Button Icons */}

            <Box id="tag5" className="equal-spacing">
              <p variant="h5" className="doc-heading-text"> Icons Button </p>
              <p className="doc-content-text">  
                <ul style={{paddingLeft: "14px"}}>
                  <li><strong>Contained</strong></li>
                  <li><strong>Outlined</strong></li>
                  <li><strong>Text</strong></li>
                </ul>
              </p>  
              <Box className="component_expl_hrz">
                <Box className="output_bg">
                  <Row>   
                    <Col item xs={12} md={4} lg={4}> 
                        <IconButton variant="contained"> 
                          <i className="icon icon-Line-Gesture-Move"></i>  
                        </IconButton>   
                    </Col>  
                    <Col item xs={12} md={4} lg={4}> 
                        <IconButton variant="outlined">   
                          <i className="icon icon-Line-Gesture-Move"></i>   
                        </IconButton>   
                    </Col>  
                    <Col item xs={12} md={4} lg={4}> 
                        <IconButton variant="text">   
                          <i className="icon icon-Line-Gesture-Move"></i> 
                        </IconButton>   
                    </Col>  
                  </Row>
                </Box>
                <Box className="component_code">
                {/* code block */}
                <CodeBlock className={`${sessionStorage.getItem('role') === "DSL-User" ? "active" : ""}`}>
                  <button className="issueTrigger" onClick={handleShow}>Having issues.?</button>
                  <pre className="Code-bg">
                    <Highlighter>{`import { IconButton } from "m2p-dsl";

// contained 
<IconButton variant="contained"> 
  <i className="icon icon-Line-Gesture-Move"></i>  
</IconButton>   

// outlined 
<IconButton variant="outlined">   
  <i className="icon icon-Line-Gesture-Move"></i>   
</IconButton>   

// text 
<IconButton variant="text">    
  <i className="icon icon-Line-Gesture-Move"></i>   
</IconButton>   

`}
                    </Highlighter>  
                  </pre>
                </CodeBlock>
                {/* code block */}

                </Box>
              </Box>
            </Box>
            <Box id="tag6" className="equal-spacing">
              <p variant="h5" className="doc-heading-text">
                Icons Button Sizes 
              </p>
              <ul style={{paddingLeft: "14px"}}>
                  <li><strong>Small</strong></li>
                  <li><strong>Large</strong></li>
                </ul>
              <Box className="component_expl_hrz">
                <Box className="output_bg">
                  <Row>
                    <Col item xs={12} md={6} lg={6}> 
                        <IconButton size="small" variant="contained">      
                          <i className="icon icon-Line-Gesture-Move"></i>  
                        </IconButton>
                    </Col>  
                    <Col item xs={12} md={6} lg={6}> 
                        <IconButton size="large" variant="outlined">   
                          <i className="icon icon-Line-Gesture-Move"></i>   
                        </IconButton> 
                    </Col>   
                  </Row>
                </Box>
                <Box className="component_code">
                {/* code block */}
                <CodeBlock className={`${sessionStorage.getItem('role') === "DSL-User" ? "active" : ""}`}>
                  <button className="issueTrigger" onClick={handleShow}>Having issues.?</button>
                  <pre className="Code-bg">
                    <Highlighter>{`import { IconButton } from "m2p-dsl";

// Small 
<IconButton size="small" variant="contained">      
  <i className="icon icon-Line-Gesture-Move"></i>  
</IconButton>

// Large 
<IconButton size="large" variant="outlined">   
  <i className="icon icon-Line-Gesture-Move"></i>     
</IconButton> 

`}
                    </Highlighter>  
                  </pre>
                </CodeBlock>
                {/* code block */}

                </Box>
              </Box>
            </Box>
            {/* Disabled */}
            <Box id="tag7" className="equal-spacing">
              <p variant="h5" className="doc-heading-text">
                Icons Button Disabled
              </p>
              <Box className="component_expl_hrz">
                <Box className="output_bg">
                  <Row>
                    <Col item xs={12} md={4} lg={4}> 
                        <IconButton variant="contained" disabled>      
                          <i className="icon icon-Line-Gesture-Move"></i>  
                        </IconButton> 
                    </Col>  
                    <Col item xs={12} md={4} lg={4}> 
                        <IconButton  variant="outlined" disabled>   
                          <i className="icon icon-Line-Gesture-Move"></i>   
                        </IconButton> 
                    </Col>   
                    <Col item xs={12} md={4} lg={4}> 
                        <IconButton variant="text" disabled>   
                          <i className="icon icon-Line-Gesture-Move"></i>   
                        </IconButton> 
                    </Col>   
                  </Row>
                </Box>
                <Box className="component_code">
                {/* code block */}
                <CodeBlock className={`${sessionStorage.getItem('role') === "DSL-User" ? "active" : ""}`}>
                  <button className="issueTrigger" onClick={handleShow}>Having issues.?</button>
                  <pre className="Code-bg">
                    <Highlighter>{`import { IconButton } from "m2p-dsl";

// Contained  
<IconButton variant="contained" disabled>      
  <i className="icon icon-Line-Gesture-Move"></i>  
</IconButton> 

// Outlined 
<IconButton  variant="outlined" disabled>    
  <i className="icon icon-Line-Gesture-Move"></i>     
</IconButton>

// Text   
<IconButton variant="text" disabled>   
  <i className="icon icon-Line-Gesture-Move"></i>   
</IconButton> 
`}
                    </Highlighter>  
                  </pre>
                </CodeBlock>
                {/* code block */}

                </Box>
              </Box>
            </Box>
            {/* Icon button */}
            <Box id="tag8" className="equal-spacing">
              <p variant="h5" className="doc-heading-text">
               Button Props 
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
                          <p>value ?</p>
                          <p className="string"><pre>string </pre></p>
                        </div>
                        <div className="props_content">
                          <p>The content to display inside the button</p>
                        </div>
                      </div>
                      <div className="props_div">
                        <div className="props_name">
                          <p>className ?</p>
                          <p className="string"><pre>string </pre></p>
                        </div>
                        <div className="props_content">
                          <p>The className property allows you to change the color,sizes for the button.</p>  
                        </div>
                      </div>
                      <div className="props_div">
                        <div className="props_name">
                          <p>variant ?</p>
                          <p className="string"><pre>variant </pre></p>
                        </div>
                        <div className="props_content">
                          <p>The variant property allows the button to be <span className="string-color">"contained" (default) | "outlined" | "text"</span>  button.</p>  
                        </div>
                      </div>
                      <div className="props_div">
                        <div className="props_name">
                          <p>disabled ?</p>
                          <p className="string"><pre>string - "disabled"</pre></p>
                        </div>
                        <div className="props_content">
                          <p>Disabled property allows to set state of the button to be disabled.</p>
                        </div>
                      </div>
                      <div className="props_div">
                        <div className="props_name">
                          <p>type ?</p>
                          <p className="string"><pre>string - "submit" | "button"  </pre></p>
                        </div>
                        <div className="props_content">
                          <p>Type property sets the button type to submit or button.</p>
                        </div>
                      </div>
                      <div className="props_div">
                        <div className="props_name">
                          <p>startIcon ?</p>
                          <p className="string"><pre> element </pre></p>
                        </div>
                        <div className="props_content">
                          <p>Type property allows to add icon and img to the start of the button.</p>
                        </div>
                      </div>
                      <div className="props_div">
                        <div className="props_name">
                          <p>endIcon ?</p>
                          <p className="string"><pre> element </pre></p>
                        </div>
                        <div className="props_content">
                          <p>Type property allows to add icon and img to the end of the button.</p>
                        </div>
                      </div>
                      <div className="props_div">
                        <div className="props_name">
                          <p>onClick ?</p>
                          <p className="void"><pre> void ()</pre></p>
                        </div>
                        <div className="props_content">
                          <p>For triggering a callback function.</p>
                        </div>
                      </div>
                    </div>

                  </Col>
                </Box>
              </Box>
            </Box>
            <Box id="tag9" className="equal-spacing">
              <p variant="h5" className="doc-heading-text">
               IconButton Props 
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
                          <p>children ?</p>
                          <p className="string"><pre>string | element </pre></p>
                        </div>
                        <div className="props_content">
                          <p>The content (Img or Icon) to display inside the IconButton.</p>
                        </div>
                      </div>
                      <div className="props_div">
                        <div className="props_name">
                          <p>variant ?</p>
                          <p className="string"><pre></pre></p>
                        </div>
                        <div className="props_content">
                          <p>Type property changes adds the <span className="string-color">"contained" | "outlined" | "text"</span> to the IconButton.</p>
                        </div>
                      </div>
                      <div className="props_div">
                        <div className="props_name">
                          <p>className ?</p>
                          <p className="string"><pre>string </pre></p>
                        </div>
                        <div className="props_content">
                          <p>The className property allows you to change the color, size for the button.</p>
                        </div>
                      </div>
                      <div className="props_div">
                        <div className="props_name">
                          <p>size  ?</p>
                          <p className="string"><pre>string</pre></p>
                        </div>
                        <div className="props_content">
                          <p>The size Property has <span className="string-color">"small" | "large"</span> changes the size of the button.</p> 
                        </div>
                      </div>
                      <div className="props_div">
                        <div className="props_name">
                          <p>type ?</p>
                          <p className="string"><pre>string - "submit" | "button"  </pre></p>
                        </div>
                        <div className="props_content">
                          <p>Type property sets the button type to submit or button.</p>
                        </div>
                      </div>
                      <div className="props_div">
                        <div className="props_name">
                          <p>disabled ?</p>
                          <p className="string"><pre>string</pre></p>
                        </div>
                        <div className="props_content">
                          <p>Type property sets the button to disabled State.</p> 
                        </div>
                      </div>
                      <div className="props_div">
                        <div className="props_name">
                          <p>onClick ?</p>
                          <p className="void"><pre> void ()</pre></p>
                        </div>
                        <div className="props_content">
                          <p>For triggering a callback function.</p>
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
                        Variant's
                      </Link>
                    </li>
                    <li>
                      <Link activeClass="active" to="tag2" spy={true} smooth={false} offset={-100} onSetActive={handleScroll} >
                        Sizes
                      </Link>
                    </li>
                    <li>
                      <Link activeClass="active" to="tag3" spy={true} smooth={false} offset={-100} onSetActive={handleScroll} >
                        Directional Icons
                      </Link>
                    </li>
                    <li>
                      <Link activeClass="active" to="tag4" spy={true} smooth={false} offset={-100} onSetActive={handleScroll} >
                        Disabled Buttons
                      </Link>
                    </li>
                    <li>
                      <Link activeClass="active" to="tag5" spy={true} smooth={false} offset={-100} onSetActive={handleScroll} >
                        Icons Button
                      </Link>
                    </li>
                    <li>
                      <Link activeClass="active" to="tag6" spy={true} smooth={false} offset={-100} onSetActive={handleScroll} >
                        Icons Button Sizes
                      </Link>
                    </li>
                    <li>
                      <Link activeClass="active" to="tag7" spy={true} smooth={false} offset={-100} onSetActive={handleScroll} >
                      Icons Button Disabled
                      </Link>
                    </li>
                    <li>
                      <Link activeClass="active" to="tag8" spy={true} smooth={false} offset={-100} onSetActive={handleScroll} >
                        Button Props
                      </Link>
                    </li>
                    <li>
                      <Link activeClass="active" to="tag9" spy={true} smooth={false} offset={-100} onSetActive={handleScroll} >
                        IconButton Props  
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

export default Buttons;
