import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Highlighter from "../components/Code";
import CodeBlock from "react-copy-code";
import Scroller from "../components/Scroller";
import { Link } from "react-scroll";
import { Table,InfoBadge, Button,Subtext, Pagination} from "m2p-dsl";

import { Box, Checkbox } from "@mui/material";

import AvImg from '../assets/img/avatar_img.png';
import FeedbackForm from "../components/feedBack";
import ModalPopup from "../components/Modal";
import IssueForm from "../components/IssueForm";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    Action: "Action",
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
    Action: "Action",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
    Action: "Action",
  },
  {
    title: "Mobile Number",
    dataIndex: "MobileNumber",
    key: "mobilenumber",
    Action: "Action",
  },
  {
    title: "Email",
    dataIndex: "Email",
    key: "email",
    Action: "Action",
  },
  {
    title: "Location",
    dataIndex: "location",
    key: "location",
    Action: "Action",
  },
  {
    title: "Country",
    key: "country",
    dataIndex: "country",
    Action: "country",
  },
];

const columns1 = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      Action: "Action",
      fixed: 'left'
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
      Action: "Action",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
      Action: "Action",
    },
    {
      title: "Mobile Number",
      dataIndex: "MobileNumber",
      key: "mobilenumber",
      Action: "Action",
    },
    {
      title: "Email",
      dataIndex: "Email",
      key: "email",
      Action: "Action",
    },
    {
      title: "Location",
      dataIndex: "location",
      key: "location",
      Action: "Action",
    },
    {
      title: "Country",
      key: "country",
      dataIndex: "country",
      Action: "country",
      fixed: 'right'
    },
];
// sorting

let sortHeader = [
    {
    title: 'Name',
    dataIndex: 'name',
    sorter: true,
    fixed: 'left',
    },
    {
      title: 'English ',
      dataIndex: 'english',
      sorter: true,
    },
    {
      title: 'Math ',
      dataIndex: 'math',
      sorter: true,
    },
    {
      title: 'History ',
      dataIndex: 'history',
      sorter: true,
    },
    {
        title: 'Physics ',
        dataIndex: 'physics',
        sorter: true,
      },
      {
        title: 'Chemistry ',
        dataIndex: 'chemistry',
        sorter: true,
      },
      {
        title: 'Biology ',
        dataIndex: 'biology',
        sorter: true,
      },
  ];

 sortHeader = sortHeader.map((ele) => {
  return {...ele , sorter:{
    compare: (a,b) => {
    if (a[ele.dataIndex] < b[ele.dataIndex]) return -1;
      if (b[ele.dataIndex] < a[ele.dataIndex]) return 1;
      return 0;
  },
multiple:2 }}
})

// soring data
const Sortdata = [
    {
      key: '1',
      name: 'John Brown',
      chinese: 98,
      math: 60,
      english: 70,
      physics: 80,
      chemistry: 90,
      history: 100,
      biology: 90,
    },
    {
      key: '2',
      name: 'Jim Green',
      chinese: 98,
      math: 66,
      english: 89,
      physics: 80,
      chemistry: 90,
      history: 100,
      biology: 90,
    },
    {
      key: '3',
      name: 'Joe Black',
      chinese: 98,
      math: 90,
      english: 70,
      physics: 80,
      chemistry: 90,
      history: 100,
      biology: 90,
    },
    {
      key: '4',
      name: 'Jim Red',
      chinese: 88,
      math: 99,
      english: 89,
      physics: 80,
      chemistry: 90,
      history: 100,
      biology: 90,
    },
    {
        key: '5',
        name: 'John Brown',
        chinese: 98,
        math: 60,
        english: 70,
        physics: 80,
        chemistry: 90,
        history: 100,
        biology: 90,
      },
      {
        key: '6',
        name: 'Jim Green',
        chinese: 98,
        math: 66,
        english: 89,
        physics: 80,
        chemistry: 90,
        history: 100,
        biology: 90,
      },
      {
        key: '7',
        name: 'Joe Black',
        chinese: 98,
        math: 90,
        english: 70,
        physics: 80,
        chemistry: 90,
        history: 100,
        biology: 90,
      },
      {
        key: '8',
        name: 'Jim Red',
        chinese: 88,
        math: 99,
        english: 89,
        physics: 80,
        chemistry: 90,
        history: 100,
        biology: 90,
      },
];
// sub text header
const columns2 = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      Action: "Action",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
      Action: "Action",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
      Action: "Action",
    },
    {
      title: "Mobile Number",
      dataIndex: "MobileNumber",
      key: "mobilenumber",
      Action: "Action",
    },
    {
      title: "Email",
      dataIndex: "Email",
      key: "email",
      Action: "Action",
    },
    {
      title: "Location",
      dataIndex: "location",
      key: "location",
      Action: "Action",
    },
    {
      title: "Country",
      key: "country",
      dataIndex: "country",
      Action: "country",
    },
  ];

const dataSource1 = [
  {
    key: 0,
    name: "some name 1",
    age: 29,
    address: "some address 1",
    MobileNumber: 1234567890,
    Email: "Someone@gmail.com",
    location: "Cheannai",
    country: "India",
  },
  {
    key: 1,
    name: "some name 2",
    age: 30,
    address: "some address 2",
    MobileNumber: 1234567890,
    Email: "Someone@gmail.com",
    location: "Chennai",
    country: "India",
  },
  {
    key: 2,
    name: "some name 3",
    age: 29,
    address: "some address 3",
    MobileNumber: 1234567890,
    Email: "Someone@gmail.com",
    location: "Chennai",

    country: "India",
  },
  {
    key: 3,
    name: "some name 4",
    age: 26,
    address: "some address 4",
    MobileNumber: 1234567890,
    Email: "Someone@gmail.com",
    location: "Chennai",
    country: "India",
  },
  {
    key: 4,
    name: "Disabled users",
    age: 34,
    address: "some address 5",
    MobileNumber: 1234567890,
    Email: "Someone@gmail.com",
    location: "Chennai",
    country: "India",
  },
  {
    key: 5,
    name: "Disabled users",
    age: 23,
    address: "some address 6",
    MobileNumber: 1234567890,
    Email: "Someone@gmail.com",
    location: "Chennai",
    country: "India",
  },
];

//   fixed header
const dataSource2 = [
  {
    key: 0,
    name: "some name 1",
    age: 29,
    address: "some address 1",
    MobileNumber: 1234567890,
    Email: "Someone@gmail.com",
    location: "Cheannai",
    country: "India",
  },
  {
    key: 1,
    name: "some name 2",
    age: 30,
    address: "some address 2",
    MobileNumber: 1234567890,
    Email: "Someone@gmail.com",
    location: "Chennai",
    country: "India",
  },
  {
    key: 2,
    name: "some name 3",
    age: 29,
    address: "some address 3",
    MobileNumber: 1234567890,
    Email: "Someone@gmail.com",
    location: "Chennai",

    country: "India",
  },
  {
    key: 3,
    name: "some name 4",
    age: 26,
    address: "some address 4",
    MobileNumber: 1234567890,
    Email: "Someone@gmail.com",
    location: "Chennai",
    country: "India",
  },
  {
    key: 4,
    name: "some name 5",
    age: 34,
    address: "some address 5",
    MobileNumber: 1234567890,
    Email: "Someone@gmail.com",
    location: "Chennai",
    country: "India",
  },
  {
    key: 5,
    name: "some name 6",
    age: 23,
    address: "some address 6",
    MobileNumber: 1234567890,
    Email: "Someone@gmail.com",
    location: "Chennai",
    country: "India",
  },
  {
    key: 6,
    name: "some name 7",
    age: 22,
    address: "some address 7",
    MobileNumber: 7339158278,
    Email: "Someone@gmail.com",
    location: "Chennai",
    country: "India",
  },
  {
    key: 7,
    name: "some name 8",
    age: 19,
    address: "some address 8",
    MobileNumber: 7339158278,
    Email: "Someone@gmail.com",
    location: "Chennai",
    country: "India",
  },
  {
    key: 8,
    name: "some name 8",
    age: 23,
    address: "some address 6",
    MobileNumber: 1234567890,
    Email: "Someone@gmail.com",
    location: "Chennai",
    country: "India",
  },
  {
    key: 9,
    name: "some name 9",
    age: 22,
    address: "some address 7",
    MobileNumber: 7339158278,
    Email: "Someone@gmail.com",
    location: "Chennai",
    country: "India",
  },
  {
    key: 10,
    name: "some name 10",
    age: 19,
    address: "some address 8",
    MobileNumber: 7339158278,
    Email: "Someone@gmail.com",
    location: "Chennai",
    country: "India",
  },
  {
    key: 11,
    name: "some name 11",
    age: 23,
    address: "some address 6",
    MobileNumber: 1234567890,
    Email: "Someone@gmail.com",
    location: "Chennai",
    country: "India",
  },
  {
    key: 12,
    name: "some name 12",
    age: 22,
    address: "some address 7",
    MobileNumber: 7339158278,
    Email: "Someone@gmail.com",
    location: "Chennai",
    country: "India",
  },
  {
    key: 13,
    name: "some name 13",
    age: 19,
    address: "some address 8",
    MobileNumber: 7339158278,
    Email: "Someone@gmail.com",
    location: "Chennai",
    country: "India",
  },
];

