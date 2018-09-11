import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../../models/Ingredient.model';
import { PantryService } from '../../services/pantry.service';
import { SearchAlgorithmService } from '../../services/search-algorithm.service';
import { RouterModule, Router } from '@angular/router';
@Component({
  selector: 'app-pantry',
  templateUrl: './pantry.component.html',
  styleUrls: ['./pantry.component.css']
})
export class PantryComponent implements OnInit {
  ingredient: Ingredient[] = [];
  constructor(private pantryService: PantryService, private searchAlgorithmService: SearchAlgorithmService, private router: Router ) { }

  ngOnInit() {
  }

  addSelectionToArray() {
    this.ingredient = this.pantryService.ingredient;
    this.searchAlgorithmService.searchPantryRecipes(this.ingredient).subscribe(
      data => {
      this.searchAlgorithmService.resultSet = data;
      console.log(data);
    } );
    this.router.navigate(['feature']);
  }

  removeItemFromPantry(ingredient: Ingredient) {
    this.pantryService.ingredient.splice(this.pantryService.ingredient.indexOf(ingredient, 0), 1);
  }
}
