package com.example.demo.service.implimentation;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.models.kdramas;
import com.example.demo.repository.kdramas_repository;
import com.example.demo.service.kdramas_service;
@Service
public class kdramas_impli implements kdramas_service {
	@Autowired
	kdramas_repository repo;
	@Override
	public List<kdramas> getkdramasservicedata() {
		return repo.findAll();
	}

}
