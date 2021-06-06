import axios from 'axios';
import React from 'react'
import { Student } from '../../model/Student';
import { Address } from '../../model/Address';

export default class AddStudent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            student: new Student()
        }
    }
    render() {
        return (
            <div>
                <h2><span className="badge badge-dark">Add Form</span></h2>
                <div className="form-group">
                    <input type="text" id="studentId"
                        className="form-control"
                        placeholder="Enter Student Id"
                        value={this.state.student.studentId}
                        onChange={
                            (e) => {
                                this.setState({ student: { ...this.state.student, studentId: e.target.value } })
                            }
                        }
                    />
                </div>

                <div className="form-group">
                    <input type="text" id="studentName"
                        className="form-control"
                        placeholder="Enter Student Name"
                        value={this.state.student.studentName}
                        onChange={
                            (e) => {
                                this.setState({ student: { ...this.state.student, studentName: e.target.value } })
                            }
                        }
                    />
                </div>

                <div className="form-group">
                    <input type="text" id="studentScore"
                        className="form-control"
                        placeholder="Enter Student Score"
                        value={this.state.student.studentScore}
                        onChange={
                            (e) => {
                                this.setState({ student: { ...this.state.student, studentScore: e.target.value } })
                            }
                        }
                    />
                </div>

                <div className="form-group">
                    <input type="text" id="city"
                        className="form-control"
                        placeholder="Enter Student City"
                        value={this.state.student.address.city}
                        onChange={
                            (e) => {
                                this.setState({ student: { ...this.state.student, address: { ...this.state.student.address, city: e.target.value } } })
                            }
                        }
                    />
                </div>

                <div className="form-group">
                    <input type="text" id="state"
                        className="form-control"
                        placeholder="Enter Student State"
                        value={this.state.student.address.state}
                        onChange={
                            (e) => {
                                this.setState({ student: { ...this.state.student, address: { ...this.state.student.address, state: e.target.value } } })
                            }
                        }
                    />
                </div>


                <div className="form-group">
                    <input type="number" id="pin"
                        className="form-control"
                        placeholder="Enter Student Pin"
                        value={this.state.student.address.pin}
                        onChange={
                            (e) => {
                                this.setState({ student: { ...this.state.student, address: { ...this.state.student.address, pin: e.target.value } } })
                            }
                        }
                    />
                </div>

                <div className="form-group">
                    <button className="btn btn-primary" onClick={
                        () => {
                            //alert(JSON.stringify(this.state.student));
                            axios.post('http://localhost:9090/student-api/students', this.state.student)
                                .then((result) => {
                                    alert('Student is Added');
                                    this.props.history.push(`/students`);
                                }).catch((error) => {
                                    alert('Problem adding student');
                                    this.props.history.push('/students');
                                })
                        }
                    }
                    >Submit</button>
                </div>
            </div>
        )
    }
}
