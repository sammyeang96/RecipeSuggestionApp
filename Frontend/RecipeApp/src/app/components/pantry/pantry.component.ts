import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../../models/Ingredient.model';
import { PantryService } from '../../services/pantry.service';
import { SearchAlgorithmService } from '../../services/search-algorithm.service';
import { FoodCategoryComponent } from '../food-category/food-category.component';
import { AuthService } from '../../services/auth.service';
import { RouterModule, Router } from '@angular/router';
@Component({
  selector: 'app-pantry',
  templateUrl: './pantry.component.html',
  styleUrls: ['./pantry.component.css']
})
export class PantryComponent implements OnInit {
  ingredient: Ingredient[] = [];
  stringForDatabase: string;
  userPantry: number[];
  private databasestring: string = "";
  constructor(private authService: AuthService, private foodCategory: FoodCategoryComponent, private router: Router, private pantryService: PantryService, private searchAlgorithmService: SearchAlgorithmService ) { }

  ngOnInit() {
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
      console.log(data);
    } );
    this.router.navigate(['feature']);
    
  }

  removeItemFromPantry(ingredient: Ingredient) {
    this.pantryService.ingredient.splice(this.pantryService.ingredient.indexOf(ingredient, 0), 1);
    this.foodCategory.ingredients.push(ingredient);
  }

  addIdtoNewPantryArrayToBeSentToServer() {
    // this.userPantry = [];
    // return this.pantryService.ingredient.forEach(function (ingr) {
    //   // this.stringForDatabase += ingr.id;
    //   console.log("t+");

    //   this.userPantry = this.userPantry.push(ingr.id);
    //   console.log(this.userPantry);
    //   // console.log(this.stringForDatabase);
    //   // userPantry.forEach(function (ident) {
    //   // }
    //   // )
    //   return this.userPantry;
    // });54
    
  }

    // for(let userPantry of this.pantryService.ingredient) {
      
    // }
  
    

  turnArrayToString() {
    this.databasestring = String (this.pantryService.ingredient[0].id);
    for( let i = 1; i < this.pantryService.ingredient.length; i++) {
        this.databasestring = String (this.databasestring + "," + this.pantryService.ingredient[i].id);
    }
    console.log(this.databasestring);
    this.pantryService.userPantryString = this.databasestring;
    console.log(this.pantryService.userPantryString);
    this.authService.userPantryString = this.databasestring;
    console.log(this.authService.userPantryString);
  }


}
