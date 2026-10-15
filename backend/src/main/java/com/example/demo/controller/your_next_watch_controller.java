package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.models.your_next_watch;
import com.example.demo.service.your_next_watch_service;
@RestController
@CrossOrigin
@RequestMapping

public class your_next_watch_controller {
	@Autowired
	your_next_watch_service service;
	@GetMapping("/yournextwatchdata")
	public List<your_next_watch> getyour_next_watch_servicedata(){
		return service.getyour_next_watchservicedata();
		
	}
	
	

}
