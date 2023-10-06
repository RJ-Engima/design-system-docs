import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation, useParams } from 'react-router-dom'
import { Container, Row, Col, Nav, Navbar } from "react-bootstrap";
import '../assets/css/Docs.css'
import Search from "./Search";
import Image1 from '../assets/img/avatar_img.png';
import { Avatar, Button, Infotips } from "m2p-dsl";
import Data from '../utils/Data.json';
import "../assets/css/issues.scss"
const NavbarComp = () => {
    const dropDownRef = useRef()
    const [dropDown, setDropDown] = useState()
    let location = useLocation()
    const { pathname } = location;

    const handleClickOutside = e => {
        if (dropDownRef.current && !dropDownRef.current.contains(e.target)) {
            setDropDown(false);
        }
    };
    const handleClickInside = (index) => {
        setDropDown((prev) => !prev)
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [dropDown]);
    return (
        <React.Fragment>
            <Row className="header_row">
                <Col lg={12}>
                    <div className="header" position="sticky" elevation={0}>
                        <Navbar className="custom_Nav">
                            <Container>
                                <Nav className="me-auto">
                                    <Nav.Link ><Link className={`navLink ${pathname === "/components" || pathname === `/components/${pathname.split('/')[2]}` ? "active" : ""}`} to="/components">Components</Link></Nav.Link>
                                    <Nav.Link ><Link className={`navLink ${pathname === "/resources" ? "active" : ""}`} to="/resources">Resources</Link></Nav.Link>
                                    <Nav.Link><Link className={`navLink ${pathname.split('/')[1] === "issues" ? "active" : ""}`} to="/issues">Issues</Link></Nav.Link>
                                </Nav>
                            </Container>
                        </Navbar>
                        <div className="navBarItems">
                            <Search data={Data} />
                            <div ref={dropDownRef} className="userInfo" onClick={() => { setDropDown(!dropDown);handleClickInside }}>
                                <div><Avatar className="avatar-md" src={Image1} alt={'Image'} /></div>
                                {dropDown === true ?
                                    <div className="opt_dropdown">
                                        <p className="userInfoName">{sessionStorage.getItem('username')}</p>
                                        <ul>
                                            <li className="opt_drpdn_menus"> <Link to="/login">Logout</Link> </li>
                                            <li className="opt_drpdn_menus"> <Link to="/login">Change password</Link> </li>
                                        </ul>
                                    </div>
                                    : ""

                                }
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default NavbarComp;