// subtext
const dataSource3 = [
    {
      key: 0,
      name: <Subtext className="Avator-text avatar-sm" src={AvImg} fname='Some name' subname='Subtext'  />,
      age: 29,
      address: "some address 1",
      MobileNumber: 1234567890,
      Email: "Someone@gmail.com",
      location: "Cheannai",
      country: "India",
    },
    {
      key: 1,
      name: <Subtext className="Avator-text avatar-sm" src={AvImg} fname='Some name' subname='Subtext'  />,
      age: 30,
      address: "some address 2",
      MobileNumber: 1234567890,
      Email: "Someone@gmail.com",
      location: "Chennai",
      country: "India",
    },
    {
      key: 2,
      name: <Subtext className="Avator-text avatar-sm" src={AvImg} fname='Some name' subname='Subtext'  />,
      age: 29,
      address: "some address 3",
      MobileNumber: 1234567890,
      Email: "Someone@gmail.com",
      location: "Chennai",

      country: "India",
    },
    {
      key: 3,
      name: <Subtext className="Avator-text avatar-sm" avatartext={'SR'} fname='Some name' subname='Subtext'  />,
      age: 26,
      address: "some address 4",
      MobileNumber: 1234567890,
      Email: "Someone@gmail.com",
      location: "Chennai",
      country: "India",
    },
    {
      key: 4,
      name: <Subtext className="Avator-text avatar-sm" avatartext={'SR'} fname='Some name' subname='Subtext'  />,
      age: 34,
      address: "some address 5",
      MobileNumber: 1234567890,
      Email: "Someone@gmail.com",
      location: "Chennai",
      country: "India",
    },
    {
      key: 5,
      name: <Subtext className="Avator-text avatar-sm" avatartext={'SR'} fname='Some name' subname='Subtext'  />,
      age: 23,
      address: "some address 6",
      MobileNumber: 1234567890,
      Email: "Someone@gmail.com",
      location: "Chennai",
      country: "India",
    },
    {
      key: 6,
      name: <Subtext className="Avator-text avatar-sm" avatartext={'SR'} fname='Some name' subname='Subtext'  />,
      age: 22,
      address: "some address 7",
      MobileNumber: 7339158278,
      Email: "Someone@gmail.com",
      location: "Chennai",
      country: "India",
    },
    {
      key: 7,
      name: <Subtext className="Avator-text avatar-sm" avatartext={'SR'} fname='Some name' subname='Subtext'  />,
      age: 19,
      address: "some address 8",
      MobileNumber: 7339158278,
      Email: "Someone@gmail.com",
      location: "Chennai",
      country: "India",
    },
    {
      key: 8,
      name: <Subtext className="Avator-text avatar-sm" avatartext={'SR'} fname='Some name' subname='Subtext'  />,
      age: 23,
      address: "some address 6",
      MobileNumber: 1234567890,
      Email: "Someone@gmail.com",
      location: "Chennai",
      country: "India",
    },
    {
      key: 9,
      name: <Subtext className="Avator-text avatar-sm" avatartext={'SR'} fname='Some name' subname='Subtext'  />,
      age: 22,
      address: "some address 7",
      MobileNumber: 7339158278,
      Email: "Someone@gmail.com",
      location: "Chennai",
      country: "India",
    },
    {
      key: 10,
      name: <Subtext className="Avator-text avatar-sm" avatartext={'SR'} fname='Some name' subname='Subtext'  />,
      age: 19,
      address: "some address 8",
      MobileNumber: 7339158278,
      Email: "Someone@gmail.com",
      location: "Chennai",
      country: "India",
    },
    {
      key: 11,
      name: <Subtext className="Avator-text avatar-sm" avatartext={'SR'} fname='Some name' subname='Subtext'  />,
      age: 23,
      address: "some address 6",
      MobileNumber: 1234567890,
      Email: "Someone@gmail.com",
      location: "Chennai",
      country: "India",
    },
    {
      key: 12,
      name: <Subtext className="Avator-text avatar-sm" avatartext={'SR'} fname='Some name' subname='Subtext'  />,
      age: 22,
      address: "some address 7",
      MobileNumber: 7339158278,
      Email: "Someone@gmail.com",
      location: "Chennai",
      country: "India",
    },
    {
      key: 13,
      name: <Subtext className="Avator-text avatar-sm" avatartext={'SR'} fname='Some name' subname='Subtext'  />,
      age: 19,
      address: "some address 8",
      MobileNumber: 7339158278,
      Email: "Someone@gmail.com",
      location: "Chennai",
      country: "India",
    },
];

// action table header

const actioncolumns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      Action: "Action",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
      Action: "Action",
    },
    {
        title: "Status",
        key: "tags",
        dataIndex: "tags",
        Action: "tags",
      },

    {
      title: "Mobile Number",
      dataIndex: "MobileNumber",
      key: "mobilenumber",
      Action: "Action",
    },
    {
      title: "Email",
      dataIndex: "Email",
      key: "email",
      Action: "Action",
    },
    {
      title: "Location",
      dataIndex: "location",
      key: "location",
      Action: "Action",
    },
    {
        title: "Address",
        dataIndex: "address",
        key: "address",
        Action: "Action",
      },
    {
        title: "Operation",
        key: "operation",
        dataIndex: "operation",
        Action: "operation",
      },
];

