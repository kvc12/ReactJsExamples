import React from 'react'
import Student from "../model/Student"
class StudentComponent2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //good place to declare a state
            student: new Student(),
            students: []

        }
        // onSave = (studentId) => {
        //     if (studentId !== '') {
        //         const saveRecord = this.state.Alldata;
        //         const index = saveRecord.indexOf(this.getRecord(studentId));
        //         const Record = saveRecord[index];
        //         // Record['studentId'] = this.state.updateEdit[1];
        //         Record['studentName'] = this.state.updateEdit[2];
        //         Record['studentScore'] = this.state.updateEdit[3];
        //         this.setState({
        //             AllData: [...this.state.AllData],
        //             studentId: "", studentName: "", studentScore: ""
        //         })

        //     } else {
        //         const maxId = Math.max(...this.state.AllData.map(item => item.studentId));
        //         const studentId = maxId + 1;
        //     }
        // }
    }
    render() {
        return (
            <div className="container">
                <h2><span className="badge btn-outline-danger">Student Form</span></h2>

                <div className="form-group btn-outline-light">
                    <input type="text" className="form-control" id="studentId"
                        value={this.state.student.studentId}
                        onChange={
                            (e) => {
                                this.setState({ student: { ...this.state.student, studentId: e.target.value } });
                            }
                        }
                        placeholder="Enter Student Score"></input>
                </div>
                <div className="form-group btn-outline-light">
                    <input type="text" className="form-control" id="studentName"
                        placeholder="Enter Student Name"
                        value={this.state.student.studentName}
                        onChange={
                            (e) => {
                                this.setState({ student: { ...this.state.student, studentName: e.target.value } });
                            }
                        }></input>
                </div>

                <div className="form-group btn-outline-light">
                    <input type="text" className="form-control" id="studentScore"
                        value={this.state.student.studentScore}
                        onChange={
                            (e) => {
                                this.setState({ student: { ...this.state.student, studentScore: e.target.value } });
                            }
                        }
                        placeholder="Enter Student id"></input>
                </div>
                <div className=" table-responsive-lg align-content-lg-center ">
                    <button className="table-hover" onClick={
                        () => {
                            this.state.students.push(this.state.student);
                            this.setState({ students: this.state.students });
                            // alert(JSON.stringify( this.state.student));
                            // alert(JSON.stringify( this.state.students));

                        }
                    }
                    >Submit</button>
                </div>
                {
                    this.state.students.length > 0 ? (
                        <table className="table table-bordered table-striped table-dark">
                            <thead>
                                <tr>
                                    <th>Student Id</th>
                                    <th>Student Name</th>
                                    <th>Student Score</th>
                                    <th colSpan="3">Action</th>

                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.students.map((s) =>
                                    (
                                        <tr>
                                            <td>{s.studentId}</td>
                                            <td>{s.studentName}</td>
                                            <td>{s.studentScore}</td>
                                            <td><button className="btn btn-warning" onClick="onSave()"> Update</button></td>
                                            <td><button className="btn btn-danger" onClick={
                                                () => {
                                                    this.state.students.pop(this.state.student);
                                                    this.setState({ students: this.state.students });
                                                }
                                            }>Delete</button></td>

                                        </tr>
                                    )
                                    )
                                }
                            </tbody>
                        </table>
                    ) : <div className="layout accordion-flush">No Student Present</div>
                }

            </div>
        )
    }

}
export default StudentComponent2;