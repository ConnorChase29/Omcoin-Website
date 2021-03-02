import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

export class NavigationBar extends React.Component<{}, {}>
{
  render() {
    return (

      <div>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">Omcoin</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Overview</Nav.Link>
              <Nav.Link href="#link">Features</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>

    )
  }
}

export default NavigationBar;