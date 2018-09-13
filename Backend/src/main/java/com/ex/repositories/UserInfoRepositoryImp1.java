package com.ex.repositories;

import javax.transaction.Transactional;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.ex.beans.UserInfo;

@Transactional
@Repository
public class UserInfoRepositoryImp1 implements UserInfoRepository {

	@Autowired
	SessionFactory sf;
	
	@Override
	public UserInfo add(UserInfo a) {
		int id = (Integer) sf.getCurrentSession().save(a);
		a.setId(id);
		return a;
	}

}
