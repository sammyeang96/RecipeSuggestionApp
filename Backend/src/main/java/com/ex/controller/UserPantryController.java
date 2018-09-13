package com.ex.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.ex.beans.UserLogin;
import com.ex.beans.UserPantry;
import com.ex.services.UserPantryService;

@RestController
@RequestMapping("/pantry")
@CrossOrigin(origins = "*")
public class UserPantryController {
	
	@Autowired
	private UserPantryService userPantryService;
	
	@RequestMapping(value="/create", method=RequestMethod.POST,
		consumes=MediaType.APPLICATION_JSON_VALUE,
		produces=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<UserPantry> addUserPantry(@RequestBody UserPantry a) {
		a = userPantryService.addUserPantry(a);
		if (a == null) {
			return new ResponseEntity<UserPantry>(a, HttpStatus.CONFLICT);
		}
		else {
			return new ResponseEntity<UserPantry>(a, HttpStatus.CREATED);
		}
	}
	
	@RequestMapping(value="/retrieve", method=RequestMethod.POST,
		consumes=MediaType.APPLICATION_JSON_VALUE,
		produces=MediaType.APPLICATION_JSON_VALUE)	
	public ResponseEntity<UserPantry> retrieveUserPantry(@RequestBody UserLogin a) {
		System.out.println(a.getUsername());
		UserPantry result = userPantryService.retrieve(a.getUsername());
		System.out.println(result);
		return new ResponseEntity<UserPantry>(result, HttpStatus.OK);
	}
}
