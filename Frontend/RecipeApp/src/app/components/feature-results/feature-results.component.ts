import { Component, OnInit, ViewChild } from '@angular/core';
import { SearchAlgorithmService } from '../../services/search-algorithm.service';
import { FeatureResults } from '../../models/feature-results';
import { FeatureInstructionsComponent } from '../feature-instructions/feature-instructions.component';
import { Recipe } from '../../models/Recipe.model';

@Component({
  selector: 'app-feature-results',
  templateUrl: './feature-results.component.html',
  styleUrls: ['./feature-results.component.css']
})
export class FeatureResultsComponent implements OnInit {
  results: FeatureResults[];
  @ViewChild(FeatureResultsComponent)
  modal:FeatureInstructionsComponent;
  constructor(private searchAlgorithmService: SearchAlgorithmService ) { }

  ngOnInit() {
    this.set();
  }

  set() {
    this.results = this.searchAlgorithmService.resultSet;
  }

  openDetails(result: FeatureResults) {
    this.searchAlgorithmService.searchRecipeInstructionById(392463).subscribe(
      data => {
        console.log(data);
      }
    );
  }
  open(recipe: FeatureResults) {
    this.modal.open(recipe);
  }

}
