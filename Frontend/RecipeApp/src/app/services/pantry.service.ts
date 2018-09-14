import { Injectable } from '@angular/core';
import { Ingredient } from '../models/Ingredient.model';
import { AuthService } from '../services/auth.service';
import { HandleArraysService } from './handle-arrays.service';

@Injectable({
  providedIn: 'root'
})
export class PantryService {
  userPantryString: string;
  ingredient: Ingredient[] = [];

  // number array of ingredient ids from db
  userPantryIngredientIds: Number[] = [];
  // ingredient objects converted from ids
  userPantryIngredients: Ingredient[] = [];

  constructor(private authService: AuthService, private handleArrays: HandleArraysService) { }

  unpackUserPantryArray() {
    const array = this.authService.dataObject.ingredients.split(',');
    if (array[0] === '9000'){
      array.splice(0, 1);
    }
    for (let i = 0; i < array.length; i++) {
      this.userPantryIngredientIds.push(Number(array[i]));
    }
    console.log(this.userPantryIngredientIds);
    this.findPantry();
    this.addUserIngredientsToMainArray();
  }

  findPantry() {
    for (let i = 0; i < this.userPantryIngredientIds.length; i++) {
      this.userPantryIngredients.push(this.handleArrays.pantry.find(o => o.id === this.userPantryIngredientIds[i]));
    }
    console.log(this.userPantryIngredients);
  }


  addUserIngredientsToMainArray() {
    this.ingredient = this.ingredient.concat(this.userPantryIngredients);
  }

}
