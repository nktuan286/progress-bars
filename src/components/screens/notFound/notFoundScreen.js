// eslint-disable-next-line
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './notFoundScreen.scss';

class ErrorPage extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    
    render() {
        return (
            <div>ErrorPage</div>
        )
    }
}

export default withRouter(ErrorPage);