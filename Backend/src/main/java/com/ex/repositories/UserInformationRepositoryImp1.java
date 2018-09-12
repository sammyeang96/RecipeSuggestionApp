package com.ex.repositories;

import javax.transaction.Transactional;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.ex.beans.UserInformation;

@Transactional
@Repository
public class UserInformationRepositoryImp1 implements UserInformationRepository {

	@Autowired
	SessionFactory sf;
	
	@Override
	public UserInformation add(UserInformation a) {
		int id = (Integer) sf.getCurrentSession().save(a);
		a.setId(id);
		return a;
	}

}