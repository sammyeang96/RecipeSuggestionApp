package com.ex.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ex.beans.PantryItems;
import com.ex.repositories.PantryItemsRepository;

@Service("pantryItemsService")
public class PantryItemsService {
	
	@Autowired
	private PantryItemsRepository pantryItemsRepo;
<<<<<<< HEAD:Backend/src/main/java/com/ex/services/PantryItemsService.java
	
	public List<PantryItems> getAllData(int pantryId) {
		return pantryItemsRepo.getAllData(pantryId);
=======

	public List<PantryItems> addAllBypantryId(List<PantryItems> a) {
		return pantryItemsRepo.addAllBypantryId(a);
>>>>>>> 9e09b2e5d92c0ad6c29a6bb4ad5a4535663458c8:RecipeApp/src/main/java/com/ex/services/PantryItemsService.java
	}
}
