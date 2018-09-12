package com.ex.repositories;

import java.util.ArrayList;
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
			System.out.println(pies.toString());
			System.out.println(pantryId);
			
			for(PantryItems pi : pies) {
				System.out.println(pi.getPantryId());
				if(pi.getPantryId().getId()==pantryId) {
					userPantry.add(pi);
					System.out.println(userPantry.toString());
				}
				else {
					System.out.println("not in pantry");
				}
			}
			return userPantry;
	}
}