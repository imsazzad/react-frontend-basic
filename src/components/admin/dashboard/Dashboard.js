import React, { Component } from 'react';
import DashboardView from './DashboardView';

import HttpService from '../../../services/core/HttpService/HttpService';

import AppConfig from '../../../configs/AppConfig';

class Dashboard extends Component {

  getJoke() {
    return HttpService.get(AppConfig.api.joke);
  }

  render() {
    return (
      <DashboardView getJoke={this.getJoke} />
    )
  }
}

export default Dashboard;