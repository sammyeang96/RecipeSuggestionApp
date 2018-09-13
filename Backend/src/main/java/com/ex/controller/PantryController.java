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
import com.ex.beans.Pantry;
import com.ex.services.PantryService;

@RestController
@RequestMapping("/pantry")
<<<<<<< HEAD:Backend/src/main/java/com/ex/controller/PantryController.java
public class PantryController {
=======
@CrossOrigin(origins = "*")
public class UserPantryController {
>>>>>>> staging:Backend/src/main/java/com/ex/controller/UserPantryController.java
	
	@Autowired
	private PantryService userPantryService;
	
	@RequestMapping(value="/create", method=RequestMethod.POST,
		consumes=MediaType.APPLICATION_JSON_VALUE,
		produces=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Pantry> addUserPantry(@RequestBody Pantry a) {
		a = userPantryService.addUserPantry(a);
		if (a == null) {
			return new ResponseEntity<Pantry>(a, HttpStatus.CONFLICT);
		}
		else {
			return new ResponseEntity<Pantry>(a, HttpStatus.CREATED);
		}
	}
	
	@RequestMapping(value="/update", method=RequestMethod.POST,
		consumes=MediaType.APPLICATION_JSON_VALUE,
		produces=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Pantry> updateUserPantry(@RequestBody Pantry a) {
		a = userPantryService.updateUserPantry(a);
		return new ResponseEntity<Pantry>(a, HttpStatus.OK);
	}
	
	@RequestMapping(value="/retrieve", method=RequestMethod.POST,
		consumes=MediaType.APPLICATION_JSON_VALUE,
		produces=MediaType.APPLICATION_JSON_VALUE)	
	public ResponseEntity<Pantry> retrieveUserPantry(@RequestBody UserLogin a) {
		System.out.println(a.getUsername());
		Pantry result = userPantryService.retrieve(a.getUsername());
		System.out.println(result);
		return new ResponseEntity<Pantry>(result, HttpStatus.OK);
	}
}
