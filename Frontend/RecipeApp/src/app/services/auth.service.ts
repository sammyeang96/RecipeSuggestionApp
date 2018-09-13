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


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  dataObject: DataObject;
  link: string;
  recipe: RecipeData;
  recipes: Recipe[];
  loggedInUser: User;
  isLoggedIn: boolean;
  loggedInUserPantryId: number;
  allPantryItems: Ingredient[];
  userPantryString: string;
  constructor(
    private http: HttpClient,
  ) { }

  searchRecipes(search: string) {
    return this.http.get<RecipeData>(`https://api.edamam.com/search?q=${search}&app_id=aeab67c5&app_key=43503b89948d858f171e29557e629321&from=0&to=40`);
  }

  loginTrueOrFalse() {
    if(this.isLoggedIn == false){
      return false;
    } 
    else {
      return true;
    }
  }
  logout1(){
    this.isLoggedIn = false;
  }

  login(username: string, password: string) {
    console.log('sending info to /login/validate ');
    console.log(username);
    console.log(password);
    return this.http.post<User>('http://localhost:8081/Backend/login/validate',
      {
        username: username,
        password: password
      });
  }

  // creates a new entry in the User_Login table -- WORKS
  registerUser(firstName: string, lastName: string, newUsername: string, newPassword: string) {
    console.log('sending info to /login/create ');
    console.log(newUsername);
    console.log(newPassword);
    return this.http.post<User>('http://localhost:8081/Backend/login/create',
      {
        username: newUsername,
        password: newPassword
      });
  }

  // this one creates a new entry in the User_Info table -- WORKS
  registerUserInfo(firstName: string, lastName: string, newUsername: string, newPassword: string) {
    console.log('sending info to /info/create ');
    console.log(firstName);
    console.log(lastName);
    console.log(newUsername);
    return this.http.post<User>('http://localhost:8081/Backend/info/create',
      {
        firstname: firstName,
        lastname: lastName,
        username: { username: newUsername }
      });

  }

  // CREATES A PANTRY FOR NEW USER -- WORKS
  registerUserPantry(newUsername: string) {
    console.log('sending info to /pantry/create ');
    console.log(newUsername);
    return this.http.post<User>('http://localhost:8081/Backend/pantry/create',
      {
        username: { username: newUsername }
      });
  }

  // returns pantry items when given pantry id
  getUsersPantryItems(id: number) {
    console.log('sending info to /items/retrieve ');
    console.log(id);
  
    return this.http.post<User>('http://localhost:8081/Backend/items/retrieve',
    {
      id: id
    });

  }

  // returns pantry id when given a username
  getPantryByUsername(username: string) {
    console.log('sending info to /pantry/retrieve ');
    console.log(username);

    return this.http.post<DataObject>('http://localhost:8081/Backend/pantry/retrieve',
    {
      username: username
    });
  }

}