// action data
const actiondata = [
    {
      key: 0,
      name: "some name 1",
      age: 29,
      tags: <InfoBadge className='badge-success' label='success' />,
      address: "some address 1",
      MobileNumber: 1234567890,
      Email: "Someone@gmail.com",
      location: "Cheannai",
      operation: <a href="#">#Action</a>
    },
    {
      key: 1,
      name: "some name 2",
      age: 30,
      tags: <InfoBadge className='badge-success' label='success' />,
      address: "some address 2",
      MobileNumber: 1234567890,
      Email: "Someone@gmail.com",
      location: "Chennai",
      operation: <a href="#">#Action</a>
    },
    {
      key: 2,
      name: "some name 3",
      age: 29,
      tags: <InfoBadge className='badge-success' label='success' />,
      address: "some address 3",
      MobileNumber: 1234567890,
      Email: "Someone@gmail.com",
      location: "Chennai",
      operation: <a href="#">#Action</a>
    },
    {
      key: 3,
      name: "some name 4",
      age: 26,
      tags: <InfoBadge className='badge-success' label='success' />,
      address: "some address 4",
      MobileNumber: 1234567890,
      Email: "Someone@gmail.com",
      location: "Chennai",
      operation: <a href="#">#Action</a>
    },
    {
      key: 4,
      name: "some name 5",
      age: 34,
      tags: <InfoBadge className='badge-declined' label='declined' />,
      address: "some address 5",
      MobileNumber: 1234567890,
      Email: "Someone@gmail.com",
      location: "Chennai",
      operation: <a href="#">#Action</a>
    },
    {
      key: 5,
      name: "some name 6",
      age: 23,
      tags: <InfoBadge className='badge-success' label='success' />,
      address: "some address 6",
      MobileNumber: 1234567890,
      Email: "Someone@gmail.com",
      location: "Chennai",
      operation: <a href="#">#Action</a>
    },
    {
      key: 6,
      name: "some name 7",
      age: 22,
      tags: <InfoBadge className='badge-declined' label='declined' />,
      address: "some address 7",
      MobileNumber: 7339158278,
      Email: "Someone@gmail.com",
      location: "Chennai",
      operation: <a href="#">#Action</a>
    },
    {
      key: 7,
      name: "some name 8",
      age: 19,
      tags: <InfoBadge className='badge-success' label='success' />,
      address: "some address 8",
      MobileNumber: 7339158278,
      Email: "Someone@gmail.com",
      location: "Chennai",
      operation: <a href="#">#Action</a>
    },
    {
      key: 8,
      name: "some name 8",
      age: 23,
      tags: <InfoBadge className='badge-success' label='success' />,
      address: "some address 6",
      MobileNumber: 1234567890,
      Email: "Someone@gmail.com",
      location: "Chennai",
      operation: <a href="#">#Action</a>
    },
    {
      key: 9,
      name: "some name 9",
      age: 22,
      tags: <InfoBadge className='badge-success' label='success' />,
      address: "some address 7",
      MobileNumber: 7339158278,
      Email: "Someone@gmail.com",
      location: "Chennai",
      operation: <a href="#">#Action</a>
    },
    {
      key: 10,
      name: "some name 10",
      age: 19,
      tags: <InfoBadge className='badge-success' label='success' />,
      address: "some address 8",
      MobileNumber: 7339158278,
      Email: "Someone@gmail.com",
      location: "Chennai",
      operation: <a href="#">#Action</a>
    },
    {
      key: 11,
      name: "some name 11",
      age: 23,
      tags: <InfoBadge className='badge-success' label='success' />,
      address: "some address 6",
      MobileNumber: 1234567890,
      Email: "Someone@gmail.com",
      location: "Chennai",
      operation: <a href="#">#Action</a>
    },
    {
      key: 12,
      name: "some name 12",
      age: 22,
      tags: <InfoBadge className='badge-success' label='success' />,
      address: "some address 7",
      MobileNumber: 7339158278,
      Email: "Someone@gmail.com",
      location: "Chennai",
      operation: <a href="#">#Action</a>
    },
    {
      key: 13,
      name: "some name 13",
      age: 19,
      tags: <InfoBadge className='badge-success' label='success' />,
      address: "some address 8",
      MobileNumber: 7339158278,
      Email: "Someone@gmail.com",
      location: "Chennai",
      operation: <a href="#">#Action</a>
    },
  ];

// Checkbox Selection

// header check
const checkcolumns = [
    {
      title: 'Name',
      dataIndex: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Age',
      dataIndex: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
    },
  ];

// data

const checkdata = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sydney No. 1 Lake Park',
    },
    {
      key: '4',
      name: 'Disabled User',
      age: 99,
      address: 'Sydney No. 1 Lake Park',
    },
  ];

  // get Checked Values
  const rowSelection = {
      onChange: (selectedRowKeys, selectedRows) => {
        console.log(selectedRowKeys = selectedRowKeys, 'selectedRows: ', selectedRows);
      },
      getCheckboxProps: (record) => ({
        disabled: record.name === 'Disabled users',
        // Column configuration not to be checked
        name: record.name,
      }),
    };

function Tables() {
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
          <p className="component_title">Table</p>
          <p className="component_content">A table displays rows of data.</p>
        </Row>
        <Row>
          <Col lg={10} className="component_content_col">
            <Box id="tag1" className="equal-spacing">
              <p variant="h5" className="doc-heading-text">
                Lines
              </p>
              <p className="doc-content-text">Table with Horizontal Lines.</p>
              <Box className="component_expl_hrz">
                <Box className="output_bg">
                  <Row>
                    <Col item xs={12} md={12} lg={12}>
                      <Table
                        className="table-grid"
                        columns={columns}
                        data={dataSource1}
                        pagination={false}
                      />
                    </Col>
                  </Row>
                </Box>
                <Box className="component_code">
                  {/* code block */}
                  <CodeBlock className={`${sessionStorage.getItem('role') === "DSL-User" ? "active" : ""}`}>
                  <button className="issueTrigger" onClick={handleShow}>Having issues.?</button>
                    <pre className="Code-bg">
                      <Highlighter className="shorten">{`import { Table } from "m2p-dsl";

const header = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    Action: "Action",
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
    Action: "Action",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
    Action: "Action",
  },
  {
    title: "Mobile Number",
    dataIndex: "MobileNumber",
    key: "mobilenumber",
    Action: "Action",
  },
  {
    title: "Email",
    dataIndex: "Email",
    key: "email",
    Action: "Action",
  },
  {
    title: "Location",
    dataIndex: "location",
    key: "location",
    Action: "Action",
  },
  {
    title: "Country",
    key: "country",
    dataIndex: "country",
    Action: "country",
  },
];

const data = [
  {
    key: 0,
    name: "some name 1",
    age: 29,
    address: "some address 1",
    MobileNumber: 1234567890,
    Email: "Someone@gmail.com",
    location: "Cheannai",
    country: "India",
  },
  {
    key: 1,
    name: "some name 2",
    age: 30,
    address: "some address 2",
    MobileNumber: 1234567890,
    Email: "Someone@gmail.com",
    location: "Chennai",
    country: "India",
  },
  {
    key: 2,
    name: "some name 3",
    age: 29,
    address: "some address 3",
    MobileNumber: 1234567890,
    Email: "Someone@gmail.com",
    location: "Chennai",

    country: "India",
  },
  {
    key: 3,
    name: "some name 4",
    age: 26,
    address: "some address 4",
    MobileNumber: 1234567890,
    Email: "Someone@gmail.com",
    location: "Chennai",
    country: "India",
  },
  {
    key: 4,
    name: "some name 5",
    age: 34,
    address: "some address 5",
    MobileNumber: 1234567890,
    Email: "Someone@gmail.com",
    location: "Chennai",
    country: "India",
  },
  {
    key: 5,
    name: "some name 6",
    age: 23,
    address: "some address 6",
    MobileNumber: 1234567890,
    Email: "Someone@gmail.com",
    location: "Chennai",
    country: "India",
  },
  {
    key: 6,
    name: "some name 7",
    age: 22,
    address: "some address 7",
    MobileNumber: 7339158278,
    Email: "Someone@gmail.com",
    location: "Chennai",
    country: "India",
  },
  {
    key: 7,
    name: "some name 8",
    age: 19,
    address: "some address 8",
    MobileNumber: 7339158278,
    Email: "Someone@gmail.com",
    location: "Chennai",
    country: "India",
  },
  {
    key: 8,
    name: "some name 8",
    age: 23,
    address: "some address 6",
    MobileNumber: 1234567890,
    Email: "Someone@gmail.com",
    location: "Chennai",
    country: "India",
  },
  {
    key: 9,
    name: "some name 9",
    age: 22,
    address: "some address 7",
    MobileNumber: 7339158278,
    Email: "Someone@gmail.com",
    location: "Chennai",
    country: "India",
  },
  {
    key: 10,
    name: "some name 10",
    age: 19,
    address: "some address 8",
    MobileNumber: 7339158278,
    Email: "Someone@gmail.com",
    location: "Chennai",
    country: "India",
  },
  {
    key: 11,
    name: "some name 11",
    age: 23,
    address: "some address 6",
    MobileNumber: 1234567890,
    Email: "Someone@gmail.com",
    location: "Chennai",
    country: "India",
  },
  {
    key: 12,
    name: "some name 12",
    age: 22,
    address: "some address 7",
    MobileNumber: 7339158278,
    Email: "Someone@gmail.com",
    location: "Chennai",
    country: "India",
  },
  {
    key: 13,
    name: "some name 13",
    age: 19,
    address: "some address 8",
    MobileNumber: 7339158278,
    Email: "Someone@gmail.com",
    location: "Chennai",
    country: "India",
  },
];

<Table
className="table-grid"
columns={header}
data={data}
pagination={false}
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
                Fixed Header
              </p>
              <p className="doc-content-text">
                Table with Fixed header with Scrollable rows.
              </p>
              <Box className="component_expl_hrz">
                <Box className="output_bg">
                  <Row>
                    <Col item xs={12} md={12} lg={12}>
                      <Table
                        className="table-grid light-header"
                        columns={columns}
                        sticky={true}
                        data={dataSource2}
                        pagination={false}
                        scroll={{y: 400}}
                      />
                    </Col>
                  </Row>
                </Box>
                <Box className="component_code">
                  {/* code block */}
                  <CodeBlock className={`${sessionStorage.getItem('role') === "DSL-User" ? "active" : ""}`}>
                  <button className="issueTrigger" onClick={handleShow}>Having issues.?</button>
                    <pre className="Code-bg">
                      <Highlighter className="shorten">{`import { Table } from "m2p-dsl";

const header = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    Action: "Action",
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
    Action: "Action",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
    Action: "Action",
  },
  {
    title: "Mobile Number",
    dataIndex: "MobileNumber",
    key: "mobilenumber",
    Action: "Action",
  },
  {
    title: "Email",
    dataIndex: "Email",
    key: "email",
    Action: "Action",
  },
  {
    title: "Location",
    dataIndex: "location",
    key: "location",
    Action: "Action",
  },
  {
    title: "Country",
    key: "country",
    dataIndex: "country",
    Action: "country",
  },
];


