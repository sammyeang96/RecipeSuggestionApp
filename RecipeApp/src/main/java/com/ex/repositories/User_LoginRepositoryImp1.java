package com.ex.repositories;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.ex.beans.User_Login;

@Transactional
@Repository
public class User_LoginRepositoryImp1 implements User_LoginRepository {

	@Autowired
	SessionFactory sf;
	
	@Override
	public User_Login add(User_Login a) {
		String username = (String) sf.getCurrentSession().save(a);
		
		if(getByusername(a.getUsername())!=null) {
			System.out.println("Inside add and username is not null!");
		a.setUsername(username);
		return a;
		}
		else {
			return null;
		}
		
	
	
	}
	
	@Override
	public User_Login getByusername(String username) {
		// TODO Auto-generated method stub
		return (User_Login)sf.getCurrentSession().get(User_Login.class, username);
	}

}
