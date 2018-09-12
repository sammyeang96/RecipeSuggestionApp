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
	
<<<<<<< HEAD:Backend/src/main/java/com/ex/controller/PantryItemsController.java
	@RequestMapping(value="/add", method=RequestMethod.POST,
		consumes=MediaType.APPLICATION_JSON_VALUE,
		produces=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<PantryItems> addPantryItems(@RequestBody PantryItems a) {
		//...
		return null;
	}
	
	// Will retrieve a list of items from the PantryItems table based on the supplied ID
	@RequestMapping(value="/retrieve", method=RequestMethod.POST,
		consumes=MediaType.APPLICATION_JSON_VALUE,
		produces=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<List<PantryItems>> getAllData(@RequestBody UserPantry a) {
		List<PantryItems> list = pantryItemsService.getAllData(a.getId());
		return new ResponseEntity<List<PantryItems>>(list, HttpStatus.OK);
=======
	// Takes a JSON that's a list to add to the table
	@RequestMapping(value="/add",method=RequestMethod.POST,
		consumes=MediaType.APPLICATION_JSON_VALUE,
		produces=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<List<PantryItems>> addAllBypantryId(@RequestBody List<PantryItems> a) {
		a = pantryItemsService.addAllBypantryId(a);
		if(a == null) {
			return new ResponseEntity<List<PantryItems>>(HttpStatus.CONFLICT);
		}
		else {
			return new ResponseEntity<List<PantryItems>>(a, HttpStatus.OK);
		}
>>>>>>> 9e09b2e5d92c0ad6c29a6bb4ad5a4535663458c8:RecipeApp/src/main/java/com/ex/controller/PantryItemsController.java
	}
}
