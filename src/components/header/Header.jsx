import React from 'react';
import LongMenu from './menu'
import { CgProfile} from 'react-icons/cg';
import {IconContext} from 'react-icons'
import '../../styles/Header.css'
function Header() {
    return (
        <div className="profile">
            <div className="profile-icon">
            <IconContext.Provider value={{ size:"22px",color:"#022742"}}>
            <CgProfile /> 
            </IconContext.Provider>
            </div>
            <h4 className="profile-name">Adithya Prasad</h4>
            <div className="profile-menu">
            <LongMenu />
            </div>
        </div>
    )
}
// font - weight: bold;
// font - size: 25px;
// line - height: 33px;

// color: #022742;

export default Header
