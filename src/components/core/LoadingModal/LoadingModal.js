import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal, Glyphicon } from 'react-bootstrap';

import './LoadingModal.css';

class LoadingModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showLoading: false,
            noOfServiceCalls: 0
        }
    }

    componentWillReceiveProps(nextProps) {
        let showLoading = this.state.showLoading;
        let noOfServiceCalls = this.state.noOfServiceCalls;

        if (nextProps.showLoading) {
            noOfServiceCalls++;
            showLoading = nextProps.showLoading;
        } else {
            noOfServiceCalls--;
            if (noOfServiceCalls <= 0) {
                showLoading = nextProps.showLoading;
                noOfServiceCalls = 0;
            }
        }

        this.setState({
            showLoading,
            noOfServiceCalls
        });

        console.log(showLoading, noOfServiceCalls);
        console.trace();
    }

    render() {
        return (
            <div className="loading-modal modal-container">
                <Modal show={this.state.showLoading} container={this} bsSize="small">
                    <Modal.Body>
                        <div className="loading-spinner transition">
                            <div className="btn spinner-content transition">
                                <Glyphicon className="glyphicon-refresh-animate" glyph="refresh" /> Loading
                            </div>
                        </div>
                    </Modal.Body>
                </Modal>
            </div>
        );
    }
}

LoadingModal.propTypes = {
    showLoading: PropTypes.bool.isRequired
};

export default LoadingModal;