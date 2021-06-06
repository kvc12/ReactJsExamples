import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Table, TableCell ,} from "@material-ui/core";
export class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            students: []
        }
    }
    componentDidMount() {
        axios.get(`http://localhost:9090/student-api/students`)
            .then((result) => {
                // alert(JSON.stringify(result));
                this.setState({ students: result.data })
            })
            .catch((error) => alert(error))
    }
    render() {
        return (
            <div>
                Get All Records
                <div>
                    {
                        this.state.students.length > 0 ? (
                            <Table  className="table  table-striped">
                                <thead className="thead-dark">
                                    <tr>
                                        <th>Student Id</th>
                                        <th>Student Name</th>
                                        <th>Student Score</th>
                                        <th colSpan="3">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.students.map((s, index) =>
                                        (
                                            <tr>
                                                <td>{s.studentId}</td>
                                                <td>{s.studentName}</td>
                                                <td>{s.studentScore}</td>
                                                <td><Link className="btn btn-primary" to={`/students/view/${s.studentId}`} >View</Link></td>

                                                <td><Link className="btn btn-warning" to={`/students/update/${s.studentId}`} >Update</Link></td>
                                                <td><Link className="btn btn-danger" to={`/students/delete/${s.studentId}`}>Delete</Link></td>
                                            </tr>
                                        )
                                        )
                                    }
                                </tbody>
                            </Table>

                        ) : <div></div>
                    }
                </div>
            </div>
        );
    }
}