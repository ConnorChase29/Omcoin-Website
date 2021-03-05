import React, { useRef } from 'react';
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
          <style type="text/css">
                        {`
                        #brand {
                            font-size: 24px;
                            font-weight: bold;
                            }
                        `}
                    </style>
            <Navbar.Brand id = "brand" href="/">Omcoin</Navbar.Brand>
          </div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <div className="PageLinks">
              <Nav className="mr-auto">
                <Nav.Link className="nav-links" href="/#Overview">Overview</Nav.Link>
                <Nav.Link className="nav-links" href="/#Features">Features</Nav.Link>
              </Nav>
            </div>
            <div className = "buttonSpacing">
              <Button variant = "primary" className ="rounded-pill" target="_blank" rel="noopener noreferrer" onClick={() => { window.open("https://drive.google.com/file/d/1AfbMaAE5oNiRPjyab-ao9xft6JZCCDdu/view?usp=sharing")}}> Read our white paper </Button>
            </div>
            
          </Navbar.Collapse>
        </Navbar>
      </div>

    )
  }
}

export default NavigationBar;