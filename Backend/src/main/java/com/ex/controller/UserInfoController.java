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

import com.ex.beans.UserInfo;
import com.ex.services.UserInfoService;

@RestController
@RequestMapping("/info")
@CrossOrigin(origins = "*")
public class UserInfoController {

	@Autowired
	private UserInfoService userInformationService;
	
	@RequestMapping(value="/create",method=RequestMethod.POST,
		consumes=MediaType.APPLICATION_JSON_VALUE,
		produces=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<UserInfo> addUserInformation(@RequestBody UserInfo a) {
		a = userInformationService.addUserInformation(a);
		return new ResponseEntity<UserInfo>(a, HttpStatus.OK);
	}
	
}