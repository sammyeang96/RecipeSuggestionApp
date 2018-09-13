package com.ex.services;

import java.util.List;

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
	
	public UserLogin getByUsername(String username) {
		return userLoginRepo.getByusername(username);
	}
	
	public List<UserLogin> getAll() {
		return userLoginRepo.getAll();
	}
}
