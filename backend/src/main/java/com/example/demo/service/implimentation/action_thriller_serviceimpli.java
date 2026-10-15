package com.example.demo.service.implimentation;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.demo.repository.action_thrillers_repository;
import com.example.demo.service.action_thrillers_service;
@Service
public class action_thriller_serviceimpli implements action_thrillers_service {
	final action_thrillers_repository repo;
	
	 action_thriller_serviceimpli( action_thrillers_repository repo) {
		 this.repo  = repo;
	}

	@Override
	public List<action_thrillers_service> action() {
		// TODO Auto-generated method stub
		return null;
	}

}
