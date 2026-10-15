package com.example.demo.service.implimentation;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.models.made_in_india;
import com.example.demo.repository.made_in_india_repository;
import com.example.demo.service.made_in_india_service;
@Service
public class made_in_india_impli implements made_in_india_service {
	@Autowired
	made_in_india_repository repo;
	@Override
	public List<made_in_india> getmade_in_indiaservicedata() {
		return repo.findAll();
	}

}
