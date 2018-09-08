import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Recipe } from '../../models/Recipe.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ResultsModalComponent } from '../results-modal/results-modal.component';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  recipe: Recipe[];
  @ViewChild(ResultsModalComponent)
  modal: ResultsModalComponent;
  constructor(private modalService: NgbModal, private authService: AuthService) {}

  ngOnInit() {
    this.parseJson();
  }

  parseJson() {
    this.recipe = this.authService.recipe.hits.map(hit => hit.recipe);
    this.authService.recipes = this.recipe;
  }

  open(recipe: Recipe) {
    this.modal.open(recipe);
  }
}
