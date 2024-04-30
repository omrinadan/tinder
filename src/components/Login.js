import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import Axios from 'axios';
import './login.css';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';


function Login() {
  
  const [userName, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [loginSatus, setLoginStatus] = useState('');

  const [role, setRole] = useState(false);

  const navigate = useNavigate();

  Axios.defaults.withCredentials = true;

  const login = () => {
    Axios.post("http://localhost:5000/login", {
      userName: userName,
      password: password,
    }).then((response) => {
      console.log(response.data);
      if (response.data.status==="error") {
        setLoginStatus(response.data.err);
        // alert(response.data.err);
      }
      if (response.data.status==="success") {
        localStorage.setItem('omriAccessToken', response.data.token); // שומרים את פרטי הלוגיןREDUX
        localStorage.setItem('clientName', response.data.userName); // שומרים את פרטי הלוגיןREDUX
        setLoginStatus('hello '+response.data.userName+' you are logged in!');
        // alert(response.data.status);
        // if (response.data.role==='client') {
            // navigate("/");
         

       if (response.data.role==='admin') {
            setRole(true);
        } else {
          setRole(false);
        }
        
      }
    });
  };

  // const navToRegister = async () => {
  //   navigate("/register");
  // }

  const adminP = () => {
    Axios({
      method:'post',
      url:"http://localhost:5000/tokenforuser",
      headers: {
        "content-type": "application/json",
        Authorization: localStorage.getItem("omriAccessToken"),
      },
    }).then((res) => {
      if (res.data.status === 200) {  
        if (res.data.authData.results[0].role==='admin') {
          navigate('/adminpanel');
        }
      };
    });
  };

  const logout = () => {
    localStorage.removeItem('omriAccessToken');
    localStorage.removeItem('clientName');
    setLoginStatus('');
    setRole(false);
  };
  
  const checkSession =  () => {
    Axios({
      method:'post',
      url:"http://localhost:5000/tokenforuser",
      headers: {
        "content-type": "application/json",
        Authorization: localStorage.getItem("omriAccessToken"),
      },
    }).then((res) => {
      if(res.data.status === 200) {
        setLoginStatus('hello '+localStorage.getItem("clientName")+' you are logged in!');
        if (res.data.authData.results[0].role==='admin') {
          setRole(true);
        }
      }
    });
  };

  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 730;
  const breakpoint2 = 370;
  
  useEffect(() => {
    checkSession();
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
    <div className="Login">
      <main className="Login-main row text-center">
        <div className='col' >
          <span className='h2 font-weight-bold'>Login</span>
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
                    setUsername(e.target.value);
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
                      setPassword(e.target.value);
                    }}
                    placeholder='Password' />
                </FloatingLabel>
              </div>
          </div>
          <div className='row'>
              <button className={'rounded-3 mb-2'} style={{display: role ? 'block' : 'none' }} onClick={adminP}>Admin PANEL</button>
              <div className='col mt-4'>
                  <button className='rounded-3 mb-2' onClick={login}>Login</button>
                  <button className='rounded-3 mb-2' onClick={logout}>Logout</button>
              </div>
              <div>
                  <h3 className='text-capitalize'>{loginSatus}</h3>
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
    <div className="Login">
      <main className="Login-main row text-center">
        <div className='col' >
          <span className='h2 font-weight-bold'>Login</span>
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
                    setUsername(e.target.value);
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
                      setPassword(e.target.value);
                    }}
                    placeholder='Password' />
                </FloatingLabel>
              </div>
          </div>
          <div className='row'>
            <button className={'rounded-3 mb-2'} style={{display: role ? 'block' : 'none' }} onClick={adminP}>Admin PANEL</button>
              <div className='col'>
                  <button className='rounded-3 mb-2' onClick={login}>Login</button>
                  <button className='rounded-3 mb-2' onClick={logout}>Logout</button>
              </div>
              <div>
                  <h3 className='text-capitalize'>{loginSatus}</h3>
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
  <div className="Login">
    <main className="Login-main row text-center">
      <div className='col' >
        <span className='h2 font-weight-bold'>Login</span>
        <div className='row'>
          <div className='col-4'>
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
                  setUsername(e.target.value);
                }}
                placeholder="User Name" />
            </FloatingLabel>
          </div>
          <div className='col-4'>
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
                  setPassword(e.target.value);
                }}
                placeholder='Password' />
            </FloatingLabel>
          </div>
          <div className='col-4'>
              <button className='rounded-3 mb-2 col' onClick={login}>Login</button>
              <button className='rounded-3 mb-2 col' onClick={logout}>Logout</button>
          </div>
        </div>    
        <div className='row'>
              <h3 className='text-capitalize'>{loginSatus}</h3>
        </div>
        <div className='row'>
          <button className={'rounded-3 mb-2'} style={{display: role ? 'block' : 'none' }} onClick={adminP}>Admin PANEL</button>
        </div>    
      </div>
    </main>
  </div>
  </>
);
}

export default Login;
