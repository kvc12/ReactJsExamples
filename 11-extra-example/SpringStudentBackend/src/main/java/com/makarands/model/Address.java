package com.makarands.model;

import javax.persistence.Embeddable;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

@Component
@Scope(scopeName="prototype")
@Embeddable
public class Address {
	private String city="Mumbai";
	private String state="MH";
	private String pin="400706";
	public Address() {
		
	}
	public Address(String city, String state, String pin) {
		super();
		this.city = "Mumbai";
		this.state = "MH";
		this.pin = "400706";
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
	@Override
	public String toString() {
		return "Address [city=" + city + ", state=" + state + ", pin=" + pin + "]";
	}
}
