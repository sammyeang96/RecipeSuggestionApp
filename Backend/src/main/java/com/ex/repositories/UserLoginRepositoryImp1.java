	package com.ex.repositories;

import java.util.List;

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
	public UserLogin add(UserLogin a) {
		String username = (String) sf.getCurrentSession().save(a);
		a.setUsername(username);
		return a;
	}

	@Override
	public UserLogin getByusername(String username) {
		UserLogin result = (UserLogin) sf.getCurrentSession().get(UserLogin.class, username);
		return result;
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<UserLogin> getAll() {
		return sf.getCurrentSession().createCriteria(UserLogin.class).list();
	}
}
