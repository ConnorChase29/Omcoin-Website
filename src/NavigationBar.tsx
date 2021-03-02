import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import './NavigationBar.css';

export class NavigationBar extends React.Component<{}, {}>
{
  render() {
    return (

      <div>
        <Navbar bg="light" expand="lg">
          <div className="brandSpacing">
            <Navbar.Brand href="#home">Omcoin</Navbar.Brand>
          </div>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <div className="PageLinks">
              <Nav className="mr-auto">
                <Nav.Link href="#home">Overview</Nav.Link>
                <Nav.Link href="#link">Features</Nav.Link>
              </Nav>
            </div>
            <div className = "buttonSpacing">
              <Button variant = "primary" className ="rounded-pill"> Read our white paper </Button>
            </div>
            
          </Navbar.Collapse>
        </Navbar>
      </div>

    )
  }
}

export default NavigationBar;