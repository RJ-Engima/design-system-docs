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

import {DatePicker,DateRangePicker,CustomRangePicker} from "m2p-dsl";
import FeedbackForm from "../components/feedBack";
import ModalPopup from "../components/Modal";
import IssueForm from "../components/IssueForm";

function Datepicker() {
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
          <p className="component_title">Date Picker.</p>
          <p className="component_content">By clicking the input box, you can select a date from a popup calendar.</p>
        </Row>
        <Row>
          <Col lg={10} className="component_content_col">
            <Box id="tag1" className="equal-spacing">
              <p className="doc-heading-text">
                Date Picker
              </p>
              <p className="doc-content-text">
              set the picker props to date.</p>
              <Box className="component_expl_hrz">
                <Box className="output_bg">
                  <Row style={{display: 'flex', justifyContent: 'space-around'}}>
                        <Col item xs={12} md={12} lg={12}>
                            <DatePicker 
                              picker="date"
                              format={'DD/MM/YYYY'} 
                              onChange={(e,value) =>console.log(value) }  //get data value    
                            />
                        </Col>
                  </Row>
                </Box>
                <Box className="component_code">
                {/* code block */}
                <CodeBlock className={`${sessionStorage.getItem('role') === "DSL-User" ? "active" : ""}`}>
                  <button className="issueTrigger" onClick={handleShow}>Having issues.?</button>
                  <pre className="Code-bg">
                    <Highlighter>{`import { Datepicker } from "m2p-dsl";

// Date Picker

<DatePicker 
  picker="date"
  format={'DD/MM/YYYY'}
  onChange={(e,value) => console.log(value) }  //get data value    
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
                Date With Time Picker 
              </p>
              <p className="doc-content-text">Change the picker to date and Add showTime props.</p> 
              <Box className="component_expl_hrz">
                <Box className="output_bg">
                  <Row>
                    <Col item xs={12} md={12} lg={12}>
                        <DatePicker
                          picker="date" 
                          showTime 
                          onChange={(e,value) =>console.log(value) }  //get data value  
                        />
                    </Col>
                  </Row>
                </Box>
                <Box className="component_code">
                {/* code block */}
                <CodeBlock className={`${sessionStorage.getItem('role') === "DSL-User" ? "active" : ""}`}>
                  <button className="issueTrigger" onClick={handleShow}>Having issues.?</button>
                  <pre className="Code-bg">
                    <Highlighter>{`import { Datepicker } from "m2p-dsl";
// Date with Time Picker  

<DatePicker
  picker="date" 
  showTime 
  onChange={(e,value) =>console.log(value) }  //get data value  
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
                Date Range Picker 
              </p>
              <p className="doc-content-text">Default Date Range Picker.</p> 
              <Box className="component_expl_hrz">
                <Box className="output_bg">
                  <Row>
                    <Col item xs={12} md={12} lg={12}>
                      <DateRangePicker  
                        picker="date"
                        onChange={(e,value) => console.log(value)}
                        Limiter={true}  
                      />  
                    </Col>
                  </Row>
                </Box>
                <Box className="component_code">
                {/* code block */}
                <CodeBlock className={`${sessionStorage.getItem('role') === "DSL-User" ? "active" : ""}`}>
                  <button className="issueTrigger" onClick={handleShow}>Having issues.?</button>
                  <pre className="Code-bg">
                    <Highlighter>{`import { DateRangePicker } from "m2p-dsl";

// Date Range Picker 

<DateRangePicker  
  picker="date"
  onChange={(e,value) => console.log(value)}
  Limiter={true}  
/>    

`}
                    </Highlighter>
                  </pre>
                </CodeBlock>
                {/* code block */}
                </Box>
              </Box>
            </Box>

            {/* custom date range picker */}
            <Box id="tag4" className="equal-spacing">
              <p variant="h5" className="doc-heading-text">
                Custom Range picker
              </p>
              <p className="doc-content-text">Limits the date range for one month or 30days only.</p>
              <Box className="component_expl_hrz">
                <Box className="output_bg">
                  <Row>
                    <Col item xs={12} md={12} lg={12}>
                        <CustomRangePicker 
                          picker="date"   
                          handleChange={(date,dateString) => console.log(date,dateString)}  
                        />
                    </Col>
                  </Row>
                </Box>
                <Box className="component_code">
                {/* code block */}
                <CodeBlock className={`${sessionStorage.getItem('role') === "DSL-User" ? "active" : ""}`}>
                  <button className="issueTrigger" onClick={handleShow}>Having issues.?</button>
                  <pre className="Code-bg">
                    <Highlighter>{`import { CustomRangePicker } from "m2p-dsl";

<CustomRangePicker 
  picker="date"   
  handleChange={(date,dateString) => console.log(date,dateString)} 
/>  
                    `}
                    </Highlighter>
                  </pre>
                </CodeBlock>
                {/* code block */}
                </Box>
              </Box>
            </Box>
            {/* custom date range picker  */} 

            <Box id="tag5" className="equal-spacing">
              <p variant="h5" className="doc-heading-text">
                Month Picker  
              </p>
              <p className="doc-content-text">Change the Picker to month.</p> 
              <Box className="component_expl_hrz">
                <Box className="output_bg">
                  <Row>
                    <Col item xs={12} md={12} lg={12}>
                      <DatePicker 
                        picker="month"
                        onChange={(e,value) => console.log(value)}  
                        />
                    </Col>
                  </Row>
                </Box>
                <Box className="component_code">
                {/* code block */}
                <CodeBlock className={`${sessionStorage.getItem('role') === "DSL-User" ? "active" : ""}`}>
                  <button className="issueTrigger" onClick={handleShow}>Having issues.?</button>
                  <pre className="Code-bg">
                    <Highlighter>{`import { Datepicker } from "m2p-dsl";
// Month Picker 

<DatePicker 
  picker="month"
  onChange={(e,value) => console.log(value)}  
/>

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
                Month Range Picker 
              </p>
              <p className="doc-content-text">Change picker from picker month.</p>  
              <Box className="component_expl_hrz">
                <Box className="output_bg">
                  <Row>
                    <Col item xs={12} md={12} lg={12}>
                      <DateRangePicker  
                        picker="month" 
                        Limiter={true} 
                        onChange={(date,dateString) => console.log(date,dateString)} 
                      />
                    </Col>
                  </Row>
                </Box>
                <Box className="component_code">
                {/* code block */}
                <CodeBlock className={`${sessionStorage.getItem('role') === "DSL-User" ? "active" : ""}`}>
                  <button className="issueTrigger" onClick={handleShow}>Having issues.?</button>
                  <pre className="Code-bg">
                    <Highlighter>{`import { DateRangePicker } from "m2p-dsl";
// Month Range Picker 

<DateRangePicker  
  picker="month"  
  Limiter={true} 
  onChange={(date,dateString) => console.log(date,dateString)} 
/>  

`}
                    </Highlighter>
                  </pre>
                </CodeBlock>
                {/* code block */}
                </Box>
              </Box>
            </Box>

            <Box id="tag7" className="equal-spacing"> 
              <p variant="h5" className="doc-heading-text">
                Weekly Picker 
              </p>
              <p className="doc-content-text">Change picker props to week.</p>
              <Box className="component_expl_hrz">
                <Box className="output_bg">
                  <Row>
                    <Col item xs={12} md={12} lg={12}>
                      <DatePicker
                        picker="week"   
                        onChange={(e,dateString) => console.log(dateString)}  
                      />  
                    </Col>
                  </Row>
                </Box>
                <Box className="component_code">
                {/* code block */}
                <CodeBlock className={`${sessionStorage.getItem('role') === "DSL-User" ? "active" : ""}`}>
                  <button className="issueTrigger" onClick={handleShow}>Having issues.?</button>
                  <pre className="Code-bg">
                    <Highlighter>{`import { Datepicker } from "m2p-dsl";
// Week Picker  

<DatePicker
  picker="week"   
  onChange={(e,dateString) => console.log(dateString)} 
/>    

`}
                    </Highlighter>
                  </pre>
                </CodeBlock>
                {/* code block */}
                </Box>
              </Box>
            </Box>

            <Box id="tag8" className="equal-spacing"> 
              <p variant="h5" className="doc-heading-text">
                Weekly Range Picker 
              </p>
              <p className="doc-content-text">Change Picker props to week.</p>  
              <Box className="component_expl_hrz">
                <Box className="output_bg">
                  <Row> 
                    <Col item xs={12} md={12} lg={12}>  
                    <DateRangePicker  
                      picker="week"  
                      onChange={(e,value) => console.log(value)}    
                     />
                    </Col>
                  </Row>
                </Box>
                <Box className="component_code">
                {/* code block */}
                <CodeBlock className={`${sessionStorage.getItem('role') === "DSL-User" ? "active" : ""}`}>
                  <button className="issueTrigger" onClick={handleShow}>Having issues.?</button>
                  <pre className="Code-bg">
                    <Highlighter>{`import { DateRangePicker } from "m2p-dsl"; 
// Weekly Range Picker 

<DateRangePicker  
picker="week"  
onChange={(e,value) => console.log(value)}    
/>

`}
                    </Highlighter>
                  </pre>
                </CodeBlock>
                {/* code block */}
                </Box>
              </Box>
            </Box>

            <Box id="tag9" className="equal-spacing"> 
              <p variant="h5" className="doc-heading-text">
                Year Picker 
              </p>
              <p className="doc-content-text">Change Picker props to Year.</p>  
              <Box className="component_expl_hrz">
                <Box className="output_bg">
                  <Row> 
                    <Col item xs={12} md={12} lg={12}>  
                    <DatePicker  
                      picker="year"  
                      onChange={(e,value) => console.log(value)}
                     />
                    </Col>
                  </Row>
                </Box>
                <Box className="component_code">
                {/* code block */}
                <CodeBlock className={`${sessionStorage.getItem('role') === "DSL-User" ? "active" : ""}`}>
                  <button className="issueTrigger" onClick={handleShow}>Having issues.?</button>
                  <pre className="Code-bg">
                    <Highlighter>{`import { Datepicker } from "m2p-dsl";
// Year Picker

<DatePicker  
  picker="year"  
  onChange={(e,value) => console.log(value)}  
/>  

`}
                    </Highlighter>
                  </pre>
                </CodeBlock>
                {/* code block */}
                </Box>
              </Box>
            </Box>

            <Box id="tag10" className="equal-spacing"> 
              <p variant="h5" className="doc-heading-text">
                Year Range Picker   
              </p>
              <p className="doc-content-text">Change Picker props to Year.</p>  
              <Box className="component_expl_hrz">
                <Box className="output_bg">
                  <Row> 
                    <Col item xs={12} md={12} lg={12}>  
                    <DateRangePicker  
                      picker="year"  
                      onChange={(e,value) => console.log(value)}
                     /> 
                    </Col>
                  </Row>
                </Box>
                <Box className="component_code">
                {/* code block */}
                <CodeBlock className={`${sessionStorage.getItem('role') === "DSL-User" ? "active" : ""}`}>
                  <button className="issueTrigger" onClick={handleShow}>Having issues.?</button>
                  <pre className="Code-bg">
                    <Highlighter>{`import { Datepicker } from "m2p-dsl";
// Year Range Picker 

<DateRangePicker  
  picker="year"  
  onChange={(e,value) => console.log(value)}
/>  

`}
                    </Highlighter>
                  </pre>
                </CodeBlock>
                {/* code block */}
                </Box>
              </Box>
            </Box>

            <Box id="tag11" className="equal-spacing"> 
              <p variant="h5" className="doc-heading-text">
                Quarterly Picker 
              </p>
              <p className="doc-content-text">Change Picker props to quarter.</p> 
              <Box className="component_expl_hrz">
                <Box className="output_bg">
                  <Row> 
                    <Col item xs={12} md={12} lg={12}>  
                        <DatePicker  
                          picker="quarter" 
                          onChange={(e,value) => console.log(value)}
                        />  
                    </Col>
                  </Row>
                </Box>
                <Box className="component_code">
                {/* code block */}
                <CodeBlock className={`${sessionStorage.getItem('role') === "DSL-User" ? "active" : ""}`}>
                  <button className="issueTrigger" onClick={handleShow}>Having issues.?</button>
                  <pre className="Code-bg">
                    <Highlighter>{`import { Datepicker } from "m2p-dsl";
// Quarterly Picker

<DatePicker  
picker="quarter" 
onChange={(e,value) => console.log(value)}
/>  

`}
                    </Highlighter>
                  </pre>
                </CodeBlock>
                {/* code block */}
                </Box>
              </Box>
            </Box>  

            <Box id="tag12" className="equal-spacing"> 
              <p variant="h5" className="doc-heading-text">
                Quarterly Range Picker 
              </p>
              <p className="doc-content-text">Change Picker props to quartar.</p> 
              <Box className="component_expl_hrz">
                <Box className="output_bg">
                  <Row> 
                    <Col item xs={12} md={12} lg={12}>  
                        <DateRangePicker  
                          picker="quarter" 
                          onChange={(e,value) => console.log(value)}
                        />  
                    </Col>  
                  </Row>
                </Box>
                <Box className="component_code">
                {/* code block */}
                <CodeBlock className={`${sessionStorage.getItem('role') === "DSL-User" ? "active" : ""}`}>
                  <button className="issueTrigger" onClick={handleShow}>Having issues.?</button>
                  <pre className="Code-bg">
                    <Highlighter>{`import { Datepicker } from "m2p-dsl";

// Weekly Range Picker 

<DateRangePicker  
  picker="quarter" 
  onChange={(e,value) => console.log(value)}  
/>  

`}
                    </Highlighter>
                  </pre>
                </CodeBlock>
                {/* code block */}
                </Box>
              </Box>
            </Box>  

            <Box id="tag13" className="equal-spacing"> 
              <p variant="h5" className="doc-heading-text">
                Time Picker 
              </p>
              <p className="doc-content-text">Change Picker props to time.</p>  
              <Box className="component_expl_hrz">
                <Box className="output_bg">
                  <Row> 
                    <Col item xs={12} md={12} lg={12}>  
                        <DatePicker  
                          picker="time"  
                          onChange={(e,value) => console.log(value)}
                        />  
                    </Col>
                  </Row>
                </Box>
                <Box className="component_code">
                {/* code block */}
                <CodeBlock className={`${sessionStorage.getItem('role') === "DSL-User" ? "active" : ""}`}>
                  <button className="issueTrigger" onClick={handleShow}>Having issues.?</button>
                  <pre className="Code-bg">
                    <Highlighter>{`import { Datepicker } from "m2p-dsl";
// Time Picker  

<DatePicker  
  picker="time"  
  onChange={(e,value) => console.log(value)}  
/>  

`}
                    </Highlighter>
                  </pre>
                </CodeBlock>
                {/* code block */}
                </Box>
              </Box>
            </Box>    
    
            <Box id="tag14" className="equal-spacing">
              <p variant="h5" className="doc-heading-text">
                Props
              </p>
              <Box className="component_expl_hrz" >
                <Box className="props_head">
                  <Row>
                    <Col item xs={12} md={12} lg={12}>
                      <pre className="Code-bg">
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
                          <p className="string"><pre>string</pre></p>
                        </div>
                        <div className="props_content">
                          <p>The className property allows you to change size ,background and position of the DatePicker.</p>
                        </div>
                      </div>
                      {/*  */}
                      <div className="props_div">
                        <div className="props_name">
                          <p>disabled ?</p>
                          <p className="boolean"><pre>boolean</pre></p>
                        </div>
                        <div className="props_content">
                            <p>The disabled property allows the user to  disable the DatePicker.</p>
                        </div>
                      </div>
                      {/*  */}
                      <div className="props_div">
                        <div className="props_name">
                          <p>allowClear ?</p>
                          <p className="boolean"><pre>boolean</pre></p>
                        </div>
                        <div className="props_content">
                          <p>Whether to show clear button.</p>
                        </div>
                      </div>
                      {/*  */}
                        {/*  */}
                        <div className="props_div">
                        <div className="props_name">
                          <p>size ?</p>
                          <p className="string"><pre>string</pre></p>
                        </div>
                        <div className="props_content">
                          <p>To determine the size of the input box, the height of large and small, are 40px and 24px respectively, while default size is 32px.</p>
                        </div>
                      </div>
                      {/*  */}
                      <div className="props_div">
                        <div className="props_name">
                          <p>autoFocus ?</p>
                          <p className="boolean"><pre>boolean</pre></p>
                        </div>
                        <div className="props_content">
                          <p>If get focus when component mounted.</p>
                        </div>
                      </div>
                    {/*  */}
                    <div className="props_div">
                        <div className="props_name">
                          <p>format ?</p>
                          <p className="string"><pre>string</pre></p>
                        </div>
                        <div className="props_content">
                          <p>To set the date format, refer to dayjs. When an array is provided,
                            all values are used for parsing and first value is used for formatting, support Custom Format. The
                            default format is set to <p className="classname">YY/MM/DD</p>.</p>
                        </div>
                      </div>
                        {/*  */}
                        <div className="props_div">
                        <div className="props_name">
                          <p>showTime ?</p>
                          <p className="boolean"><pre>boolean</pre></p>
                        </div>
                        <div className="props_content">
                          <p>To provide an additional time selection.</p>
                        </div>
                      </div>
                      {/*  */}
                      <div className="props_div">
                        <div className="props_name">
                          <p>value ?</p>
                          <p className="boolean"><pre>string</pre></p>
                        </div>
                        <div className="props_content">
                          <p>To set date.</p>
                        </div>
                      </div>
                      {/*  */}
                      <div className="props_div">
                        <div className="props_name">
                          <p>onChange ?</p>
                          <p className="string"><pre>string</pre></p>
                        </div>
                        <div className="props_content">
                          <p>Callback function, can be executed when the selected time is changing.</p>
                        </div>
                      </div>
                      {/*  */}
                      <div className="props_div">
                        <div className="props_name">
                          <p>inputReadOnly ?</p>
                          <p className="string"><pre>boolean</pre></p>
                        </div>
                        <div className="props_content">
                          <p>Set the readonly attribute of the input tag (avoids virtual keyboard on touch devices) .</p>
                        </div>
                      </div>
                      {/*  */}
                      <div className="props_div">
                        <div className="props_name">
                          <p>picker ?</p>
                          <p className="string"><pre>data/string</pre></p>
                        </div>
                        <div className="props_content">
                          <p>Set picker type which can be <p className="classname">(date, week,quatar, month,year)</p>.</p>
                        </div>
                      </div>
                      {/*  */}
                      <div className="props_div">
                        <div className="props_name">
                          <p>placeholder ?</p>
                          <p className="string"><pre>string</pre></p>
                        </div>
                        <div className="props_content">
                          <p>The placeholder of date input.</p>
                        </div>
                      </div>
                      {/*  */}
                      <div className="props_div">
                        <div className="props_name">
                          <p>placement ?</p>
                          <p className="string"><pre>string</pre></p>
                        </div>
                        <div className="props_content">
                          <p>The position where the selection box pops up .Usage as<p>(bottomLeft bottomRight topLeft topRight)</p>.</p>
                        </div>
                      </div>
                        {/*  */}
                        <div className="props_div">
                        <div className="props_name">
                          <p>onCalendarChange ?</p>
                          <p className="classname"><pre>function</pre></p>
                        </div>
                        <div className="props_content">
                          <p>The onCalendarChange property is used only in DateRangePicker Callback function, can be executed when the start time or the end time of the range is changing.</p>
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
                      <Link activeClass="active" to="tag1" spy={true} smooth={false} offset={-100} onSetActive={handleScroll}>
                        Date Picker
                      </Link>
                    </li>
                    <li>
                      <Link activeClass="active" to="tag2" spy={true} smooth={false} offset={-100} onSetActive={handleScroll}>
                        Date with Time Picker 
                      </Link>
                    </li>
                    <li>
                      <Link activeClass="active" to="tag3" spy={true} smooth={false} offset={-100} onSetActive={handleScroll}>
                        Date Range Picker 
                      </Link>
                    </li>
                    <li>
                      <Link activeClass="active" to="tag4" spy={true} smooth={false} offset={-100} onSetActive={handleScroll}>
                         Range Picker
                      </Link>
                    </li>
                    <li>
                      <Link activeClass="active" to="tag5" spy={true} smooth={false} offset={-100} onSetActive={handleScroll}>
                         Custom Date Range Picker 
                      </Link>
                    </li>
                    <li>
                      <Link activeClass="active" to="tag6" spy={true} smooth={false} offset={-100} onSetActive={handleScroll}>
                        Month Picker 
                      </Link>
                    </li>
                    <li>
                      <Link activeClass="active" to="tag7" spy={true} smooth={false} offset={-100} onSetActive={handleScroll}>
                        Month Range Picker 
                      </Link>
                    </li>
                    <li>
                      <Link activeClass="active" to="tag8" spy={true} smooth={false} offset={-100} onSetActive={handleScroll}>
                        Weekly Picker 
                      </Link>
                    </li>
                    <li>
                      <Link activeClass="active" to="tag9" spy={true} smooth={false} offset={-100} onSetActive={handleScroll}>
                        Weekly Range Picker 
                      </Link>
                    </li>
                    <li>
                      <Link activeClass="active" to="tag10" spy={true} smooth={false} offset={-100} onSetActive={handleScroll}>
                        Year Picker 
                      </Link>
                    </li>
                    <li>
                      <Link activeClass="active" to="tag11" spy={true} smooth={false} offset={-100} onSetActive={handleScroll}>
                        Year Range Picker 
                      </Link>
                    </li>
                    <li>
                      <Link activeClass="active" to="tag12" spy={true} smooth={false} offset={-100} onSetActive={handleScroll}>
                        Quarterly Picker 
                      </Link>
                    </li>
                    <li>
                      <Link activeClass="active" to="tag13" spy={true} smooth={false} offset={-100} onSetActive={handleScroll}>
                        Quarterly Range Picker 
                      </Link>
                    </li>
                    <li>
                      <Link activeClass="active" to="tag14" spy={true} smooth={false} offset={-100} onSetActive={handleScroll}>
                        Time Picker 
                      </Link>
                    </li>
                    <li>
                      <Link activeClass="active" to="tag15" spy={true} smooth={false} offset={-100} onSetActive={handleScroll}>
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

export default Datepicker;
