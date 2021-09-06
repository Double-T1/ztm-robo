import React, {Component} from 'react';

class ErrorBoundary extends Component {
    constructor() {
        super();
        this.state= {
            hasError: false
        }
    }

    componentDidCatch(error, info) {
        this.setState({ hasError: true})
    }

    render() {
        if (!this.state.hasError) {
            return this.props.children
        }
        return (
            <h1>OOOps. There is an error.</h1>
        )
    }
}

export default ErrorBoundary;