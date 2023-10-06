import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Highlighter from "../components/Code";
import CodeBlock from "react-copy-code";
import Scroller from "../components/Scroller";
import { Link } from "react-scroll";
import { Tab,Button, DrawerSidebar } from "m2p-dsl";
import { Box} from "@mui/material";
import {Link as Linking,useLocation} from 'react-router-dom';
import {Sidebar} from "m2p-dsl";
import FeedbackForm from "../components/feedBack";
import ModalPopup from "../components/Modal";
import IssueForm from "../components/IssueForm";

// side bar content
const items = [
    {
        type: 'group',
        label: "Components",
        children: [
          {
            label:  "Data Display",
            key: 'keyHeading1',
            icon: <i className="icon icon-Line-System-Setting"></i>,
            children: [
              {
                label: <Link id="1" path="/components/avatars" to="/components/avatars">Avatars</Link>,
                key:"/components/avatars",
                // icon: <i className="icon icon-Line-Dev-Server"></i>,
              },
              {
                label: <Link id="2" path="/components/badges" to="/components/badges">Badges</Link>,
                key:"/components/badges",
                // icon: <i className="icon icon-Line-Dev-Server"></i>,
              },
              {
                label: <Link id="3" path="/components/tables" to="/components/tables">Tables</Link>,
                key:"/components/tables",
                // icon: <i className="icon icon-Line-Dev-Server"></i>
              },
              {
                label: <Link id="4" path="/components/social-media-logo" to="/components/social-media-logo">Social Media Logos</Link>,
                // label: <Link to="/components/social-media-logo"></Link>,
                key: '/components/social-media-logo',
                // icon: <i className="icon icon-Line-Dev-Server"></i>,
              },
              {
                label: <Link id="5" path="/components/tooltip" to="/components/tooltip">Tooltip</Link>,
                key: '/components/tooltip',
                // icon: <i className="icon icon-Line-Dev-Server"></i>
              }
            ],
          },
          {
            label: "Navigation",
            key: 'keyHeading2',
            icon: <i className="icon icon-Line-System-Save"></i>,
            children: [
              {
                label: <Link path="/components/stepper" to="/components/stepper" >Stepper</Link>,
                key: '/components/stepper',
                // icon: <i className="icon icon-Line-Dev-Server"></i>
              },
              {
                label: <Link path="/components/drawer" to="/components/drawer" >Drawer</Link>,
                key: '/components/drawer',
                // icon: <i className="icon icon-Line-Dev-Server"></i>
              },
              {
                label: <Link path="/components/pagination" to="/components/pagination" >Pagination</Link>,
                key: '/components/pagination',
                // icon: <i className="icon icon-Line-Dev-Server"></i>,
              },
              {
                label: <Link path="/components/tabs" to="/components/tabs" >Tabs</Link>,
                key: '/components/tabs',
                // icon: <i className="icon icon-Line-Dev-Server"></i>,
            },
            {
              label: <Link path="/components/breadcrumbs" to="/components/breadcrumbs" >BreadCrumbs</Link>,
              key: '/components/breadcrumbs',
                // icon: <i className="icon icon-Line-Dev-Server"></i>
            }
            ],
          },
          {
            label: "Utilities",
            key: 'keyHeading3',
            icon: <i className="icon icon-Line-Table-Export"></i>,
            children: [
             {
              label: <Link path="/components/alerts" to="/components/alerts">Alerts</Link>,
              key: "/components/alerts",
                // icon: <i className="icon icon-Line-Dev-Server"></i>
             },
              {
                label: <Link path="/components/modal" to="/components/modal">Modal Popup</Link>,
                key:"/components/modal"
                // icon: <i className="icon icon-Line-Dev-Server"></i>
              },

              {
                label: <Link path="/components/textarea" to="/components/textarea" >Text Area</Link>,
                key:"/components/textarea"
                // icon: <i className="icon icon-Line-Dev-Server"></i>
              },
            ],
          },
          {
            label: "Surfaces",
            key: 'keyHeading4',
            icon: <i className="icon icon-Line-Business-Briefcase"></i>,
            children: [
              {
                label: <Link path="/components/accordions" to="/components/accordions">Accordion</Link>,
                key:"/components/accordions",
                icon: <i className="icon icon-Line-Dev-Server"></i>
              },
              {
                label: <Link path="/components/cardview" to="/components/cardview">Cards</Link>,
                key:"/components/cardview",
                icon: <i className="icon icon-Line-Dev-Server"></i>
              }
            ],
          }
        ],
      },

  {
    type: 'group',
    label: 'Inputs',
    children: [
      {
        label: <Link path="/components/inputs" to="/components/inputs">Inputs</Link>,
        key:"/components/inputs",
        icon: <i className="icon icon-Line-Business-Office"></i>
      },
      {
        label: <Link path="/components/buttons" to="/components/buttons">Buttons</Link>,
        key:"/components/buttons",
        icon: <i className="icon icon-Line-Business-Office"></i>
      },
      {
        label: <Link path="/components/checkbox" to="/components/checkbox">Checkbox</Link>,
        key:"/components/checkbox",
        icon: <i className="icon icon-Line-Document-Checklist"></i>
      },
      {
        label: <Link path="/components/radio-button" to="/components/radio-button">Radio</Link>,
        key:"/components/radio-button",
        icon: <i className="icon icon-Line-Document-Clipboard"></i>
      },
      {
        label: <Link path="/components/dropdown" to="/components/dropdown">DropDown</Link>,
        key:"/components/dropdown",
        icon: <i className="icon icon-Line-Emoji-Like"></i>
      },
      {
        label: <Link path="/components/range-slider" to="/components/range-slider">Range Slider</Link>,
        key:"/components/range-slider",
        icon: <i className="icon icon-Line-Finance-Cash"></i>
      },
      {
        label: <Link path="/components/switches" to="/components/switches">Switches</Link>,
        key:"/components/switches",
        icon: <i className="icon icon-Line-Finance-Coin"></i>
      },
      {
        label: <Link path="/components/search-input" to="/components/search-input">Search Input</Link>,
        key:"/components/search-input",
        icon: <i className="icon icon-Line-Finance-Gift"></i>
      },
      {
        label: <Link path="/components/otp" to="/components/otp">Otp Input</Link>,
        key:"/components/otp",
        icon: <i className="icon icon-Line-Finance-Reward"></i>
      },
      {
        label: <Link path="/components/file-upload" to="/components/file-upload">File Uplaod</Link>,
        key:"/components/file-upload",
        icon: <i className="icon icon-Line-System-Archive"></i>
      },
      {
        label: <Link path="/components/tree-select" to="/components/tree-select">Tree Select</Link>,
        key:"/components/tree-select",
        icon: <i className="icon icon-Line-System-Globe"></i>
      },
      {
        label: <Link path="/components/tel-select" to="/components/tel-select">Tel Code Picker</Link>,
        key:"/components/tel-select",
        icon: <i className="icon icon-Line-System-Home"></i>
      },
      {
        label: <Link path="/components/tagify" to="/components/tagify">Tagify</Link>,
        key:"/components/tagify",
        icon: <i className="icon icon-Line-System-Lock"></i>
    },
    {
      label: <Link path="/components/countrypicker" to="/components/countrypicker">Country Picker</Link>,
      key:"/components/countrypicker",
        icon: <i className="icon icon-Line-System-Lock"></i>
    },
    {
      label: <Link path="/components/datepicker" to="/components/datepicker">Date Picker</Link>,
      key:"/components/datepicker",
        icon: <i className="icon icon-Line-System-Video-On"></i>
    }
    ],
  }
];



