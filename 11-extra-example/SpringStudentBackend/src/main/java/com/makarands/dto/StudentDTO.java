package com.makarands.dto;

import com.makarands.model.Department;

public class StudentDTO {
	private int studentId;
	private String studentName;
	private double studentScore;
	private String city;
	private String state;
	private String pin;
	private Department department;
	
	public StudentDTO() {
		
	}
	
	public StudentDTO(int studentId, String studentName, double score, String city, String state, String pin) {
		super();
		this.studentId = studentId;
		this.studentName = studentName;
		this.studentScore = score;
		this.city = city;
		this.state = state;
		this.pin = pin;
	}
	public int getStudentId() {
		return studentId;
	}
	public void setStudentId(int studentId) {
		this.studentId = studentId;
	}
	public String getStudentName() {
		return studentName;
	}
	public void setStudentName(String studentName) {
		this.studentName = studentName;
	}
	public double getStudentScore() {
		return studentScore;
	}
	public void setStudentScore(double score) {
		this.studentScore = score;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
	}
	public String getPin() {
		return pin;
	}
	public void setPin(String pin) {
		this.pin = pin;
	}

	public Department getDepartment() {
		return department;
	}

	public void setDepartment(Department department) {
		this.department = department;
	}
	
}
