package com.example.employeenativequerydemo.repository;

import com.example.employeenativequerydemo.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface EmployeeRepository extends JpaRepository<Employee, Integer> {

    @Query(value = "SELECT * FROM employee", nativeQuery = true)
    List<Employee> getAllEmployeesNative();
}
