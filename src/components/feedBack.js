import React, { useState, useEffect, useCallback } from 'react'
import { useForm } from "react-hook-form";
import axios from "axios"
import Col from "react-bootstrap/Col";
import { Button, Dropdown } from "m2p-dsl";
import DropdownItems from '../utils/DropdownItems.json'
import {useLocation } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

export default function FeedbackForm(props) {
    const { register, getValues, handleSubmit, reset, setError, formState: { errors } } = useForm({
        // reValidateMode: true
    });
    // Default value selection
    const [response, setResponse] = useState()
    const [responseTxt, setResponseTxt] = useState("")
    let location = useLocation()
    const { pathname } = location;
    let defaultValue
    let index = DropdownItems.findIndex(
        (item)=>{
            return item.link === pathname
        }
    )
    defaultValue = DropdownItems[index].value
    // const issueId = uuidv4().split("-").join("");
    const formSubmit = (values) => {
        // values.issueId = "DSLIFB-"+issueId;
        values.url = window.location.href
        values.component = defaultValue
        console.log(values);
        feedbackApi(values)
    }

    const feedbackApi = async (data) => {
        await axios.post('/api/dsl/feedback/submit', data)
            .then(function (response) {
                console.log(response);
                setResponse("Success")
                setResponseTxt("Thank you for the feedback")
                setTimeout(()=>{
                    setResponse('')
                    setResponseTxt("")
                },2000)
                response.status === 200 && props.handleClose
            })
            .catch(function (error) {
                console.log(error.response.data);
                error.response.data === "Invalid domain" && setError("email", { shouldFocus: true })
                setResponse("Error")
                setResponseTxt(error.response.data)
                setTimeout(()=>{
                    setResponse('')
                    setResponseTxt("")
                },2000)
                return console.log(error);
            });
    }
    //Only string
    const string = (e)=>{
        let key = e.keyCode;
        if(!((/[a-z ]/i.test(String.fromCharCode(e.keyCode))) || (key == 8) || (key == 32) || (key == 46) || (key == 46) || (key == 9))) {
          e.preventDefault();
        }
    }
    // Feedback text validation
    const feedTxt = (event)=>{
        let regex = new RegExp("^[ A-Za-z0-9_?.,)(-]*$");
        let key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
        if (!regex.test(key)) {
           event.preventDefault();
           return false;
        }
        // var keyCode = event.which;
        // if(keyCode == 64 || keyCode == 32 || keyCode == 45|| keyCode >= 97 && keyCode <= 122 || keyCode >= 48 && keyCode <= 57 || keyCode >= 65 && keyCode <= 90){
        //   return true;
        // }
        // event.preventDefault();
    }

    return (
        <div className={`component_code ${props.className}`}>
            <Col item xs={12} md={12} lg={12}>
                <div className="feedback_form">
                    <h5>Feedback</h5>
                    <form id="feedback-form" onSubmit={handleSubmit(formSubmit)} >
                        <label htmlFor="name"> Name
                            <input {...register("name", { required: "Enter name" })} type="text" placeholder="Name" className={errors.name ? "errInput" : ""} maxLength="20" minLength="3" onKeyDown={string} />
                            {errors.name && <p className='errorMsg'>{errors.name.message}</p>}
                        </label>
                        <label htmlFor="email"> Email
                            <input {...register("email", {
                                required: "Enter email",
                                pattern: {
                                    value: /^[A-Za-z0-9._%+-]+@(m2pfintech\.com|m2p\.in)$/,
                                    message: "Invalid Domain"
                                }
                            })} type="email" placeholder="Email" className={errors.email ? "errInput" : ""} maxLength="30" minLength="8" value={sessionStorage.getItem('email')} />
                            {errors.email && <p className='errorMsg'>{errors.email.message}</p>}
                        </label>
                        <label htmlFor="feedback"> Feedback
                            <textarea {...register("feedBack", { required: "Give feedback" })} type="textarea" placeholder="Feedback" className={errors.feedBack ? "errInput" : ""} maxLength="200" minLength="3" onKeyDown={string} ></textarea>
                            {errors.feedBack && <p className='errorMsg'>{errors.feedBack.message}</p>}
                        </label>
                        <label htmlFor="components"  className='selectComp'> Components
                            <Dropdown
                                mode="single"
                                className="drop-md"
                                defaultValue={defaultValue}
                                selectOptions={DropdownItems}
                                onChange={(value) => console.log(value) }      // to get selected values
                                placeholder={'Select component'}
                            />
                            {errors.feedBack && <p className='errorMsg'>{errors.feedBack.message}</p>}
                        </label>
                        <p className={`response ${
                            (response === "Success" ? "activeSuccess" : "") ||
                            (response === "Error" ? "activeError" : "")
                            }`}>{responseTxt}</p>
                        <Button className="btn-sm btn-dark" type="submit" value="Submit" />
                    </form>
                </div>
            </Col>
        </div>
    )
}
