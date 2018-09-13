package com.ex.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ex.beans.Pantry;
import com.ex.repositories.PantryRepository;

@Service("userPantryService")
public class PantryService {

	@Autowired
	private PantryRepository userPantryRepo;
	
	public Pantry addUserPantry(Pantry a) {
		return userPantryRepo.add(a);
	}
	
	public Pantry retrieve(String username) {
		return userPantryRepo.retrieve(username);
	}

	public Pantry updateUserPantry(Pantry a) {
		return userPantryRepo.update(a);
	}
}
