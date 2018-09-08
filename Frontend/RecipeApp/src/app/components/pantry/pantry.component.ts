import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../../models/Ingredient.model';
import { PantryService } from '../../services/pantry.service';
import { SearchAlgorithmService } from '../../services/search-algorithm.service';
@Component({
  selector: 'app-pantry',
  templateUrl: './pantry.component.html',
  styleUrls: ['./pantry.component.css']
})
export class PantryComponent implements OnInit {
  ingredient: Ingredient[];
  constructor(private pantryService: PantryService, private searchAlgorithmService: SearchAlgorithmService ) { }

  ngOnInit() {
  }

  addSelectionToArray() {
    this.ingredient = this.pantryService.ingredient;
    console.log(this.ingredient);
    this.searchAlgorithmService.searchPantryRecipes(this.ingredient).subscribe( 
      data => {
        console.log(data);
      }
    );
  }

}