const data = [
  {
    key: 0,
    name: "some name 1",
    age: 29,
    address: "some address 1",
    MobileNumber: 1234567890,
    Email: "Someone@gmail.com",
    location: "Cheannai",
    country: "India",
  },
  {
    key: 1,
    name: "some name 2",
    age: 30,
    address: "some address 2",
    MobileNumber: 1234567890,
    Email: "Someone@gmail.com",
    location: "Chennai",
    country: "India",
  },
  {
    key: 2,
    name: "some name 3",
    age: 29,
    address: "some address 3",
    MobileNumber: 1234567890,
    Email: "Someone@gmail.com",
    location: "Chennai",

    country: "India",
  },
  {
    key: 3,
    name: "some name 4",
    age: 26,
    address: "some address 4",
    MobileNumber: 1234567890,
    Email: "Someone@gmail.com",
    location: "Chennai",
    country: "India",
  },
  {
    key: 4,
    name: "some name 5",
    age: 34,
    address: "some address 5",
    MobileNumber: 1234567890,
    Email: "Someone@gmail.com",
    location: "Chennai",
    country: "India",
  },
  {
    key: 5,
    name: "some name 6",
    age: 23,
    address: "some address 6",
    MobileNumber: 1234567890,
    Email: "Someone@gmail.com",
    location: "Chennai",
    country: "India",
  },
  {
    key: 6,
    name: "some name 7",
    age: 22,
    address: "some address 7",
    MobileNumber: 7339158278,
    Email: "Someone@gmail.com",
    location: "Chennai",
    country: "India",
  },
  {
    key: 7,
    name: "some name 8",
    age: 19,
    address: "some address 8",
    MobileNumber: 7339158278,
    Email: "Someone@gmail.com",
    location: "Chennai",
    country: "India",
  },
  {
    key: 8,
    name: "some name 8",
    age: 23,
    address: "some address 6",
    MobileNumber: 1234567890,
    Email: "Someone@gmail.com",
    location: "Chennai",
    country: "India",
  },
  {
    key: 9,
    name: "some name 9",
    age: 22,
    address: "some address 7",
    MobileNumber: 7339158278,
    Email: "Someone@gmail.com",
    location: "Chennai",
    country: "India",
  },
  {
    key: 10,
    name: "some name 10",
    age: 19,
    address: "some address 8",
    MobileNumber: 7339158278,
    Email: "Someone@gmail.com",
    location: "Chennai",
    country: "India",
  },
  {
    key: 11,
    name: "some name 11",
    age: 23,
    address: "some address 6",
    MobileNumber: 1234567890,
    Email: "Someone@gmail.com",
    location: "Chennai",
    country: "India",
  },
  {
    key: 12,
    name: "some name 12",
    age: 22,
    address: "some address 7",
    MobileNumber: 7339158278,
    Email: "Someone@gmail.com",
    location: "Chennai",
    country: "India",
  },
  {
    key: 13,
    name: "some name 13",
    age: 19,
    address: "some address 8",
    MobileNumber: 7339158278,
    Email: "Someone@gmail.com",
    location: "Chennai",
    country: "India",
  },
];


<Table
className="table-grid light-header"
columns={header}
sticky={true}
data={data}
pagination={false}
scroll={{y: 400}}
/>`}
                      </Highlighter>
                    </pre>
                  </CodeBlock>
                  {/* code block */}
                </Box>
              </Box>
            </Box>

            <Box id="tag3" className="equal-spacing">
              <p variant="h5" className="doc-heading-text">
                Fixed Header and Columns
              </p>
              <p className="doc-content-text">
                Table with Fixed Header's and Columns.
              </p>
              <Box className="component_expl_hrz">
                <Box className="output_bg">
                  <Row>
                    <Col item xs={12} md={12} lg={12}>
                      <Table
                        className="table-grid light-header"
                        columns={columns1}
                        sticky={true}
                        data={dataSource2}
                        pagination={false}
                        scroll={{x: 1500,y:400}} // fixed width and height
                      />
                    </Col>
                  </Row>
                </Box>
                <Box className="component_code">
                  {/* code block */}
                  <CodeBlock className={`${sessionStorage.getItem('role') === "DSL-User" ? "active" : ""}`}>
                  <button className="issueTrigger" onClick={handleShow}>Having issues.?</button>
                    <pre className="Code-bg">
                      <Highlighter className="shorten">{`import { Table } from "m2p-dsl";

