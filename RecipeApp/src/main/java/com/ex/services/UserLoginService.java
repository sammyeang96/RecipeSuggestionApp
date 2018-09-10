package com.ex.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ex.beans.UserLogin;
import com.ex.repositories.UserLoginRepository;

@Service("userLoginService")
public class UserLoginService {
	
	@Autowired
	private UserLoginRepository userLoginRepo;
	
	public UserLogin addUserLogin(UserLogin a) {
		return userLoginRepo.add(a);
	}
}
