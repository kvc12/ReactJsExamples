import axios from 'axios';
import React from 'react'
export class DeleteStudent extends React.Component {
    componentDidMount() {
        let studentId = this.props.match.params.id;
        axios.delete(`http://localhost:9090/student-api/students/${studentId}`)
            .then((result) => {
                alert("Student is deleted")
                this.props.history.push('/students')
            })
            .catch((error) => {
                alert(error)
                this.props.history.push('/students')
            });
    }
    render() {
        return (
            <div>
                Deleting Student
            </div>
        );
    }
}