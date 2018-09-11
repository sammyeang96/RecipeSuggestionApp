package com.ex.controller;

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
	
	@RequestMapping(value="/add", method=RequestMethod.POST,
			consumes=MediaType.APPLICATION_JSON_VALUE,
			produces=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<PantryItems> addPantryItems(@RequestBody PantryItems a) {
		a = pantryItemsService.addPantryItems(a);
		if(a == null) {
			return new ResponseEntity<PantryItems>(a, HttpStatus.CONFLICT);
		}
		else {
			return new ResponseEntity<PantryItems>(a, HttpStatus.CREATED);
		}
		
	}

}