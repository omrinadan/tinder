import React, {useEffect, useState} from 'react';
import { Navbar, Nav, Container, Row, Col, Button } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import RangeSlider from 'react-bootstrap-range-slider';
import { MDBInput } from "mdbreact";
import { MDBFile } from 'mdb-react-ui-kit';






function Profile() {

    const [ area, setArea ] = useState(''); 
    const [ SOP, setSOP ] = useState(''); 
    const [ salary, setSalary ] = useState(1); 
    const [ education, setEducation ] = useState(''); 
    const [ experiance, setExperiance ] = useState(''); 
    const [ aboutMe, setAboutMe ] = useState(''); 
    const [ yourPhoto, setYourPhoto ] = useState(''); 


    useEffect(() => {
        if (localStorage.getItem('E1area')) {
            setArea(localStorage.getItem('E1area'));
        }
        if (localStorage.getItem('E1sop')) {
            setSOP(localStorage.getItem('E1sop'));
        }
        if (localStorage.getItem('E1salary')) {
            setSalary(localStorage.getItem('E1salary'));
        }
        if (localStorage.getItem('E1education')) {
            setEducation(localStorage.getItem('E1education'));
        }
        if (localStorage.getItem('E1experiance')) {
            setExperiance(localStorage.getItem('E1experiance'));
        }
        if (localStorage.getItem('E1aboutMe')) {
            setAboutMe(localStorage.getItem('E1aboutMe'));
        }
    }, []);

        return (
           <Container style={{height:'70vh', overflow: 'auto'}}>
            <Row>
            <Col>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Find A Job Near"
                  className="mb-3"
                >
                    <Form.Select 
                    value={area}
                    className='floatingPadding'
                    type="text"
                    onChange={(e) => {
                      setArea(e.target.value);
                      console.log(e.target.value);
                    }} 
                     >
                        <option disabled={true} value=''>Select A City</option>
                        <option value='All'>All</option>
                        <option value="Haifa">Haifa</option>
                        <option value="Tel-Aviv">Tel-Aviv</option>
                        <option value="Be'er-Sheva">Be'er-Sheva</option>
                    </Form.Select>
                </FloatingLabel>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Sort Of Position"
                  className="mb-3"
                >
                    <Form.Select 
                    value={SOP}
                    className='floatingPadding'
                    type="text"
                    onChange={(e) => {
                      setSOP(e.target.value);
                      console.log(e.target.value);
                    }} 
                    >
                        <option disabled={true} value=''>Select One</option>
                        <option value="All">All</option>
                        <option value="Full-Time">Full-Time</option>
                        <option value="Half-Time">Half-Time</option>
                        <option value="Part-Time">Part-Time</option>
                    </Form.Select>
                </FloatingLabel>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Salary"
                  className="mb-3"
                >
                  <RangeSlider
                    onChange={(e) => {
                        setSalary(e.target.value);
                        console.log(e.target.value);
                      }}
                    min={1}
                    max={20000}
                  />
                  <Form.Control 
                  disabled={true}
                  value={salary}
                    className='floatingPadding'
                    type="text"
                    />
                </FloatingLabel>
                  <MDBInput label="Education" type="textarea" rows="5" value={education} onChange={(e) => {setEducation(e.target.value);
                                                                        console.log(e.target.value);
                                                                }} />
                  <MDBInput label="Experiance" type="textarea" rows="5" value={experiance} onChange={(e) => {setExperiance(e.target.value);
                                                                        console.log(e.target.value);
                                                                }} />
                  <MDBInput label="About Me" type="textarea" value={aboutMe} rows="5" onChange={(e) => {setAboutMe(e.target.value);
                                                                        console.log(e.target.value);
                                                                }} />
                <FloatingLabel
                  controlId="floatingInput"
                  label="Your Photo"
                  className="mb-3"
                >
                <MDBFile id='customFile' onChange={(e) => {
                    setYourPhoto(e.target.value);
                    console.log(e.target.value);
                }}/>
                </FloatingLabel>
                <Button onClick={() => {
                    localStorage.setItem('E1area', area);
                    localStorage.setItem('E1sop', SOP);
                    localStorage.setItem('E1salary', salary);
                    localStorage.setItem('E1education', education);
                    localStorage.setItem('E1experiance', experiance);
                    localStorage.setItem('E1aboutMe', aboutMe);
                    // localStorage.setItem('E1area', 'response.data.userName')
                                }}>save</Button>
            </Col>
          </Row>
           </Container>
        );
};

export default Profile;