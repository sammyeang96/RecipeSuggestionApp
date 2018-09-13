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

  dummypantry: string;
  dummyuserPantry: number[] = [];
  dummyuserPantryIngredients: Ingredient[] = [];

  constructor(private authService: AuthService, private handleArrays: HandleArraysService) { }

  findDummyPantry() {
    for (let i = 0; i < this.dummyuserPantry.length; i++) {
      this.dummyuserPantryIngredients.push(this.handleArrays.pantry.find(o => o.id === this.dummyuserPantry[i]));
    }
    console.log(this.dummyuserPantryIngredients);
  }

  unpackDummyUserPantryArray() {
    const array = this.dummypantry.split(',');
    for (let i = 0; i < array.length; i++) {
      this.dummyuserPantry.push(Number(array[i]));
    }
    console.log(this.dummyuserPantry);
    this.findPantry();
  }

  getDummyPantry() {
    this.authService.getDummyPantryItems().subscribe(
      data => {
        console.log(data);
        this.dummypantry = data;
      });
  }

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
