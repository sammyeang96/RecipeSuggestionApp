import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { RouterModule, Router } from '../../../../node_modules/@angular/router';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Recipe } from '../../models/Recipe.model';
import { FeatureResults } from '../../models/feature-results';


@Component({
  selector: 'app-feature-instructions',
  templateUrl: './feature-instructions.component.html',
  styleUrls: ['./feature-instructions.component.css']
})
export class FeatureInstructionsComponent implements OnInit {

  steps: FeatureResults;
  @ViewChild('content')
  content: NgbActiveModal;
  constructor(private modalService: NgbModal,
    private route: RouterModule,
    private router: Router,
    private authService: AuthService) { }

  ngOnInit() {
  }

<<<<<<< HEAD
  open(recipes: Recipe) {
    this.recipes = recipes;
=======
  open(recipes: FeatureResults) {
    this.steps = recipes;
>>>>>>> staging
    this.modalService.open(this.content);
  }
  close() {
    this.modalService.dismissAll();
  }
}
