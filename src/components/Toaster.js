import React from 'react'
import {ToastContainer, toast, Bounce, Zoom } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

function Toast(){
    toast.info('hello')
    return (
        <>
            <ToastContainer className="dsl-toaster" autoClose={1000000} closeOnClick theme="light" hideProgressBar={true}/>
        </>
    );
}
export default Toast