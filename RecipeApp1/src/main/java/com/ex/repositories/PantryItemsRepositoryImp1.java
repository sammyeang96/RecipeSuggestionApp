package com.ex.repositories;

import javax.transaction.Transactional;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.ex.beans.PantryItems;

@Transactional
@Repository
public class PantryItemsRepositoryImp1 implements PantryItemsRepository {
	
	@Autowired
	SessionFactory sf;

	@Override
	public PantryItems add(PantryItems a) {
		int id = (Integer) sf.getCurrentSession().save(a);
		a.setId(id);
		return a;
	}
	
	

}