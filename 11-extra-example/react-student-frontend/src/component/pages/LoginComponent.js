import React, { Component } from 'react'
import { Login } from '../../model/Login';
import { Student } from '../../model/Student';

export default class LoginComponent extends Component {
    state = {
        login: new Student(),
        // error: {
        //     usernameError: "",
        //     passwordError: "",
        //     invalidCredentials: ""
        // }
        error: {
            userIdError: "",
            userNameError: "",
            invalidCredentials: ""
        }


    }
    // validate = () => {
    //     let flag = true;
    //     let error = {};
    //     if (!this.state.login.username) {
    //         error.usernameError = "Username Is Required";
    //         flag = false
    //     }
    //     if (!this.state.login.password) {
    //         flag = false;
    //         error.passwordError = "Password Is Required";
    //     }
    //     this.setState({ error: error })
    //     return flag;
    // };
    validate = () => {
        let flag = true;
        let error = {};
        if (!this.state.login.studentId) {
            error.userIdError = "UserId Is Required";
            flag = false
        }
        if (!this.state.login.studentName) {
            flag = false;
            error.userNameError = "Name Is Required";
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
        // alert(JSON.stringify(this.state.login));
        //     if (this.state.login.username === "makarand@gmail.com" &&
        //         this.state.login.password === "4321") {
        //         sessionStorage.setItem("username", this.state.login.username);
        //         this.props.history.push("/students");
        //     } else {
        //         this.setState({ error: { invalidCredentials: "Invalid Credentials" } })
        //     }

        // }
        if (this.state.login.studentId === "1" &&
            this.state.login.studentName === "keval") {
            sessionStorage.setItem("studentId", this.state.login.studentId);
            this.props.history.push("/students");
        } else {
            this.setState({ error: { invalidCredentials: "Invalid Credentials" } })
        }

    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h1>
                        <span className="badge badge-dark">Login</span>
                    </h1>
                    {/* <div className="form-group mr2">
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
                    </div> */}
                    <div className="form-group mr2">
                        <div className="alert-danger">{this.state.error.userIdError}</div>
                        <input
                            type="text"
                            className="form-control"
                            id="studentId"
                            placeholder="Enter Student Id"
                            value={this.state.login.studentId}
                            onChange={(event) =>
                                this.setState({ login: { ...this.state.login, studentId: event.target.value } })
                            }
                        />
                    </div>
                    {/* <div className="form-group">
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
                    </div> */}
                    <div className="form-group">
                        <div className="alert-danger">{this.state.error.userNameError}</div>
                        <input
                            type="text"
                            className="form-control"
                            id="text"
                            placeholder="Enter Student Name"
                            value={this.state.login.studentName}
                            onChange={(event) =>
                                this.setState({ login: { ...this.state.login, studentName: event.target.value } })
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
