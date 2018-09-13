package com.ex.repositories;

import com.ex.beans.Pantry;

public interface UserPantryRepository {


	public Pantry add(Pantry a);
	
	public Pantry retrieve(String username);


}
