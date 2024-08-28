package com.developer.coder.ems.service;

import com.developer.coder.ems.dto.EmployeeDto;

import java.util.List;

public interface EmployeeService {
     public EmployeeDto createNewEmployee(EmployeeDto employeeDto);

     public List<EmployeeDto> getAllEmployees();

     public EmployeeDto getEmployeeById(Long id);

     public EmployeeDto updateEmployeeById(Long id, EmployeeDto employeeDto);

     public void deleteEmployeeById(Long id);
}
