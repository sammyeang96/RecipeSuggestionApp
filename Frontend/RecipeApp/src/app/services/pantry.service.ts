import { Injectable } from '@angular/core';
import { Ingredient } from '../models/Ingredient.model';
import { AuthService } from '../services/auth.service';
import { HandleArraysService } from './handle-arrays.service';
import { parse } from 'path';
import { format } from 'url';

@Injectable({
  providedIn: 'root'
})
export class PantryService {
  userPantryString: string;
  public ingredient:Array<Ingredient> = [];

  // number array of ingredient ids from db
  userPantryIngredientIds: Number[] = [];
  // ingredient objects converted from ids
  userPantryIngredients: Ingredient[] = [];

  constructor(private authService: AuthService, private handleArrays: HandleArraysService) { }

  unpackUserPantryArray( ingString: string) {
    let array = ingString.split(',');
    if (array[0] === '9000') {
      array.splice(0, 1);
    }
    this.userPantryIngredientIds = []; // change here
    for (let i = 0; i < array.length; i++) {
      this.userPantryIngredientIds.push(Number(array[i]));
    }
    this.findPantry();
    this.addUserIngredientsToMainArray();
    // console.log(this.ingredient);
    // this.getIngredientPantryFromIds();
  }

//   getIngredientPantryFromIds(){
//   this.userPantryIngredientIds.forEach(UserPId => { 
//     this.handleArrays.pantry.forEach(PantryId => {

//       if(UserPId === PantryId.id){
//         this.ingredient.push(PantryId);
//         console.log(PantryId)
//       }
      
//     });
//   })
//   console.log(this.ingredient);
//   format
// };

  findPantry() {
    this.userPantryIngredients = [];
    for (let i = 0; i < this.userPantryIngredientIds.length; i++) {
     this.userPantryIngredients.push(this.handleArrays.pantry.find(o => o.id === this.userPantryIngredientIds[i]));
    }
  }


  addUserIngredientsToMainArray() {
    for(let i = 0; i < this.userPantryIngredients.length;i++ ){
      this.ingredient.push(this.userPantryIngredients[i])
      
    }
    
  }

}
