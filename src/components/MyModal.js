import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button, Row, Col, Table } from "react-bootstrap";
import {useNavigate} from 'react-router-dom';
import React, {useEffect, useState} from 'react';
import Axios from 'axios';
import './myModal.css';

function MyModal({show, handleClose}) {

    Axios.defaults.withCredentials = true;
  
    const navigate = useNavigate();
    const navToProfile = async () => {
      navigate("/profile");
    };
    const closeMoveToProfile = () => {
      handleClose();
      navToProfile();
    };

    return (
        <Modal className="my-modal" show={show} 
        // onShow={showCart}
         onHide={handleClose} centered scrollable>
        <Modal.Header
        //  closeButton
         >
          <Modal.Title>
Please Fill Your Profile      
    </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ height: '30vh' }}>
        <Col className='text-center'>        
            <svg xmlns="http://www.w3.org/2000/svg" width="45" height="170" fill="currentColor" class="bi bi-arrow-down" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/>
            </svg>
        </Col>
        <Col className='text-center'>
        <Button variant="secondary" onClick={closeMoveToProfile}>
            Let's Go Fill it
          </Button>
      {/* <Table bordered responsive >
            
          </Table> */}
          </Col>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" >
            Pay
          </Button>
        </Modal.Footer> */}
      </Modal>
    );
}  

export default MyModal;