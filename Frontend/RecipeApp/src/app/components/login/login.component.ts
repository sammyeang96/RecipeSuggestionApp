import { Component, OnInit, ViewEncapsulation  } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Router } from '../../../../node_modules/@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

  private username: string;
  private password: string;
  show = false;
  hidden = true;

  constructor(
    private modalService: NgbModal,
    private route: RouterModule,
    private router: Router) { }

  ngOnInit() {
    console.log('inside the login component');
  }

  openLoginModal(content) {
    this.modalService.open(content, { size: 'lg' });
  }

  login() {

    if (this.username == null || this.password == null) {
      alert('please enter in something.');
    }
    else {
      console.log("printing info... ")
      console.log(this.username);
      console.log(this.password);
  }

    //LOGIN LOGIC HERE

  }

  createNewUser() {

    //CREATE NEW USER HERE

  }

}
