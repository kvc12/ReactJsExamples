import axios from "axios";

export class StudentService {
    baseUrl = `http://localhost:9091/student-api/students`;

    addStudent(student) {
        return axios.post(this.baseUrl + '/', student);
    }
    findStudentById(studentId) {
        return axios.get(`${this.baseUrl}/${studentId}`);
    }
    findAllStudents() {
        return axios.get(this.baseUrl + '/');
    }
    deleteStudentById(studentId) {
        return axios.delete(`${this.baseUrl}/${studentId}`);
    }
    modifyStudent(student) {
        return axios.put(this.baseUrl + '/', student);
    }

    getAllDepartment() {
        return axios.get(`${this.baseUrl}/departments/`);
    }
}