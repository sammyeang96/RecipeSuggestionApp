package com.ex.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.ex.beans.UserPantry;
import com.ex.services.UserPantryService;

@RestController
@RequestMapping("/pantry")
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
}
