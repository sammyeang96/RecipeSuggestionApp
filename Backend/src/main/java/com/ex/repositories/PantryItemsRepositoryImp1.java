package com.ex.repositories;

import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;

import org.hibernate.SessionFactory;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.ex.beans.PantryItems;

@Transactional
@Repository
public class PantryItemsRepositoryImp1 implements PantryItemsRepository {
	
	@Autowired
	SessionFactory sf;
	
	static PantryItemsRepositoryImp1 obj = new PantryItemsRepositoryImp1();
	
//	public static void main(String[] args) {
//		List <PantryItems> pi = obj.getAllData(1);
//		System.out.println(pi.toString());
//	}
	
	// Returns rows based on supplied ID
	@SuppressWarnings("unchecked")      
	public List<PantryItems> getAllData(int pantryId){       
		List<PantryItems> pies = sf.getCurrentSession().createCriteria(PantryItems.class).list();
		ArrayList<PantryItems> userPantry = new ArrayList<PantryItems>();			
		for(PantryItems pi : pies) {
			if(pi.getPantryId().getId()==pantryId) {
				userPantry.add(pi);
			}
			else {
				System.out.println("not in pantry");
			}
		}
		return userPantry;
	}

	@Override
	public PantryItems deleteItem(int id) {
		PantryItems ate = (PantryItems) sf.getCurrentSession().createCriteria(PantryItems.class).add(Restrictions.eqOrIsNull("id", id)).uniqueResult();
		sf.getCurrentSession().delete(ate);
		return ate;
	}

	// TODO: FIX
	@Override
	public List<PantryItems> addData(List<PantryItems> a) {
		@SuppressWarnings("unchecked")
		List<PantryItems> pies = sf.getCurrentSession().createCriteria(PantryItems.class).list();
		System.out.println(pies);
		for(PantryItems pi: pies) {
			sf.getCurrentSession().save(pi);
		}
		return a;
	}	
}