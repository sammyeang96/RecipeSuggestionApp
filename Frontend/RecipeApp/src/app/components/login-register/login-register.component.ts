import { Component, OnInit } from '@angular/core';
import { NgbModal } from '../../../../node_modules/@ng-bootstrap/ng-bootstrap';
import { RouterModule, Router } from '../../../../node_modules/@angular/router';
import { AuthService } from '../../services/auth.service';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css']
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
  //dummy method to test navbar look while logged in/out
  login1() {
    if (this.username == null || this.password == null) {
      alert('please enter in something.');
    } else {
      
      this.authService.isLoggedIn = true;
      console.log(this.authService.isLoggedIn + " logged in???");
      
      this.modalService.dismissAll('Cross click');
      this.router.navigate(['home']);
    }
  }

  login() {

    if (this.username == null || this.password == null) {
      alert('please enter in something.');
    } else {

      this.hidden = !this.hidden;
      this.show = !this.show;

      this.authService.login(this.username, this.password).subscribe(
        user => {
          console.log(user);
          this.authService.loggedInUser = user;

          if (user != null) {
            this.authService.isLoggedIn = true;
            // this.router.navigate(['userInfo']);
            this.authService.getPantryByUsername(user.username).subscribe(
              pantryid => {
                console.log('printing pantryid: ');
                console.log(pantryid);
                this.authService.dataObject = pantryid;
                if (pantryid != null) {
                  console.log("good")
                }
              }
            );

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

      // SENDING NEW INFO TO BE REGISTERED IN THE USER_LOGIN TABLE
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

            // this.authService.isLoggedIn = true;
            // this.router.navigate(['userInfo']);

            // SENDING NEW INFO TO BE REGISTERED IN THE USER_INFO TABLE
            this.authService.registerUserInfo(
              this.firstName,
              this.lastName,
              this.newUsername,
              this.newPassword
            ).subscribe(
              data2 => {
                console.log(data2);

                if (data2 != null) {

                  // MAKING A PANTRY FOR NEW USER
                  this.authService.registerUserPantry(
                    this.newUsername
                  ).subscribe(
                    data3 => {
                      console.log(data3);
                    }
                  );
                }

              }
            );
          }

        }
      );
    }

  }

  dismissModal(any) {
    this.modalService.dismissAll('Cross click');
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
