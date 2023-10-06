import React, { useState, useEffect, useCallback } from 'react'
import { useForm } from "react-hook-form";
import axios from "axios"
import Col from "react-bootstrap/Col";
import { Button, Dropdown, Inputs } from "m2p-dsl";
import DropdownItems from '../utils/DropdownItems.json'
import { useLocation } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import MyEditor from './MentionEditior';
import {ToastContainer, toast, Bounce, Zoom } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';


export default function IssueForm(props) {

    // Default value selection
    const [content, setContent] = useState()
    const [title, setTitle] = useState()
    const [response, setResponse] = useState()
    const [responseTxt, setResponseTxt] = useState()
    const [disabled, setDisabled] = useState(true)
    const [errorTxt, setErrorTxt] = useState()

    let location = useLocation()
    const { pathname } = location;
    let defaultValue
    let index = DropdownItems.findIndex(
        (item) => {
            return item.link === pathname
        }
    )
    defaultValue = DropdownItems[index].value
    const formSubmit = () => {
        title === undefined ? setErrorTxt("Title cannot be empty") : "";
        let values = {}
        values.url = window.location.href
        values.component = defaultValue
        values.variant = props.variant
        values.title = title
        values.feedBack = content
        values.email = sessionStorage.getItem('email')
        values.name = sessionStorage.getItem('username')
        console.log(values);
        feedbackApi(values)
    }
    const feedbackApi = async (data) => {
        await axios.post('/api/dsl/feedback/submit', data)
            .then(function (response) {
                console.log(response);
                toast.success(response.data)
                setTimeout(() => {
                    response.status === 200 && props.handleClose()
                }, 2000)
            })
            .catch(function (error) {
                console.log(error.response);
                toast.error(error.response.data)
                return console.log(error);
            });
    }
    //Only string
    const string = (e) => {
        let key = e.keyCode;
        if (!((/[a-z ]/i.test(String.fromCharCode(e.keyCode))) || (key == 8) || (key == 32) || (key == 46) || (key == 46) || (key == 9))) {
            e.preventDefault();
        }
    }

    return (
        <>
            <ToastContainer className="dsl-toaster" position='top-right' autoClose={3000} closeOnClick theme="colored" hideProgressBar={true}/>
            <div className={`component_code ${props.className}`}>
                <Col item xs={12} md={12} lg={12}>
                    <div className="issueForm">
                        <span className='issueCmpnt'>Component: <span> {defaultValue}</span> </span>
                        <span className='issueVrnt'>Variant: <span> {props.variant}</span> </span>
                        <label htmlFor="components" className='selectComp'> Components
                            <Dropdown
                                mode="single"
                                className="drop-md"
                                defaultValue={defaultValue}
                                selectOptions={DropdownItems}
                                onChange={(value) => console.log(value)}      // to get selected values
                                placeholder={'Select component'}

                            />
                        </label>
                        <Inputs
                            labelClass={'label'}
                            labeltext='Title'
                            htmlFor='Title'
                            type="text"
                            placeholder={'Issue Title'}
                            name='Title'
                            inputClass={`form-control input-md`}
                            onChange={(event)=>{setTitle(event.target.value);}}

                        />
                        <MyEditor value={content} onChange={(value) => { setContent(value);
                        }} />
                        <div className='issueformFtr'>
                            <p className={`response ${(response === "Success" ? "activeSuccess" : "") ||
                                (response === "Error" ? "activeError" : "")
                                }`}>{responseTxt}</p>
                            <div className='btns'>
                                <Button className='docsBtn btn-primary submt' disabled={content === "<p><br></p>" || title == undefined || title === '' ? true : false} onClick={formSubmit} value="Submit"/>
                                <Button className='docsBtn btn-primary cncl' variant="outlined" onClick={props.handleClose} value="Cancel" />
                            </div>
                        </div>
                    </div>
                </Col>
            </div>
        </>
    )
}
