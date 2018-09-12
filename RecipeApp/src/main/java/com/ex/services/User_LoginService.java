package com.ex.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ex.beans.User_Login;
import com.ex.repositories.User_LoginRepository;

@Service("user_LoginService")
public class User_LoginService {
	
	@Autowired
	private User_LoginRepository user_LoginRepo;

	public User_Login addUser_Login(User_Login a) {
		return user_LoginRepo.add(a);
	}

}
