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
import com.ex.services.UserLoginService;

@RestController
@RequestMapping("/login")
@CrossOrigin(origins = "*")
public class UserLoginController {
	
	@Autowired
	private UserLoginService userLoginService;
	
	// Takes in UserLogin object (username, password)
	@RequestMapping(value="/create", method=RequestMethod.POST,
		consumes=MediaType.APPLICATION_JSON_VALUE,
		produces=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<UserLogin> addUserLogin(@RequestBody UserLogin a) {
		a = userLoginService.addUserLogin(a);
		if(a == null) {
			return new ResponseEntity<UserLogin>(HttpStatus.CONFLICT);
		}
		else {
			return new ResponseEntity<UserLogin>(a, HttpStatus.CREATED);
		}
	}
	
	// Takes in UserLogin object (username, password) and returns it if found and null if not found
	@RequestMapping(value="/validate", method=RequestMethod.POST,
		consumes=MediaType.APPLICATION_JSON_VALUE,
		produces=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<UserLogin> getUserLogin(@RequestBody UserLogin a) {
		UserLogin result = userLoginService.getByUsername(a.getUsername());
		if (result.getPassword().equals(a.getPassword())) {
			System.out.println(a);
			return new ResponseEntity<UserLogin>(a, HttpStatus.OK);
		}
		else {
			return new ResponseEntity<UserLogin>(HttpStatus.NOT_FOUND);
		}
	}
}