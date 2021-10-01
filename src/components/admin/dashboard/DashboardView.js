import React, { Component } from 'react';
import { Col, Well, Alert } from 'react-bootstrap';

import './Dashboard.css';

class DashboardView extends Component {

  constructor() {
    super()

    this.state = {
      joke: "Once you realize what a joke everything is, being the Comedian is the only thing that makes sense."
    }
  }

  componentDidMount() {
    this.props.getJoke().then(response => {
      this.setState({
        joke: response.data.value.joke
      })
    });
  }

  render() {
    return (
      <div className="dashboard-view">
        <Col sm={8} smOffset={2}>
          <Alert bsStyle="success">
            <strong>AWESOME!</strong> Looks like you have successfully logged in to the Admin Dashboard.
          </Alert>

          <Well>
            <h1 className="joke-text">"{this.state.joke}"</h1>
          </Well>
        </Col>
      </div>
    );
  }
}

export default DashboardView;