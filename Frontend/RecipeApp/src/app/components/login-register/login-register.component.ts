import { Component, OnInit } from '@angular/core';
import { NgbModal } from '../../../../node_modules/@ng-bootstrap/ng-bootstrap';
import { RouterModule, Router } from '../../../../node_modules/@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css']
})
export class LoginRegisterComponent implements OnInit {

  private username: string;
  private password: string;
  show = false;
  hidden = true;

  constructor(
    private modalService: NgbModal,
    private route: RouterModule,
    private router: Router,
    private authService: AuthService

  ) { }

  ngOnInit() {
    console.log('inside the login-register component');
  }

  login() {

    if (this.username == null || this.password == null) {
      alert('please enter in something.');
    }
    else {
      console.log("printing info... ")
      console.log(this.username);
      console.log(this.password);

      this.hidden = !this.hidden;
      this.show = !this.show;

      //SOME LOGIN LOGIC

        }

    }

}
