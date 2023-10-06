import React,{useRef,useState,useEffect} from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Data from "../assets/json/icons.json";
import '../assets/css/icons.css';
import {SearchInput} from 'm2p-dsl';
import Aos from "aos";
import "aos/dist/aos.css";

const delay = 1;

function Iconlibrary() {
  const [searchText, setSearchText] = React.useState("");

  // copy state
  const [copycode,setCopycode] = React.useState(<img src={"https://res.cloudinary.com/gildcards/image/upload/v1677741616/Design-system/Line-System-Copy.svg"} />);
  const [copysvg,setCopysvg] = React.useState(<img src={"https://res.cloudinary.com/gildcards/image/upload/v1677741616/Design-system/Line-System-Download.svg"} />)
  const [copypng,setCopypng] = React.useState(<img src={"https://res.cloudinary.com/gildcards/image/upload/v1677741616/Design-system/Line-System-Download.svg"} />)
  const handlecopycode = () => {
    setCopycode(<img className="succss-icon" src={"https://res.cloudinary.com/gildcards/image/upload/v1677741616/Design-system/Line-System-Check.svg"} />);
  }

  const handleLeave = () => {
    setCopycode(<img src={"https://res.cloudinary.com/gildcards/image/upload/v1677741616/Design-system/Line-System-Copy.svg"} />);
    setCopysvg(<img src={'https://res.cloudinary.com/gildcards/image/upload/v1677741616/Design-system/Line-System-Download.svg'} />);
    setCopypng(<img src={'https://res.cloudinary.com/gildcards/image/upload/v1677741616/Design-system/Line-System-Download.svg'} />);
  }

// Download Svg

let linkRef = useRef();


async function handlecopysvg(e,icon) {
  e.preventDefault();
  // setCopysvg(<img src={"https://res.cloudinary.com/gildcards/image/upload/v1677741616/Design-system/icon-Line-Dev-Cloud-Download.svg"} />)
  let src = `https://res.cloudinary.com/gildcards/image/upload/v1677741616/Design-system/${icon}.svg`;
  let imageBlob = await (await fetch(src)).blob();
  linkRef = document.createElement('a');
  linkRef.href = URL.createObjectURL(imageBlob);
  linkRef.download = `${icon}.svg`;
  linkRef.click();
}

async function handlecopypng(e,icon) {
  e.preventDefault();
  // setCopypng(<img src={"https://res.cloudinary.com/gildcards/image/upload/v1677741616/Design-system/icon-Line-Dev-Cloud-Download.svg"} />)
  let src = `https://res.cloudinary.com/gildcards/image/upload/v1678085010/Designsystem-png/${icon}.png`;
  let imageBlob = await (await fetch(src)).blob();
  linkRef = document.createElement('a');
  linkRef.href = URL.createObjectURL(imageBlob);
  linkRef.download = `${icon}.png`;
  linkRef.click();
}


// search with lazy timer
  const filterSearch = (event) => {
   return (
    setTimeout((e) => {
      clearInterval(0);
      setSearchText(event.target.value);
    }, 500)
   )
  }
    // setTimeout((e) => {
    //   clearInterval(1200);

    // }, 1200)

//  Lazy  loading effect
  useEffect(function () {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <React.Fragment>
      <Container fluid className="content_div">
        <Row className="component_content_div">
            <Col>
                <div>
                    <p className="component_title">Icons</p>
                    <p className="component_content">
                    In computing, an icon is a pictogram or ideogram displayed on a computer screen in order to help the user navigate a computer system.
                    </p>
                </div>
            </Col>
        </Row>
        <Row>
       <Col className="col-md-6">
    </Col>
        </Row>
    <Row>
      <Col className="col-md-12 icon-library-column">
      <h3>List of Icons</h3>  
      {/* input box */}
      <div className="input-box">
      <SearchInput
        compact
        value={searchText}
        onChangeSearch={filterSearch}
        searchClass="search-box"  
        allowClear={true} 
        placeholder="Search Icons" 
      />      
      </div>
      {/* input box */}
      <div>
      <p>Directional Icons</p>
       <div className="outer-blocks" style={{paddingTop: '30px'}}>
          {Object.keys(Data[0]).filter((icon) => {
            if (searchText === "") {
              return icon;
            } else if (icon.toLowerCase().includes(searchText.toLowerCase())) {
              return icon;
            } else {
              return '';
            }
          }).map((icon) => {
            return (
            <div class="block-container" data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
             onMouseLeave={handleLeave}
             onClick={() => {navigator.clipboard.writeText(`<i className="icon icon-${icon}"></i>`)}}>
              <div className="blocks">
                <i className={`icon icon-${icon}`}>{`${icon}`}</i>
                  <a ref={linkRef} href={`https://res.cloudinary.com/gildcards/image/upload/v1677741616/Design-system/${icon}.svg`}></a>
              </div>
                <div class="item-overlay bottom">
                  <div className="icon-block">
                    <i onClick={handlecopycode}>{copycode}</i>
                  </div>
                <div className="icon-block">
                  <i onClick={(e)=> handlecopysvg(e,icon)} download="download">{copysvg}SVG</i>
                  <i onClick={(e)=> handlecopypng(e,icon)} download="download">{copypng}PNG</i>
                  </div>
                </div>
              </div>
          )})}
        </div>
      </div>
       </Col>
    </Row>
      </Container>
    </React.Fragment>
  )}

export default Iconlibrary;
