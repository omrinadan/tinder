import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';
import './register.css';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';



function Register() {

  const [usernameReg, setUsernameReg] = useState('');
  const [passwordReg, setPasswordReg] = useState('');
  const [emailReg, setEmailReg] = useState('');
  const [roleReg, setRoleReg] = useState('');
  const [regSatus, setRegStatus] = useState('');

  Axios.defaults.withCredentials = true;

  const register = () => {
    Axios.post("http://localhost:5000/register", {
      role: roleReg,
      email: emailReg,
      userName: usernameReg,
      password: passwordReg,
    }).then((response) => {
      if (response.data.status==="error") {
        setRegStatus(response.data.err);
      } else if (response.data.status==='success') {
        setRegStatus(response.data.status);
      }
    });
  };
  
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 730;
  const breakpoint2 = 415;

  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    // subscribe to window resize event "onComponentDidMount"
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      // unsubscribe "onComponentDestroy"
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);
  
  if ( width > breakpoint) {
  return (
    <>
    <div className="Register">
      <main className="Register-main row text-center">
        <div className='col' >
            <span className='h2 font-weight-bold'>Register</span>
            <div className='row'>
              <div className='col'>
                <FloatingLabel
                  controlId="floatingInput"
                  label="E-mail"
                  className="mb-3"
                >
                  <Form.Control 
                    className='floatingPadding'
                    type="text"
                    // required='true' 
                    onChange={(e) => {
                      setEmailReg(e.target.value);
                    }}
                    placeholder="name@example.com" />
                </FloatingLabel>
              </div>
            </div>
            <div className='row'>        
              <div className='col'>
                <FloatingLabel
                  controlId="floatingInput"
                  label="User Name"
                  className="mb-3"
                >
                  <Form.Control 
                    className='floatingPadding'
                    type="text"
                    // required='true' 
                    onChange={(e) => {
                      setUsernameReg(e.target.value);
                    }}
                    placeholder='User Name' />
                </FloatingLabel>
              </div>
            </div>
            <div className='row'>
              <div className='col'>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Password"
                  className="mb-3"
                >
                  <Form.Control 
                    className='floatingPadding'
                    type="text"
                    // required='true' 
                    onChange={(e) => {
                      setPasswordReg(e.target.value);
                      }}
                    placeholder='Password' />
                </FloatingLabel>
              </div>
            </div>
            <div className='row'>
              <div className='col'>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Select One"
                  className="mb-3"
                >
                  <Form.Select 
                    className='floatingPadding'
                    type="text"
                    // required='true' 
                    onChange={(e) => {
                      setRoleReg(e.target.value);
                      }}
                    placeholder='Select One' >
                    <option value="Emploee">Looking For A Job</option>
                    <option value="Employer">Looking For Emploee</option>
                  </Form.Select>
                </FloatingLabel>
              </div>
            </div>
            <div className='row'>
                <div className='col mt-4'>
                    <button className='rounded-3 mb-2' onClick={register}>Register</button>
                    {/* <button className='rounded-3 mb-2' onClick={logout}>Logout</button> */}
                    <h3>{regSatus}</h3>
                </div>
            </div>
        </div>
      </main>
    </div>
    </>
  );
}

if (width < breakpoint2) {
    return (
    <>
    <div className="Register">
      <main className="Register-main row text-center">
        <div className='col' >
            <span className='h2 font-weight-bold'>Register</span>
            <div className='row'>
              <div className='col'>
                <FloatingLabel
                  controlId="floatingInput"
                  label="E-mail"
                  className="mb-3"
                >
                  <Form.Control 
                    className='floatingPadding'
                    type="text"
                    // required='true' 
                    onChange={(e) => {
                      setEmailReg(e.target.value);
                    }}
                    placeholder="name@example.com" />
                </FloatingLabel>
              </div>
            </div>
            <div className='row'>        
              <div className='col'>
                <FloatingLabel
                  controlId="floatingInput"
                  label="User Name"
                  className="mb-3"
                >
                  <Form.Control 
                    className='floatingPadding'
                    type="text"
                    // required='true' 
                    onChange={(e) => {
                      setUsernameReg(e.target.value);
                    }}
                    placeholder="User Name" />
                </FloatingLabel>
              </div>
            </div>
            <div className='row'>
              <div className='col'>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Password"
                  className="mb-3"
                >
                  <Form.Control 
                    className='floatingPadding'
                    type="text"
                    // required='true' 
                    onChange={(e) => {
                      setPasswordReg(e.target.value);
                    }}
                    placeholder="Password" />
                </FloatingLabel>
              </div>
            </div>
            <div className='row'>
              <div className='col'>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Select One"
                  className="mb-3"
                >
                  <Form.Select 
                    className='floatingPadding'
                    type="text"
                    // required='true' 
                    onChange={(e) => {
                      setRoleReg(e.target.value);
                      }}
                    placeholder='Select One' >
                    <option value="Emploee">Looking For A Job</option>
                    <option value="Employer">Looking For Emploee</option>
                  </Form.Select>
                </FloatingLabel>
              </div>
            </div>
            <div className='row'>
                <div className='col mt-4'>
                    <button className='rounded-3 mb-2' onClick={register}>Register</button>
                    {/* <button className='rounded-3 mb-2' onClick={logout}>Logout</button> */}
                    <h3>{regSatus}</h3>
                </div>
            </div>
        </div>
      </main>
    </div>
    </>
  );
}

return (
    <>
    <div className="Register">
      <main className="Register-main row text-center">
        <div className='col' >
            <span className='h2 font-weight-bold'>Register</span>
            <div className='row'>
                <div className='col-3'>
                    <FloatingLabel
                      controlId="floatingInput"
                      label="E-mail"
                      className="mb-3"
                    >
                      <Form.Control 
                        className='floatingPadding'
                        type="text"
                        // required='true' 
                        onChange={(e) => {
                          setEmailReg(e.target.value);
                        }}
                        placeholder="name@example.com" />
                    </FloatingLabel>
                </div>
                <div className='col-3'>
                    <FloatingLabel
                      controlId="floatingInput"
                      label="User Name"
                      className="mb-3"
                    >
                      <Form.Control 
                        type="text"
                        className='floatingPadding'
                        // required='true' 
                        onChange={(e) => {
                          setUsernameReg(e.target.value);
                        }}
                        placeholder="User Name" />
                    </FloatingLabel>
                </div>
                <div className='col-3'>
                    <FloatingLabel
                      controlId="floatingInput"
                      label="Password"
                      className="mb-3"
                    >
                      <Form.Control 
                        className='floatingPadding'
                        type="text"
                        // required='true' 
                        onChange={(e) => {
                          setPasswordReg(e.target.value);
                        }}
                        placeholder="Password" />
                    </FloatingLabel>

                </div>
              <div className='col-3'>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Select One"
                  className="mb-3"
                >
                  <Form.Select 
                    className='floatingPadding'
                    type="text"
                    // required='true' 
                    onChange={(e) => {
                      setRoleReg(e.target.value);
                      }}
                    placeholder='Select One' >
                    <option value="Emploee">Looking For A Job</option>
                    <option value="Employer">Looking For Emploee</option>
                  </Form.Select>
                </FloatingLabel>
              </div>
                <div className='col-3'>
                    <button className='rounded-3' onClick={register}>Register</button>
                    {/* <button className='rounded-3 mb-2' onClick={logout}>Logout</button> */}
                </div>
                <div>
                    <h3>{regSatus}</h3>
                </div>
            </div>
        </div>
      </main>
    </div>
    </>
  );
}

export default Register;
