import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ingredient } from '../models/Ingredient.model';
@Injectable({
  providedIn: 'root'
})
export class SearchAlgorithmService {

  constructor(private http: HttpClient) { }

  private searchUrl: string = "";
  private selectedPantry: Ingredient[];
 

  randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  searchPantryRecipes(searchArray: Ingredient[]) {
    let starchcount : number;
    let meatCount : number;
    let fruitCount : number;
    let vegetableCount : number;
    let dairyCount : number;
    let spicesCount : number;
  
    let random: number = this.randomInt(0, searchArray.length)
    while (this.selectedPantry.length <= 5)

      for (let i = random; i < searchArray.length; i++) {
        if (searchArray[i].weight >12) {

          this.selectedPantry.add

        }
      }


  }




  searchSelectedPantryRecipes(searchArray: Ingredient[]) {

    for (let i = 1; i < searchArray.length; i++) {
      this.searchUrl = searchArray[0].name;
      this.searchUrl = this.searchUrl + "," + searchArray[i].name;
    }
    return this.http.get<any>(`https://api.edamam.com/search?q=${this.searchUrl}&app_id=aeab67c5&app_key=43503b89948d858f171e29557e629321&ingr=${searchArray.length}&from=0&to=4`);
  }


  searchRecipes(search: string, size: number) {
    return this.http.get<any>(`https://api.edamam.com/search?q=${search}&app_id=aeab67c5&app_key=43503b89948d858f171e29557e629321&ingr=${size}&from=0&to=4`);
  }




}
