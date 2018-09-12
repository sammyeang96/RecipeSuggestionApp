package com.ex.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ex.beans.UserPantry;
import com.ex.repositories.UserPantryRepository;

@Service("userPantryService")
public class UserPantryService {

	@Autowired
	private UserPantryRepository userPantryRepo;
	
	public UserPantry addUserPantry(UserPantry a) {
		return userPantryRepo.add(a);
	}
}