import React from 'react';
import ReactDOM from 'react-dom';
import ConfirmModal from './ConfirmModal';

describe('ConfirmModal', () => {

    it('should render without any crash', () => {
        const div = document.createElement('div');
        ReactDOM.render(<ConfirmModal
            showConfirm={true}
            title={"This is the title"}
            message={"This is the message"}
            successButtonLabel={"Success"}
            cancelButtonLabel={"Cancel"}
            onSuccess={() => { }}
        />, div);
    });

})