import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

import BradImage from './Brad.jpg';
import ScarletImage from './SCARLET.png'
import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import { Container, Nav, Card, Button, CardColumns } from 'react-bootstrap';


function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">BC·SOFTWARE</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="http://foundry.bcsoftware.org">Foundry</Nav.Link>
            <Nav.Link href="#link">Resume</Nav.Link>
            <Nav.Link href="#link">Portfolio</Nav.Link>
            <Nav.Link href="#link">Services</Nav.Link>
            <Nav.Link href="#link">About Me</Nav.Link>
            <Nav.Link href="#link">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className="cardContainer">
        <CardColumns className = "largeColumn">
          <Card style={{ width: '100%' }} className="largeCard card text-white bg-dark mb-3">
              <Card.Img variant="top" src= {BradImage} />
              <Card.Body>
                <Card.Title>About Me</Card.Title>
                <Card.Text> Learn a little bit about myself and BC·SOFTWARE</Card.Text>
                <Button variant="secondary">Let's Go!</Button>
              </Card.Body>
          </Card>
        </CardColumns>
        <CardColumns className = "smallColumn">
          <Card style={{ width: '100%' }} className="smallCard card text-white bg-dark mb-3">
            <Card.Img variant="top" src= {ScarletImage} />
              <Card.Body>
                <Card.Title>Portfolio</Card.Title>
                <Card.Text> Learn about what I've been working on!</Card.Text>
                <Button variant="secondary">Check it out!</Button>
              </Card.Body>
          </Card>
          <Card style={{ width: '100%' }} className="smallCard card text-white bg-dark mb-3">
            <Card.Img variant="top" src= {ScarletImage} />
            <Card.Body>
              <Card.Title>Hobbies</Card.Title>
              <Card.Text> A Hub for all my interests</Card.Text>
              <Button variant="secondary">Explore my mind!</Button>
            </Card.Body>
          </Card>
        </CardColumns>
        <CardColumns className = "smallColumn">
        <Card style={{ width: '100%' }} className="smallCard card text-white bg-dark mb-3">
            <Card.Img variant="top" src= {ScarletImage} />
              <Card.Body>
                <Card.Title>Contact Me</Card.Title>
                <Card.Text> Business inquiries, or just to chit-chat</Card.Text>
                <Button variant="secondary">Reach out!</Button>
              </Card.Body>
          </Card>
          <Card style={{ width: '100%' }} className="smallCard card text-white bg-dark mb-3">
            <Card.Img variant="top" src= {ScarletImage} />
              <Card.Body>
                <Card.Title>Other</Card.Title>
                <Card.Text> Pog</Card.Text>
                <Button variant="secondary">Poggers!</Button>
              </Card.Body>
          </Card>
        </CardColumns>
      </div>

      <footer className="bg-light text-center text-lg-start footer">
      
        <div className="text-center p-3 footerContainer">
          
          <div className="footerColumn">
            <h4>Quick Links</h4>
            <p>Link Here</p>
            <p>Link Here</p>
          </div>
          <div className="footerColumn">
            <h4>Reference</h4>
            <p>Link Here</p>
            <p>Link Here</p>
          </div>
          <div className="footerColumn">
            <h4>External</h4>
            <p>Link Here</p>
            <p>Link Here</p>
          </div>


        </div>


        
      </footer>

    </div>
  );
}

export default App;