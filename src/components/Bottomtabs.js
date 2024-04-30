import React, { Component }  from 'react';
import './bottomtabs.css';
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route, Link, NavLink} from 'react-router-dom';
import HomeScreen from '../layouts/HomeScreen';
import SettingsScreen from '../layouts/SettingsScreen';
import Messeges from '../layouts/Messeges';
import Profile from './Profile';


function MyTabs() {
        return (
            <nav className='primary-nav'>
          <Navbar collapseOnSelect fixed='bottom'  bg='light' variant='light'>
            <Container className='navT'>
              {/* <Navbar.Toggle aria-controls='responsiv-navbar-nav' />
              <Navbar.Collapse id='responsiv-navbar-nav'> */}
                <Nav className='m-auto'>
                      <Nav.Link as={Link} to="/settingsScreen"><h3><strong>Settings</strong></h3></Nav.Link>
                      <Nav.Link as={Link} to="/"><h3><strong>Home</strong></h3></Nav.Link>
                      <Nav.Link as={Link} to="/messeges"><h3><strong>Messeges</strong></h3></Nav.Link>
                </Nav>
              {/* </Navbar.Collapse> */}
            </Container>
          </Navbar>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/SettingsScreen" element={<SettingsScreen />} />
            <Route path="/messeges" element={<Messeges />} />
            <Route path="/profile" element={<Profile />} />

          </Routes> 
          </nav>
        );
};

export default MyTabs;