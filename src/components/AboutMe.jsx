import React from 'react'

import { Container, Row, Col, Card } from "react-bootstrap";
import { faCode, faGamepad, faGraduationCap, faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const AboutMe = () => {
  return (
    <Container>
        <h2 className='text-center' style={{fontSize:'45px',color:'#9a00ff'}} id='about'>About Me</h2>
      <Row className="justify-content-center">
          <Col md={4} className='mt-3'>
            <Card className="border-1" style={{height:'335px',borderColor:'#537fe7'}}>
              <Card.Body className="text-center">
                <Card.Title>Education</Card.Title>
                <div className="display-1 mb-4">
                  <FontAwesomeIcon icon={faGraduationCap} color='#9a00ff' />
                </div>
                <Card.Text>✔ Full Stack Node.js - DigitalHouse</Card.Text>
                <Card.Text>✔ Intensive React Course - Fundación Formar</Card.Text>
                <Card.Text>✔ Physical Education Teacher - UNPAZ</Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} className='mt-3'>
            <Card className="border-1" style={{height:'335px',borderColor:'#537fe7'}}>
              <Card.Body className="text-center">
                <Card.Title>Experience</Card.Title>
                <div className="display-1 mb-4">
                  <FontAwesomeIcon icon={faCode} color='#9a00ff' />
                </div>
                <Card.Text style={{marginTop:'-10px'}}><span style={{fontWeight:'bold'}} >✔ Assistant Professor:</span> Provided tutoring for two classes and supervised their integrative projects during their full stack developer course.</Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} className='mt-3'>
            <Card className="border-1" style={{height:'335px',borderColor:'#537fe7'}}>
              <Card.Body className="text-center">
                <Card.Title>Hobbies</Card.Title>
                <div className="display-1 mb-4">
                  <FontAwesomeIcon icon={faGamepad} color='#9a00ff' />
                </div>
                <Card.Text>✔ Gaming</Card.Text>
                <Card.Text>✔ Hanging out with friends</Card.Text>
                <Card.Text>✔ Physical activities</Card.Text>
                <Card.Text>🧉 Mate! (is a native Tea of my Country)</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          
      </Row>
    </Container>
  )
}
