import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../../models/Ingredient.model';
import { PantryService } from '../../services/pantry.service';
import { SearchAlgorithmService } from '../../services/search-algorithm.service';
import { FoodCategoryComponent } from '../food-category/food-category.component';
import { AuthService } from '../../services/auth.service';
import { RouterModule, Router } from '@angular/router';
import { HandleArraysService } from '../../services/handle-arrays.service';
@Component({
  selector: 'app-pantry',
  templateUrl: './pantry.component.html',
  styleUrls: ['./pantry.component.css']
})
export class PantryComponent implements OnInit {
  ingredient: Ingredient[] = [];
  stringForDatabase: string;
  userPantry: number[] = [];
  private databasestring: string = "";
  userPantryIngredients: Ingredient[] = [];
  constructor( private handleArrays: HandleArraysService, private authService: AuthService, private foodCategory: FoodCategoryComponent, private router: Router, private pantryService: PantryService, private searchAlgorithmService: SearchAlgorithmService ) { }

  ngOnInit() {
    this.unpackUserPantryArray();
  }
// to be used to sort the pantry items
  public sortIngredients() {
    this.ingredient.sort(function (a, b) {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    });
  }
  public sortIngredientsType( arr:Ingredient[]) {
    arr.sort(function (a, b) {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    });
    return arr;
  }

  addSelectionToArray() {
    this.ingredient = this.pantryService.ingredient;
    this.searchAlgorithmService.searchPantryRecipes(this.ingredient).subscribe(
      data => {
      this.searchAlgorithmService.resultSet = data;
    } );
    this.turnArrayToString();
    this.router.navigate(['feature']);
  }

  removeItemFromPantry(ingredient: Ingredient) {
    this.pantryService.ingredient.splice(this.pantryService.ingredient.indexOf(ingredient, 0), 1);
    this.foodCategory.ingredients.push(ingredient);
  }

  turnArrayToString() {
    this.databasestring = String (this.pantryService.ingredient[0].id);
    for( let i = 1; i < this.pantryService.ingredient.length; i++) {
        this.databasestring = String (this.databasestring + "," + this.pantryService.ingredient[i].id);
    }
    this.pantryService.userPantryString = this.databasestring;
    this.authService.userPantryString = this.databasestring;
  }
  unpackUserPantryArray() {
    const array = this.authService.dataObject.ingredients.split(',');
    for (let i = 0; i < array.length; i++) {
        this.userPantry.push(Number(array[i]));
    }
    console.log(this.userPantry);
    this.findPantry();
  }

  findPantry() {
    for( let i = 0; i < this.userPantry.length; i++) {
    this.userPantryIngredients.push(this.handleArrays.pantry.find(o => o.id === this.userPantry[i]));
    }
    console.log(this.userPantryIngredients);
  }
}
