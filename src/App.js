import React, {useEffect, useState} from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
// import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { MDBInput } from "mdbreact";

import { Navbar, Nav, Container, Row, Col, Button } from 'react-bootstrap';
import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import MyTabs from './components/Bottomtabs';
import FixedBottomNavigation from './components/Bottomtabs';
import Login from './components/Login';
import Register from './components/Register';
import MyModal from './components/MyModal';
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';



import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Messeges from './layouts/Messeges';
import Axios from 'axios';



function App() {

  Axios.defaults.withCredentials = true;

  // const [isLogInValid, setIsLogInValid] = useState(false);
  // const [isShown, setIsShown] = useState(true);
  // const [isShown2, setIsShown2] = useState(false);
  // const handleClick = () => {
  //   console.log('hello');
  //   // 👇️ toggle visibility

  //   setIsShown2(current => !current);
  //   console.log(isShown2);
    
  //   setIsShown(current => !current);
  //   console.log(isShown);
  // };

  // const start =  () => {
  //   Axios({
  //     method:'post',
  //     url:"http://localhost:5000/tokenforuser",
  //     headers: {
  //       "content-type": "application/json",
  //       Authorization: localStorage.getItem("omriAccessToken")
  //     },
  //   }).then((res) => {
  //     if(res.data.status === 200) {
  //       setIsLogInValid(true);
  //       console.log('hello from app file');
  //       console.log(isLogInValid);
  //       // showUsersCart();
  //     } else {
  //       localStorage.removeItem('omriAccessToken');
  //       localStorage.removeItem('clientName');
  //       setIsLogInValid(false);
  //     }
  //   });
  // }; 

  const [show, setShow] = useState(false);

  const handleClose = () => {setShow(false)};
  const handleShow = () => {setShow(true)};


  const singleEmploeyStart = () => {
   if (localStorage.getItem("E1area")) {
    if (localStorage.getItem("E1area").length==0) {
      handleShow();
      }
    } else { 
      handleShow();
    }
  };

  useEffect(() => {
   singleEmploeyStart();
  }, []);

  // if (isLogInValid) {
  return (
    <Router>
      <MyModal ClassName="my-modal" show={show} handleClose={handleClose}/>
      <Container className="App">
        <header>
          <Row>
          <br/><br/>
          </Row>
          <Row>
            <Col style={{fontSize: '30px'}} className='text-center'><strong>Gigleit</strong></Col>
          </Row>
          <Row>
          <br/>
          </Row>
        </header>
        <footer>
          <Row>
            <FixedBottomNavigation />
          </Row>
        </footer>
      </Container>
    </Router>
  );
// }
//   if (!isLogInValid) {
//   return (
//     <Router>
//       <Row>
//         <Col>
//               <div style={{marginTop: '20vh'}} className="text-center bg-dark bg-opacity-25 rounded-1 pt-3">
//                   <div>
//                       <button className='rounded-3 mb-2' onClick={handleClick}><span className={`my-class ${isShown ? 'display-block' : 'display-none'}`}>Sign-in</span>
//                                                                               <span className={`my-class ${isShown2 ? 'display-block' : 'display-none'}`}>Sign-up</span>
//                       </button>
//                   </div>
//                   <div className={` ${isShown2 ? 'display-block' : 'display-none'}`}><Login start={start} /></div>
//                   <div className={` ${isShown ? 'display-block' : 'display-none'}`}><Register handleClick={handleClick} /></div>                            
//               </div>
//         </Col>
//       </Row>
//     </Router>
//   );
// }



}

export default App;
