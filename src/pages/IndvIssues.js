import React, { useEffect, useState, useRef } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Avatar, Button, Dropdown, Modal } from "m2p-dsl";
import "../assets/css/icons.css"
import axios from "axios"
import moment from "moment";
import { Link, useParams } from "react-router-dom";
import "../assets/css/issues.scss"
// import MyEditor from "../components/textEditor";
import Image1 from '../assets/img/avatar_img.png';
import {ColorRing} from "react-loader-spinner"
import Loader from "../components/Loader";
import ModalPopup from "../components/Modal";
import MyEditor from "../components/MentionEditior";
import Reopen from "../assets/img/issue-reopened.svg"

function IndvIssues() {

  let { id } = useParams()
  const dropDownRef = useRef(null);
  const [data, setData] = useState([]);
  const [content, setContent] = useState('');
  const [replyData, setReplyData] = useState();
  const [updateReply, setUpdateReply] = useState({ issueId: "", issueRespId: "", newResponseTxt: "" });
  const [dropDown, setDropDown] = useState(false)
  const [dropDownIndex, setDropDownIndex] = useState('')
  const [updateBtn, setUpdateBtn] = useState(false)
  const [issueRespId, setIssueRespId] = useState('')
  const [editShow, setEditShow] = useState()
  const [loader, setLoader] = useState(true)
  const [deleteData, setDeleteData] = useState()
  const [issueUpdateModal, setIssueUpdateModal] = useState(false);
  const [deleteRspModal, setDeleteRspModal] = useState(false);
  const [closeIssueId, setCloseIssueId] = useState()
  const [tags, setTags] = useState([])
  const[issueStatus, setIssueStatus] = useState()

  const handleIssueClose = () => setIssueUpdateModal(false);

  async function getFeedback() {
    await axios.get(`/api/dsl/feedback/getData/?id=${id}`)
      .then(function (response) {
        setData(response.data.data)
        let initialArr = [response.data.data[0].name]
        response.data.tags.map(item =>  initialArr.push(item))
        let uniqueArr = initialArr.filter(initialArr => initialArr != sessionStorage.getItem('username'))
        let finalArr =  Array.from(new Set(uniqueArr))
        setTags(finalArr.map((item, index)=>{
          return {id:index, value:item}
        }))
        setTimeout(() => {
          setLoader(false)
        }, 1000)
      })
      .catch(function (error) {
        setLoader(false)
        console.log(error);
        return console.log(error);
      });
  }
  const replyApi = async (data) => {
    await axios.post('/api/dsl/feedback/response/new', data)
      .then(function (response) {
        setLoader(true)
        getFeedback()
        setContent('')
      })
      .catch(function (error) {
        console.log(error);
        return console.log(error);
      });
  }

  const updateResponseApi = async (updateReply) => {
    await axios.post('/api/dsl/feedback/response/update', updateReply)
      .then(function (response) {
        setEditShow('')
        getFeedback()
        setContent('')
      })
      .catch(function (error) {
        return console.log(error);
      });
  }
  const deleteResponseApi = async (updateReply) => {
    await axios.post('/api/dsl/feedback/response/delete', updateReply)
      .then(function (response) {
        setDeleteData('')
        setDeleteRspModal(false)
        getFeedback()
      })
      .catch(function (error) {
        return console.log(error);
      });
  }
  const updateIssueApi = async (issueId)=>{
    await axios.post('/api/dsl/feedback/update/status', {"issueId":issueId,"status":issueStatus})
      .then(function (response) {
        setIssueUpdateModal(false)
        getFeedback()
      })
      .catch(function (error) {
        return console.log(error);
      });

  }
  const handleRemoveAndAdd = (index) => {
    setContent(data[0].response[index].responseTxt);
    setEditShow(index)
    setUpdateBtn(true)
  }
  const handleClickOutside = e => {
    if (dropDownRef.current && !dropDownRef.current.contains(e.target)) {
      setDropDown(false);
    }
  };
  const handleClickInside = (index) => {
    setDropDown((prev) => !prev)
  }

  function setContrast() {
    const rgb = [255, 0, 0];
    rgb[0] = Math.round(Math.random() * 255);
    rgb[1] = Math.round(Math.random() * 255);
    rgb[2] = Math.round(Math.random() * 255);
    const brightness = Math.round(((parseInt(rgb[0]) * 299) +(parseInt(rgb[1]) * 587) +(parseInt(rgb[2]) * 114)) / 1000);
    const textColour = (brightness > 125) ? 'black' : 'white';
    return ('rgb(' + rgb[0] + ',' + rgb[1] + ',' + rgb[2] + ')');
  }
  function setContrastLetter() {
    const rgb = [255, 0, 0];
    rgb[0] = Math.round(Math.random() * 255);
    rgb[1] = Math.round(Math.random() * 255);
    rgb[2] = Math.round(Math.random() * 255);
    const brightness = Math.round(((parseInt(rgb[0]) * 299) +(parseInt(rgb[1]) * 587) +(parseInt(rgb[2]) * 114)) / 1000);
    return ((brightness > 125) ? 'black' : 'white');
  }

  useEffect(() => {
    getFeedback()
    setContrast()
    setContrastLetter()
  }, [])



  return (
    <Container fluid className="content_div indvCont">
      {/* <Link to="/issues" >Back</Link> */}
      <div className="indv_issue_section">
      {loader === true ?
          <div className="loader_container">
            <div className="loader_bg">
              <Loader/>
            </div>
          </div>
          :
          <>
            <div className={`indv_issue_headDiv ${data[0].response.length === 0 ? "" : "rspTrue"}`}>
              {/* <Avatar className="avatar-lg" src={Image1} alt={'Image'} />
              style={{"backgroundColor":setContrast(),"color":setContrastLetter()}}
              */}
              <div className="indv_issue_avtr"  >
                <span>{data[0].name.split(" ")[0].charAt(0)}</span> <span>{data[0].name.split(" ")[1].charAt(0)}</span>
              </div>
              <div className="indv_issue_header">
                <div className="setHeader">
                  <div className="indv_iss_hedr_dtls">
                    <div className="indv_user_div">
                      <div className="indv_user_dtls">
                        <p className="indv_issue_by_name">{data[0].name}</p>
                        {/* <p className="indv_issue_by_email">{data[0].email}</p> */}
                        <p className="indv_issue_date">
                          {moment(data[0]?.createdAt).format("MMM Do YYYY")} | {moment(data[0]?.createdAt).format('LT')}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className={`indv_iss_stats ${data[0].status === "Pending" ? "pndng" : "rsvld"}`}>
                      {/* <p className="indv_issue_id">#{data[0].issueId}</p> */}
                    {data[0].status === "Pending" && data[0].response.length >= 1 && data[0].name === sessionStorage.getItem('username') ?
                      <div className="issue_close_div">
                        <p className="indv_issue_close" onClick={()=>{
                          setIssueUpdateModal(true);
                          setCloseIssueId(data[0].issueId);
                          setIssueStatus('Closed')

                        }}>Close issue</p>
                      </div>
                      : ""
                    }
                      <p className={`indv_issue_compnt `}>{data[0].component}</p>
                      <p className={`indv_issue_varnt `}>{data[0].variant}</p>
                      <p className={`indv_issue_status `}>{data[0].status}</p>
                  </div>
                </div>

                <p className="indv_issue_title" dangerouslySetInnerHTML={{ __html: data[0]?.title }} />
                <p className="indv_iss_bd_dsrpt" dangerouslySetInnerHTML={{ __html: data[0]?.feedBack }} />
                {/* <div className="indv_iss_body">
                  <div className="indv_iss_bd_hdr">
                    <p className="indv_issue_id">#{data[0]?.issueId}</p>
                  </div>
                  <div className="indv_iss_bd">
                  </div>
                </div> */}
                {/* <div className="indv_issue_status">{data[0]?.status}</div> */}
              </div>
            </div>
            <div className={`${data[0].response.length === 0 ? "" : "indc_issue_cmts_sect"}`}>

                  {data[0]?.response.map((item, index) => {
                    return (

                      <div className={`indv_issue_cmnts ${editShow === index ? "hide" : ""}`} key={index} >
                        <div className="indv_issue_avtr" >
                          <span>{item.responseBy.split(" ")[0].charAt(0)}</span> <span>{item.responseBy.split(" ")[1].charAt(0)}</span>
                        </div>
                        <div className="indv_issue_div">
                        {/* <div className="avatar_div">
                          <Avatar className="avatar-md" src={Image1} alt={'Image'} />
                          <span className="avatar_Shape"></span>
                        </div> */}
                          <div className="indv_issue_chat_head">
                            <div className="indv_issue_stats">

                              <div className="indv_iss_rpl_user">
                                <p className="indv_issue_by">{item.responseBy}</p>
                              </div>
                            </div>
                            <div className="indv_issue_opts"
                              onClick={(e) => {
                                setDropDownIndex(index)
                                handleClickInside(index);
                              }}
                              onBlur={() => setDropDownIndex('')}
                            >
                              <p className="indv_issue_date">{moment(item.createdAt).format("MMM Do YYYY")} | {moment(item.createdAt).format('LT')}</p>
                              <div className={`optDots ${item.responseBy !== sessionStorage.getItem('username') ? "inactive" : "active"}`}>
                                <div className="opt_circle"></div>
                                <div className="opt_circle"></div>
                                <div className="opt_circle"></div>
                              </div>

                              <div className={`opt_dropdown ${dropDownIndex === index && dropDown === true ? "" : "inactive"}`}>
                                <ul>
                                  <li className="opt_drpdn_menus"
                                    onClick={(e) => {
                                      setIssueRespId(item?.responseId);
                                      handleRemoveAndAdd(index)
                                    }
                                      // setUpdateBtn(true);
                                    }>Edit</li>
                                  <li className="opt_drpdn_menus dlt" onClick={() => {
                                    setDeleteRspModal(true);
                                    setDeleteData({ issueId: data[0].issueId, issueRespId: item?.responseId })
                                  }}>Delete</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="indv_issue_body">
                            {/* {stringToHtml(item.responseTxt)} */}
                            <div dangerouslySetInnerHTML={{ __html: item.responseTxt }} />
                          </div>
                        </div>
                      </div>
                    )
                  })}
            </div>
            {data[0].status === "Closed" ?
              <div className="indv_iss_closed">
                <p className="iss_closed_txt" >
                  {`*** ${data[0].name === sessionStorage.getItem('username') ? "You have" : "User has"} closed this issue ***`}
                </p>
                {data[0].name === sessionStorage.getItem('username') ?
                  <div className="reopenTxt" onClick={()=>{

                    setIssueUpdateModal(true);
                    setCloseIssueId(data[0].issueId)
                    setIssueStatus('Reopen')

                  }}> <img src={Reopen} /> <p>Re-open Issue</p> </div>
                : ""}
              </div>
            :
              <div className="indv_cmnt_reply_sect">
                <div className="custom_txt_edtr">
                  {/* <div className="indv_issue_avtr"><Avatar className="avatar-lg" src={Image1} alt={'Image'} /></div> */}
                  <div className="txt_edtr_div">

                    {/* <h5>Leave a reply</h5> */}
                    <div className="edtr_div">
                      <MyEditor value={content} tags={tags} onChange={(value) => {
                        setContent(value);
                        setUpdateReply(prevFormData => {
                          return {
                            ...prevFormData,
                            issueId: data[0]?.issueId,
                            issueRespId: issueRespId,
                            newResponseTxt: value
                          }
                        });
                        setReplyData(prevFormData => {
                          return {
                            ...prevFormData,
                            "issueId": id,
                            "responseBy": sessionStorage.getItem("username"),
                            "responseTxt": value
                          }
                        })
                      }} />
                    </div>
                    <div className="txt_edtr_cta">
                      {updateBtn === false ?
                        <>
                          <Button className="btn-sm btn-success" disabled={content === "<p><br></p>" || content === "" ? true : false} value="Submit" onClick={() => { replyApi(replyData) }} />
                        </>
                        :
                        <>
                          <Button className="btn-sm btn-success" value="Update" onClick={() => {
                            updateResponseApi(updateReply)
                          }} />
                          <Button className="btn-sm outline-dark" value="Cancel" onClick={() => { setContent(''); setUpdateBtn(false); setEditShow(''); getFeedback() }} />
                        </>
                      }
                    </div>
                  </div>
                </div>
              </div>
            }
          </>
        }
        {<ModalPopup className="issueCloseModal" show={issueUpdateModal} handleClose={handleIssueClose} heading = {issueStatus === "Closed" ? "Close issue" : "Re-open Issue"} size="sm" body={
          <div className="issuePrompt">
            <p>{`${issueStatus == "Closed" ? "If you think your issue is resolved, kindly acknowledge here." : "Are you sure you want to re-open this issue. ?"}`}</p>
            <div className="issuePromptBtns">
              <button className="docsBtn yes" onClick={()=>{updateIssueApi(closeIssueId)}}>Yes</button>
              <button className="docsBtn no" onClick={()=>{setIssueUpdateModal(false)}}>No</button>
            </div>
          </div>
        } />}

        {<ModalPopup show={deleteRspModal} header="Confirmation" body={
          <div className="issuePrompt">
            <p>Are you sure you want to delete this response.</p>
            <div className="issuePromptBtns">
              <button className="docsBtn yes" onClick={()=>{deleteResponseApi(deleteData)}}>Yes</button>
              <button className="docsBtn no" onClick={()=>{setDeleteRspModal(false); setDeleteData('')}}>No</button>
            </div>
          </div>
        } />}
      </div>
    </Container>
  );
}

export default IndvIssues;
