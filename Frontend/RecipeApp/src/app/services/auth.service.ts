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


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  link: string;
  recipe: RecipeData;
  recipes: Recipe[];
  loggedInUser: User;
  isLoggedIn: boolean = false;
  allPantryItems: Ingredient[];
  constructor(
    private http: HttpClient,
  ) { }

  searchRecipes(search: string) {
    return this.http.get<RecipeData>(`https://api.edamam.com/search?q=${search}&app_id=aeab67c5&app_key=43503b89948d858f171e29557e629321&from=0&to=1000000000`);
  }

  loginTrueOrFalse(){
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

  registerUserPantry(newUsername: string) {
    console.log('sending info to /pantry/create ');
    console.log(newUsername);
    return this.http.post<User>('http://localhost:8081/Backend/pantry/create',
      {
        username: { username: newUsername }
      });
  }

  getUsersPantryItems() {
    return this.allPantryItems;
  }

}
