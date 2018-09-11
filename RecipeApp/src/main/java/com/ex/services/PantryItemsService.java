package com.ex.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ex.beans.PantryItems;
import com.ex.repositories.PantryItemsRepository;

@Service("pantryItemsService")
public class PantryItemsService {
	
	@Autowired
	private PantryItemsRepository pantryItemsRepo;
	
	public PantryItems addPantryItems(PantryItems a) {
		return pantryItemsRepo.add(a);
	}

}