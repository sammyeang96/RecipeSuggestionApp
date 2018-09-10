package com.ex.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ex.beans.User;


@Service
public class UserService {

	static ArrayList<User> users =new ArrayList<User>();
	

	
	public List<User> getAll(){
		
		//This get all will be changed to get users from the database
		//first we must see if we can get it working from the website
		return users;
		
	}
	
	public User login(String username,String password) {
		
		Optional<User> user=users.stream().filter(u->u.getUsername().equalsIgnoreCase(username)).findFirst();
		
		
		if(user.isPresent()) {
			if(user.get().getPassword().equals(password)) {
				return user.get();
			}
			
		}
		
		return null;
		
	}

	public User findByUsername(String username) {
		User z=null;
		for(User a:users) {
			if(a.getUsername().equals(username)) {
				z=a;
			}
		}
		return z;
	}
}
