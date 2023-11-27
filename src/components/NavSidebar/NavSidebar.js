import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  
} from './NavbarElements';
import { BiSolidDashboard } from "react-icons/bi";
import { FaUserClock } from "react-icons/fa";
import { PiSpeakerSimpleHighFill } from "react-icons/pi";
import { IoMdSettings } from "react-icons/io";
  
const NavSidebar = () => {
  return (
    <>
      <Nav>
        <Bars />
  
        <NavMenu>
          <NavLink to='/dashboard' activeStyle>
          <BiSolidDashboard style={{marginTop:"5px"}}/> Dashboard
          </NavLink>
          <NavLink to='/appointment' activeStyle>
          <FaUserClock style={{marginTop:"5px"}}/>Appointment
          </NavLink>
          <NavLink to='/announcement' activeStyle>
          <PiSpeakerSimpleHighFill style={{marginTop:"5px"}}/>Announcement
          </NavLink>
          <NavLink to='/settings' activeStyle>
          <IoMdSettings style={{marginTop:"5px"}}/> Settings
          </NavLink>
        </NavMenu>
        
      </Nav>
    </>
  );
};
  
export default NavSidebar;
