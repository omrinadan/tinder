import './messeges.css';
import React, {useEffect, useState, useRef} from 'react';
import { Navbar, Nav, Container, Row, Col, Button } from 'react-bootstrap';
import ScheduleModal from '../components/scheduleModal';

import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBSwitch,
  MDBTypography,
} from "mdb-react-ui-kit";


function Messeges() {


  // const [userName, setUsername] = useState('');



  // useEffect(() => {
  //   if (JSON.parse(localStorage.getItem('gwtWaffles'))==null) {
  //     let matches = [];
  //   }
  // }, []);

  const [show, setShow] = useState(false);

  const handleClose = () => {setShow(false)};
  const handleShow = () => {setShow(true)};


 let matches = JSON.parse(localStorage.getItem('gwtWaffles')) ? JSON.parse(localStorage.getItem('gwtWaffles')) : [];


return (
  <Container >
    <ScheduleModal ClassName="my-modal" show={show} handleClose={handleClose}/>
    <Row  style={{height: "7vh"}}></Row>
    <Row  style={{ position: "relative",  overflow: 'auto'  }}>
          {matches.map((match,i) => {
            return (
              <MDBCard onClick={() => handleShow()} className="mb-3">
              <MDBCardBody>
                <div className="d-flex flex-start">
                  <MDBCardImage
                    style={{height:'10vh'}}
                    className="rounded-circle shadow-1-strong me-3"
                    src={match.pic}
                    alt="avatar"
                    width="85"
                    height="60"
                  />

                  <div className="w-100">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <MDBTypography
                        tag="h6"
                        className="text-primary fw-bold mb-0"
                      >
                        lara_stewart
                        <span className="text-dark ms-2">
                          Hmm, This poster looks cool
                        </span>
                      </MDBTypography>
                      <p className="mb-0">2 days ago</p>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <p className="small mb-0" style={{ color: "#aaa" }}>
                        <a href="#!" className="link-grey">
                          Remove
                        </a>{" "}
                        •
                        <a href="#!" className="link-grey">
                          Reply
                        </a>{" "}
                        {/* •
                        <a href="#!" className="link-grey">
                          Translate
                        </a> */}
                      </p>
                      <div className="d-flex flex-row">
                        <MDBIcon fas icon="star text-warning me-2" />
                        <MDBIcon
                          far
                          icon="check-circle"
                          style={{ color: "#aaa" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </MDBCardBody>
            </MDBCard>
            )
          })}
    </Row>
   
  </Container>
);

  // const bottomRef = useRef(null);
  // const bottomRef2 = useRef(null);

  // const [messegeToSend, setMessegeToSend] = useState('');
  // const [postedMessege, setPostedMessege] = useState([]);

  
  // const sendTxt = () => {
  //   if (messegeToSend.length>0) {
  //   console.log(messegeToSend);
  //   setPostedMessege([...postedMessege, messegeToSend]);
  //   console.log(postedMessege);
  //   };
  // };

  // useEffect(() => {
  //   // 👇️ scroll to bottom every time messages change
  //   bottomRef.current?.scrollIntoView({behavior: 'smooth'});
  // }, [postedMessege]);

  // useEffect(() => {
  //   bottomRef2.current?.scrollIntoView({ behavior: 'instant' });
  // }, []);

      //   return (
      //       <div >
      //         <Container >שגדג
      //           {/* <Row  style={{ position: "relative", height: "50vh",  overflow: 'auto'  }}> */}
      //           {A.map((match,i) => {
      // <Row>z{match}</Row>
      // })}
      //           {/* </Row> */}
                
      //         </Container>
      //     </div>
      //   );
        // return (
        //     <div >
        //       <Container >
        //         <Row  style={{ position: "relative", height: "50vh",  overflow: 'auto'  }}>
        //           <div class="imessage">
        //             <p class="from-them">Hey, How was your day?</p>
        //             <p class="from-me">Alright, thou my head hurts</p>
        //             <p class="from-them margin-b_one">What about an Advil pill?</p>
        //             <p class="from-me no-tail emoji">👍🏻</p>
        //             <p class="from-me">Good idea, thanx</p>

        //             {Array.isArray(postedMessege) ?
        //               postedMessege.map((order,i) => {
        //                 return (
        //                 <p ref={bottomRef} class="from-me">{order}</p>
        //                 )
        //               }):postedMessege}
        //               <div ref={bottomRef2}></div>
        //           </div>                  
                  
        //         </Row>
        //         <Row  style={{height: '1vh'}}></Row>
        //         <Row  style={{height: '7vh'}}>
        //           <Col className='d-flex'>
        //             <Form.Control 
        //               className='floatingPadding'
        //               type="text"
        //               // required='true' 
        //               onChange={(e) => {
        //                 setMessegeToSend(e.target.value);
        //                 console.log(e.target.value);
        //               }}
        //               placeholder="Type Here"
        //               style={{height: '50px'}}
        //             />
        //             <Button onClick={sendTxt} style={{height: '50px'}}>Send</Button>
        //           </Col>
        //         </Row>
        //       </Container>
        //   </div>
        // );
       
};

export default Messeges;