import React, { useEffect, useState } from "react";
import axios from "axios"
import { useFormik } from "formik"
import * as Yup from "yup"
import { useNavigate, Outlet } from "react-router-dom";

import "../assets/css/Docs.css";
import m2pLogo from "../assets/img/m2p_logo.png";
import { Col, Container, Row } from "react-bootstrap";
import landing_banner from "../assets/img/Vector.svg";
import { Button, Inputs } from "m2p-dsl";
import "../assets/css/login.scss"
import { Link } from "react-router-dom";
import socketIO from "socket.io-client";
import {ToastContainer, toast, Bounce, Zoom } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

// const socket = socketIO.connect("");

function Login() {
  sessionStorage.clear()
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .matches(/^[A-Za-z0-9._%+-]+@(m2pfintech\.com|m2p\.in)$/, "Invalid domain")
      .required("Email is required").email("Email is invalid"),
    password: Yup.string()
      .required("Password is required")
      // .min(6, "Password must be at least 6 characters")
      // .max(40, "Password must not exceed 40 characters"),
  });
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: (data) => {
      loginUser(data)
    },
  });
  let navigate = useNavigate();
  const [notifications, setNotifications] = useState([]);
  const [email, setEmail] = useState()

  async function loginUser(data) {
    await axios.post('/api/dsl/user/login', data)
      .then(function (response) {
        window.sessionStorage.setItem("role", response.data.role);
        window.sessionStorage.setItem("email", response.data.email);
        window.sessionStorage.setItem("username", `${response.data.firstName} ${response.data.lastName}`);
        let role = sessionStorage.getItem('role')

        role === "DSL-Admin" || role === "DSL-User" ? navigate("/components") : navigate("/")
        // socket.emit("loginNotification",{userName: sessionStorage.getItem("username")})
      })
      .catch(function (error) {
        toast.error(error.response.data)
        return console.log(error);
      });

      // useEffect(() => {
      //   const socket = io('');

      //   socket.on('connect', () => {
      //     console.log(`Client connected: ${socket.id}`);
      //     socket.emit('subscribe', 'notifications');
      //   });

      //   socket.on('notification', (notification) => {
      //     setNotifications(notification);
      //   });

      //   return () => {
      //     socket.emit('unsubscribe', 'notifications');
      //     socket.disconnect();
      //     console.log(`Client disconnected: ${socket.id}`);
      //   };
      // }, []);
  }
  async function checkEmail(emailId) {
    // const {name, value} = emailId.target

    await axios.post('/api/dsl/user/checkEmail', {emailId:emailId})
      .then(function (response) {
      })
      .catch(function (error) {
        // toast.error(error.response.data)
        formik.errors.email = error.response.data
        // formik.touched.email = error.response.data

        formik.setErrors (formik.errors)
        // formik.setTouched (formik.touched)
        // formik.setErrors({...formik.errors, email: error.response.data});
        // formik.setTouched({...formik.touched, email: error.response.data});
      });
  }
  // useEffect(()=>{
  //   socket.on('getNotification',(data)=>{
  //     alert(`${data.userName} User logged in`)
  //   })
  // },[socket])

function emailValidate(e) {
  let regex = /^[A-Za-z0-9._%+-]+@(m2pfintech\.com|m2p\.in)$/
  formik.handleChange(e)
  if(regex.test(e.target.value)) {
    checkEmail(e.target.value)
  }
}
  return (
    <Container fluid className="loginCont">
      {/* <img src={landing_banner}/> */}
      <Row>
        <div className="loginWrapper">
          <Col lg={7}>
            <div className="leftSec">
              <div className="dslTxt">
                <h1>D</h1>
                <h1>L</h1>
                <h1>S</h1>
                <h4>Design Language System</h4>
              </div>
            </div>
          </Col>
          <Col xs={12} md={6} lg={5} className="loginDiv">

            <div className="loginForm">
              {/* <h4>Login</h4> */}
              <div className="loginFormWrapper">
                <form id="login-form">

                  <Inputs
                    labelClass={'label'}
                    labeltext='Email'
                    htmlFor='email'
                    type="text"
                    placeholder={'Email'}
                    name='email'
                    onChange={emailValidate}
                    // onChange={formik.handleChange}
                    value={formik.values.email}
                    className={'form-control input-sm' + (formik.errors.email
                      ? ' is-invalid input-error'
                      : '')
                    }
                    helpText={formik.errors.email
                      ? formik.errors.email
                      : null}
                    helpTextvariant={formik.errors.email
                      ? ' error-text'
                      : ''}
                  />

                  <Inputs
                    labelClass={'label'}
                    labeltext='Password'
                    htmlFor='password'
                    type="password"
                    placeholder={'Password'}
                    name='password'
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    className={'form-control input-sm' + (formik.errors.password && formik.touched.password
                      ? ' is-invalid input-error'
                      : '')
                    }
                    helpText={formik.errors.password && formik.touched.password
                      ? formik.errors.password
                      : null}
                    helpTextvariant={formik.errors.password && formik.touched.password
                      ? 'error-text'
                      : ''}
                  />
                  <Button value="Login" className="btn-primary" type="submit" onClick={formik.handleSubmit} />
                  <div className="signUpDiv">
                    <p>New user ? <Link to="/signup">Sign up</Link> </p>
                  </div>
                </form>
              </div>
            </div>
          </Col>
        </div>
      </Row>
      <ToastContainer className="dsl-toaster" autoClose={3000} closeOnClick theme="colored" hideProgressBar={true}/>
    </Container>
  );
}



export default Login;


