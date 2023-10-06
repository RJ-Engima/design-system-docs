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
import { SearchInput } from "m2p-dsl";
import FeedbackForm from "../components/feedBack";
import ModalPopup from "../components/Modal";
import IssueForm from "../components/IssueForm";


const Options = [
  {
    id: 0,
    value: 'option 1',
    content: 'option 1',
  },
  {
    id: 1,
    value: 'option 2',
    content: 'option 2',
  },
  {
    id: 2,
    value: 'option 3',
    content: 'option 3',
  }
];

function SearchCategory() {
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
          <p className="component_title">SearchInput</p>
          <p className="component_content">The Search Category can be used to filter various entities.</p>
        </Row>
        <Row>
          <Col lg={10} className="component_content_col">
            <Box id="tag1" className="equal-spacing">
              <p className="doc-heading-text">
              Basic
              </p>
              <p className="doc-content-text">
              Search with Icon.</p>
              <Box className="component_expl_hrz">
                <Box className="output_bg">
                  <Row style={{display: 'flex', justifyContent: 'left'}}>
                        <Col item xs={12} md={6} lg={6}>
                            <SearchInput
                              compact
                              searchClass="search-box"
                              allowClear={true}
                              onChangeSearch={(e) => console.log(e.target.value)}
                              placeholder="Search Input" />
                        </Col>
                  </Row>
                </Box>
                <Box className="component_code">
                {/* code block */}
                <CodeBlock className={`${sessionStorage.getItem('role') === "DSL-User" ? "active" : ""}`}>
                  <button className="issueTrigger" onClick={handleShow}>Having issues.?</button>
                  <pre className="Code-bg">
                    <Highlighter>{`import { SearchInput } from "m2p-dsl";

<SearchInput
compact
searchClass="search-box"
allowClear={true}
onChangeSearch={(e) => console.log(e.target.value)}
placeholder="Search Input" />`}
                    </Highlighter>
                  </pre>
                </CodeBlock>
                {/* code block */}

                </Box>
              </Box>
            </Box>
            <Box id="tag2" className="equal-spacing">
              <p className="doc-heading-text">
              Underline 
              </p>
              <p className="doc-content-text">
              Search underlined .</p>
              <Box className="component_expl_hrz">
                <Box className="output_bg">
                  <Row style={{display: 'flex', justifyContent: 'left'}}>
                        <Col item xs={12} md={6} lg={6}>
                            <SearchInput
                              compact 
                              searchClass="search-box underline"  
                              allowClear={true} 
                              onChangeSearch={(e) => console.log(e.target.value)} 
                              placeholder="Search Input" /> 
                        </Col>
                  </Row>
                </Box>
                <Box className="component_code">
                {/* code block */}
                <CodeBlock className={`${sessionStorage.getItem('role') === "DSL-User" ? "active" : ""}`}>
                  <button className="issueTrigger" onClick={handleShow}>Having issues.?</button>
                  <pre className="Code-bg">
                    <Highlighter>{`import { SearchInput } from "m2p-dsl";

<SearchInput
compact
searchClass="search-box underline" 
allowClear={true}
onChangeSearch={(e) => console.log(e.target.value)}
placeholder="Search Input" />`}
                    </Highlighter>
                  </pre>
                </CodeBlock>
                {/* code block */}

                </Box>
              </Box>
            </Box>
            <Box id="tag3" className="equal-spacing">
              <p variant="h5" className="doc-heading-text">
                 Category Search Primary 
              </p>
              <p className="doc-content-text">Search items by dropdown Category.</p>
              <Box className="component_expl_hrz" >
                <Box className="output_bg">
                  <Row style={{display: "flex", justifyContent: 'left'}}>
                    <Col item xs={12} md={12} lg={12}>
                        <SearchInput
                        showSelect={true}
                        allowClear={true}
                        Options={Options}
                        compact
                        mainClass="search-category-primary"
                        onChangeSelect={(value) => console.log(value)}  // to get Select values
                        onChangeSearch={(e) => console.log(e.target.value)}  // to get search values
                        SearchtypeClass="search-type"
                        defaultValue="option 1"
                        searchClass="search-box"
                        placeholder="Search Input" />
                    </Col>
                  </Row>
                </Box>
                <Box className="component_code">
                {/* code block */}
                <CodeBlock className={`${sessionStorage.getItem('role') === "DSL-User" ? "active" : ""}`}>
                  <button className="issueTrigger" onClick={handleShow}>Having issues.?</button>
                  <pre className="Code-bg">
                    <Highlighter>{`import { SearchInput } from "m2p-dsl";

const Options = [
  {
    id: 0,
    value: 'option 1',
    content: 'option 1',
  },
  {
    id: 1,
    value: 'option 2',
    content: 'option 2',
  },
  {
    id: 2,
    value: 'option 3',
    content: 'option 3',
  }
];

<SearchInput
showSelect={true}
allowClear={true}
Options={Options}
compact
mainClass="search-category-primary"
onChangeSelect={(value) => console.log(value)}  // to get Select values
onChangeSearch={(e) => console.log(e.target.value)}  // to get search values
SearchtypeClass="search-type"
defaultValue="option 1"
searchClass="search-box"
placeholder="Search Input" />`}
                    </Highlighter>
                  </pre>
                </CodeBlock>
                {/* code block */}

                </Box>
              </Box>
            </Box>

            <Box id="tag4" className="equal-spacing">
              <p variant="h5" className="doc-heading-text">
                 Category Search Light
              </p>
              <p className="doc-content-text">Search items by dropdown Category.</p>
              <Box className="component_expl_hrz" >
                <Box className="output_bg">
                  <Row style={{display: "flex", justifyContent: 'left'}}>
                    <Col item xs={12} md={12} lg={12}>
                        <SearchInput
                        showSelect={true}
                        allowClear={true}
                        Options={Options}
                        compact
                        mainClass="search-category-light"
                        onChangeSelect={(value) => console.log(value)}  // to get Select values
                        onChangeSearch={(e) => console.log(e.target.value)}  // to get search values
                        SearchtypeClass="search-type"
                        defaultValue="option 1"
                        searchClass="search-box"
                        placeholder="Search Input" />
                    </Col>
                  </Row>
                </Box>
                <Box className="component_code">
                {/* code block */}
                <CodeBlock className={`${sessionStorage.getItem('role') === "DSL-User" ? "active" : ""}`}>
                  <button className="issueTrigger" onClick={handleShow}>Having issues.?</button>
                  <pre className="Code-bg">
                    <Highlighter>{`import { SearchInput } from "m2p-dsl";

const Options = [
  {
    id: 0,
    value: 'option 1',
    content: 'option 1',
  },
  {
    id: 1,
    value: 'option 2',
    content: 'option 2',
  },
  {
    id: 2,
    value: 'option 3',
    content: 'option 3',
  }
];

<SearchInput
showSelect={true}
allowClear={true}
Options={Options}
compact
mainClass="search-category-light"
onChangeSelect={(value) => console.log(value)}  // to get Select values
onChangeSearch={(e) => console.log(e.target.value)}  // to get search values
SearchtypeClass="search-type"
defaultValue="option 1"
searchClass="search-box"
placeholder="Search Input" />`}
                    </Highlighter>
                  </pre>
                </CodeBlock>
                {/* code block */}

                </Box>
              </Box>
            </Box>

            <Box id="tag5" className="equal-spacing">
              <p variant="h5" className="doc-heading-text">
                SearchInput Props
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
                          <p>The className property allows you to change size ,background and position of the SearchInput.</p>
                        </div>
                      </div>
                      {/*  */}
                      {/* <div className="props_div">
                        <div className="props_name">
                          <p>disabled ?</p>
                          <p className="string"><pre>disabled</pre></p>
                        </div>
                        <div className="props_content">
                            <p>The disabled property allows the user to  disable the SearchInput.</p>
                        </div>
                      </div> */}
                      {/*  */}
                      <div className="props_div">
                        <div className="props_name">
                          <p>allowClear ?</p>
                          <p className="string"><pre>string</pre></p>
                        </div>
                        <div className="props_content">
                          <p>The allowClear property shows Clear icon which empties the Input.</p>
                        </div>
                      </div>
                      {/*  */}
                      <div className="props_div">
                        <div className="props_name">
                          <p>defaultValue ?</p>
                          <p className="string"><pre>string</pre></p>
                        </div>
                        <div className="props_content">
                          <p>The defaultValue property sets the DefaultValue for the Selector.</p>
                        </div>
                      </div>
                      {/*  */}
                      <div className="props_div">
                        <div className="props_name">
                          <p>showSelect ?</p>
                          <p className="boolean"><pre>boolean</pre></p>
                        </div>
                        <div className="props_content">
                          <p>The showSelect property if <p className="classname">true</p>  displays the Dropdown for the SearchInput.</p>
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
                        Default Search 
                      </Link>
                    </li>
                    <li>
                      <Link activeClass="active" to="tag2" spy={true} smooth={false} offset={-100} onSetActive={handleScroll}>
                        Primary 
                      </Link>
                    </li>
                    <li>
                      <Link activeClass="active" to="tag3" spy={true} smooth={false} offset={-100} onSetActive={handleScroll}>
                        Light 
                      </Link>
                    </li>
                    <li>
                      <Link activeClass="active" to="tag4" spy={true} smooth={false} offset={-100} onSetActive={handleScroll}>
                        props
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

export default SearchCategory;
