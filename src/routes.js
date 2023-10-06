import { Accordion, Alert,Button } from "m2p-dsl";
import React from "react";
import DashboardLayout from "./layouts/Dashboard";
import AccordionComp from "./pages/Accordions";
import Alerts from "./pages/Alerts";
import Avatars from "./pages/Avatars";
import Badges from "./pages/Badge";
import BreadCrumbs from "./pages/BreadCrumb";
import Buttons from "./pages/Buttons";
import CardViews from "./pages/CardView";
import Checkboxes from "./pages/Checkbox";
import Components from "./pages/Components";
import CountryPicker from "./pages/CountryPicker";
import Datepicker from "./pages/Datepicker";
import Drawer from "./pages/Drawer";
import DropdownSelect from "./pages/Dropdown";
import FileUpload from "./pages/Fileupload";
import Input from "./pages/Inputs";
import LandingPage from "./pages/LandingPage";
import SocialMediaLogo from "./pages/Logo";
import Modals from "./pages/Modal";
import OtpInput from "./pages/Otp";
import Radiobutton from "./pages/Radiobutton";
import Rangerslider from "./pages/RangeSlider";
import Resources from "./components/Resources"; 
import SearchCategory from "./pages/Searchinput";
import Stepper from "./pages/Stepper";
import Switches from "./pages/Switches";
import Tables from "./pages/Table";
import Tabs from "./pages/Tabs";
import TextAreas from "./pages/TextAreas";
import CodeSelect from "./pages/TelSelect";
import Tooltips from "./pages/Tooltip";
import TreeSelector from "./pages/TreeSelect";
import Tagifys from "./pages/Tagify";
import Iconlibrary from './components/Iconlibrary';     

const routes = [
    {
        path: "/",
        element: <LandingPage />,
    },
    {
        path: "",
        element: <DashboardLayout />,
        children: [
            {
                path: "/components",
                element: <Components />,
            },
            {
                path: "/components/accordions",
                element: <AccordionComp />,
            },
            {
                path: "/components/alerts",
                element: <Alerts />,
            },
            {
                path: "/components/avatars",
                element: <Avatars />,
            },
            {
                path: "/components/badges",
                element: <Badges />,
            },
            {
                path: "/components/breadcrumbs",
                element: <BreadCrumbs />,
            },
            {
                path: "/components/buttons",
                element: <Buttons />,
            },
            {
                path: "/components/cardview",
                element: <CardViews />,
            },
            {
                path: "/components/checkbox",
                element: <Checkboxes />,
            },
            {
                path: "/components/countrypicker",
                element: <CountryPicker />,
            },
            {
                path: "/components/datepicker",
                element: <Datepicker />,
            },
            {
                path: "/components/drawer",
                element: <Drawer />,
            },
            {
                path: "/components/dropdown",
                element: <DropdownSelect />,
            },
            {
                path: "/components/file-upload",
                element: <FileUpload />,
            },
            {
                path: "/components/inputs",
                element: <Input />,
            },
            {
                path: "/components/modal",
                element: <Modals />,
            },
            {
                path: "/components/otp",
                element: <OtpInput />,
            },
            {
                path: "/components/radio-button",
                element: <Radiobutton />,
            },
            {
                path: "/components/range-slider",
                element: <Rangerslider />,
            },
            {
                path: "/components/search-input",
                element: <SearchCategory />,
            },
            {
                path: "/components/social-media-logo",
                element: <SocialMediaLogo />,
            },
            {
                path: "/components/stepper",
                element: <Stepper />,
            },
            {
                path: "/components/switches",
                element: <Switches />,
            },
            {
                path: "/components/tables",
                element: <Tables />,
            },
            {
                path: "/components/tabs",
                element: <Tabs />,
            },
            {
                path: "/components/tagify",
                element: <Tagifys />,
            },
            {
                path: "/components/tel-select",
                element: <CodeSelect />,
            },
            {
                path: "/components/textarea",
                element: <TextAreas />,
            },
            {
                path: "/components/tooltip",
                element: <Tooltips />,
            },
            {
                path: "/components/tree-select",
                element: <TreeSelector />,
            },
            {
                path: "/resources",
                children: [
                    {
                        path: "*",         
                        element: <Resources />,     
                    },  
                    // {
                    //     path: "/iconlibrary",       
                    //     element: <Iconlibrary />    
                    // },
                ]       
            },
            
        ],
    },
];

export default routes;
