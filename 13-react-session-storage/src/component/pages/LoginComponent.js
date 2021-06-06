import React, { Component } from 'react'
import { Login } from '../../model/Login'
import { StudentService } from '../../service/StudentService'

export default class LoginComponent extends Component {
    state = {
        login: new Login(),
        error: {
            usernameError: "",
            passwordError: "",
            invalidCredentials: ""
        }

    }
    validate = () => {
        let flag = true;
        let error = {};
        if (!this.state.login.username) {
            error.usernameError = "Username Is Required";
            flag = false
        }
        if (!this.state.login.password) {
            flag = false;
            error.passwordError = "Password Is Required";
        }
        this.setState({ error: error })
        return flag;
    };

    handleSubmit = async (event) => {
        event.preventDefault();
        let isValid = this.validate();
        if (!isValid) {
            return false;
        }
        alert(JSON.stringify(this.state.login));
        let service = new StudentService();
        service.checkLogin(this.state.login).then((result) => {
            //alert(JSON.stringify(result.data));
            if (result.data != null) {
                sessionStorage.setItem("username", this.state.login.username)
                this.props.history.push("/students");
            } else {
                this.setState({ error: { invalidCredentials: "Invalid Credentials" } })
            }

        //     if (this.state.login.username === "keval" &&
        //     this.state.login.password === "4321") {
        //     sessionStorage.setItem("username", this.state.login.username);
        //     this.props.history.push("/students");
        // } else {
        //     this.setState({ error: { invalidCredentials: "Invalid Credentials" } })
        // }

        }).catch((error) => {
            //alert(error);
            this.setState({ error: { invalidCredentials: "Invalid Credentials" } })
        })

    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h1>
                        <span className="badge badge-dark">Login</span>
                    </h1>
                    <div className="form-group mr2">
                        <div className="alert-danger">{this.state.error.usernameError}</div>
                        <input
                            type="text"
                            className="form-control"
                            id="username"
                            placeholder="Enter Username"
                            value={this.state.login.username}
                            onChange={(event) =>
                                this.setState({ login: { ...this.state.login, username: event.target.value } })
                            }
                        />
                    </div>
                    <div className="form-group">
                        <div className="alert-danger">{this.state.error.passwordError}</div>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            placeholder="Enter Password"
                            value={this.state.login.password}
                            onChange={(event) =>
                                this.setState({ login: { ...this.state.login, password: event.target.value } })
                            }
                        />
                    </div>
                    <div className="form-group">
                        <div className="alert-danger">{this.state.error.invalidCredentials}</div>
                    </div>
                    <button type="submit" className="btn btn-primary">Login</button>
                </form>
            </div>
        )
    }
}
