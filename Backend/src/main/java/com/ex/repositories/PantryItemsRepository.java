package com.ex.repositories;

import java.util.List;

import com.ex.beans.PantryItems;

public interface PantryItemsRepository {

	public List<PantryItems> getAllData(int pantryId);

}
