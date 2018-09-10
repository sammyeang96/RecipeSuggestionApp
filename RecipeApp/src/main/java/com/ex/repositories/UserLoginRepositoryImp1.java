package com.ex.repositories;

import javax.transaction.Transactional;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.ex.beans.UserLogin;

@Transactional
@Repository
public class UserLoginRepositoryImp1 implements UserLoginRepository {

	@Autowired
	SessionFactory sf;
	
	@Override
<<<<<<< HEAD:RecipeApp/src/main/java/com/ex/repositories/User_LoginRepositoryImp1.java
	public User_Login add(User_Login a) {
			String username = (String) sf.getCurrentSession().save(a);
=======
	public UserLogin add(UserLogin a) {
		String username = (String) sf.getCurrentSession().save(a);
>>>>>>> Benjamin:RecipeApp/src/main/java/com/ex/repositories/UserLoginRepositoryImp1.java
		a.setUsername(username);
		return a;
	
		
	
	
	}
	
	@Override
	public User_Login getByusername(String username) {
		// TODO Auto-generated method stub
		return (User_Login)sf.getCurrentSession().get(User_Login.class, username);
	}
}
