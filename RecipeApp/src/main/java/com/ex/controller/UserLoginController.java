package com.ex.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.ex.beans.UserLogin;
import com.ex.services.UserLoginService;

@RestController
@RequestMapping("/login")
public class UserLoginController {
	
	@Autowired
	private UserLoginService userLoginService;
	
	@RequestMapping(value="/create", method=RequestMethod.POST,
			consumes=MediaType.APPLICATION_JSON_VALUE,
			produces=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<UserLogin> addUserLogin(@RequestBody UserLogin a) {
		System.out.println("woohoo! we made it here!");
		a = userLoginService.addUserLogin(a);
		if(a == null) {
			return new ResponseEntity<UserLogin>(HttpStatus.CONFLICT);
		}
		else {
			return new ResponseEntity<UserLogin>(a, HttpStatus.CREATED);
		}
	}

}