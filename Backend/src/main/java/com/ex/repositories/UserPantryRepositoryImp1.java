package com.ex.repositories;

import javax.transaction.Transactional;

import org.hibernate.SessionFactory;
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
}