const header = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      Action: "Action",
      fixed: 'left'
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
      Action: "Action",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
      Action: "Action",
    },
    {
      title: "Mobile Number",
      dataIndex: "MobileNumber",
      key: "mobilenumber",
      Action: "Action",
    },
    {
      title: "Email",
      dataIndex: "Email",
      key: "email",
      Action: "Action",
    },
    {
      title: "Location",
      dataIndex: "location",
      key: "location",
      Action: "Action",
    },
    {
      title: "Country",
      key: "country",
      dataIndex: "country",
      Action: "country",
      fixed: 'right'
    },
  ];

  const data = [
    {
      key: 0,
      name: "some name 1",
      age: 29,
      address: "some address 1",
      MobileNumber: 1234567890,
      Email: "Someone@gmail.com",
      location: "Cheannai",
      country: "India",
    },
    {
      key: 1,
      name: "some name 2",
      age: 30,
      address: "some address 2",
      MobileNumber: 1234567890,
      Email: "Someone@gmail.com",
      location: "Chennai",
      country: "India",
    },
    {
      key: 2,
      name: "some name 3",
      age: 29,
      address: "some address 3",
      MobileNumber: 1234567890,
      Email: "Someone@gmail.com",
      location: "Chennai",

      country: "India",
    },
    {
      key: 3,
      name: "some name 4",
      age: 26,
      address: "some address 4",
      MobileNumber: 1234567890,
      Email: "Someone@gmail.com",
      location: "Chennai",
      country: "India",
    },
    {
      key: 4,
      name: "some name 5",
      age: 34,
      address: "some address 5",
      MobileNumber: 1234567890,
      Email: "Someone@gmail.com",
      location: "Chennai",
      country: "India",
    },
    {
      key: 5,
      name: "some name 6",
      age: 23,
      address: "some address 6",
      MobileNumber: 1234567890,
      Email: "Someone@gmail.com",
      location: "Chennai",
      country: "India",
    },
    {
      key: 6,
      name: "some name 7",
      age: 22,
      address: "some address 7",
      MobileNumber: 7339158278,
      Email: "Someone@gmail.com",
      location: "Chennai",
      country: "India",
    },
    {
      key: 7,
      name: "some name 8",
      age: 19,
      address: "some address 8",
      MobileNumber: 7339158278,
      Email: "Someone@gmail.com",
      location: "Chennai",
      country: "India",
    },
    {
      key: 8,
      name: "some name 8",
      age: 23,
      address: "some address 6",
      MobileNumber: 1234567890,
      Email: "Someone@gmail.com",
      location: "Chennai",
      country: "India",
    },
    {
      key: 9,
      name: "some name 9",
      age: 22,
      address: "some address 7",
      MobileNumber: 7339158278,
      Email: "Someone@gmail.com",
      location: "Chennai",
      country: "India",
    },
    {
      key: 10,
      name: "some name 10",
      age: 19,
      address: "some address 8",
      MobileNumber: 7339158278,
      Email: "Someone@gmail.com",
      location: "Chennai",
      country: "India",
    },
    {
      key: 11,
      name: "some name 11",
      age: 23,
      address: "some address 6",
      MobileNumber: 1234567890,
      Email: "Someone@gmail.com",
      location: "Chennai",
      country: "India",
    },
    {
      key: 12,
      name: "some name 12",
      age: 22,
      address: "some address 7",
      MobileNumber: 7339158278,
      Email: "Someone@gmail.com",
      location: "Chennai",
      country: "India",
    },
    {
      key: 13,
      name: "some name 13",
      age: 19,
      address: "some address 8",
      MobileNumber: 7339158278,
      Email: "Someone@gmail.com",
      location: "Chennai",
      country: "India",
    },
  ];


  <Table
  className="table-grid light-header"
  columns={header}
  sticky={true}
  data={data}
  pagination={false}
  scroll={{x: 1500,y:400}} // fixed custom width and height to make scrollable header and columns
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
                Sorting Table
              </p>
              <p className="doc-content-text">
                Sort the table ascending to descending.
              </p>
              <Box className="component_expl_hrz">
                <Box className="output_bg">
                  <Row>
                    <Col item xs={12} md={12} lg={12}>
                    <Table
                        className="table-grid light-header"
                        columns={sortHeader}
                        sticky={true}
                        data={Sortdata}
                        pagination={false}
                        onChange={(pagination, filters, sorter, extra) =>   console.log('params', pagination, filters, sorter, extra)}y="id"
                      />
                    </Col>
                  </Row>
                </Box>
                <Box className="component_code">
                  {/* code block */}
                  <CodeBlock className={`${sessionStorage.getItem('role') === "DSL-User" ? "active" : ""}`}>
                  <button className="issueTrigger" onClick={handleShow}>Having issues.?</button>
                    <pre className="Code-bg">
                      <Highlighter className="shorten">{`import { Table } from "m2p-dsl";

let sortHeader = [
  {
  title: 'Name',
  dataIndex: 'name',
  sorter: true,
  fixed: 'left',
  },
  {
    title: 'English ',
    dataIndex: 'english',
    sorter: true,
  },
  {
    title: 'Math ',
    dataIndex: 'math',
    sorter: true,
  },
  {
    title: 'History ',
    dataIndex: 'history',
    sorter: true,
  },
  {
      title: 'Physics ',
      dataIndex: 'physics',
      sorter: true,
    },
    {
      title: 'Chemistry ',
      dataIndex: 'chemistry',
      sorter: true,
    },
    {
      title: 'Biology ',
      dataIndex: 'biology',
      sorter: true,
    },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    chinese: 98,
    math: 60,
    english: 70,
    physics: 80,
    chemistry: 90,
    history: 100,
    biology: 90,
  },
  {
    key: '2',
    name: 'Jim Green',
    chinese: 98,
    math: 66,
    english: 89,
    physics: 80,
    chemistry: 90,
    history: 100,
    biology: 90,
  },
  {
    key: '3',
    name: 'Joe Black',
    chinese: 98,
    math: 90,
    english: 70,
    physics: 80,
    chemistry: 90,
    history: 100,
    biology: 90,
  },
  {
    key: '4',
    name: 'Jim Red',
    chinese: 88,
    math: 99,
    english: 89,
    physics: 80,
    chemistry: 90,
    history: 100,
    biology: 90,
  },
  {
      key: '5',
      name: 'John Brown',
      chinese: 98,
      math: 60,
      english: 70,
      physics: 80,
      chemistry: 90,
      history: 100,
      biology: 90,
    },
    {
      key: '6',
      name: 'Jim Green',
      chinese: 98,
      math: 66,
      english: 89,
      physics: 80,
      chemistry: 90,
      history: 100,
      biology: 90,
    },
    {
      key: '7',
      name: 'Joe Black',
      chinese: 98,
      math: 90,
      english: 70,
      physics: 80,
      chemistry: 90,
      history: 100,
      biology: 90,
    },
    {
      key: '8',
      name: 'Jim Red',
      chinese: 88,
      math: 99,
      english: 89,
      physics: 80,
      chemistry: 90,
      history: 100,
      biology: 90,
    },
];

sortHeader = sortHeader.map((ele) => {
return {...ele , sorter:{
  compare: (a,b) => {
  if (a[ele.dataIndex] < b[ele.dataIndex]) return -1;
    if (b[ele.dataIndex] < a[ele.dataIndex]) return 1;
    return 0;
},
multiple:2 }}
});

<Table
className="table-grid light-header"
columns={sortHeader}
sticky={true}
data={data}
pagination={false}
onChange={(pagination, filters, sorter, extra) =>  console.log('params', pagination, filters, sorter, extra)}y="id" // get values
/>`}
                      </Highlighter>
                    </pre>
                  </CodeBlock>
                  {/* code block */}
                </Box>
              </Box>
            </Box>
            {/* sorting */}
            <Box id="tag5" className="equal-spacing">
              <p variant="h5" className="doc-heading-text">
                Table Pagination
              </p>
              <p className="doc-content-text">pagination for table add <p className="classname">pagination={'true'}</p>
              </p>
              <Box className="component_expl_hrz">
                <Box className="output_bg">
                  <Row>
                    <Col item xs={12} md={12} lg={12}>
                    <Table
                        className="table-grid light-header"
                        columns={columns}
                        data={dataSource1}
                        pagination={{
                          showSizeChanger: true,
                          defaultPageSize : 5,
                          position: ["bottomLeft"],
                          showPageSizeOptions : true,
                          pageSizeOptions:['5', '10', '15', '20', '25'],
                          onChange:(page,pageSize)=>{
                            console.log(page,"page");
                            console.log(pageSize,"pageSize");
                          }
                        }}
                      />
                    </Col>
                  </Row>
                </Box>
                <Box className="component_code">
                  {/* code block */}
                  <CodeBlock className={`${sessionStorage.getItem('role') === "DSL-User" ? "active" : ""}`}>
                  <button className="issueTrigger" onClick={handleShow}>Having issues.?</button>
                    <pre className="Code-bg">
                      <Highlighter className="shorten">{`import { Table } from "m2p-dsl";

const header = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    Action: "Action",
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
    Action: "Action",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
    Action: "Action",
  },
  {
    title: "Mobile Number",
    dataIndex: "MobileNumber",
    key: "mobilenumber",
    Action: "Action",
  },
  {
    title: "Email",
    dataIndex: "Email",
    key: "email",
    Action: "Action",
  },
  {
    title: "Location",
    dataIndex: "location",
    key: "location",
    Action: "Action",
  },
  {
    title: "Country",
    key: "country",
    dataIndex: "country",
    Action: "country",
  },
];

const data = [
  {
    key: 0,
    name: "some name 1",
    age: 29,
    address: "some address 1",
    MobileNumber: 1234567890,
    Email: "Someone@gmail.com",
    location: "Cheannai",
    country: "India",
  },
  {
    key: 1,
    name: "some name 2",
    age: 30,
    address: "some address 2",
    MobileNumber: 1234567890,
    Email: "Someone@gmail.com",
    location: "Chennai",
    country: "India",
  },
  {
    key: 2,
    name: "some name 3",
    age: 29,
    address: "some address 3",
    MobileNumber: 1234567890,
    Email: "Someone@gmail.com",
    location: "Chennai",

    country: "India",
  },
  {
    key: 3,
    name: "some name 4",
    age: 26,
    address: "some address 4",
    MobileNumber: 1234567890,
    Email: "Someone@gmail.com",
    location: "Chennai",
    country: "India",
  },
  {
    key: 4,
    name: "some name 5",
    age: 34,
    address: "some address 5",
    MobileNumber: 1234567890,
    Email: "Someone@gmail.com",
    location: "Chennai",
    country: "India",
  },
  {
    key: 5,
    name: "some name 6",
    age: 23,
    address: "some address 6",
    MobileNumber: 1234567890,
    Email: "Someone@gmail.com",
    location: "Chennai",
    country: "India",
  },
];


<Table
  className="table-grid light-header"
  columns={columns}
  data={dataSource1}
  pagination={{
    showSizeChanger: true,
    position: ["bottomLeft"],
    showPageSizeOptions : true,
    pageSizeOptions:['5', '10', '15', '20', '25'],
    onChange:(page,pageSize)=>{
      console.log(page,"page");
      console.log(pageSize,"pageSize");     //For getting the page and pageSize values pass two parameter in onChanges function.
    }
  }}
/>`}
                      </Highlighter>
                    </pre>
                  </CodeBlock>
                  {/* code block */}
                </Box>
              </Box>
            </Box>


            {/* action */}
            <Box id="tag6" className="equal-spacing">
              <p variant="h5" className="doc-heading-text">
                Table Action
              </p>
              <p className="doc-content-text">Add custom action to the Table.</p>
              <Box className="component_expl_hrz">
                <Box className="output_bg">
                  <Row>
                    <Col item xs={12} md={12} lg={12}>
                    <Table
                        className="table-grid light-header"
                        columns={actioncolumns}
                        data={actiondata}
                        sticky={true}
                        pagination={{ pageSize: 6}}
                      />
                    </Col>
                  </Row>
                </Box>
                <Box className="component_code">
                  {/* code block */}
                  <CodeBlock className={`${sessionStorage.getItem('role') === "DSL-User" ? "active" : ""}`}>
                  <button className="issueTrigger" onClick={handleShow}>Having issues.?</button>
                    <pre className="Code-bg">
                      <Highlighter className="shorten">{`import { Table, InfoBadge } from "m2p-dsl";

const header = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    Action: "Action",
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
    Action: "Action",
  },
  {
      title: "Status",
      key: "tags",
      dataIndex: "tags",
      Action: "tags",
    },

  {
    title: "Mobile Number",
    dataIndex: "MobileNumber",
    key: "mobilenumber",
    Action: "Action",
  },
  {
    title: "Email",
    dataIndex: "Email",
    key: "email",
    Action: "Action",
  },
  {
    title: "Location",
    dataIndex: "location",
    key: "location",
    Action: "Action",
  },
  {
      title: "Address",
      dataIndex: "address",
      key: "address",
      Action: "Action",
    },
  {
      title: "Operation",
      key: "operation",
      dataIndex: "operation",
      Action: "operation",
    },
];


const actiondata = [
  {
    key: 0,
    name: "some name 1",
    age: 29,
    tags: <InfoBadge className='badge-success' label='success' />,
    address: "some address 1",
    MobileNumber: 1234567890,
    Email: "Someone@gmail.com",
    location: "Cheannai",
    operation: <a href="#">#Action</a>
  },
  {
    key: 1,
    name: "some name 2",
    age: 30,
    tags: <InfoBadge className='badge-success' label='success' />,
    address: "some address 2",
    MobileNumber: 1234567890,
    Email: "Someone@gmail.com",
    location: "Chennai",
    operation: <a href="#">#Action</a>
  },
  {
    key: 2,
    name: "some name 3",
    age: 29,
    tags: <InfoBadge className='badge-success' label='success' />,
    address: "some address 3",
    MobileNumber: 1234567890,
    Email: "Someone@gmail.com",
    location: "Chennai",
    operation: <a href="#">#Action</a>
  },
  {
    key: 3,
    name: "some name 4",
    age: 26,
    tags: <InfoBadge className='badge-success' label='success' />,
    address: "some address 4",
    MobileNumber: 1234567890,
    Email: "Someone@gmail.com",
    location: "Chennai",
    operation: <a href="#">#Action</a>
  },
  {
    key: 4,
    name: "some name 5",
    age: 34,
    tags: <InfoBadge className='badge-declined' label='declined' />,
    address: "some address 5",
    MobileNumber: 1234567890,
    Email: "Someone@gmail.com",
    location: "Chennai",
    operation: <a href="#">#Action</a>
  },
  {
    key: 5,
    name: "some name 6",
    age: 23,
    tags: <InfoBadge className='badge-success' label='success' />,
    address: "some address 6",
    MobileNumber: 1234567890,
    Email: "Someone@gmail.com",
    location: "Chennai",
    operation: <a href="#">#Action</a>
  },
  {
    key: 6,
    name: "some name 7",
    age: 22,
    tags: <InfoBadge className='badge-declined' label='declined' />,
    address: "some address 7",
    MobileNumber: 7339158278,
    Email: "Someone@gmail.com",
    location: "Chennai",
    operation: <a href="#">#Action</a>
  },
  {
    key: 7,
    name: "some name 8",
    age: 19,
    tags: <InfoBadge className='badge-success' label='success' />,
    address: "some address 8",
    MobileNumber: 7339158278,
    Email: "Someone@gmail.com",
    location: "Chennai",
    operation: <a href="#">#Action</a>
  },
  {
    key: 8,
    name: "some name 8",
    age: 23,
    tags: <InfoBadge className='badge-success' label='success' />,
    address: "some address 6",
    MobileNumber: 1234567890,
    Email: "Someone@gmail.com",
    location: "Chennai",
    operation: <a href="#">#Action</a>
  },
  {
    key: 9,
    name: "some name 9",
    age: 22,
    tags: <InfoBadge className='badge-success' label='success' />,
    address: "some address 7",
    MobileNumber: 7339158278,
    Email: "Someone@gmail.com",
    location: "Chennai",
    operation: <a href="#">#Action</a>
  },
  {
    key: 10,
    name: "some name 10",
    age: 19,
    tags: <InfoBadge className='badge-success' label='success' />,
    address: "some address 8",
    MobileNumber: 7339158278,
    Email: "Someone@gmail.com",
    location: "Chennai",
    operation: <a href="#">#Action</a>
  },
  {
    key: 11,
    name: "some name 11",
    age: 23,
    tags: <InfoBadge className='badge-success' label='success' />,
    address: "some address 6",
    MobileNumber: 1234567890,
    Email: "Someone@gmail.com",
    location: "Chennai",
    operation: <a href="#">#Action</a>
  },
  {
    key: 12,
    name: "some name 12",
    age: 22,
    tags: <InfoBadge className='badge-success' label='success' />,
    address: "some address 7",
    MobileNumber: 7339158278,
    Email: "Someone@gmail.com",
    location: "Chennai",
    operation: <a href="#">#Action</a>
  },
  {
    key: 13,
    name: "some name 13",
    age: 19,
    tags: <InfoBadge className='badge-success' label='success' />,
    address: "some address 8",
    MobileNumber: 7339158278,
    Email: "Someone@gmail.com",
    location: "Chennai",
    operation: <a href="#">#Action</a>
  },
];


<Table
  className="table-grid light-header"
  columns={actioncolumns}
  data={actiondata}
  sticky={true}
  pagination={{ pageSize: 6}}
/>`}
                      </Highlighter>
                    </pre>
                  </CodeBlock>
                  {/* code block */}
                </Box>
              </Box>
            </Box>

            {/* Checkbox Selection */}

            <Box id="tag7" className="equal-spacing">
              <p variant="h5" className="doc-heading-text">
                CheckBox Selection
              </p>
              <p className="doc-content-text">
                Table With Checkbox Selection.</p>
              <Box className="component_expl_hrz">
                <Box className="output_bg">
                  <Row>
                    <Col item xs={12} md={12} lg={12}>
                    <Table
                    className="table-grid light-header"
                    columns={columns}
                    data={dataSource1}
                    rowSelection={rowSelection}
                    bordered
                    pagination={{
                        showSizeChanger: true,
                        position: ["bottomLeft"]
                    }}
                    showSorterTooltip={true}
                    showHeader={true}
                    sticky={true}
                    //for Checkbox
                />
                    </Col>
                  </Row>
                </Box>
                <Box className="component_code">
                  {/* code block */}
                  <CodeBlock className={`${sessionStorage.getItem('role') === "DSL-User" ? "active" : ""}`}>
                  <button className="issueTrigger" onClick={handleShow}>Having issues.?</button>
                    <pre className="Code-bg">
                      <Highlighter className="shorten">{`import { Table } from "m2p-dsl";

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(selectedRowKeys = selectedRowKeys, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: (record) => ({
    disabled: record.name === 'Disabled Users',
    // Column configuration not to be checked
    name: record.name,
  }),
};


const header = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    Action: "Action",
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
    Action: "Action",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
    Action: "Action",
  },
  {
    title: "Mobile Number",
    dataIndex: "MobileNumber",
    key: "mobilenumber",
    Action: "Action",
  },
  {
    title: "Email",
    dataIndex: "Email",
    key: "email",
    Action: "Action",
  },
  {
    title: "Location",
    dataIndex: "location",
    key: "location",
    Action: "Action",
  },
  {
    title: "Country",
    key: "country",
    dataIndex: "country",
    Action: "country",
  },
];


const data = [
  {
    key: 0,
    name: "some name 1",
    age: 29,
    address: "some address 1",
    MobileNumber: 1234567890,
    Email: "Someone@gmail.com",
    location: "Cheannai",
    country: "India",
  },
  {
    key: 1,
    name: "some name 2",
    age: 30,
    address: "some address 2",
    MobileNumber: 1234567890,
    Email: "Someone@gmail.com",
    location: "Chennai",
    country: "India",
  },
  {
    key: 2,
    name: "some name 3",
    age: 29,
    address: "some address 3",
    MobileNumber: 1234567890,
    Email: "Someone@gmail.com",
    location: "Chennai",

    country: "India",
  },
  {
    key: 3,
    name: "some name 4",
    age: 26,
    address: "some address 4",
    MobileNumber: 1234567890,
    Email: "Someone@gmail.com",
    location: "Chennai",
    country: "India",
  },
  {
    key: 4,
    name: "Disabled Users",
    age: 34,
    address: "some address 5",
    MobileNumber: 1234567890,
    Email: "Someone@gmail.com",
    location: "Chennai",
    country: "India",
  },
  {
    key: 5,
    name: "Disabled Users",
    age: 23,
    address: "some address 6",
    MobileNumber: 1234567890,
    Email: "Someone@gmail.com",
    location: "Chennai",
    country: "India",
  },
];


<Table
className="table-grid light-header"
columns={header}
data={data}
rowSelection={rowSelection}
bordered
pagination={{
    showSizeChanger: true,
    position: ["bottomLeft"]
}}
showSorterTooltip={true}
showHeader={true}
sticky={true}
/>`}
                      </Highlighter>
                    </pre>
                  </CodeBlock>
                  {/* code block */}
                </Box>
              </Box>
            </Box>

            {/* expandable row */}
            <Box id="tag8" className="equal-spacing">
              <p variant="h5" className="doc-heading-text">
                Expandable Row
              </p>
              <p className="doc-content-text">Add custom expandable row</p>
              <Box className="component_expl_hrz">
                <Box className="output_bg">
                  <Row>
                    <Col item xs={12} md={12} lg={12}>
                    <Table
                        className="table-grid light-header"
                        columns={columns2}
                        data={dataSource2}
                        sticky={true}
                        pagination={{ pageSize: 6}}
                        rowExpandable={(key)=> key.key === 1}
                        expandContent={(key)=> <p>{key.location}</p> }
                      />
                    </Col>
                  </Row>
                </Box>
                <Box className="component_code">
                  {/* code block */}
                  <CodeBlock className={`${sessionStorage.getItem('role') === "DSL-User" ? "active" : ""}`}>
                  <button className="issueTrigger" onClick={handleShow}>Having issues.?</button>
                    <pre className="Code-bg">
                      <Highlighter className="shorten">{`import { Table, InfoBadge } from "m2p-dsl";

const header = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    Action: "Action",
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
    Action: "Action",
  },
  {
      title: "Status",
      key: "tags",
      dataIndex: "tags",
      Action: "tags",
    },

  {
    title: "Mobile Number",
    dataIndex: "MobileNumber",
    key: "mobilenumber",
    Action: "Action",
  },
  {
    title: "Email",
    dataIndex: "Email",
    key: "email",
    Action: "Action",
  },
  {
    title: "Location",
    dataIndex: "location",
    key: "location",
    Action: "Action",
  },
  {
      title: "Address",
      dataIndex: "address",
      key: "address",
      Action: "Action",
    },
  {
      title: "Operation",
      key: "operation",
      dataIndex: "operation",
      Action: "operation",
    },
];


const actiondata = [
  {
    key: 0,
    name: "some name 1",
    age: 29,
    tags: <InfoBadge className='badge-success' label='success' />,
    address: "some address 1",
    MobileNumber: 1234567890,
    Email: "Someone@gmail.com",
    location: "Cheannai",
    operation: <a href="#">#Action</a>
  },
  {
    key: 1,
    name: "some name 2",
    age: 30,
    tags: <InfoBadge className='badge-success' label='success' />,
    address: "some address 2",
    MobileNumber: 1234567890,
    Email: "Someone@gmail.com",
    location: "Chennai",
    operation: <a href="#">#Action</a>
  },
  {
    key: 2,
    name: "some name 3",
    age: 29,
    tags: <InfoBadge className='badge-success' label='success' />,
    address: "some address 3",
    MobileNumber: 1234567890,
    Email: "Someone@gmail.com",
    location: "Chennai",
    operation: <a href="#">#Action</a>
  },
  {
    key: 3,
    name: "some name 4",
    age: 26,
    tags: <InfoBadge className='badge-success' label='success' />,
    address: "some address 4",
    MobileNumber: 1234567890,
    Email: "Someone@gmail.com",
    location: "Chennai",
    operation: <a href="#">#Action</a>
  },
  {
    key: 4,
    name: "some name 5",
    age: 34,
    tags: <InfoBadge className='badge-declined' label='declined' />,
    address: "some address 5",
    MobileNumber: 1234567890,
    Email: "Someone@gmail.com",
    location: "Chennai",
    operation: <a href="#">#Action</a>
  },
  {
    key: 5,
    name: "some name 6",
    age: 23,
    tags: <InfoBadge className='badge-success' label='success' />,
    address: "some address 6",
    MobileNumber: 1234567890,
    Email: "Someone@gmail.com",
    location: "Chennai",
    operation: <a href="#">#Action</a>
  },
  {
    key: 6,
    name: "some name 7",
    age: 22,
    tags: <InfoBadge className='badge-declined' label='declined' />,
    address: "some address 7",
    MobileNumber: 7339158278,
    Email: "Someone@gmail.com",
    location: "Chennai",
    operation: <a href="#">#Action</a>
  },
  {
    key: 7,
    name: "some name 8",
    age: 19,
    tags: <InfoBadge className='badge-success' label='success' />,
    address: "some address 8",
    MobileNumber: 7339158278,
    Email: "Someone@gmail.com",
    location: "Chennai",
    operation: <a href="#">#Action</a>
  },
  {
    key: 8,
    name: "some name 8",
    age: 23,
    tags: <InfoBadge className='badge-success' label='success' />,
    address: "some address 6",
    MobileNumber: 1234567890,
    Email: "Someone@gmail.com",
    location: "Chennai",
    operation: <a href="#">#Action</a>
  },
  {
    key: 9,
    name: "some name 9",
    age: 22,
    tags: <InfoBadge className='badge-success' label='success' />,
    address: "some address 7",
    MobileNumber: 7339158278,
    Email: "Someone@gmail.com",
    location: "Chennai",
    operation: <a href="#">#Action</a>
  },
  {
    key: 10,
    name: "some name 10",
    age: 19,
    tags: <InfoBadge className='badge-success' label='success' />,
    address: "some address 8",
    MobileNumber: 7339158278,
    Email: "Someone@gmail.com",
    location: "Chennai",
    operation: <a href="#">#Action</a>
  },
  {
    key: 11,
    name: "some name 11",
    age: 23,
    tags: <InfoBadge className='badge-success' label='success' />,
    address: "some address 6",
    MobileNumber: 1234567890,
    Email: "Someone@gmail.com",
    location: "Chennai",
    operation: <a href="#">#Action</a>
  },
  {
    key: 12,
    name: "some name 12",
    age: 22,
    tags: <InfoBadge className='badge-success' label='success' />,
    address: "some address 7",
    MobileNumber: 7339158278,
    Email: "Someone@gmail.com",
    location: "Chennai",
    operation: <a href="#">#Action</a>
  },
  {
    key: 13,
    name: "some name 13",
    age: 19,
    tags: <InfoBadge className='badge-success' label='success' />,
    address: "some address 8",
    MobileNumber: 7339158278,
    Email: "Someone@gmail.com",
    location: "Chennai",
    operation: <a href="#">#Action</a>
  },
];


<Table
  className="table-grid light-header"
  columns={actioncolumns}
  data={actiondata}
  sticky={true}
  pagination={{ pageSize: 6}}
/>`}
                      </Highlighter>
                    </pre>
                  </CodeBlock>
                  {/* code block */}
                </Box>
              </Box>
            </Box>

            <Box id="tag8" className="equal-spacing">
              <p variant="h5" className="doc-heading-text">
                Props
              </p>
              <Box className="component_expl_hrz">
                <Box className="props_head">
                  <Row>
                    <Col item xs={12} md={12} lg={12}>
                      <pre className="Code-bg">
                        {/* <Highlighter className="shorten">{`Button Props`}</Highlighter> */}
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
                          <p className="string">
                            <pre>string </pre>
                          </p>
                        </div>
                        <div className="props_content">
                          <p>
                            The className property allows you to change size
                            ,background and position of the Tab.
                          </p>
                        </div>
                      </div>
                      {/*  */}
                      <div className="props_div">
                        <div className="props_name">
                          <p>icon ?</p>
                          <p className="boolean">
                            <pre>boolean</pre>
                          </p>
                        </div>
                        <div className="props_content">
                          <p>
                            The icon property hides and shows the icon on the
                            Tab.
                          </p>
                        </div>
                      </div>
                      {/*  */}
                      <div className="props_div">
                        <div className="props_name">
                          <p>iconClass ?</p>
                          <p className="string">
                            <pre>string</pre>
                          </p>
                        </div>
                        <div className="props_content">
                          <p>
                            The iconClass property add icons on the left and
                            right side of the tab header you can add
                            <p className="classname">.tab-bar-icl</p> for adding
                            left side icon and
                            <p className="classname"> .tab-bar-icr</p> for
                            adding on the right side. You can add your own icons
                            by overwritting the
                            <p className="classname">.tab-bar-icl</p>
                            <p className="classname"> .tab-bar-icr</p> classes.
                          </p>
                        </div>
                      </div>
                      {/*  */}
                      <div className="props_div">
                        <div className="props_name">
                          <p>iconPosition ?</p>
                          <p className="boolean">
                            <pre>string</pre>
                          </p>
                        </div>
                        <div className="props_content">
                          <p>
                            iconPosition property determines to wether the icon
                            placement should be on the start or end of the text
                            .
                          </p>
                        </div>
                      </div>
                      {/*  */}
                    </div>
                  </Col>
                </Box>
              </Box>
            </Box>
          </Col>
          <Col lg={2} className="scroll_content">
            <div id="fixed-box-container">
              <div id="myHeader" className="fixed-content">
                <h5>contents</h5>
                <div className="page_scroller">
                  <ul>
                    <li>
                      <Link
                        activeClass="active"
                        to="tag1"
                        spy={true}
                        smooth={false}
                        offset={-100}
                        onSetActive={handleScroll}
                      >
                        Horizontal
                      </Link>
                    </li>
                    <li>
                      <Link
                        activeClass="active"
                        to="tag2"
                        spy={true}
                        smooth={false}
                        offset={-100}
                        onSetActive={handleScroll}
                      >
                        Fixed Header
                      </Link>
                    </li>
                    <li>
                      <Link
                        activeClass="active"
                        to="tag3"
                        spy={true}
                        smooth={false}
                        offset={-100}
                        onSetActive={handleScroll}
                      >
                        Column Fixed
                      </Link>
                    </li>
                    <li>
                      <Link
                        activeClass="active"
                        to="tag4"
                        spy={true}
                        smooth={false}
                        offset={-100}
                        onSetActive={handleScroll}
                      >
                        Sorting
                      </Link>
                    </li>
                    <li>
                      <Link
                        activeClass="active"
                        to="tag5"
                        spy={true}
                        smooth={false}
                        offset={-100}
                        onSetActive={handleScroll}
                      >
                        Pagination
                      </Link>
                    </li>
                    <li>
                      <Link
                        activeClass="active"
                        to="tag6"
                        spy={true}
                        smooth={false}
                        offset={-100}
                        onSetActive={handleScroll}
                      >
                        Action & Tags
                      </Link>
                    </li>
                    <li>
                      <Link
                        activeClass="active"
                        to="tag7"
                        spy={true}
                        smooth={false}
                        offset={-100}
                        onSetActive={handleScroll}
                      >
                        Checkbox
                      </Link>
                    </li>
                    <li>
                      <Link
                        activeClass="active"
                        to="tag8"
                        spy={true}
                        smooth={false}
                        offset={-100}
                        onSetActive={handleScroll}
                      >
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


export default Tables;
