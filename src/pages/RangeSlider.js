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

import {RangeSlider} from "m2p-dsl";
import FeedbackForm from "../components/feedBack";
import ModalPopup from "../components/Modal";
import IssueForm from "../components/IssueForm";

function Rangerslider() {

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

  const values = [
    {
      value: 0,
      label: "Start",
    },
    {
      value: 100,
      label: "End",
    },
  ];
  const marksValue = [
    {
      value: 0,
      label: "0%",
    },
    {
      value: 100,
      label: "100%",
    },
  ];
  const [value, setValue] = React.useState(30);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(newValue);
  };

  const handleSliderChange = (event,newValue) => {
    setValue(newValue);
  };

  const handleInputChange = (event,newValue) => {
    setValue(event.target.value === '' ? '' : Number(event.target.value));
  };
  const handleBlur = () => {
    if (value < 0) {
      setValue(0);
    } else if (value > 100) {
      setValue(100);
    }
  };

  return (
    <React.Fragment>
      <Scroller />
      <Container fluid className="content_div">
        <Row className="component_content_div">
          <p className="component_title">Ranger and Slider</p>
          <p className="component_content">Ranger and Slider allow the user to make selections from a range of values. Sliders reflect a range of values along a bar, from which users may select a single value.</p>
        </Row>
        <Row>
          <Col lg={10} className="component_content_col">
            <Box id="tag1" className="equal-spacing">
              <p className="doc-heading-text">
              Basic Slider
              </p>
              <p className="doc-content-text">
              The basic range slider has a range from 0 to 100.</p>
              <Box className="component_expl_hrz">
                <Box className="output_bg">
                  <Row style={{display: 'flex',justifyContent: 'left'}}>
                    <Col item xs={12} md={12} lg={12}>
                        <Col item md={4} lg={4}>
                          <RangeSlider
                            onChange={handleChange}
                            value={value}
                            markValues={values}
                            className="range_slider"
                            valueLabelDisplay="on"
                            step={5}
                          />
                        </Col>
                    </Col>
                  </Row>
                </Box>
                <Box className="component_code">
                {/* code block */}
                <CodeBlock className={`${sessionStorage.getItem('role') === "DSL-User" ? "active" : ""}`}>
                  <button className="issueTrigger" onClick={handleShow}>Having issues.?</button>
                  <pre className="Code-bg">
                    <Highlighter>{`import { RangeSlider } from "m2p-dsl";

const values = [
  {
    value: 0,
    label: "Start",
  },
  {
    value: 100,
    label: "End",
  },
];
const [value, setValue] = React.useState([]);

const handleChange = (event, newValue) => {
  setValue(newValue);
};

<RangeSlider
  onChange={handleChange}
  value={value}
  markValues={values}
  className="range_slider"
  valueLabelDisplay="on"
/>`}
                    </Highlighter>
                  </pre>
                </CodeBlock>
                {/* code block */}

                </Box>
              </Box>
            </Box>
            <Box id="tag2" className="equal-spacing">
              <p className="doc-heading-text">
              Step Slider
              </p>
              <p className="doc-content-text">
              The step range slider has a default step for increament and decreament of the values.</p>
              <Box className="component_expl_hrz">
                <Box className="output_bg">
                  <Row style={{display: 'flex',justifyContent: 'left'}}>
                    <Col item xs={12} md={12} lg={12}>
                        <Col item md={4} lg={4}>
                          <RangeSlider
                            onChange={handleChange}
                            value={value}
                            markValues={values}
                            className="range_slider"
                            valueLabelDisplay="on"
                            step="10"
                          />
                        </Col>
                    </Col>
                  </Row>
                </Box>
                <Box className="component_code">
                {/* code block */}
                <CodeBlock className={`${sessionStorage.getItem('role') === "DSL-User" ? "active" : ""}`}>
                  <button className="issueTrigger" onClick={handleShow}>Having issues.?</button>
                  <pre className="Code-bg">
                    <Highlighter>{`import { RangeSlider } from "m2p-dsl";

<RangeSlider
  onChange={handleChange}
  value={value}
  markValues={values}
  className="range_slider"
  valueLabelDisplay="on"
  step="10"
/>

// add step property with desired value`}
                    </Highlighter>
                  </pre>
                </CodeBlock>
                {/* code block */}

                </Box>
              </Box>
            </Box>
            <Box id="tag3" className="equal-spacing">
              <p className="doc-heading-text">
                Slider with Input
              </p>
              <p className="doc-content-text">
              In this type of slider you can enter the value in the input which automatically set the range to the value.</p>
              <Box className="component_expl_hrz">
                <Box className="output_bg">
                  <Row style={{display: 'flex',justifyContent: 'left'}}>
                    <Col item xs={12} md={12} lg={12}>
                        <Col item md={4} lg={4}>
                          <RangeSlider
                            title="Input"
                            size="small"
                            inputProps={{
                              className: "rs-input",
                              type: "number",
                              step: 1,
                              min: 0,
                              max: 100,
                            }}
                            onInputChange={handleInputChange}
                            onChange={handleSliderChange}
                            onInputBlur={handleBlur}
                            value={value}
                            inputValue={value}
                            markValues={marksValue}
                            className="range_slider"
                          />
                        </Col>
                    </Col>
                  </Row>
                </Box>
                <Box className="component_code">
                {/* code block */}
                <CodeBlock className={`${sessionStorage.getItem('role') === "DSL-User" ? "active" : ""}`}>
                  <button className="issueTrigger" onClick={handleShow}>Having issues.?</button>
                  <pre className="Code-bg">
                    <Highlighter>{`import { RadioButton } from "m2p-dsl";

const [value, setValue] = React.useState([]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(newValue);
  };

  const handleSliderChange = (event,newValue) => {
    setValue(newValue);
  };

  const handleInputChange = (event,newValue) => {
    setValue(event.target.value === '' ? '' : Number(event.target.value));
  };
  const handleBlur = () => {
    if (value < 0) {
      setValue(0);
    } else if (value > 100) {
      setValue(100);
    }
  };

<RangeSlider
    title="Input"
    size="small"
    inputProps={{
      className: "rs-input",
      type: "number",
      step: 1,
      min: 0,
      max: 100,
    }}
    onInputChange={handleInputChange}
    onChange={handleSliderChange}
    onInputBlur={handleBlur}
    value={value}
    markValues={marksValue}
    className="range_slider"
  />`}
                    </Highlighter>
                  </pre>
                </CodeBlock>
                {/* code block */}

                </Box>
              </Box>
            </Box>
            <Box id="tag4" className="equal-spacing">
              <p variant="h5" className="doc-heading-text">
                Ranger
              </p>
              <p className="doc-content-text">The Ranger helps to set .</p>
              <Box className="component_expl_hrz" >
                <Box className="output_bg">
                  <Row>
                    <Col item xs={12} md={6} lg={6}>
                    <RangeSlider
                      onChange={handleChange}
                      value={value}
                      markValues={values}
                      className="range_slider"
                      valueLabelDisplay="on"
                      defaultValue={[10,100]}
                    />
                    </Col>
                  </Row>
                </Box>
                <Box className="component_code">
                {/* code block */}
                <CodeBlock className={`${sessionStorage.getItem('role') === "DSL-User" ? "active" : ""}`}>
                  <button className="issueTrigger" onClick={handleShow}>Having issues.?</button>
                  <pre className="Code-bg">
                    <Highlighter>{`import { Checkbox } from "m2p-dsl";

<RangeSlider
  onChange={handleChange}
  value={value}
  markValues={values}
  className="range_slider"
  valueLabelDisplay="on"
  defaultValue={[10,100]}
/>`}
                    </Highlighter>
                  </pre>
                </CodeBlock>
                {/* code block */}

                </Box>
              </Box>
            </Box>
            <Box id="tag5" className="equal-spacing">
              <p variant="h5" className="doc-heading-text">
                Step Ranger
              </p>
              <p className="doc-content-text">The Ranger helps to set .</p>
              <Box className="component_expl_hrz" >
                <Box className="output_bg">
                  <Row>
                    <Col item xs={12} md={6} lg={6}>
                    <RangeSlider
                      onChange={handleChange}
                      value={value}
                      markValues={values}
                      className="range_slider"
                      valueLabelDisplay="on"
                      defaultValue={[10,80]}
                      step={10}
                    />
                    </Col>
                  </Row>
                </Box>
                <Box className="component_code">
                {/* code block */}
                <CodeBlock className={`${sessionStorage.getItem('role') === "DSL-User" ? "active" : ""}`}>
                  <button className="issueTrigger" onClick={handleShow}>Having issues.?</button>
                  <pre className="Code-bg">
                    <Highlighter>{`import { Checkbox } from "m2p-dsl";

<RangeSlider
  onChange={handleChange}
  value={value}
  markValues={values}
  className="range_slider"
  valueLabelDisplay="on"
  defaultValue={[10,100]}
/>`}
                    </Highlighter>
                  </pre>
                </CodeBlock>
                {/* code block */}
                </Box>
              </Box>
            </Box>
            <Box id="tag6" className="equal-spacing">
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

                      {/*  */}
                      {/* <div className="props_div">
                        <div className="props_name">
                          <p>disabled ?</p>
                          <p className="boolean"><pre>boolean</pre></p>
                        </div>
                        <div className="props_content">
                          <p>The disabled property if <p className="classname">true</p> makes the Radio button in disabled State.</p>
                        </div>
                      </div> */}
                      {/* title,
                      markValues,
                      value,
                      size,
                      step,
                      defaultValue,
                      className,
                      valueLabelDisplay,
                      onChange,
                      inputProps,
                      inputValue,
                      onInputChange,
                      onInputBlur, */}
                      {/*  */}
                      <div className="props_div">
                        <div className="props_name">
                          <p>title ?</p>
                          <p className="string"><pre>string</pre></p>
                        </div>
                        <div className="props_content">
                          <p>The title property allows you to set the title for the slider.</p>
                        </div>
                      </div>
                      {/*  */}
                      {/*  */}
                      <div className="props_div">
                        <div className="props_name">
                          <p>helpertext ?</p>
                          <p className="string"><pre>String</pre></p>
                        </div>
                        <div className="props_content">
                          <p>The property helpertext allows you to add Content on the Checkbox helpertext below the Checkbox.</p>
                        </div>
                      </div>
                      {/*  */}
                      <div className="props_div">
                        <div className="props_name">
                          <p>onChange ?</p>
                          <p className="classname"><pre>function</pre></p>
                        </div>
                        <div className="props_content">
                          <p>The onChange sets up a function to change the radio selection.</p>
                        </div>
                      </div>
                      <div className="props_div">
                        <div className="props_name">
                          <p>labelClassName ?</p>
                          <p className="string"><pre>string</pre></p>
                        </div>
                        <div className="props_content">
                          <p>The labelClassName property allows you to change size and color of the label.</p>
                        </div>
                      </div>
                      <div className="props_div">
                        <div className="props_name">
                          <p>radioClassName ?</p>
                          <p className="string"><pre>string</pre></p>
                        </div>
                        <div className="props_content">
                          <p>The radioClassName property allows you to change size and color of the radio button.</p>
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
                      <Link activeClass="active" to="tag1" spy={true} smooth={false}>
                        Basic Slider
                      </Link>
                    </li>
                    <li>
                      <Link activeClass="active" to="tag2" spy={true} smooth={false} offset={-100} onSetActive={handleScroll}>
                        Step Slider
                      </Link>
                    </li>
                    <li>
                      <Link activeClass="active" to="tag3" spy={true} smooth={false} offset={-100} onSetActive={handleScroll}>
                        Slider with Input
                      </Link>
                    </li>
                    <li>
                      <Link activeClass="active" to="tag4" spy={true} smooth={false} offset={-100} onSetActive={handleScroll}>
                        Ranger
                      </Link>
                    </li>
                    <li>
                      <Link activeClass="active" to="tag5" spy={true} smooth={false} offset={-100} onSetActive={handleScroll}>
                        Step Ranger
                      </Link>
                    </li>
                    <li>
                      <Link activeClass="active" to="tag6" spy={true} smooth={false} offset={-100} onSetActive={handleScroll}>
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

export default Rangerslider;
