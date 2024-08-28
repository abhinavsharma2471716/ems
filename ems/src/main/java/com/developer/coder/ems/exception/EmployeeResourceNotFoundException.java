package com.developer.coder.ems.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class EmployeeResourceNotFoundException extends  RuntimeException {

    public  EmployeeResourceNotFoundException(String message){
        super(message);
    }
}
