import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { RouterModule, Router } from '../../../../node_modules/@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-results-modal',
  templateUrl: './results-modal.component.html',
  styleUrls: ['./results-modal.component.css']
  
})
export class ResultsModalComponent implements OnInit {

  constructor(private modalService: NgbModal,
    private route: RouterModule,
    private router: Router,
    private authService: AuthService) { }

  ngOnInit() {
  }

  // openLoginModal(content) {
  //  this.modalService.open(content, { size: 'lg' });
  // }
}
