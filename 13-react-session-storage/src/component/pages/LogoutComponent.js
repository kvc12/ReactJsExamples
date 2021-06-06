import React, { Component } from 'react'

export default class LogoutComponent extends Component {
    componentDidMount() {
        sessionStorage.removeItem("username");
        this.props.history.push("/");
    }
    render() {
        return (
            <div>
                Logging Out...
            </div>
        )
    }
}
