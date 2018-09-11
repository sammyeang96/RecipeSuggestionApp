package com.ex.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.ex.beans.UserInformation;
import com.ex.services.UserInformationService;

@RestController
@RequestMapping("/info")
public class UserInformationController {

	@Autowired
	private UserInformationService userInformationService;
	
	@RequestMapping(value="/create",method=RequestMethod.POST,
		consumes=MediaType.APPLICATION_JSON_VALUE,
		produces=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<UserInformation> addUserInformation(@RequestBody UserInformation a) {
		System.out.println("IN IT NOW");
		a = userInformationService.addUserInformation(a);
		return new ResponseEntity<UserInformation>(a, HttpStatus.OK);
	}
	
}
