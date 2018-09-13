package com.ex.repositories;

import javax.transaction.Transactional;

import org.hibernate.SessionFactory;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.ex.beans.UserPantry;

@Transactional
@Repository
public class UserPantryRepositoryImp1 implements UserPantryRepository {
	
	@Autowired
	SessionFactory sf;

	@Override
	public UserPantry add(UserPantry a) {
		int id = (Integer) sf.getCurrentSession().save(a);
		a.setId(id);
		return a;
	}

	@Override
	public UserPantry retrieve(String username) {
		System.out.println("Repo " + username);
		return (UserPantry) sf.getCurrentSession().createCriteria(UserPantry.class).add(Restrictions.eq("username.username", username)).uniqueResult();
	}
}
