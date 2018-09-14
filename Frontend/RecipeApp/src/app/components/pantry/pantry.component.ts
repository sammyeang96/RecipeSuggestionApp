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

  private databasestring: string = '';
  constructor(private handleArrays: HandleArraysService,
    private authService: AuthService,
    private foodCategory: FoodCategoryComponent,
    private router: Router, private pantryService: PantryService,
    private searchAlgorithmService: SearchAlgorithmService) { }

  ngOnInit() {

  }

  removeItemFromPantry(ingredient: Ingredient) {
    this.pantryService.ingredient.splice(this.pantryService.ingredient.indexOf(ingredient, 0), 1);
    // if all ingredients includes the ingredient
    if (this.foodCategory.masterPantry.includes(ingredient)) {

     console.log('already exists');
    } else {
      // otherwise, compare the category of the element
      if (ingredient.category === this.foodCategory.currentCategory) {
        // make the visible switch
        this.foodCategory.ingredients.push(ingredient);
        this.foodCategory.masterPantry.push(ingredient);
      } else {
        // add to the masterPantry by itself
        this.foodCategory.masterPantry.push(ingredient);
      }
    }
    console.log('in removeItemFromPantry');
  }

  updatePantry(databasestring) {
    this.ingredient = this.pantryService.ingredient;
    this.searchAlgorithmService.searchPantryRecipes(this.ingredient).subscribe(
      data => {
        this.searchAlgorithmService.resultSet = data;
      });
    this.turnArrayToString();

    databasestring = this.databasestring;
    console.log('in updatePantry');
    console.log('printing databasestring inside pantry component: ');
    console.log(databasestring);
    this.authService.intermediaryFunctionForUpdatePantry(databasestring).subscribe(data => console.log(data));
  }

  // to be used to sort the pantry items
  public sortIngredients() {
    this.ingredient.sort(function (a, b) {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
  }
  public sortIngredientsType(arr: Ingredient[]) {
    arr.sort(function (a, b) {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
    return arr;
  }

  addSelectionToArray() {
    console.log('in addSelectionToArray');
    this.ingredient = this.pantryService.ingredient;
    this.searchAlgorithmService.searchPantryRecipes(this.ingredient).subscribe(
      data => {
        this.searchAlgorithmService.resultSet = data;
      });
    this.turnArrayToString();
    this.router.navigate(['feature']);
  }

  turnArrayToString() {
    this.databasestring = String(this.pantryService.ingredient[0].id);
    for (let i = 1; i < this.pantryService.ingredient.length; i++) {
      this.databasestring = String(this.databasestring + ',' + this.pantryService.ingredient[i].id);
    }
    this.pantryService.userPantryString = this.databasestring;
    this.authService.userPantryString = this.databasestring;
    console.log('in turnArrayToString');
    console.log('printing databasestring:');
    console.log(this.databasestring);
    // this.unpackUserPantryArray();
  }

}
