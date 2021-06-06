package com.makarands.exceptions;

import javax.servlet.http.HttpServletRequest;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.context.request.WebRequest;

@ControllerAdvice
public class ApplicationException {
	@ResponseBody
	@ResponseStatus(value=HttpStatus.INTERNAL_SERVER_ERROR)
	@ExceptionHandler(value = {Exception.class})
    protected ErrorInfo handleConflict(Exception ex, HttpServletRequest req) {
        String bodyOfResponse = ex.getMessage();
        String uri = req.getRequestURL().toString();
        return  new ErrorInfo(500, uri,bodyOfResponse);
    }
//	@ResponseBody
//	@ResponseStatus(value=HttpStatus.INTERNAL_SERVER_ERROR)
//	@ExceptionHandler(value = {Exception.class})
//    protected ExceptionRestResponse handleConflict(Exception ex, HttpServletRequest req) {
//		return new ExceptionRestResponse(500, ex.getMessage());
//	}
//    public static class ExceptionRestResponse {
//		int code;
//        String message;
//        
//    	public ExceptionRestResponse(int code, String message) {
//        	this.code = code;
//        	this.message = message;
//        }
//    }
}
