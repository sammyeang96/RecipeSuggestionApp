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
	
	public List<PantryItems> getAllData(int pantryId) {
		return pantryItemsRepo.getAllData(pantryId);
	}

	public PantryItems deleteItem(int id) {
		return pantryItemsRepo.deleteItem(id);
	}

	public List<PantryItems> addData(List<PantryItems> a) {
		return pantryItemsRepo.addData(a);
	}
}
