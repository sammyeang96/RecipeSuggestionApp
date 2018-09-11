package com.ex.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ex.beans.UserInformation;
import com.ex.repositories.UserInformationRepository;

@Service("userInformationService")
public class UserInformationService {
	
	@Autowired
	private UserInformationRepository userInformationRepo;
	
	public UserInformation addUserInformation(UserInformation a) {
		return userInformationRepo.add(a);
	}

}