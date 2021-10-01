import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal, Button } from 'react-bootstrap';

import './AlertModal.css';

class AlertModal extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showAlert: false
        }

        this.onSuccess = this.onSuccess.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            showAlert: nextProps.showAlert
        });
    }

    onSuccess() {
        if (this.props.onSuccess) this.props.onSuccess();

        this.setState({
            showAlert: false
        });
    }

    render() {
        return (
            <div className="modal-container">
                <Modal show={this.state.showAlert} container={this} >
                    <Modal.Header>
                        <Modal.Title>{this.props.title}</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        {this.props.message}
                    </Modal.Body>

                    <Modal.Footer>
                        <Button bsStyle="success" onClick={this.onSuccess}>{this.props.successButtonLabel}</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

AlertModal.propTypes = {
    showAlert: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    successButtonLabel: PropTypes.string.isRequired,
    onSuccess: PropTypes.func
};

export default AlertModal;