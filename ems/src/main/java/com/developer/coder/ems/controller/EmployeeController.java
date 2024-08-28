package com.developer.coder.ems.controller;


import com.developer.coder.ems.dto.EmployeeDto;
import com.developer.coder.ems.service.EmployeeServiceImpl;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/employees")
@AllArgsConstructor
public class EmployeeController {
     private EmployeeServiceImpl employeeService;
     @PostMapping
     public ResponseEntity<EmployeeDto> createNewEmployee(@RequestBody EmployeeDto employeeDto){
         EmployeeDto savedEmployee = employeeService.createNewEmployee(employeeDto);
         return new ResponseEntity<>(savedEmployee, HttpStatus.CREATED);
     }

     @GetMapping
    public ResponseEntity<List<EmployeeDto>> getAllEmployees(){
        List<EmployeeDto> allEmployees =  employeeService.getAllEmployees();
        return new ResponseEntity<>(allEmployees,HttpStatus.OK);
     }

     @GetMapping("{id}")
    public ResponseEntity<EmployeeDto> getEmployeeById(@PathVariable("id") Long employeeId){
         EmployeeDto employeeById = employeeService.getEmployeeById(employeeId);
         return new ResponseEntity<>(employeeById, HttpStatus.OK);
     }

     @PutMapping("{id}")
     public ResponseEntity<EmployeeDto> updateEmployeeById(@PathVariable("id") Long employeeId, @RequestBody EmployeeDto employeeDto){
         EmployeeDto employeeById = employeeService.updateEmployeeById(employeeId, employeeDto);
         return new ResponseEntity<>(employeeById, HttpStatus.OK);
     }

     @DeleteMapping("{id}")
    public ResponseEntity<String> deleteEmployeeById(@PathVariable("id") Long employeeId){
         employeeService.deleteEmployeeById(employeeId);
         return new ResponseEntity<>("Employee Record Deleted Successfully", HttpStatus.OK);
     }
}
