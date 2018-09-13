package com.ex.repositories;

import java.util.List;

import com.ex.beans.UserLogin;

public interface UserLoginRepository {
	
	public UserLogin add(UserLogin a);

	public UserLogin getByusername(String username);
	
	public List<UserLogin> getAll();

}
