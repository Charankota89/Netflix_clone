package com.example.demo.controller;

import java.util.List;


import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.models.relentless_crime_drama;
import com.example.demo.service.relentless_crime_drama_service;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin("http://localhost:4200")
public class relentless_crime_drama_controller {
final relentless_crime_drama_service service;


	relentless_crime_drama_controller(relentless_crime_drama_service service) {
		this.service = service;
	}


@GetMapping
public List<relentless_crime_drama>relentless(){
	return service.relentless();
}
}
