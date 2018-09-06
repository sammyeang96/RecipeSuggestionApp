import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginComponent } from '../components/login/login.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  link: string;
  recipe: string[];
  constructor(
    private http: HttpClient
  ) { }

  searchRecipes(search: string) {
    return this.http.get<any>(`https://api.edamam.com/search?q=${search}&app_id=aeab67c5&app_key=43503b89948d858f171e29557e629321`);
  }

  // login(username: string, password: string) {
  //   return this.http.post<Any>("https://SOME-URL-HERE", {username: username, password: password});
  // }

  

}
