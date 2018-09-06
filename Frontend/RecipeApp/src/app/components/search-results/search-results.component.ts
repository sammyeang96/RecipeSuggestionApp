import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Recipe } from '../../models/Recipe.model';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  recipe: string;
  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.parseJson();
  }

  parseJson() {
    this.recipe = JSON.stringify(this.authService.recipe);
    // console.log(JSON.stringify(this.authService.recipe));
  }


}
