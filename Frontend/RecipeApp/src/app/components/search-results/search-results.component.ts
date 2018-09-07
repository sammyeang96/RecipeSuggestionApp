import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Recipe } from '../../models/Recipe.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  recipe: Recipe[];
  constructor(private modalService: NgbModal, private authService: AuthService) {}

  ngOnInit() {
    this.parseJson();
  }

  parseJson() {
    this.recipe = this.authService.recipe.hits.map(hit => hit.recipe);
    // console.log(JSON.stringify(this.authService.recipe));
  }

  // open() {
  //   this.modalService.open();
  // }

}
