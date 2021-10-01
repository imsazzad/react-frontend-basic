import React from 'react';
import ReactDOM from 'react-dom';
import AlertModal from './AlertModal';

describe('AlertModal', () => {

    it('should render without any crash', () => {
        const div = document.createElement('div');
        ReactDOM.render(<AlertModal
            showAlert={true}
            title={"This is the title"}
            message={"This is the message"}
            successButtonLabel={"Success"}
        />, div);
    });

})