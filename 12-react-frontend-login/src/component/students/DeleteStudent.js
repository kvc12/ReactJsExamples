import React, { Component } from "react";
import { StudentService } from "../../service/StudentService";
class DeleteStudent extends Component {
  state = {};
  componentDidMount() {
    if (sessionStorage.getItem("username") === null) {
      alert('Unauthorized Access');
      this.props.history.push("/");
    }
    let service = new StudentService();
    service.deleteStudentById(this.props.match.params.id)
      .then(
        (result) => {
          alert("Student is deleted.");
          this.props.history.push("/students");
        },
        (error) => {
          alert("Student is not deleted.");
        }
      );
  }
  render() {
    return <p>Processing...</p>;
  }
}

export default DeleteStudent;
