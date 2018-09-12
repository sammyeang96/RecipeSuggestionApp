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
		a.setUsername(username);
		return a;
	}

}
