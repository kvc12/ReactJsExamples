package com.makarands.dao;

import java.util.List;

import com.makarands.model.Department;
import com.makarands.model.Student;

public interface StudentDao {
	public int createStudent(Student student);
	public List<Student> readAllStudents();
	public Student updateStudent(Student student);
	public int deleteStudent(int studentId);
	public Student readStudentById(int studentId);
	public List<Department> readAllDepartments();
}
