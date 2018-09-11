package com.ex.repositories;

import com.ex.beans.UserLogin;

public interface UserLoginRepository {
	public UserLogin add(UserLogin a);
	public UserLogin getByusername(String a);
}
