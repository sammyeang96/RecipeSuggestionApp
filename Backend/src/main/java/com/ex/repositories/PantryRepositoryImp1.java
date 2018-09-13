package com.ex.repositories;

import javax.transaction.Transactional;

import org.hibernate.SessionFactory;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.ex.beans.Pantry;

@Transactional
@Repository
public class PantryRepositoryImp1 implements PantryRepository {
	
	@Autowired
	SessionFactory sf;

	@Override
	public Pantry add(Pantry a) {
		int id = (Integer) sf.getCurrentSession().save(a);
		a.setId(id);
		return a;
	}

	@Override
	public Pantry retrieve(String username) {
		return (Pantry) sf.getCurrentSession().createCriteria(Pantry.class).add(Restrictions.eq("username.username", username)).uniqueResult();
	}

	@Override
	public Pantry update(Pantry a) {
		Pantry pantry = (Pantry) sf.getCurrentSession().get(Pantry.class, a.getId());
		pantry.setIngredients(a.getIngredients());
		return pantry;
	}
}
