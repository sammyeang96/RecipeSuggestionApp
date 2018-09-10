package com.ex.controllers;


import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.ex.beans.User;
import com.ex.service.UserService;
//IGNORE THIS CLASS BEN
@RestController
@RequestMapping("/login2")
//@CrossOrigin //can put parenthesees to say port 4200 in order to reach through this port
public class LoginController2 {
	static String uun;
	static String uup;
	@Autowired
	private UserService uS;
	
	
	@RequestMapping(method=RequestMethod.GET,produces=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<List<User>> getAll() {
		List<User> users = uS.getAll();
		
		
		
		System.out.println(users);
		return new ResponseEntity<List<User>>(users, HttpStatus.OK);
//		if(authors.size() == 0) {
//			authors = null;
//			return new ResponseEntity<List<Author>>(authors, HttpStatus.NOT_FOUND);
//		}else {
//			return new ResponseEntity<List<Author>>(authors, HttpStatus.OK);
//		}
	}
	
//	@RequestMapping(value="/{id}", method=RequestMethod.GET, produces=MediaType.APPLICATION_JSON_VALUE)
//	public ResponseEntity<Author> getByID(@PathVariable int id){
//		return new ResponseEntity<Author>(authorService.getbyId(id), HttpStatus.OK);
//	}
//	
	@RequestMapping(method=RequestMethod.POST, 
			consumes=MediaType.APPLICATION_JSON_VALUE, //request body content
			produces=MediaType.APPLICATION_JSON_VALUE,params= {"username","password"}) //response body content
	
	@ResponseBody
	public String getuname(
	  @RequestParam("username") String username,
	 @RequestParam("password") String password)	{
		
		uun=username;
		uup=password;
	   System.out.println("inside uname"+username+" "+password);
		return username+","+password;
	}
	


	public ResponseEntity<User> addUser(@Valid @RequestBody User a){ //indicate that the author will be found in the request body
		
		//getuname();
	
		
		String name=uun;
		
		System.out.println("Touched login");
		
		String password=a.getPassword();
		
		System.out.println("name and passsowrd:  "+name+" : "+password );
		
		User u=uS.login(name,password);
	
		if(u==null) {
			
			System.out.println("no user found");
			return new ResponseEntity<User>(a, HttpStatus.CONFLICT);		
		}
		else {
				
			return new ResponseEntity<User>(a, HttpStatus.CREATED);
		}	
	}
}