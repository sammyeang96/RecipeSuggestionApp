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

  userPantryIngredients: Ingredient[] = [];

  userPantryIds: Number[] = [];


  constructor(private authService: AuthService, private handleArrays: HandleArraysService) { }


  unpackUserPantryArray() {
    const array = this.authService.dataObject.ingredients.split(',');
    for (let i = 0; i < array.length; i++) {
      this.userPantryIds.push(Number(array[i]));
    }
    console.log(this.userPantryIds);
    this.findPantry();
  }

  findPantry() {
    for (let i = 0; i < this.userPantryIds.length; i++) {
      this.userPantryIngredients.push(this.handleArrays.pantry.find(o => o.id === this.userPantryIds[i]));
    }
    console.log(this.userPantryIngredients);
  }


}
