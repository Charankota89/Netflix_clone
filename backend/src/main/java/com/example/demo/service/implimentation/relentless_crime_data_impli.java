package com.example.demo.service.implimentation;


import java.util.List;


import org.springframework.stereotype.Service;

import com.example.demo.models.relentless_crime_drama;
import com.example.demo.repository.relentless_crime_drama_repositoy;
import com.example.demo.service.relentless_crime_drama_service;

@Service
public class relentless_crime_data_impli implements relentless_crime_drama_service{
final relentless_crime_drama_repositoy repo;

    relentless_crime_data_impli(relentless_crime_drama_repositoy repo) {
        this.repo = repo;
    }
   
    @Override
    public List<relentless_crime_drama>relentless(){
    	return repo.findAll();
    }
}
