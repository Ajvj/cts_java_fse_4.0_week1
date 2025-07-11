package com.example.employeenativequerydemo.service;

import com.example.employeenativequerydemo.model.Employee;
import com.example.employeenativequerydemo.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeService {

    @Autowired
    private EmployeeRepository employeeRepository;

    public List<Employee> fetchAllEmployees() {
        return employeeRepository.getAllEmployeesNative();
    }
}