function Drawer() {
  const [show, setShow] = useState(false);
  const [heading, setHeading] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = (e) => {
    setShow(true)
  };

  const location = useLocation();

  const pathName = location.pathname;


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
          <p className="component_title">Drawer</p>
          <p className="component_content">Navigation drawers
           provide access to destinations in your app. Side sheets are surfaces containing supplementary content that are
            anchored to the left or right edge of the screen.</p>
        </Row>
        <Row>
          <Col lg={10} className="component_content_col">
            <Box id="tag1" className="equal-spacing">
              <p className="doc-heading-text">
                Drawer Dark
              </p>
              <p className="doc-content-text">
              Sidebar Dark colored.</p>
              <Box className="sidebar component_expl_vrtl">
                <Box className="output_bg">
                  <Row style={{display: 'flex', justifyContent: 'space-around'}}>
                        <Col item xs={12} md={12} lg={12}>
                          <DrawerSidebar
                            layoutClass="dark"
                            showHeader={true}
                            showFooter={false}
                            siderTheme="dark"
                            menuTheme="dark"
                            items={items}
                            defaultSelectedKeys={"/components/avatars"}
                            selectedKeys={"/components/avatars"} // set this to pathName using useLocation method from react-router-dom for routing with active Status
                            dashBoardHeaderText="Dashboard"
                            dashBoardHeaderIcon={<i className="icon icon-Line-System-Dashboard"></i>}
                          />
                       </Col>
                  </Row>
                </Box>
                <Box className="component_code">
                {/* code block */}
                <CodeBlock style={{height: '700px',overflow: 'auto'}} className={`${sessionStorage.getItem('role') === "DSL-User" ? "active" : ""}`}>
                  <button className="issueTrigger" onClick={handleShow}>Having issues.?</button>
                  <pre className="Code-bg">
                    <Highlighter>{`import { DrawerSidebar } from "m2p-dsl";
import { Link , useLocation } from 'react-router-dom';

let location = useLocation();

const pathName = location.pathname;

console.log(pathName);   // add this pathName to the selectded keys

// Note :- keep the link path and key should be same for showing active status.

const items = [
  {
      type: 'group',
      label: "Components",
      children: [
        {
          label:  "Data Display",
          key: 'keyHeading1',
          icon: <i className="icon icon-Line-System-Setting"></i>,
          children: [
            {
              label: <Link id="1" path="/components/avatars" to="/components/avatars">Avatars</Link>,
              key:"/components/avatars",
              // icon: <i className="icon icon-Line-Dev-Server"></i>,
            },
            {
              label: <Link id="2" path="/components/badges" to="/components/badges">Badges</Link>,
              key:"/components/badges",
              // icon: <i className="icon icon-Line-Dev-Server"></i>,
            },
            {
              label: <Link id="3" path="/components/tables" to="/components/tables">Tables</Link>,
              key:"/components/tables",
              // icon: <i className="icon icon-Line-Dev-Server"></i>
            },
            {
              label: <Link id="4" path="/components/social-media-logo" to="/components/social-media-logo">Social Media Logos</Link>,
              // label: <Link to="/components/social-media-logo"></Link>,
              key: '/components/social-media-logo',
              // icon: <i className="icon icon-Line-Dev-Server"></i>,
            },
            {
              label: <Link id="5" path="/components/tooltip" to="/components/tooltip">Tooltip</Link>,
              key: '/components/tooltip',
              // icon: <i className="icon icon-Line-Dev-Server"></i>
            }
          ],
        },
        {
          label: "Navigation",
          key: 'keyHeading2',
          icon: <i className="icon icon-Line-System-Save"></i>,
          children: [
            {
              label: <Link path="/components/stepper" to="/components/stepper" >Stepper</Link>,
              key: '/components/stepper',
              // icon: <i className="icon icon-Line-Dev-Server"></i>
            },
            {
              label: <Link path="/components/drawer" to="/components/drawer" >Drawer</Link>,
              key: '/components/drawer',
              // icon: <i className="icon icon-Line-Dev-Server"></i>
            },
            {
              label: <Link path="/components/pagination" to="/components/pagination" >Pagination</Link>,
              key: '/components/pagination',
              // icon: <i className="icon icon-Line-Dev-Server"></i>,
            },
            {
              label: <Link path="/components/tabs" to="/components/tabs" >Tabs</Link>,
              key: '/components/tabs',
              // icon: <i className="icon icon-Line-Dev-Server"></i>,
          },
          {
            label: <Link path="/components/breadcrumbs" to="/components/breadcrumbs" >BreadCrumbs</Link>,
            key: '/components/breadcrumbs',
              // icon: <i className="icon icon-Line-Dev-Server"></i>
          }
          ],
        },
        {
          label: "Utilities",
          key: 'keyHeading3',
          icon: <i className="icon icon-Line-Table-Export"></i>,
          children: [
           {
            label: <Link path="/components/alerts" to="/components/alerts">Alerts</Link>,
            key: "/components/alerts",
              // icon: <i className="icon icon-Line-Dev-Server"></i>
           },
            {
              label: <Link path="/components/modal" to="/components/modal">Modal Popup</Link>,
              key:"/components/modal"
              // icon: <i className="icon icon-Line-Dev-Server"></i>
            },

            {
              label: <Link path="/components/textarea" to="/components/textarea" >Text Area</Link>,
              key:"/components/textarea"
              // icon: <i className="icon icon-Line-Dev-Server"></i>
            },
          ],
        },
        {
          label: "Surfaces",
          key: 'keyHeading4',
          icon: <i className="icon icon-Line-Business-Briefcase"></i>,
          children: [
            {
              label: <Link path="/components/accordions" to="/components/accordions">Accordion</Link>,
              key:"/components/accordions",
              icon: <i className="icon icon-Line-Dev-Server"></i>
            },
            {
              label: <Link path="/components/cardview" to="/components/cardview">Cards</Link>,
              key:"/components/cardview",
              icon: <i className="icon icon-Line-Dev-Server"></i>
            }
          ],
        }
      ],
    },

{
  type: 'group',
  label: 'Inputs',
  children: [
    {
      label: <Link path="/components/inputs" to="/components/inputs">Inputs</Link>,
      key:"/components/inputs",
      icon: <i className="icon icon-Line-Business-Office"></i>
    },
    {
      label: <Link path="/components/buttons" to="/components/buttons">Buttons</Link>,
      key:"/components/buttons",
      icon: <i className="icon icon-Line-Business-Office"></i>
    },
    {
      label: <Link path="/components/checkbox" to="/components/checkbox">Checkbox</Link>,
      key:"/components/checkbox",
      icon: <i className="icon icon-Line-Document-Checklist"></i>
    },
    {
      label: <Link path="/components/radio-button" to="/components/radio-button">Radio</Link>,
      key:"/components/radio-button",
      icon: <i className="icon icon-Line-Document-Clipboard"></i>
    },
    {
      label: <Link path="/components/dropdown" to="/components/dropdown">DropDown</Link>,
      key:"/components/dropdown",
      icon: <i className="icon icon-Line-Emoji-Like"></i>
    },
    {
      label: <Link path="/components/range-slider" to="/components/range-slider">Range Slider</Link>,
      key:"/components/range-slider",
      icon: <i className="icon icon-Line-Finance-Cash"></i>
    },
    {
      label: <Link path="/components/switches" to="/components/switches">Switches</Link>,
      key:"/components/switches",
      icon: <i className="icon icon-Line-Finance-Coin"></i>
    },
    {
      label: <Link path="/components/search-input" to="/components/search-input">Search Input</Link>,
      key:"/components/search-input",
      icon: <i className="icon icon-Line-Finance-Gift"></i>
    },
    {
      label: <Link path="/components/otp" to="/components/otp">Otp Input</Link>,
      key:"/components/otp",
      icon: <i className="icon icon-Line-Finance-Reward"></i>
    },
    {
      label: <Link path="/components/file-upload" to="/components/file-upload">File Uplaod</Link>,
      key:"/components/file-upload",
      icon: <i className="icon icon-Line-System-Archive"></i>
    },
    {
      label: <Link path="/components/tree-select" to="/components/tree-select">Tree Select</Link>,
      key:"/components/tree-select",
      icon: <i className="icon icon-Line-System-Globe"></i>
    },
    {
      label: <Link path="/components/tel-select" to="/components/tel-select">Tel Code Picker</Link>,
      key:"/components/tel-select",
      icon: <i className="icon icon-Line-System-Home"></i>
    },
    {
      label: <Link path="/components/tagify" to="/components/tagify">Tagify</Link>,
      key:"/components/tagify",
      icon: <i className="icon icon-Line-System-Lock"></i>
  },
  {
    label: <Link path="/components/countrypicker" to="/components/countrypicker">Country Picker</Link>,
    key:"/components/countrypicker",
      icon: <i className="icon icon-Line-System-Lock"></i>
  },
  {
    label: <Link path="/components/datepicker" to="/components/datepicker">Date Picker</Link>,
    key:"/components/datepicker",
      icon: <i className="icon icon-Line-System-Video-On"></i>
  }
  ],
}
];

const [collapsed, setCollapsed] = useState(false);

<DrawerSidebar
  layoutClass="dark"
  showHeader={true}
  showFooter={false}
  siderTheme="dark"
  menuTheme="dark"
  collapsed={collapsed}
  onCollapse={(value) => setCollapsed(value)}
  items={items}
  selectedKeys={pathName} // set this to pathName using useLocation method from react-router-dom for routing and active Status
  dashBoardHeaderText="Dashboard"
  dashBoardHeaderIcon={<i className="icon icon-Line-System-Dashboard"></i>}
/>

`}
                    </Highlighter>
                  </pre>
                </CodeBlock>
                {/* code block */}

                </Box>
              </Box>
            </Box>
            {/*  */}

            <Box id="tag2" className="equal-spacing">
              <p className="doc-heading-text">
                Drawer Light
              </p>
              <p className="doc-content-text">
              Sidebar Light colored.</p>
              <Box className="sidebar component_expl_vrtl">
                <Box className="output_bg">
                  <Row style={{display: 'flex', justifyContent: 'space-around'}}>
                        <Col item xs={12} md={12} lg={12}>
                            <DrawerSidebar
                                layoutClass="light"
                                showHeader={true}
                                showFooter={false}
                                siderTheme="light"
                                menuTheme="light"
                                items={items}
                                selectedKeys={pathName} // set this to pathName using useLocation method from react-router-dom for routing and active Status
                                dashBoardHeaderText="Dashboard"
                                dashBoardHeaderIcon={<i className="icon icon-Line-System-Dashboard"></i>}
                              />
                       </Col>
                  </Row>
                </Box>
                <Box className="component_code">
                {/* code block */}
                <CodeBlock style={{height: '700px',overflow: 'auto'}} className={`${sessionStorage.getItem('role') === "DSL-User" ? "active" : ""}`}>
                  <button className="issueTrigger" onClick={handleShow}>Having issues.?</button>
                  <pre className="Code-bg">
                    <Highlighter>{`import { DrawerSidebar } from "m2p-dsl";
import { Link , useLocation } from 'react-router-dom';

let location = useLocation();

const pathName = location.pathname;

console.log(pathName);   // add this pathName to the selectded keys

// Note :- keep the link path and key should be same for showing active status.

const items = [
  {
      type: 'group',
      label: "Components",
      children: [
        {
          label:  "Data Display",
          key: 'keyHeading1',
          icon: <i className="icon icon-Line-System-Setting"></i>,
          children: [
            {
              label: <Link id="1" path="/components/avatars" to="/components/avatars">Avatars</Link>,
              key:"/components/avatars",
              // icon: <i className="icon icon-Line-Dev-Server"></i>,
            },
            {
              label: <Link id="2" path="/components/badges" to="/components/badges">Badges</Link>,
              key:"/components/badges",
              // icon: <i className="icon icon-Line-Dev-Server"></i>,
            },
            {
              label: <Link id="3" path="/components/tables" to="/components/tables">Tables</Link>,
              key:"/components/tables",
              // icon: <i className="icon icon-Line-Dev-Server"></i>
            },
            {
              label: <Link id="4" path="/components/social-media-logo" to="/components/social-media-logo">Social Media Logos</Link>,
              // label: <Link to="/components/social-media-logo"></Link>,
              key: '/components/social-media-logo',
              // icon: <i className="icon icon-Line-Dev-Server"></i>,
            },
            {
              label: <Link id="5" path="/components/tooltip" to="/components/tooltip">Tooltip</Link>,
              key: '/components/tooltip',
              // icon: <i className="icon icon-Line-Dev-Server"></i>
            }
          ],
        },
        {
          label: "Navigation",
          key: 'keyHeading2',
          icon: <i className="icon icon-Line-System-Save"></i>,
          children: [
            {
              label: <Link path="/components/stepper" to="/components/stepper" >Stepper</Link>,
              key: '/components/stepper',
              // icon: <i className="icon icon-Line-Dev-Server"></i>
            },
            {
              label: <Link path="/components/drawer" to="/components/drawer" >Drawer</Link>,
              key: '/components/drawer',
              // icon: <i className="icon icon-Line-Dev-Server"></i>
            },
            {
              label: <Link path="/components/pagination" to="/components/pagination" >Pagination</Link>,
              key: '/components/pagination',
              // icon: <i className="icon icon-Line-Dev-Server"></i>,
            },
            {
              label: <Link path="/components/tabs" to="/components/tabs" >Tabs</Link>,
              key: '/components/tabs',
              // icon: <i className="icon icon-Line-Dev-Server"></i>,
          },
          {
            label: <Link path="/components/breadcrumbs" to="/components/breadcrumbs" >BreadCrumbs</Link>,
            key: '/components/breadcrumbs',
              // icon: <i className="icon icon-Line-Dev-Server"></i>
          }
          ],
        },
        {
          label: "Utilities",
          key: 'keyHeading3',
          icon: <i className="icon icon-Line-Table-Export"></i>,
          children: [
           {
            label: <Link path="/components/alerts" to="/components/alerts">Alerts</Link>,
            key: "/components/alerts",
              // icon: <i className="icon icon-Line-Dev-Server"></i>
           },
            {
              label: <Link path="/components/modal" to="/components/modal">Modal Popup</Link>,
              key:"/components/modal"
              // icon: <i className="icon icon-Line-Dev-Server"></i>
            },

            {
              label: <Link path="/components/textarea" to="/components/textarea" >Text Area</Link>,
              key:"/components/textarea"
              // icon: <i className="icon icon-Line-Dev-Server"></i>
            },
          ],
        },
        {
          label: "Surfaces",
          key: 'keyHeading4',
          icon: <i className="icon icon-Line-Business-Briefcase"></i>,
          children: [
            {
              label: <Link path="/components/accordions" to="/components/accordions">Accordion</Link>,
              key:"/components/accordions",
              icon: <i className="icon icon-Line-Dev-Server"></i>
            },
            {
              label: <Link path="/components/cardview" to="/components/cardview">Cards</Link>,
              key:"/components/cardview",
              icon: <i className="icon icon-Line-Dev-Server"></i>
            }
          ],
        }
      ],
    },

{
  type: 'group',
  label: 'Inputs',
  children: [
    {
      label: <Link path="/components/inputs" to="/components/inputs">Inputs</Link>,
      key:"/components/inputs",
      icon: <i className="icon icon-Line-Business-Office"></i>
    },
    {
      label: <Link path="/components/buttons" to="/components/buttons">Buttons</Link>,
      key:"/components/buttons",
      icon: <i className="icon icon-Line-Business-Office"></i>
    },
    {
      label: <Link path="/components/checkbox" to="/components/checkbox">Checkbox</Link>,
      key:"/components/checkbox",
      icon: <i className="icon icon-Line-Document-Checklist"></i>
    },
    {
      label: <Link path="/components/radio-button" to="/components/radio-button">Radio</Link>,
      key:"/components/radio-button",
      icon: <i className="icon icon-Line-Document-Clipboard"></i>
    },
    {
      label: <Link path="/components/dropdown" to="/components/dropdown">DropDown</Link>,
      key:"/components/dropdown",
      icon: <i className="icon icon-Line-Emoji-Like"></i>
    },
    {
      label: <Link path="/components/range-slider" to="/components/range-slider">Range Slider</Link>,
      key:"/components/range-slider",
      icon: <i className="icon icon-Line-Finance-Cash"></i>
    },
    {
      label: <Link path="/components/switches" to="/components/switches">Switches</Link>,
      key:"/components/switches",
      icon: <i className="icon icon-Line-Finance-Coin"></i>
    },
    {
      label: <Link path="/components/search-input" to="/components/search-input">Search Input</Link>,
      key:"/components/search-input",
      icon: <i className="icon icon-Line-Finance-Gift"></i>
    },
    {
      label: <Link path="/components/otp" to="/components/otp">Otp Input</Link>,
      key:"/components/otp",
      icon: <i className="icon icon-Line-Finance-Reward"></i>
    },
    {
      label: <Link path="/components/file-upload" to="/components/file-upload">File Uplaod</Link>,
      key:"/components/file-upload",
      icon: <i className="icon icon-Line-System-Archive"></i>
    },
    {
      label: <Link path="/components/tree-select" to="/components/tree-select">Tree Select</Link>,
      key:"/components/tree-select",
      icon: <i className="icon icon-Line-System-Globe"></i>
    },
    {
      label: <Link path="/components/tel-select" to="/components/tel-select">Tel Code Picker</Link>,
      key:"/components/tel-select",
      icon: <i className="icon icon-Line-System-Home"></i>
    },
    {
      label: <Link path="/components/tagify" to="/components/tagify">Tagify</Link>,
      key:"/components/tagify",
      icon: <i className="icon icon-Line-System-Lock"></i>
  },
  {
    label: <Link path="/components/countrypicker" to="/components/countrypicker">Country Picker</Link>,
    key:"/components/countrypicker",
      icon: <i className="icon icon-Line-System-Lock"></i>
  },
  {
    label: <Link path="/components/datepicker" to="/components/datepicker">Date Picker</Link>,
    key:"/components/datepicker",
      icon: <i className="icon icon-Line-System-Video-On"></i>
  }
  ],
}
];

const [collapsed, setCollapsed] = useState(false);

<DrawerSidebar
  layoutClass="light"
  showHeader={true}
  showFooter={false}
  siderTheme="light"
  menuTheme="light"
  collapsed={collapsed}
  onCollapse={(value) => setCollapsed(value)}
  items={items}
  selectedKeys={pathName} // set this to pathName using useLocation method from react-router-dom for routing and active Status
  dashBoardHeaderText="Dashboard"
  dashBoardHeaderIcon={<i className="icon icon-Line-System-Dashboard"></i>}
/>  `}
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
                          <p>The className Property of the Drawer.</p>
                        </div>
                      </div>
                      {/*  */}
                      <div className="props_div">
                        <div className="props_name">
                          <p>siderTheme ?</p>
                          <p className="boolean"><pre>boolean</pre></p>
                        </div>
                        <div className="props_content">
                            <p>The Theme of the Sider.</p>
                        </div>
                      </div>
                      {/*  */}
                      <div className="props_div">
                        <div className="props_name">
                          <p>menuTheme ?</p>
                          <p className="boolean"><pre>boolean</pre></p>
                        </div>
                        <div className="props_content">
                          <p>The Theme of the Menu Collapse and Menu's.</p>
                        </div>
                      </div>
                      {/*  */}
                         <div className="props_div">
                        <div className="props_name">
                          <p>dashBoardHeaderText ?</p>
                          <p className="string"><pre>string</pre></p>
                        </div>
                        <div className="props_content">
                          <p>The header text of the Dashboard Title.</p>
                        </div>
                      </div>
                        {/*  */}
                        <div className="props_div">
                        <div className="props_name">
                          <p>dashBoardHeaderIcon ?</p>
                          <p className="string"><pre>string</pre></p>
                        </div>
                        <div className="props_content">
                          <p>The dashBoardHeaderIcon icon of the dashboard Title.</p>
                        </div>
                      </div>
                      {/*  */}
                      <div className="props_div">
                        <div className="props_name">
                          <p>showHeader ?</p>
                          <p className="string"><pre>boolean</pre></p>
                        </div>
                        <div className="props_content">
                          <p>Shows Header / Navbar of the dashboard .</p>
                        </div>
                      </div>
                      {/*  */}

                      <div className="props_div">
                        <div className="props_name">
                          <p>navBar ?</p>
                          <p className="string"><pre>component</pre></p>
                        </div>
                        <div className="props_content">
                        <p>Content of the Header (Create a component to add content to it).</p>
                        </div>
                      </div>
                      {/*  */}
                      <div className="props_div">
                        <div className="props_name">
                          <p>showFooter ?</p>
                          <p className="string"><pre>footer</pre></p>
                        </div>
                        <div className="props_content">
                          <p>Shows Footer of the dashboard.</p>
                        </div>
                      </div>
                      {/*  */}
                      <div className="props_div">
                        <div className="props_name">
                          <p>footerEnd ?</p>
                          <p className="string"><pre>Component</pre></p>
                        </div>
                        <div className="props_content">
                        <p>Content of the Footer (Create a component to add content to it).</p>
                        </div>
                      </div>
                      {/*  */}
                      <div className="props_div">
                        <div className="props_name">
                          <p>defaultSelectedKeys ?</p>
                          <p className="Array of string"><pre>Array</pre></p>
                        </div>
                        <div className="props_content">
                          <p>default key to be Highlighted.</p>
                        </div>
                      </div>
                      {/*  */}
                      <div className="props_div">
                        <div className="props_name">
                          <p>layoutClass ?</p>
                          <p className="string"><pre>string</pre></p>
                        </div>
                        <div className="props_content">
                          <p>The layoutClass if dark make Navbar theme dark &  layoutClass if light make Navbar theme white. <span>Match with the Sidebar theme.</span></p>
                        </div>
                      </div>
                      {/*  */}
                      <div className="props_div">
                        <div className="props_name">
                          <p>items ?</p>
                          <p className="Array of Objects"><pre>Array of Objects</pre></p>
                        </div>
                        <div className="props_content">
                          <p>The Menu of the Sidebar.</p>
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
                        Dark
                      </Link>
                    </li>
                    <li>
                      <Link activeClass="active" to="tag2" spy={true} smooth={false} offset={-100} onSetActive={handleScroll}>
                        Light
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

export default Drawer;
