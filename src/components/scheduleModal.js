import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button, Row, Col, Table } from "react-bootstrap";
import {useNavigate} from 'react-router-dom';
import React, {useEffect, useState} from 'react';
import Axios from 'axios';
// import './myModal.css';

function ScheduleModal({show, handleClose}) {

    Axios.defaults.withCredentials = true;
  
    const navigate = useNavigate();
    
    

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
            
        </Col>
        <Col className='text-center'>
        <Button variant="secondary" onClick={() => handleClose()}>
            OK
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

export default ScheduleModal;