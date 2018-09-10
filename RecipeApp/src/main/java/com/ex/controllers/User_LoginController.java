package com.ex.controllers;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.ex.beans.User_Login;
import com.ex.services.User_LoginService;

@RestController
@RequestMapping("/create")
public class User_LoginController {
	
	public User_LoginController() {
		System.out.println("IN CONTROLLER CONSTRUCTOR");
	}

	@Autowired
	private User_LoginService user_LoginService;
	
	@RequestMapping(method=RequestMethod.POST)
	public ResponseEntity<User_Login> addUser_Login(@Valid @RequestBody User_Login a) {
		System.out.println("IN ADDUSER_LOGIN");
		a = user_LoginService.addUser_Login(a);
		if(a == null) {
			return new ResponseEntity<User_Login>(a, HttpStatus.CONFLICT);
		}
		else {
			return new ResponseEntity<User_Login>(a, HttpStatus.CREATED);
		}
	}
	
	@RequestMapping(method=RequestMethod.GET)
	public String testMethod() {
		return "Hello";
	}
}
