package com.example.students.Controller;



import org.springframework.web.bind.annotation.*;

import com.example.students.Repo.StudentRepository;
import com.example.students.model.Student;

import java.util.List;

@RestController
@RequestMapping("/students")
@CrossOrigin(origins = "*") // allow frontend access
public class StudentController {
    private final StudentRepository repo;

    public StudentController(StudentRepository repo) {
        this.repo = repo;
    }

    @GetMapping
    public List<Student> all() {
        return repo.findAll();
    }

    @PostMapping
    public Student add(@RequestBody Student s) {
        return repo.save(s);
    }
}
