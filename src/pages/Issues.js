import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button, Dropdown } from "m2p-dsl";
import "../assets/css/icons.css"
import iconData from "../utils/icons.json"
import axios from "axios"
import DropdownItems from '../utils/DropdownItems.json'
import moment from "moment";
import { Link, useParams, useNavigate, Outlet } from "react-router-dom";
import PendingImg from "../assets/img/pending-2.png"
import ResolvedImg from "../assets/img/resolved.png"
// import { Empty } from 'm2p-dsl/node_modules/antd';

function Issues() {
  let { id } = useParams();
  let auth = sessionStorage.getItem('role')
  const selectOptions = [
    {
      value: 'All',
      label: 'All',
    },
    {
      value: 'Pending',
      label: 'Pending',
    },
    {
      value: 'Resolved',
      label: 'Resolved',
    },
    {
      value: 'Components',
      label: 'Components',
    },
  ];
  const [data, setData] = useState([]);
  const [pending, setPending] = useState(0);
  const [resolved, setResolved] = useState(0);
  const [showCompntFltr , setCompntFltr] = useState(false);
  const [componentData , setComponentData] = useState([]);
  const [showReply, setShowReply] = useState(null);
  const [replyValue, setReplyValue] = useState({issueId:"",responseTxt:"", responseBy:"DSL-Admin"});
  const [cnclBtnState , setCnclBtnState] = useState(false)
  const [textareaheight, setTextareaheight] = useState(1);

  let components = []
  async function getFeedback(){

    await axios.get('/api/dsl/feedback/getData/')
    .then(function (response) {
      console.log(response.data.data);
      setData(response.data.data)
        let countPending = 0
        let countResolved = 0
        response.data.data.map(res => res.status === "Pending" ? countPending++ :  countPending)
        response.data.data.map(res => res.status === "Closed" ? countResolved++ :  countResolved)
        setPending(countPending)
        setResolved(countResolved)
      })
      .catch(function (error) {
        console.log(error);
        error.response.data === "Invalid domain" && setError("email", { shouldFocus: true })
        return console.log(error);
      });
  }
  async function getComponents (){
    await axios.post('/api/dsl/feedback/listComponents' )
    .then(function (response) {
      response.data.map(res => components.push({value:res,label:res}))
      setComponentData(components)
    })
    .catch(function (error) {
        console.log(error);
        return console.log(error);
    });
  }
  function handleChange (event,id){
    const {value} = event.target
    setReplyValue(prevFormData =>{
      return {
          ...prevFormData,
          "issueId":id,
          "responseTxt":value
      }
    })
    const height = event.target.scrollHeight;
    const rowHeight = 300;
    const trows = Math.ceil(height / rowHeight) - 1;

    if (trows && textareaheight) {

      setTextareaheight(trows);

    }
    value === "" ? setTextareaheight(1) : ""
    value === "" ? setCnclBtnState(false) : setCnclBtnState(true)
  }
  const replyApi = async (data)=>{
    await axios.post('/api/dsl/feedback/update', data )
    .then(function (response) {
      setShowReply(null)
      getFeedback()
      setReplyValue({issueId:"",responseTxt:"", responseBy: sessionStorage.getItem("role")});
      document.querySelector('textarea').value = ''

    })
    .catch(function (error) {
        console.log(error);
        return console.log(error);
    });
  }
  const getFilterData = (value) => {
    let filterData
    value === "Components" ? setCompntFltr(true) : setCompntFltr(false);
    if(value === "All" || value === "Components"){
      getFeedback()
    }else{
      filterData={
        "status":value
      }
      filterApi(filterData)
    }
  }
  const onChangeComponent = (value)=>{
    let filterData = {
      "component":value
    }
    filterApi(filterData)
  }

  async function filterApi(data){
    await axios.post('/api/dsl/feedback/filter/getData', data )
    .then(function (response) {
      setData(response.data)
        let countPending = 0
        let countResolved = 0
        response.data.map(res => res.status === "Pending" ? countPending++ :  countPending)
        response.data.map(res => res.status === "Resolved" ? countResolved++ :  countResolved)
        setPending(countPending)
        setResolved(countResolved)
      })
      .catch(function (error) {
          console.log(error);
          error.response.data === "Invalid domain" && setError("email", { shouldFocus: true })
          return console.log(error);
      });
  }
  useEffect(()=>{
    getFeedback()
    getComponents()
  },[])
  //Only string
  const string = (e)=>{
    let key = e.keyCode;
    if(!((/[a-z ]/i.test(String.fromCharCode(e.keyCode))) || (key == 8) || (key == 32) || (key == 46) || (key == 46) || (key == 9))) {
      e.preventDefault();
    }
  }

  return (
    <>
      <Container fluid className="content_div issuesWrap">
        <p className="issueTlt">Issues & Feedbacks</p>
        <Row className="issue_content_div">
          <Col>
            <div className="issueNavbar">
              {sessionStorage.getItem('role')=== "DSL-Admin" ?
                <div className="issueStats">
                  <div className="issuePndCard">
                    <span className="issuePndTxt">
                      <span className="pndCount">{pending}</span>
                        <span className="pndTxt">Pending</span>
                    </span>
                    <div className="issuePndImg">
                      <img className="imgShow" src={PendingImg} />
                    </div>
                  </div>
                  <div className="issueRsvCard">
                    <span className="issueRsvTxt">
                      <span className="rsvCount">{resolved}</span>
                        <span className="rsvTxt">Resolved</span>
                    </span>
                    <div className="issueRsvImg">
                      <img className="imgShow" src={ResolvedImg} />
                    </div>
                  </div>
                </div>
              : ""
            }
            {data.length === 0 ? "" :
              <div className="issueFltr">
                <p>Filter By:</p>
                <Dropdown
                  mode="single"
                  className="drop-sm issueDrpdn"
                  defaultValue={"All"}
                  selectOptions={selectOptions}
                  onChange={(value)=>{getFilterData(value)}}
                  placeholder={'Select component'}
                />
                <Dropdown
                  mode="single"
                  className={`drop-sm issueDrpdn byCompnt ${showCompntFltr === true ? "active" : ""}`}
                  selectOptions={componentData}
                  onChange={(value)=>{onChangeComponent(value)}}
                  placeholder={'Select component'}
                />
              </div>
            }

            </div>
            {data.length === 0 ? "" :
              <div className="issueDiv">
                <div className="issueContent">
                  {data.map((item,index)=>{
                    return (
                    <div className="dsl_issues" key={index}>
                      <div className="issueDetails">
                        <div className="issueDtls">
                          <div className="iss_by_id">
                            <Link to={`/issues/${item.issueId}`} className="issueId">
                              {/* <p className="feedTxt">
                                <span>#{item.issueId}</span>
                                {item.feedBack}
                              </p> */}
                              <div className="feedTxt" dangerouslySetInnerHTML={{ __html: item.title }} />

                            </Link>
                          </div>
                          <div className="iss_by_comp">
                            <p className="issueComp">{item.component}</p>
                            <p className="issueVarnt">{item.variant}</p>
                            <p className={`issueStatus ${item.status === "Pending" ? "pndSts" : "rsvSts"}`}>{item.status}</p>
                          </div>
                        </div>
                        <div className="iss_by_dt_name">
                            <p>{`Issue from ${item.name}, ${moment(item.createdAt).fromNow()}`}</p>
                        </div>
                      </div>
                    </div>)
                  })}
                </div>
              </div>
            }
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Issues;
