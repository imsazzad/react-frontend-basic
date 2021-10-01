import React from 'react';
import ReactDOM from 'react-dom';
import LoadingModal from './LoadingModal';

describe('LoadingModal', () => {

    it('should render without any crash', () => {
        const div = document.createElement('div');
        ReactDOM.render(<LoadingModal showLoading={true} />, div);
    });

})