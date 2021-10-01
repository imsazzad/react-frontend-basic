import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import './Primary.css';
import '../../assets/styles/bootstrap.min.css';

import Topbar from '../../components/core/Topbar/Topbar';
import Dashboard from '../../components/admin/dashboard/Dashboard';
import Login from '../../components/admin/login/Login';

import LocalStorageService from '../../services/core/LocalStorageService/LocalStorageService';

class PrimaryLayout extends Component {

    defaultRedirect() {
        let toUrl = '/login'
        if (LocalStorageService.get('isLoggedin') === true) toUrl = '/dashboard'

        return <Redirect to={toUrl} />
    }

    render() {
        return (
            <div className="primary-layout">
                <Topbar />

                <Switch>
                    <Route path="/dashboard" exact component={Dashboard} />
                    <Route path="/login" exact component={Login} />
                    {this.defaultRedirect()}
                </Switch>
            </div>
        );
    }
}

export default PrimaryLayout;