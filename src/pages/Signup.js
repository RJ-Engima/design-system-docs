import React from "react";
import styled from "@emotion/styled";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import axios from "axios"
import { useForm } from "react-hook-form";
import { useFormik } from "formik";
import * as Yup from "yup"
// Main Imports
import "../assets/css/Docs.css";
import m2pLogo from "../assets/img/m2p_logo.png";

import { Col, Container, Row } from "react-bootstrap";
import landing_banner from "../assets/img/home_hero.png";
import { Button, Inputs } from "m2p-dsl";
import "../assets/css/login.scss"

function Signup() {
  const validationSchema = Yup.object().shape({
    firstname: Yup.string().required("Fullname is required"),
    lastname: Yup.string()
      .required("Username is required")
      .min(6, "Username must be at least 6 characters")
      .max(20, "Username must not exceed 20 characters"),
    email: Yup.string().required("Email is required").email("Email is invalid"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters")
      .max(40, "Password must not exceed 40 characters"),
    confirmPassword: Yup.string()
      .required("Confirm Password is required")
      .oneOf([Yup.ref("password"), null], "Confirm Password does not match"),
  });
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema,
    // validateOnChange: false,
    // validateOnBlur: false,
    onSubmit: (data) => {
      console.log(JSON.stringify(data, null, 2));
    },
  });
  let navigate = useNavigate();

  async function loginUser(data) {
    await axios.post('/api/dsl/user/otpValidation', data)
      .then(function (response) {
        console.log(response.data);
        window.sessionStorage.setItem("role", response.data.role);
        window.sessionStorage.setItem("username", response.data.firstName + response.data.lastName);
        let role = sessionStorage.getItem('role')
        role === "DSL-Admin" || role === "DSL-User" ? navigate("/components") : navigate("/")
      })
      .catch(function (error) {
        console.log(error);
        return console.log(error);
      });
  }
  return (
    <Container fluid className="loginCont">
      <Row>
        <Col xs={12} md={6} lg={8}>
          <div>
            <img className="loginBan" src={landing_banner} />
          </div>
        </Col>
        <Col xs={12} md={6} lg={4} className="loginDiv">
          <div className="loginForm">
            <h4>Signup to Design system</h4>
            <form id="login-form">

              <Inputs
                labelClass={'label'}
                labeltext='First name'
                htmlFor='firstname'
                type="text"
                placeholder={'First name'}
                name='firstname'
                onChange={formik.handleChange}
                value={formik.values.firstname}
                inputClass={'form-control input-md' + (formik.errors.firstname && formik.touched.firstname
                  ? ' is-invalid'
                  : '')
                }
                helpText={formik.errors.firstname && formik.touched.firstname
                  ? formik.errors.firstname
                  : null}
                helpTextvariant={formik.errors.firstname && formik.touched.firstname
                  ? ' error-text'
                  : ''}
              />
              <Inputs
                labelClass={'label'}
                labeltext='Last name'
                htmlFor='lastname'
                type="text"
                placeholder={'Last name'}
                name='lastname'
                onChange={formik.handleChange}
                value={formik.values.lastname}
                inputClass={'form-control input-md' + (formik.errors.lastname && formik.touched.lastname
                  ? ' is-invalid'
                  : '')
                }
                helpText={formik.errors.lastname && formik.touched.lastname
                  ? formik.errors.lastname
                  : null}
                helpTextvariant={formik.errors.lastname && formik.touched.lastname
                  ? ' error-text'
                  : ''}
              />
              <Inputs
                labelClass={'label'}
                labeltext='Email'
                htmlFor='email'
                type="text"
                placeholder={'Email'}
                name='email'
                onChange={formik.handleChange}
                value={formik.values.email}
                inputClass={'form-control input-md' + (formik.errors.email && formik.touched.email
                  ? ' is-invalid'
                  : '')
                }
                helpText={formik.errors.email && formik.touched.email
                  ? formik.errors.email
                  : null}
                helpTextvariant={formik.errors.email && formik.touched.email
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
                inputClass={'form-control input-md' + (formik.errors.password && formik.touched.password
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
              <Inputs
                labelClass={'label'}
                labeltext='Confirm Password'
                htmlFor='confirmpassword'
                type="password"
                placeholder={'Confirm Password'}
                name='confirmPassword'
                onChange={formik.handleChange}
                value={formik.values.confirmPassword}
                inputClass={'form-control input-md' + (formik.errors.confirmPassword && formik.touched.confirmPassword
                  ? ' is-invalid input-error'
                  : '')
                }
                helpText={formik.errors.confirmPassword && formik.touched.confirmPassword
                  ? formik.errors.confirmPassword
                  : null}
                helpTextvariant={formik.errors.confirmPassword && formik.touched.confirmPassword
                  ? 'error-text'
                  : ''}
              />
              <Button value="Submit" type="submit" onClick={formik.handleSubmit} />
            </form>
            <div className="signUpDiv">
              <p>Already user ? <Link to="/login">Sign in</Link> </p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}



export default Signup;
