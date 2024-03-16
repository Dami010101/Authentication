import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


const Header = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" id='cnavbar'>
      <Container>
        <Navbar.Brand href="#home" id='cnavw'>React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" id='cnavw'/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" id='cnavi'>
            <Nav.Link href="#home" id='cnavw'>Home</Nav.Link>
            <Nav.Link href="#link" id='cnavw'>Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown" color='white'>
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header