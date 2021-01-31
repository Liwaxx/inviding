import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

import './style.css'

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className="nav-style p-4" light expand="md">
        <NavbarToggler onClick={toggle}/>
        <Collapse isOpen={isOpen} navbar >
          <Nav navbar>
            <NavItem className="nav-items active m-4">
              <NavLink href="#">Home</NavLink>
            </NavItem>
            <NavItem className="nav-items m-4">
              <NavLink href="#">Support</NavLink>
            </NavItem>
            <NavItem className="nav-items m-4">
              <NavLink href="#">Login</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;