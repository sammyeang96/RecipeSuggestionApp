package com.ex.repositories;

import com.ex.beans.Pantry;

public interface PantryRepository {

	public Pantry add(Pantry a);
	
	public Pantry retrieve(String username);

	public Pantry update(Pantry a);

}
