import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { RouterModule, Router } from '../../../../node_modules/@angular/router';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Recipe } from '../../models/Recipe.model';


@Component({
  selector: 'app-feature-instructions',
  templateUrl: './feature-instructions.component.html',
  styleUrls: ['./feature-instructions.component.css']
})
export class FeatureInstructionsComponent implements OnInit {

  recipes: Recipe;
  @ViewChild('content')
  content: NgbActiveModal;
  constructor(private modalService: NgbModal,
    private route: RouterModule,
    private router: Router,
    private authService: AuthService) { }

  ngOnInit() {
  }

  open(recipes: Recipe) {
    this.recipes = recipes;
    this.modalService.open(this.content);
  }
  close() {
    this.modalService.dismissAll();
  }
}
