import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from 'react-bootstrap/Navbar'
import { Container, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">BC·SOFTWARE</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
          <Nav className="me-auto">
            <Nav.Link href="http://foundry.bcsoftware.org">DnD-Foundry</Nav.Link>
            <Nav.Link href="#link">Resume WIP</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className="cardContainer">
        <div className="column" ></div>
        <div className="column" ></div>
      </div>

        
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello Bradford</h1>
      </header>
    </div>
  );
}

export default App;