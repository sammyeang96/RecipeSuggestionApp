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
  isLoggedIn: boolean;
  allPantryItems: Ingredient[];
  constructor(
    private http: HttpClient,
  ) { }

  searchRecipes(search: string) {
        return this.http.get<RecipeData>(`https://api.edamam.com/search?q=${search}&app_id=aeab67c5&app_key=43503b89948d858f171e29557e629321&from=0&to=1000000000`);
  }

  login(username: string, password: string) {
    return this.http.post<User>('http://localhost: and the rest of the URL', {username: username, password: password});
  }

  registerUser(
    // fullName: string,
    newUsername: string,
    newPassword: string
    // confirmPassword: string,
    // newEmail: string
  ) {
    return this.http.post<User>('http://localhost:8081/create',
    {
      // fullName: fullName,
      newUsername: newUsername,
      newPassword: newPassword
      // confirmPassword: confirmPassword,
      // newEmail: newEmail
    });
  }

  getUsersPantryItems() {
    return this.allPantryItems;
  }

}
