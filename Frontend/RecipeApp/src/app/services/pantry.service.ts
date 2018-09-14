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
  // REAL CODE

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

  // testing mock backend
  findDummyPantry() {
    for (let i = 0; i < this.dummyuserPantry.length; i++) {
      this.dummyuserPantryIngredients.push(this.handleArrays.pantry.find(o => o.id === this.dummyuserPantry[i]));
    }
    console.log(this.dummyuserPantryIngredients);
  }

  unpackDummyUserPantryArray() {
    // this.dummypantry.toString();
    console.log(typeof this.dummypantry);

    console.log("unpacking dummy array");
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
        console.log(typeof data);
        console.log(data.values());
        console.log(data.toString());
        this.dummypantry = data;
        console.log(typeof this.dummypantry);
      });
  }


}
