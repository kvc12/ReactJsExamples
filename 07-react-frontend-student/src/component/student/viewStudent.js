import axios from 'axios'
import React from 'react'
import { Student } from '../../model/Student';

export class ViewStudent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            student: new Student()
        }
    }

    componentDidMount(prop) {
        let studentId = this.props.match.params.id;
        axios.get(`http://localhost:9090/student-api/students/${studentId}`).then((result) => {
            alert(JSON.stringify(result.data));
            this.setState({ student: result.data })
            // student = result.data;
        }).catch((error) => {
            alert(error);
        })
    }
    render() {
        return (
            <div> View Student
                <label>Student Id</label> <b>{ }</b>
                <table className="table table-bordered">
                    <tr>
                        <th>
                            Student Id
                        </th>
                        <td>{this.state.student.studentId}</td>
                    </tr>
                    <tr>
                        <th>Student Name</th>
                        <td>{this.state.student.studentName}</td>
                    </tr>
                    <tr>
                        <th>Student Score</th>
                        <td>{this.state.student.studentScore}</td>
                    </tr>
                    <tr>
                        <th>Address Id</th>
                        <td>{this.state.student.address !== null ? this.state.student.address.addressId : null}</td>
                    </tr>
                    <tr>
                        <th>Student State</th>
                        <td>{this.state.student.address !== null ? this.state.student.address.state : null}</td>
                    </tr>
                    <tr>
                        <th>Student City</th>
                        <td>{this.state.student.address !== null ? this.state.student.address.city : null}</td>
                    </tr>
                    <tr>
                        <th>Student Pin</th>
                        <td>{this.state.student.address !== null ? this.state.student.address.pin : null}</td>
                    </tr>
                </table>
            </div>
        )
    }
}