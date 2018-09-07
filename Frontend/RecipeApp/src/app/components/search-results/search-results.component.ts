import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Recipe } from '../../models/Recipe.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ResultsModalComponent } from '../results-modal/results-modal.component';
@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SearchResultsComponent implements OnInit {
  recipe: Recipe[];
  constructor(private modalService: NgbModal, private authService: AuthService) {}

  ngOnInit() {
    this.parseJson();
  }

  parseJson() {
    this.recipe = this.authService.recipe.hits.map(hit => hit.recipe);
    this.authService.recipes = this.recipe;
  }

  open() {
    this.modalService.open(ResultsModalComponent);
  }

}
