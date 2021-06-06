import React from 'react'
import Student from "../model/Student"
class StudentComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            student: new Student()

        }
    }
    render() {
        return (
            <div className="container">
                <h2><span className="badge btn-outline-danger">Student Form</span></h2>
                <form>
                <div className="form-group btn-outline-light">
                        <input type="text" className="form-control" id="studentId"
                        value={this.state.student.studentId}
                        onChange={
                            (e)=>{
                                this.setState({student: {...this.state.student, studentId: e.target.value} });
                            }
                        }
                         placeholder="Enter Student Score"></input>
                    </div>
                    <div className="form-group btn-outline-light">
                        <input type="text" className="form-control" id="studentId"
                         placeholder="Enter Student Name"
                         value={this.state.student.studentName}
                         onChange={
                            (e)=>{
                                this.setState({student: {...this.state.student,studentName: e.target.value} });
                            }
                        }></input>
                    </div>
                   
                    <div className="form-group btn-outline-light">
                        <input type="text" className="form-control" id="studentId"
                        value={this.state.student.studentScore}
                        onChange={
                            (e)=>{
                                this.setState({student: {...this.state.student, studentScore: e.target.value} });
                            }
                        }
                         placeholder="Enter Student id"></input>
                    </div>
                    <div className=" form-group btn-outline-light">
                        <button className="btn-primary" onClick={
                            ()=>{
                                alert(JSON.stringify( this.state.student));
                                }
                        }
                        >Submit</button>
                    </div>
                </form>
            </div>
        )
    }

}
export default StudentComponent;