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
<<<<<<< HEAD:RecipeApp1/src/main/java/com/ex/services/UserLoginService.java


=======
	
	public UserLogin getByUsername(String username) {
		return userLoginRepo.getByusername(username);
	}
>>>>>>> Benjamin:RecipeApp/src/main/java/com/ex/services/UserLoginService.java
}
