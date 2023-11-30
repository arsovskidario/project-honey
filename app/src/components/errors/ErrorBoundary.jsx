import { Component } from 'react';

import ErrorPage from './ErrorPage';

export default class ErrorBoundary extends Component {
    constructor() {
        super()

        this.state = {
            hasError: false,
        }
    }

    static getDerivedStateFromError(err) {
        return {
            hasError: true,
        }
    }

    componentDidCatch(error, errorInfo) {
        console.log(errorInfo)
    }

    render() {
        if (this.state.hasError) {
            return <ErrorPage/>
        }

        return this.props.children;
    }
}