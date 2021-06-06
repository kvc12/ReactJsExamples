package com.makarands.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.makarands.dto.StudentDTO;
import com.makarands.exceptions.DuplicateStudentIdException;
import com.makarands.model.Department;
import com.makarands.model.Student;
import com.makarands.service.StudentService;

@RestController
@RequestMapping(path = "students")
@CrossOrigin
public class StudentController {
	@Autowired
	private StudentService service;

	// http://localhost:9091/student-api/students/
	@GetMapping(path = "/")
	public List<Student> getAllStudents() {
		List<Student> students = service.findAllStudents();
		return students;
	}

	// http://localhost:9091/student-api/students/10
	@GetMapping(path = "{studentId}")
	public StudentDTO getStudentById(@PathVariable("studentId") int studentId) {
		Student student = service.findStudentById(studentId);
		StudentDTO dto = new StudentDTO(student.getStudentId(), student.getStudentName(), student.getStudentScore(),
				"Mumbai", "MH", "400706");
		dto.setDepartment(student.getDepartment());
		return dto;
	}

	// http://localhost:9091/student-api/students
	@PostMapping(path = "/")
	public void addStudent(@RequestBody Student student) {
		try {
			service.addStudent(student);
		} catch (Throwable e) {
			throw new DuplicateStudentIdException("Studen Id = ["+student.getStudentId()+"] is already exist.");
		}
	}

	// http://localhost:9091/student-api/students/160
	@DeleteMapping(path = "{studentId}")
	public void deleteStudentByStudentId(@PathVariable("studentId") int studentId) {
		service.removeStudent(studentId);
	}

	// http://localhost:9091/student-api/students/
	@PutMapping(path = "/")
	public Student updateStudent(@RequestBody Student student) {
		boolean result = service.modifyStudent(student);
		if (result)
			student = service.findStudentById(student.getStudentId());
		return student;
	}

	// http://localhost:9091/student-api/students/departments/
	@GetMapping(path = "/departments")
	public List<Department> getAllDepartments() {
		List<Department> departments = service.findAllDepartments();
		return departments;
	}

}
