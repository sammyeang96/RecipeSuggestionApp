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

import com.ex.beans.PantryItems;
import com.ex.services.PantryItemsService;

@RestController
@RequestMapping("/items")
public class PantryItemsController {
	
	@Autowired
	private PantryItemsService pantryItemsService;
	
	// Takes a JSON that's a list to add to the table
	@RequestMapping(value="/add",method=RequestMethod.POST,
		consumes=MediaType.APPLICATION_JSON_VALUE,
		produces=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<List<PantryItems>> addAllBypantryId(@RequestBody List<PantryItems> a) {
		
		System.out.println("woohoo! we made it here!");
		System.out.println(a);
		
		a = pantryItemsService.addAllBypantryId(a);
		
		if(a == null) {
			return new ResponseEntity<List<PantryItems>>(HttpStatus.CONFLICT);
		}
		else {
			return new ResponseEntity<List<PantryItems>>(a, HttpStatus.OK);
		}
	}
}
