import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../../models/Ingredient.model';
import { PantryService } from '../../services/pantry.service';
import { SearchAlgorithmService } from '../../services/search-algorithm.service';
import { FoodCategoryComponent } from '../food-category/food-category.component';

import { RouterModule, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-pantry',
  templateUrl: './pantry.component.html',
  styleUrls: ['./pantry.component.css']
})
export class PantryComponent implements OnInit {
  ingredient: Ingredient[] = [];
  constructor( private authService: AuthService, private foodCategory: FoodCategoryComponent, private router: Router, private pantryService: PantryService, private searchAlgorithmService: SearchAlgorithmService ) { }

  ngOnInit() {
  }
// to be used to sort the pantry items
  public sortIngredients() {
    this.ingredient.sort(function (a, b) {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    })
  }
  public sortIngredientsType( arr:Ingredient[]) {
    arr.sort(function (a, b) {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    })
    return arr;
  }

  addSelectionToArray() {
    this.ingredient = this.pantryService.ingredient;
    this.searchAlgorithmService.searchPantryRecipes(this.ingredient).subscribe(
      data => {
      this.searchAlgorithmService.resultSet = data;
      console.log(data);
    } );
    this.router.navigate(['feature']);
  }

  removeItemFromPantry(ingredient: Ingredient) {
    this.pantryService.ingredient.splice(this.pantryService.ingredient.indexOf(ingredient, 0), 1);
    this.foodCategory.ingredients.push(ingredient);
  }

  updatePantry() {
this.authService.updateUserPantry()
  }


}
