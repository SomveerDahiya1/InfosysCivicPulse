package org.example.springbootexercise.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CalculatorController {

    @GetMapping("/sum")
    public int add(
            @RequestParam int a,
            @RequestParam int b) {

        return a + b;

    }

}