package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.models.made_in_india;
import com.example.demo.service.made_in_india_service;
@RestController
@CrossOrigin
@RequestMapping
public class made_in_india_controller {
	@Autowired
	made_in_india_service service;
	@GetMapping("/getmadeinindiadata")
	public List<made_in_india> getmade_in_indiaservicedata(){
		return service.getmade_in_indiaservicedata();
	}

}
