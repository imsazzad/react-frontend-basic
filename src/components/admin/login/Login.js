import React, { Component } from 'react';
import LocalStorageService from '../../../services/core/LocalStorageService/LocalStorageService'

import LoginView from './LoginView';

import AppConfig from '../../../configs/AppConfig'

class Login extends Component {

  adminLogin() {
    LocalStorageService.set(AppConfig.storageVars.isLoggedin, true);
  }

  render() {
    return (
      <LoginView onLogin={this.adminLogin.bind(this)} />
    )
  }
}

export default Login;