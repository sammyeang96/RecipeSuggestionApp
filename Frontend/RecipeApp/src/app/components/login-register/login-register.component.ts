import { Component, OnInit } from '@angular/core';
import { NgbModal } from '../../../../node_modules/@ng-bootstrap/ng-bootstrap';
import { RouterModule, Router } from '../../../../node_modules/@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  // styleUrls: ['./login-register.component.css']
})
export class LoginRegisterComponent implements OnInit {

  private username: string;
  private password: string;

  private firstName: string;
  private lastName: string;
  private newUsername: string;
  private newPassword: string;
  private confirmPassword: string;

  show = false;
  hidden = true;
  hidden1 = true;

  constructor(
    private modalService: NgbModal,
    private route: RouterModule,
    private router: Router,
    private authService: AuthService,

  ) { }

  ngOnInit() {
    console.log('inside the login-register component');
  }

  login() {

    if (this.username == null || this.password == null) {
      alert('please enter in something.');
    } else {
      console.log('printing info... ');
      console.log(this.username);
      console.log(this.password);

      this.hidden = !this.hidden;
      this.show = !this.show;

      this.authService.login(this.username, this.password).subscribe(
        data => {
          console.log(data);
          this.authService.loggedInUser = data;

          if (data != null) {
            this.authService.isLoggedIn = true;
            this.router.navigate(['userInfo']);
          }

        }

      );
    }
  }

  checkPasswords() {
    if (this.newPassword !== this.confirmPassword) {
      alert('passwords do not match');
      // this.confirmPassword == null;
      return;
    } else {
      this.registerUser();
    }
  }

  registerUser() {

    if (
      this.firstName == null || this.lastName == null || this.newUsername == null
      || this.newPassword == null || this.confirmPassword == null
    ) {
      alert('please fill  in all fields');
      this.hidden1 = !this.hidden1;
    } else {

      this.hidden = !this.hidden;
      this.show = !this.show;

      this.authService.registerUser(

        this.firstName,
        this.lastName,
        this.newUsername,
        this.newPassword

      ).subscribe(
        data => {
          console.log(data);
          this.authService.loggedInUser = data;

          if (data != null) {
            this.authService.isLoggedIn = true;
            this.router.navigate(['userInfo']);
          }

        }

      );
    }
  }

  dismissModal(any) {
    this.modalService.dismissAll('Cross click');
  }

  testLogin() {
    console.log('woohooo, the testLogin is working');
  }

  getUsersPantry() {

    console.log('printing info in getUsersPantry() ');

    this.authService.login(this.username, this.password).subscribe(
      data => {
        console.log(data);
        this.authService.loggedInUser = data;

        if (data != null) {
          this.authService.isLoggedIn = true;
        }
      }
    );
  }
}
