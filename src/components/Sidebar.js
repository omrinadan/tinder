import React from 'react';
import {useNavigate} from 'react-router-dom';
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';

import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';
import './sideBar.css';
import Profile from './Profile';



const Sidebar = () => {
  const navigate = useNavigate();
  
  const logOut = () => {
    localStorage.clear();
    navigate('/');
  };
  return (
    <div className='parentDiv ' style={{ overflow: 'scroll initial' }}>
      {/* <CDBSidebar textColor="#fff" backgroundColor="#333"> */}
        {/* <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
            Sidebar
          </a>
        </CDBSidebarHeader> */}

        {/* <CDBSidebarContent className="sidebar-content"> */}
          {/* <CDBSidebarMenu> */}
            <NavLink exact to="/" activeClassName="activeClicked">
            <h4><strong><CDBSidebarMenuItem icon="table">Home</CDBSidebarMenuItem></strong></h4>
            </NavLink>
            <NavLink exact to="/profile" activeClassName="activeClicked">
            <h4><strong><CDBSidebarMenuItem icon="user">Profile page</CDBSidebarMenuItem></strong></h4>
            </NavLink>

            {/* <Nav.Link as={Link} to="/profile">profile</Nav.Link> */}

            <NavLink exact to="/settingsScreen" activeClassName="activeClicked">
            <h4><strong><CDBSidebarMenuItem icon="columns">Settings</CDBSidebarMenuItem></strong></h4>
            </NavLink>
            {/* <NavLink exact to="/analytics" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">Analytics</CDBSidebarMenuItem>
            </NavLink> */}

            
            {/* <NavLink exact to="/" activeClassName="activeClicked"> */}
            <h4><strong><CDBSidebarMenuItem onClick={() => {logOut()}} icon="exclamation-circle">Log Out</CDBSidebarMenuItem></strong></h4>
              <Routes>
            <Route path="/profile" element={<Profile />} />
            
          </Routes> 

            {/* </NavLink> */}
          {/* </CDBSidebarMenu> */}
        {/* </CDBSidebarContent> */}

        {/* <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            style={{
              padding: '20px 5px',
            }}
          >
            Sidebar Footer
          </div>
        </CDBSidebarFooter> */}
      {/* </CDBSidebar> */}
    </div>
  );
};

export default Sidebar;