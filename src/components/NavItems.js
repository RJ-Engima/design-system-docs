import React from 'react';
import { Link } from 'react-router-dom';

const items = [
  {
    label:<Link id="1" path="/get-started" to="/get-started">Get started</Link>,
    icon:<i className="icon icon-Line-System-Key"></i>,
    key: '/get-started'
  },

  {
    type: 'group',
    label: "Components",
    children: [
      {
        label: "Data Display",
        key: 'keyHeading1',
        icon: <i className="icon icon-Line-System-Setting"></i>,
        children: [
          {
            label: <Link id="1" path="/components/avatars" to="/components/avatars">Avatars</Link>,
            key: "/components/avatars",
            // icon: <i className="icon icon-Line-Dev-Server"></i>,
          },
          {
            label: <Link id="2" path="/components/badges" to="/components/badges">Badges</Link>,
            key: "/components/badges",
            // icon: <i className="icon icon-Line-Dev-Server"></i>,
          },
          {
            label: <Link id="3" path="/components/tables" to="/components/tables">Tables</Link>,
            key: "/components/tables",
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
            key: "/components/modal"
            // icon: <i className="icon icon-Line-Dev-Server"></i>
          },

          {
            label: <Link path="/components/textarea" to="/components/textarea" >Text Area</Link>,
            key: "/components/textarea"
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
            key: "/components/accordions",
            // icon: <i className="icon icon-Line-Dev-Server"></i>
          },
          {
            label: <Link path="/components/cardview" to="/components/cardview">Cards</Link>,
            key: "/components/cardview",
            // icon: <i className="icon icon-Line-Dev-Server"></i>
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
        key: "/components/inputs",
        icon: <i className="icon icon-Line-Business-Office"></i>
      },
      {
        label: <Link path="/components/buttons" to="/components/buttons">Buttons</Link>,
        key: "/components/buttons",
        icon: <i className="icon icon-Line-Business-Office"></i>
      },
      {
        label: <Link path="/components/checkbox" to="/components/checkbox">Checkbox</Link>,
        key: "/components/checkbox",
        icon: <i className="icon icon-Line-Document-Checklist"></i>
      },
      {
        label: <Link path="/components/radio-button" to="/components/radio-button">Radio</Link>,
        key: "/components/radio-button",
        icon: <i className="icon icon-Line-Document-Clipboard"></i>
      },
      {
        label: <Link path="/components/dropdown" to="/components/dropdown">DropDown</Link>,
        key: "/components/dropdown",
        icon: <i className="icon icon-Line-Emoji-Like"></i>
      },
      {
        label: <Link path="/components/range-slider" to="/components/range-slider">Range Slider</Link>,
        key: "/components/range-slider",
        icon: <i className="icon icon-Line-Finance-Cash"></i>
      },
      {
        label: <Link path="/components/switches" to="/components/switches">Switches</Link>,
        key: "/components/switches",
        icon: <i className="icon icon-Line-Finance-Coin"></i>
      },
      {
        label: <Link path="/components/search-input" to="/components/search-input">Search Input</Link>,
        key: "/components/search-input",
        icon: <i className="icon icon-Line-Finance-Gift"></i>
      },
      {
        label: <Link path="/components/otp" to="/components/otp">Otp Input</Link>,
        key: "/components/otp",
        icon: <i className="icon icon-Line-Finance-Reward"></i>
      },
      {
        label: <Link path="/components/file-upload" to="/components/file-upload">File Uplaod</Link>,
        key: "/components/file-upload",
        icon: <i className="icon icon-Line-System-Archive"></i>
      },
      {
        label: <Link path="/components/tree-select" to="/components/tree-select">Tree Select</Link>,
        key: "/components/tree-select",
        icon: <i className="icon icon-Line-System-Globe"></i>
      },
      {
        label: <Link path="/components/tel-select" to="/components/tel-select">Tel Code Picker</Link>,
        key: "/components/tel-select",
        icon: <i className="icon icon-Line-System-Home"></i>
      },
      {
        label: <Link path="/components/tagify" to="/components/tagify">Tagify</Link>,
        key: "/components/tagify",
        icon: <i className="icon icon-Line-System-Lock"></i>
      },
      {
        label: <Link path="/components/countrypicker" to="/components/countrypicker">Country Picker</Link>,
        key: "/components/countrypicker",
        icon: <i className="icon icon-Line-System-Lock"></i>
      },
      {
        label: <Link path="/components/datepicker" to="/components/datepicker">Date Picker</Link>,
        key: "/components/datepicker",
        icon: <i className="icon icon-Line-System-Video-On"></i>
      }
    ],
  }
];

export default items;