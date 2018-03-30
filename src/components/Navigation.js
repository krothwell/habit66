import React, { Component } from 'react';
import {
  Button,
  Nav,
  Navbar,
  NavItem,
  NavDropdown,
  MenuItem
} from 'react-bootstrap';

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      langPack:this.props.langPack.Navigation
    };

    this.changeToEnglish = this.changeToEnglish.bind(this);
    this.changeToWelsh = this.changeToWelsh.bind(this);
    this.logOut = this.logOut.bind(this);
  }

  changeToEnglish() {
    this.props.getLangPackFromServer("English")
  }

  changeToWelsh() {
    this.props.getLangPackFromServer("Welsh")
  }

  logOut() {
    this.props.setEmailFound(false);
    this.props.setLoggedOn(false, '');
  }

  render() {
    console.log(this.props);
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            {this.state.langPack.h1Main}
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem eventKey={1} href="#" onClick={this.logOut}>
            {this.state.langPack.btnLogOut}
          </NavItem>
          <NavItem eventKey={2} href="#">
            Link
          </NavItem>
          <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
            <MenuItem eventKey={3.1}>Action</MenuItem>
            <MenuItem eventKey={3.2}>Another action</MenuItem>
            <MenuItem eventKey={3.3}>Something else here</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={3.4}>Separated link</MenuItem>
          </NavDropdown>
        </Nav>
      </Navbar>
    );
  }
}

export default Navigation;
