import { Component, OnInit, Input } from '@angular/core';
import { HandleArraysService } from '../../services/handle-arrays.service';
import { RouterModule, Router } from '../../../../node_modules/@angular/router';
import { Ingredient } from '../../models/Ingredient.model';
import { PantryService } from '../../services/pantry.service';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-food-category',
  templateUrl: './food-category.component.html',
  styleUrls: ['./food-category.component.css'],
  animations: [
    trigger('heroState', [
      state('inactive', style({
        backgroundColor: '#eee',
        transform: 'scale(1)'
      })),
      state('active', style({
        backgroundColor: '#cfd8dc',
        transform: 'scale(1.1)'
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ])
  ]
})
export class FoodCategoryComponent implements OnInit {

  public currentCategory;
  public showIngredients: boolean;
  public contentEditable: boolean;
  public ingredients: Ingredient[] = [];
  public ingredient: Ingredient[] = [];

  public state = 'inavtive';

  constructor(router: Router, private foodService: HandleArraysService, private pantryService: PantryService) { }

  ngOnInit() {
    this.showIngredients = false;
  }

  toggleState() {
    this.state = this.state === 'active' ? 'inactive' : 'active';
  }

  public setCategory = (category) => {
    if (this.currentCategory == category) return;
    this.currentCategory = category;
  }

  public showCarne() {
    this.ingredients = this.foodService.getMeats();
    this.currentCategory = "meats";
    this.showIngredients = true;
    // console.log(this.ingredients);
  }

  public showDairy() {
    this.ingredients = this.foodService.getDairy();
    this.currentCategory = "dairy";
    this.showIngredients = true;
  }

  public showVeggie() {
    this.ingredients = this.foodService.getVeggies();
    this.currentCategory = "veggies";
    this.showIngredients = true;
  }

  public showFruit() {
    this.ingredients = this.foodService.getFruits();
    this.currentCategory = "fruits";
    this.showIngredients = true;
  }

  public showGrain() {
    this.ingredients = this.foodService.getStarches();
    this.currentCategory = "grains";
    this.showIngredients = true;
  }

  public showHerbSpice() {
    this.ingredients = this.foodService.getSpices();
    this.currentCategory = "herbs-spices";
    this.showIngredients = true;
  }

  addToPantry(ingredient: Ingredient) {
    this.pantryService.ingredient.push(ingredient);
  }
}
