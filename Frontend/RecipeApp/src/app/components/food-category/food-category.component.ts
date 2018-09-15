import { Component, OnInit, Input } from '@angular/core';
import { HandleArraysService } from '../../services/handle-arrays.service';
import { RouterModule, Router } from '../../../../node_modules/@angular/router';
import { Ingredient } from '../../models/Ingredient.model';
import { PantryService } from '../../services/pantry.service';

@Component({
  selector: 'app-food-category',
  templateUrl: './food-category.component.html',
  styleUrls: ['./food-category.component.css']
})
export class FoodCategoryComponent implements OnInit {

  public currentCategory;
  public showIngredients: boolean;
  public contentEditable: boolean;
  public ingredients: Ingredient[] = [];
  public masterPantry: Ingredient[] = [];

  public meatIngredients = this.foodService.getMeats();
  public dairyIngredients = this.foodService.getDairy();
  public veggiesIngredients = this.foodService.getVeggies();
  public spicesIngredients = this.foodService.getSpices();
  public fruitsIngredients = this.foodService.getFruits();
  public starchesIngredients = this.foodService.getStarches();



  categoryColor: string;

  public usersIngredients: Ingredient[] = [];

  constructor(router: Router, private foodService: HandleArraysService, private pantryService: PantryService) { }

  ngOnInit() {
    this.showIngredients = false;
    this.masterPantry = this.foodService.pantry;

  }


  // filterOutLoggedInUsersIngredients() {
    // console.log(this.pantryService.ingredient);

    
    // for (let i = 0; i < this.pantryService.ingredient.length; i++) {
    //   let cat = this.pantryService.ingredient[i].category;


    //   if (cat === "meats") {
    //     this.meatIngredients.splice(this.meatIngredients.indexOf(this.pantryService.ingredient[i], 0), 1);
    //   }
    //   if (cat === "dairy") {
    //     this.dairyIngredients.splice(this.dairyIngredients.indexOf(this.pantryService.ingredient[i], 0), 1);
    //   }
    //   if (cat === "spices") {
    //     this.spicesIngredients.splice(this.spicesIngredients.indexOf(this.pantryService.ingredient[i], 0), 1);
    //   }
    //   if (cat === "fruits") {
    //     this.fruitsIngredients.splice(this.fruitsIngredients.indexOf(this.pantryService.ingredient[i], 0), 1);
    //   }
    //   if (cat === "grains") {
    //     this.starchesIngredients.splice(this.starchesIngredients.indexOf(this.pantryService.ingredient[i], 0), 1);
    //   }
    //   if (cat === "veggies") {
    //     for (let a = 0; a < this.veggiesIngredients.length; a++) {
    //       if (this.pantryService.ingredient[i].id = this.veggiesIngredients[a].id){
    //         console.log("Pantry id" + this.pantryService.ingredient[i].id)
    //         console.log("veggiesArray id" +this.veggiesIngredients[a].id)
    //         this.veggiesIngredients.splice(a,1);
    //       }

    //     }
    //   }
    //   this.masterPantry.splice(this.masterPantry.indexOf(this.pantryService.ingredient[i], 0), 1);
    // }

      
    
    
  // }
  // this.ingredients = this.ingredients.filter(x => this.pantryService.ingredient.includes(x));
  // console.log(this.ingredients);
  


  public sortIngredients() {
  this.ingredients.sort(function (a, b) {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  })
}

  public setCategory = (category) => {
  if (this.currentCategory == category) return;
  this.currentCategory = category;
}

  public showCarne() {
  this.ingredients = this.meatIngredients;
  this.sortIngredients();
  this.currentCategory = "meats";
  this.showIngredients = true;
  console.log(this.meatIngredients);
}

  public showDairy() {
  this.ingredients = this.dairyIngredients;
  this.sortIngredients();
  this.currentCategory = "dairy";
  this.showIngredients = true;
}

  public showVeggie() {
  this.ingredients = this.veggiesIngredients;
  this.sortIngredients();
  this.currentCategory = "veggies";
  this.showIngredients = true;

}

  public showFruit() {
  this.ingredients = this.fruitsIngredients;
  this.sortIngredients();
  this.currentCategory = "fruits";
  this.showIngredients = true;
}

  public showGrain() {
  this.ingredients = this.starchesIngredients;
  this.sortIngredients();
  this.currentCategory = "grains";
  this.showIngredients = true;
}

  public showHerbSpice() {
  this.ingredients = this.spicesIngredients;
  this.sortIngredients();
  this.currentCategory = "herbs-spices";
  this.showIngredients = true;
}

addToPantry(ingredient: Ingredient) {
  let cat = ingredient.category;
  this.pantryService.ingredient.push(ingredient);
  this.masterPantry.splice(this.masterPantry.indexOf(ingredient, 0), 1);
  
  if (cat == "meats") {

    this.meatIngredients.splice(this.meatIngredients.indexOf(ingredient, 0), 1);
  }
  if (cat == "dairy") {
    this.dairyIngredients.splice(this.dairyIngredients.indexOf(ingredient, 0), 1);
  }
  if (cat == "spices") {
    this.spicesIngredients.splice(this.spicesIngredients.indexOf(ingredient, 0), 1);
  }
  if (cat == "fruits") {
    this.fruitsIngredients.splice(this.fruitsIngredients.indexOf(ingredient, 0), 1);
  }
  if (cat == "grains") {
    this.starchesIngredients.splice(this.starchesIngredients.indexOf(ingredient, 0), 1);
  }
  if (cat == "veggies") {
    this.veggiesIngredients.splice(this.veggiesIngredients.indexOf(ingredient, 0), 1);
  }
  // this.ingredients.splice(this.ingredients.indexOf(ingredient, 0), 1);
}
}
