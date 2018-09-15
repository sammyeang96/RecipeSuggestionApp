import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginComponent } from '../components/login/login.component';
import { Recipe } from '../models/Recipe.model';
import { RecipeData } from '../models/recipe-data';
import { SearchResultsComponent } from '../components/search-results/search-results.component';
import { User } from '../models/User.model';
import { MenuComponent } from '../components/menu/menu.component';
import { Ingredient } from '../models/Ingredient.model';
import { DataObject } from '../models/dataobject.model';
import { Router } from '../../../node_modules/@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  dataObject: DataObject;
  pantryId: number;
  link: string;
  recipe: RecipeData;
  recipes: Recipe[];
  loggedInUser: User;
  isLoggedIn = false;
  notLoggedIn = true;
  loggedInUserPantryId: number;
  allPantryItems: Ingredient[];
  userPantryString: string;
  theOldIngredients: string;
  theNewIngredients: string;
  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  searchRecipes(search: string) {
    return this.http.get<RecipeData>
    (`https://api.edamam.com/search?q=${search}&app_id=aeab67c5&app_key=43503b89948d858f171e29557e629321&from=0&to=40`);
  }

  reload(link: string) {
    this.router.navigate(['/'], { skipLocationChange: true }).then(() => { this.router.navigate([link]); });
  }

  logout1() {
    this.isLoggedIn = false;
    this.theOldIngredients = null;
    this.theNewIngredients = null;
    this.reload('home');
  }

  login(username: string, password: string) {
  
    return this.http.post<User>('http://ec2-54-173-88-50.compute-1.amazonaws.com:8080/recapi/login/validate',
      {
        username: username,
        password: password
      });
  }

  // creates a new entry in the User_Login table -- WORKS
  registerUser(firstName: string, lastName: string, newUsername: string, newPassword: string) {
  
    return this.http.post<User>('http://ec2-54-173-88-50.compute-1.amazonaws.com:8080/recapi/login/create',
      {
        username: newUsername,
        password: newPassword
      });
  }

  // this one creates a new entry in the User_Info table -- WORKS
  registerUserInfo(firstName: string, lastName: string, newUsername: string, newPassword: string) {
 
    return this.http.post<User>('http://ec2-54-173-88-50.compute-1.amazonaws.com:8080/recapi/info/create',
      {
        firstname: firstName,
        lastname: lastName,
        username: { username: newUsername }
      });

  }

  // CREATES A PANTRY FOR NEW USER -- WORKS
  registerUserPantry(newUsername: string) {
  
    return this.http.post<User>('http://ec2-54-173-88-50.compute-1.amazonaws.com:8080/recapi/pantry/create',
      {
        username: { username: newUsername },
        ingredients: 9000
      });
  }

  // returns pantry items when given pantry id
  getUsersPantryItems(id: number) {
   
  
    return this.http.post<User>('http://ec2-54-173-88-50.compute-1.amazonaws.com:8080/recapi/items/retrieve',
    {
      id: id
    });

  }

  // returns pantry id when given a username
  getPantryByUsername(username: string) {


    return this.http.post<DataObject>('http://ec2-54-173-88-50.compute-1.amazonaws.com:8080/recapi/pantry/retrieve',
    {
      username: username
    });
  }

  intermediaryFunctionForUpdatePantry(mediumIngredientString: string) {
    this.pantryId = this.dataObject.id;

    return this.updateUserPantry(this.pantryId, mediumIngredientString);
  }

  updateUserPantry(id: number, theIngredients: string) {


    this.theNewIngredients = theIngredients;

    // console.log('theNewIngredients is:');
    // console.log(this.theNewIngredients);

    return this.http.post<DataObject>('http://ec2-54-173-88-50.compute-1.amazonaws.com:8080/recapi/pantry/update',
      {
        id: id,
        ingredients: this.theNewIngredients
      });
  }

}
