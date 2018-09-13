import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { RouterModule, Router } from '../../../../node_modules/@angular/router';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Recipe } from '../../models/Recipe.model';
import { FeatureResults } from '../../models/feature-results';
import { SearchAlgorithmService } from '../../services/search-algorithm.service';
import { StepsData } from '../../models/steps-data';

@Component({
  selector: 'app-feature-instructions',
  templateUrl: './feature-instructions.component.html',
  styleUrls: ['./feature-instructions.component.css']
})
export class FeatureInstructionsComponent implements OnInit {
  int: number;
  instructions: FeatureResults;
  steps: StepsData;
  @ViewChild('content')
  content: NgbActiveModal;
  constructor(private modalService: NgbModal,
    private route: RouterModule,
    private router: Router,
    private searchAlgorithmService: SearchAlgorithmService) { }

  ngOnInit() {
  }

  // private dummysteps: StepsData = steps:[ {1: number,"Finely grate the zest from the lemon, then cut" : string}];


  open(results: FeatureResults) {
    console.log(results);

    this.instructions = results;
    this.modalService.open(this.content);
    this.searchAlgorithmService.searchRecipeInstructionById(results.id).subscribe(
      data => {
        console.log(data);
        if (data.length == 0) {
          console.log("No available instructions")
        }
        else {
          
          this.steps = data[0].steps;

        }

        // results.steps = data;
        // console.log(data);
      }
    );
    // this.instructions.steps = this.steps;
  }
  close() {
    this.steps = null;
    console.log("this should be null now")
    this.modalService.dismissAll();
  }
}
