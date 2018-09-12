import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { RouterModule, Router } from '../../../../node_modules/@angular/router';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Recipe } from '../../models/Recipe.model';
import { FeatureResults } from '../../models/feature-results';
import { SearchAlgorithmService } from '../../services/search-algorithm.service';

@Component({
  selector: 'app-feature-instructions',
  templateUrl: './feature-instructions.component.html',
  styleUrls: ['./feature-instructions.component.css']
})
export class FeatureInstructionsComponent implements OnInit {
  int: number;
  steps: FeatureResults;
  @ViewChild('content')
  content: NgbActiveModal;
  constructor(private modalService: NgbModal,
    private route: RouterModule,
    private router: Router,
    private searchAlgorithmService: SearchAlgorithmService) { }

  ngOnInit() {
  }

  open( results: FeatureResults) {
    console.log(results);
    this.modalService.open(this.content);
    this.searchAlgorithmService.searchRecipeInstructionById(492608).subscribe(
      data => {
         results.steps = data;
         console.log(data);
       }
     );
     this.steps = results;
  }
  close() {
    this.modalService.dismissAll();
  }
}
