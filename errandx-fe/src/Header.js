import React, { Component } from 'react';
import { Collapse,Navbar,NavbarToggler, NavbarBrand,Nav,NavItem,NavLink,UncontrolledDropdown, DropdownToggle,DropdownMenu, DropdownItem,Label } from 'reactstrap';
import ModalSignIn from './ModalSignIn.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Header.css';
class Header extends Component{
  constructor (props) {
    super (props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
    render(){
        return(
          <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Errand_X
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
        <NavLink href={<ModalSignIn />}>Sign In</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/foluwa">Sign Up</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Accounts
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Profile
                  </DropdownItem>
                  <DropdownItem>
                    Procedures
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink href="">GET STARTED</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>

    )
  }
}
export default Header;