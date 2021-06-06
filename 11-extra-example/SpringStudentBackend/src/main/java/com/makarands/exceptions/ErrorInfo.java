package com.makarands.exceptions;

public class ErrorInfo {
	private String url; 
	private String message;
	private int code;
	
	public ErrorInfo(int code, String url, String message) {
		this.setCode(code);
		this.url = url;
		this.message = message;
	}
	public String getUrl() {
		return url;
	}
	public void setUrl(String url) {
		this.url = url;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	public int getCode() {
		return code;
	}
	public void setCode(int code) {
		this.code = code;
	}

}