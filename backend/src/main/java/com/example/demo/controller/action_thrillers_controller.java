package com.example.demo.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.service.action_thrillers_service;
@RestController
@CrossOrigin
@RequestMapping("/api/v1")
public class action_thrillers_controller {
	final action_thrillers_service service;
	
	action_thrillers_controller(action_thrillers_service service) {
		this.service = service;
	}
	
	@GetMapping
	public List<action_thrillers_service>action(){
		return service.action();
	}
}
