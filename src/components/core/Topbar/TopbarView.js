import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

import LocalStorageService from '../../../services/core/LocalStorageService/LocalStorageService';

import './Topbar.css';

class TopbarView extends Component {

  adminLogout() {
    LocalStorageService.clear();
    this.props.history.push('/')
  }

  showLogoutItem() {
    if (LocalStorageService.get('isLoggedin') === true)
      return (
        <NavItem onClick={this.adminLogout.bind(this)}>
          Logout
                </NavItem>
      )
    else return null
  }

  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">Admin</Link>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav pullRight>
          {this.showLogoutItem.call(this)}
        </Nav>
      </Navbar>
    );
  }
}

export default withRouter(TopbarView);