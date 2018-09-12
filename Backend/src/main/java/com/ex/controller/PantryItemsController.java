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
import com.ex.beans.UserPantry;
import com.ex.services.PantryItemsService;

@RestController
@RequestMapping("/items")
public class PantryItemsController {
	
	@Autowired
	private PantryItemsService pantryItemsService;
	

	@RequestMapping(value="/retrieve", method=RequestMethod.POST,
		consumes=MediaType.APPLICATION_JSON_VALUE,
		produces=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<List<PantryItems>> getAllData(@RequestBody UserPantry a) {
		System.out.println(a.getId());
		List<PantryItems> list = pantryItemsService.getAllData(a.getId());
		return new ResponseEntity<List<PantryItems>>(list, HttpStatus.OK);
	}
	
	// TODO: ADD A LIST TO THE TABLE
	@RequestMapping(value="/add", method=RequestMethod.POST,
		consumes=MediaType.APPLICATION_JSON_VALUE,
		produces=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<List<PantryItems>> addPantryItems(@RequestBody List<PantryItems> a) {
		List<PantryItems> list = pantryItemsService.addData(a);
		return new ResponseEntity<List<PantryItems>>(list, HttpStatus.OK);
	}
	
	@RequestMapping(value="/delete", method=RequestMethod.POST,
			consumes=MediaType.APPLICATION_JSON_VALUE,
			produces=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<PantryItems> deleteItem(@RequestBody UserPantry a) {
		PantryItems deleted = pantryItemsService.deleteItem(a.getId());
		return new ResponseEntity<PantryItems>(deleted, HttpStatus.OK);
	}
}
