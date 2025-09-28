package com.example.students.Repo;


import org.springframework.data.jpa.repository.JpaRepository;

import com.example.students.model.Student;

public interface StudentRepository extends JpaRepository<Student, Long> {}
