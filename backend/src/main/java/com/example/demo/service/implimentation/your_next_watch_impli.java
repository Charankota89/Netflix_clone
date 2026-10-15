package com.example.demo.service.implimentation;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.models.your_next_watch;
import com.example.demo.repository.your_next_watch_repository;
import com.example.demo.service.your_next_watch_service;
@Service
public class your_next_watch_impli implements your_next_watch_service {
	@Autowired
	your_next_watch_repository repo;
	@Override
	public List<your_next_watch> getyour_next_watchservicedata() {
		return repo.findAll();
	}

}
