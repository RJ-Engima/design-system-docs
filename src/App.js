import React from "react";
import { useRoutes, Route, Routes, Switch } from "react-router-dom";
import { HelmetProvider, Helmet } from "react-helmet-async";
import routes from "./routes";
import Dashboard from "./layouts/Dashboard";
import Alerts from "./pages/Alerts";
import Buttons from "./pages/Buttons";
import Accordions from './pages/Accordions'
import Components from "./pages/Components";
import Resources from "./components/Resources";
import LandingPage from "./pages/LandingPage";
import Tabs from './pages/Tabs';
import Modal from './pages/Modal';
import CardView from './pages/CardView';
import Badge from './pages/Badge';
import Avatars from './pages/Avatars';
import BreadCrumbs from "./pages/BreadCrumb";
import TextAreas from "./pages/TextAreas";
import Inputs from "./pages/Inputs";
import CountryPicker from "./pages/CountryPicker";
import DropdownSelect from "./pages/Dropdown";
import Tagify from './pages/Tagify';
import Otp from "./pages/Otp";
import TreeSelect from "./pages/TreeSelect";
import Stepper from "./pages/Stepper";
import FileUpload from "./pages/Fileupload";
import TelSelect from "./pages/TelSelect";
import SearchInput from "./pages/Searchinput";
import Checkbox from './pages/Checkbox';
import Logo from './pages/Logo';
import Radiobutton from './pages/Radiobutton';
import Rangerslider from "./pages/RangeSlider";
import Switches from "./pages/Switches";
import Datepicker from "./pages/Datepicker";
import Drawer from "./pages/Drawer";
import Table from './pages/Table';
import Tooltip from "./pages/Tooltip";
import Iconlibrary from "./components/Iconlibrary";
import PaginationComp from "./pages/Pagination";
import Issues from "./pages/Issues";
import Login from "./pages/Login";
import AuthRoutes from "./utils/Auth";
import Signup from "./pages/Signup";
import IndvIssues from "./pages/IndvIssues";
import GetStarted from "./pages/GetStarted";



function App() {
  const [newside, setNewside] = React.useState(true);
  // const content = useRoutes(routes);
  return (
    <Routes>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/" element={<LandingPage />}></Route>
      <Route element={<Dashboard />}>
        {/* < Route element = {<AuthRoutes/>}> */}
        <Route path="/components" element={<Components />} >
          <Route path="alerts" element={<Alerts />} />
          <Route path="accordions" index element={<Accordions />} />
          <Route path="buttons" element={<Buttons />} />
          <Route path="tabs" element={<Tabs />} />
          <Route path="modal" element={<Modal />} />
          <Route path="cardview" element={<CardView />} />
          <Route path="badges" element={<Badge />} />
          <Route path="avatars" element={<Avatars />} />
          <Route path="breadcrumbs" element={<BreadCrumbs />} />
          <Route path="textarea" element={<TextAreas />} />
          <Route path="inputs" element={<Inputs />} />
          <Route path="countrypicker" element={<CountryPicker />} />
          <Route path="dropdown" element={<DropdownSelect />} />
          <Route path="otp" element={<Otp />} />
          <Route path="tagify" element={<Tagify />} />
          <Route path="tree-select" element={<TreeSelect />} />
          <Route path="stepper" element={<Stepper />} />
          <Route path="file-upload" element={<FileUpload />} />
          <Route path="searchinput" element={<SearchInput />} />
          <Route path="checkbox" element={<Checkbox />} />
          <Route path="social-media-logo" element={<Logo />} />
          <Route path="radio-button" element={<Radiobutton />} />
          <Route path="range-slider" element={<Rangerslider />} />
          <Route path="tel-select" element={<TelSelect />} />
          <Route path="search-input" element={<SearchInput />} />
          <Route path="checkbox" element={<Checkbox />} />
          <Route path="logo" element={<Logo />} />
          <Route path="switches" element={<Switches />} />
          <Route path="datepicker" element={<Datepicker />} />
          <Route path="drawer" element={<Drawer />} />
          <Route path="tables" element={<Table />} />
          <Route path="tooltip" element={<Tooltip />} />
          <Route path="pagination" element={<PaginationComp />} />
        </Route>
        <Route path="get-started" element={<GetStarted />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/resources/iconlibrary" element={<Iconlibrary />} />
        <Route path="/issues" element={<Issues />} >
        </Route>
        {/* <Route path="/issues/:id" element={<IndvIssues />} /> */}
      </Route>
      {/* </Route> */}
    </Routes>
  );
}

export default App;
