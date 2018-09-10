package com.ex.repositories;

import com.ex.beans.User_Login;

public interface User_LoginRepository {

	public User_Login add(User_Login a);
	public User_Login getByusername(String a);

}
