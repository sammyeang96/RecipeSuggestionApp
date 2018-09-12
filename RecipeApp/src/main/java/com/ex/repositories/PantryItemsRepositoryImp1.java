package com.ex.repositories;

import java.util.List;

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
	public List<PantryItems> addAllBypantryId(List<PantryItems> a) {
		@SuppressWarnings("unchecked")
		List<PantryItems> list = (List<PantryItems>) sf.getCurrentSession().save(a);
		return list;
	}

}
