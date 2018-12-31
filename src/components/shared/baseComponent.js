import React from 'react';

class BaseComponent extends React.Component {

    constructor() {
        super();
    }


    handleError() {
        console.log('in handleError method')
    }

    render() {
        return (
            'Base component'
        )
    }
}

export default BaseComponent;