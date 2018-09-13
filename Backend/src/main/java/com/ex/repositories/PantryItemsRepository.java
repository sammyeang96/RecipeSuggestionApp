package com.ex.repositories;

import java.util.List;

import com.ex.beans.PantryItems;

public interface PantryItemsRepository {

	public List<PantryItems> getAllData(int pantryId);

	public PantryItems deleteItem(int id);

	public List<PantryItems> addData(List<PantryItems> a);

}
