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
  public ingredient: Ingredient[] = [];
  categoryColor: string;

  public state = 'inavtive';

  constructor(router: Router, private foodService: HandleArraysService, private pantryService: PantryService) { }

  ngOnInit() {
    this.showIngredients = false;

  }

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
    this.ingredients = this.foodService.getMeats();
    this.sortIngredients();
    this.currentCategory = "meats";
    this.showIngredients = true;
    this.categoryColor = "btn btn-sm btn-warning"; 
  }

  public showDairy() {
    this.ingredients = this.foodService.getDairy();
    this.sortIngredients();
    this.currentCategory = "dairy";
    this.showIngredients = true;
  }

  public showVeggie() {
    this.ingredients = this.foodService.getVeggies();
    this.sortIngredients();
    this.currentCategory = "veggies";
    this.showIngredients = true;
  }

  public showFruit() {
    this.ingredients = this.foodService.getFruits();
    this.sortIngredients();
    this.currentCategory = "fruits";
    this.showIngredients = true;
  }

  public showGrain() {
    this.ingredients = this.foodService.getStarches();
    this.sortIngredients();
    this.currentCategory = "grains";
    this.showIngredients = true;
  }

  public showHerbSpice() {
    this.ingredients = this.foodService.getSpices();
    this.sortIngredients();
    this.currentCategory = "herbs-spices";
    this.showIngredients = true;
  }

  addToPantry(ingredient: Ingredient) {
    this.pantryService.ingredient.push(ingredient);
    this.ingredients.splice(this.ingredients.indexOf(ingredient, 0), 1);
  }
}
