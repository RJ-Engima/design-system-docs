import React from 'react'
import Sidebars from '../components/Sidebar'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Outlet } from "react-router-dom";
import '../assets/css/Docs.css'
import NavbarComp from '../components/Navbar';
import FooterEnd from '../components/FooterEnd';


export default function Dashboard() {

  return (
    <React.Fragment>
      <Sidebars 
        navBar={<NavbarComp />} 
        mainContent={<Outlet />} 
        footerEnd={<FooterEnd />}
      />   
    </React.Fragment>
  )
}
