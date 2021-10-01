import React, { Component } from 'react';
import { Form, FormControl, FormGroup, ControlLabel, Button, Col } from 'react-bootstrap';

import './Login.css';
import { Link } from 'react-router-dom';

class LoginView extends Component {

  render() {
    return (
      <div className="login-view">
        <Col sm={4} smOffset={4}>
          <h3>Admin Login</h3>
          <br />
          <Form horizontal>
            <FormGroup controlId="formHorizontalEmail">
              <Col componentClass={ControlLabel} sm={2}>
                Email
            </Col>
              <Col sm={10}>
                <FormControl type="email" placeholder="Email" />
              </Col>
            </FormGroup>

            <FormGroup controlId="formHorizontalPassword">
              <Col componentClass={ControlLabel} sm={2}>
                Password
            </Col>
              <Col sm={10}>
                <FormControl type="password" placeholder="Password" />
              </Col>
            </FormGroup>

            <FormGroup>
              <Col smOffset={2} sm={10}>
                <Link to="/dashboard">
                  <Button bsStyle="success" type="submit" onClick={this.props.onLogin}>Sign in</Button>
                </Link>
              </Col>
            </FormGroup>
          </Form>
        </Col>
      </div>
    );
  }
}

export default LoginView;