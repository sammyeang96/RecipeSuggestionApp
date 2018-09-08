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

  private fullName: string;
  private newUsername: string;
  private newPassword: string;
  private confirmPassword: string;
  private newEmail: string;

  show = false;
  hidden = true;
  hidden1 = true;

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
    } else {
      console.log('printing info... ');
      console.log(this.username);
      console.log(this.password);

      this.hidden = !this.hidden;
      this.show = !this.show;
      // does nothing yet
        }
    }

    registerUser() {

      if (this.fullName == null || this.newUsername == null || this.newPassword == null || this.confirmPassword == null
        || this.newEmail == null) {
        alert('please fill  in all fields');
        this.hidden1 = !this.hidden1;
      } else {
        console.log('printing info... ');
        console.log(this.fullName);
        console.log(this.newUsername);
        console.log(this.newPassword);
        console.log(this.confirmPassword);
        console.log(this.newEmail);

        this.hidden = !this.hidden;
        this.show = !this.show;
        // does nothing yet
          }
      }

      dismissModal(any) {
        this.modalService.dismissAll('Cross click');
      }

      testLogin() {
        console.log('woohooo, the testLogin is working');
      }

}
