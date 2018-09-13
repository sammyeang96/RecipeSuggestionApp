import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { SearchAlgorithmService } from '../../services/search-algorithm.service';
import { FeatureResults } from '../../models/feature-results';
import { FeatureInstructionsComponent } from '../feature-instructions/feature-instructions.component';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Recipe } from '../../models/Recipe.model';

@Component({
  selector: 'app-feature-results',
  templateUrl: './feature-results.component.html',
  styleUrls: ['./feature-results.component.css']
})
export class FeatureResultsComponent implements OnInit {
  results: FeatureResults[];
  @ViewChild(FeatureInstructionsComponent)
  modal: FeatureInstructionsComponent;
  constructor( private searchAlgorithmService: SearchAlgorithmService, private modalService: NgbModal) { }

  ngOnInit() {
    this.set();
  }

  set() {
    this.results = this.searchAlgorithmService.resultSet;
  }

  // openDetails(result: FeatureResults) {
  //   this.searchAlgorithmService.searchRecipeInstructionById(392463).subscribe(
  //     data => {
  //       console.log(data);
  //     }
  //   );
  // }
  open(result: FeatureResults) {
    console.log(result);
    this.modal.open(result);
    // this.searchAlgorithmService.searchRecipeInstructionById(result.id).subscribe(
    //       data => {
    //          result.steps = data;
    //        }
    //      );
  }

}
