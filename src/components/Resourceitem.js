import React from 'react';
import {Link,useLocation} from 'react-router-dom';

const PathName = (props) => { 
  let location = useLocation(); 
  
  const {pathname} = location;
  
  return <Link id={props.id} className={`${pathname === `${props.pathName}` ?   "ACTIVATE_LINK"  : 'INACTIVATE_LINK' }`} to={props.to}>{props.Text}</Link>
}


const Resourceitem = [  
    { 
      type: 'group',      
      label: 'Group',  
      children: [
        {
         label : <PathName id="resources" pathName="/resources/iconlibrary" to="/resources/iconlibrary" Text="Icon Library" /> ,
          key: 'resources', 
          icon: <i className="icon icon-Line-Dev-Server"></i>,  
        }
      ],  
    }   
]

export default Resourceitem;
