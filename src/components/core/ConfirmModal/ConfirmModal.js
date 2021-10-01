import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal, Button } from 'react-bootstrap';

import './ConfirmModal.css';

class ConfirmModal extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showConfirm: false
        }

        this.onSuccess = this.onSuccess.bind(this);
        this.onCancel = this.onCancel.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            showConfirm: nextProps.showConfirm
        });
    }

    onSuccess() {
        if (this.props.onSuccess) this.props.onSuccess();

        this.setState({
            showConfirm: false
        });
    }

    onCancel() {
        if (this.props.onCancel) this.props.onCancel();

        this.setState({
            showConfirm: false
        });
    }

    render() {
        return (
            <div className="modal-container">
                <Modal show={this.state.showConfirm} container={this} >
                    <Modal.Header>
                        <Modal.Title>{this.props.title}</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        {this.props.message}
                    </Modal.Body>

                    <Modal.Footer>
                        <Button bsStyle="success" onClick={this.onSuccess}>{this.props.successButtonLabel}</Button>
                        <Button bsStyle="default" onClick={this.onCancel}>{this.props.cancelButtonLabel}</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

ConfirmModal.propTypes = {
    showConfirm: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    successButtonLabel: PropTypes.string.isRequired,
    cancelButtonLabel: PropTypes.string.isRequired,
    onSuccess: PropTypes.func.isRequired,
    onCancel: PropTypes.func,
    size: PropTypes.number
};

export default ConfirmModal;