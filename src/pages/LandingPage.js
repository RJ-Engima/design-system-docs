import React from "react";
import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {Button} from 'm2p-dsl';
// Main Imports
import "../assets/css/Docs.css";
import m2pLogo from "../assets/img/m2p_logo.png";

import landing_banner from "../assets/img/minimal_dashboard.png";

import {
  Box,
  Grid,
  Typography,
  Breadcrumbs as MuiBreadcrumbs,
  Card as MuiCard,
  CardMedia as MuiCardMedia,
  Divider as MuiDivider,
} from "@mui/material";

function LandingComponents() {
  // const DownloadZip = () => {
  //   const link = document.createElement("a");
  //   link.download = `https://uat-designsystem.m2pfintech.com/downloads/components.zip`;
  //   link.href =
  //     "https://uat-designsystem.m2pfintech.com/downloads/components.zip";
  //   link.click();
  // };

  return (
    <Box className="landing-bg">
      <Grid className="left-side" md={6} xs={12}>
        <Box className="left-side-content" textAlign="left">
          <Box
            className="left-side-topper"
            display="flex"
            alignItems="center"
            flexWrap="nowrap"
          >
            <Box className="img-box">
              <img src={m2pLogo} alt="m2plogo" />
            </Box>
            <Box className="design-heading-text">
              <Typography variant="h2" whiteSpace="nowrap">
                Design System
              </Typography>
            </Box>
          </Box>
          <Box>
            <Box
              display="flex"
              alignItems="baseline"
              justifyContent="right"
              paddingTop="16px"
              paddingBottom="58px"
            >
              <Box className="line-down"></Box>
              <Box className="desk-text" paddingLeft="15px">
                <Typography variant="body2">Version 1.0 - 2022</Typography>
              </Box>
            </Box>
          </Box>
          <Box display="flex" justifyContent="space-between">
            <Button variant="contained" className="btn-primary btnSmall" value="Get Started"
                style={{width: "375px"}}
                href="/get-started"
                startIcon={<i className="icon icon-Line-System-Key"></i>}
              />
          </Box>
        </Box>
      </Grid>

      <Grid className="right-side" md={4} xs={12}>
        <Box className="right-side-content">
          <img src={landing_banner} />
        </Box>
      </Grid>
    </Box>
  );
}

function LandingPage() {
  return (
    <React.Fragment>
      <Grid>
        <LandingComponents />
      </Grid>
    </React.Fragment>
  );
}

export default LandingPage;
