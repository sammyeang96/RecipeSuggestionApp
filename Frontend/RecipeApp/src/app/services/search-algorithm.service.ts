import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Ingredient } from '../models/Ingredient.model';
import { FeatureResults } from '../models/feature-results';

@Injectable({
  providedIn: 'root'
})
export class SearchAlgorithmService {

  constructor(private http: HttpClient) { }

  private searchUrl: string = "";
  private selectedPantry: Ingredient[];
   resultSet: FeatureResults[];
  private joke: string;


  // randomInt(min, max) {
  //   return Math.floor(Math.random() * (max - min + 1)) + min;
  // }

  // searchPantryRecipes(searchArray: Ingredient[]) {
  //   let starchcount : number;
  //   let meatCount : number;
  //   let fruitCount : number;
  //   let vegetableCount : number;
  //   let dairyCount : number;
  //   let spicesCount : number;

  //   let random: number = this.randomInt(0, searchArray.length)
  //   while (this.selectedPantry.length <= 5)

  //     for (let i = random; i < searchArray.length; i++) {
  //       if (searchArray[i].weight >12) {

  //         this.selectedPantry.add

  //       }
  //     }


  // }

  //Retrives JSON array of recipes from pantry
  searchPantryRecipes(searchArray: Ingredient[]) {
    this.searchUrl = searchArray[0].name;
    for (let i = 1; i < searchArray.length; i++) {
      this.searchUrl = this.searchUrl + "%2C" + searchArray[i].name;
    }
    console.log(this.searchUrl);
    return this.http.get<FeatureResults[]>(`https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients?fillIngredients=false&ingredients=` + this.searchUrl + '&limitLicense=false&number=12&ranking=2'
      ,
      {
        headers: new HttpHeaders().set('X-Mashape-Key', 'qV5bkLva8Dmsh883r8J9jjNcnaKUp1NtCmejsnVMLeOFnhI9zW')
      });
  }

  //Retrives a JSON recipe with URL to instructions
  searchRecipeInstructionById(id: number) {
    return this.http.get<any>(`https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/`+ id + `/analyzedInstructions`,
      {
        headers: new HttpHeaders().set('X-Mashape-Key', 'qV5bkLva8Dmsh883r8J9jjNcnaKUp1NtCmejsnVMLeOFnhI9zW')
      });
  }

  searchJoke() {
    return this.http.get<{text: string}>(`https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/food/trivia/random`,
      {
        headers: new HttpHeaders().set('X-Mashape-Key', 'qV5bkLva8Dmsh883r8J9jjNcnaKUp1NtCmejsnVMLeOFnhI9zW')
      });
  }

}
