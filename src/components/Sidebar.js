import React,{useState,useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import { Sidebar,DrawerSidebar } from 'm2p-dsl'
import NavItems from './NavItems'
import Resourceitem from './Resourceitem';


const Sidebars = ({navBar,mainContent,footerEnd}) => {
// icon library routing
let location = useLocation();
const [collapsed, setCollapsed] = useState(false);

const pathName = location.pathname;

// console.log(pathName);

const [ishow,setIshow] = useState(false);

useEffect(() => {
    if (pathName === "/resources") {
        setIshow(false);
        // console.log('resources');
    } else if(pathName === "/resources/iconlibrary") {
        setIshow(false);
        console.log('icon library');
    }   else {
        setIshow(true);
        // console.log('Components');
    }
},[pathName])
// icon library routing

    return (
        <React.Fragment>
            <DrawerSidebar
                layoutClass="light"
                showHeader={true}
                showFooter={false}
                footerEnd={footerEnd}
                siderTheme="light"
                collapsed={collapsed}
                onCollapse={(value) => setCollapsed(value)}
                menuTheme="light"
                navBar={navBar}
                selectedKeys={pathName}
                items={ishow ? NavItems : Resourceitem}
                mainContent={mainContent}
                dashBoardHeaderText="Dashboard"
                dashBoardHeaderIcon={<i className="icon icon-Line-System-Dashboard"></i>}
            />
        </React.Fragment>
    );
};



export default Sidebars;
