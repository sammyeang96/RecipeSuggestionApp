import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginComponent } from '../components/login/login.component';
import { Recipe } from '../models/Recipe.model';
import { RecipeData } from '../models/recipe-data';
import { SearchResultsComponent } from '../components/search-results/search-results.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  link: string;
  recipe: RecipeData;
  recipes: Recipe[];
  constructor(private http: HttpClient) { }

  searchRecipes(search: string) {
    return this.http.get<RecipeData>(`https://api.edamam.com/search?q=${search}&app_id=aeab67c5&app_key=43503b89948d858f171e29557e629321&from=0&to=1000`);
  }
}
