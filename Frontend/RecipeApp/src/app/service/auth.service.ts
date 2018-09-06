import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Recipe } from '../models/Recipe.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  link: string;
  recipe: JSON;
  constructor(private http: HttpClient) { }

  searchRecipes(search: string) {
    
    return this.http.get<JSON>(`https://api.edamam.com/search?q=${search}&app_id=aeab67c5&app_key=43503b89948d858f171e29557e629321`);
  }
}
