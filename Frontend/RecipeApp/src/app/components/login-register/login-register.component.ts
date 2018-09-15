import { Component, OnInit } from '@angular/core';
import { NgbModal } from '../../../../node_modules/@ng-bootstrap/ng-bootstrap';
import { RouterModule, Router } from '../../../../node_modules/@angular/router';
import { AuthService } from '../../services/auth.service';
import { MenuComponent } from '../menu/menu.component';
import { PantryService } from '../../services/pantry.service';
import { FoodCategoryComponent } from '../food-category/food-category.component';
import { HandleArraysService } from '../../services/handle-arrays.service';
import { Location } from '@angular/common';

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
    private pantryService: PantryService,
    private foodCategory: FoodCategoryComponent,
    private handleArrayService: HandleArraysService,
    private location: Location


  ) { }

  ngOnInit() {

  }

  login() {

    // this.reload('categories');
    // this.reload('menu');
    // this.reload('pantry');
    // this.reload('food-category');
    if (this.username == null || this.password == null) {
      alert('please enter in something.');
    } else {
      this.pantryService.ingredient = [];

      this.hidden = !this.hidden;
      this.show = !this.show;

      this.authService.login(this.username, this.password).subscribe(
        user => {
          this.authService.loggedInUser = user;

          if (user != null) {
            this.authService.isLoggedIn = true;
            this.authService.notLoggedIn = false;
            // this.router.navigate(['userInfo']);
            this.authService.getPantryByUsername(user.username).subscribe(
              pantryid => {
                this.authService.dataObject = pantryid;
                this.authService.theOldIngredients = pantryid.ingredients;
                setTimeout(this.pantryService.unpackUserPantryArray(this.authService.theOldIngredients), 5000);
                
                this.reload('categories');

                this.modalService.dismissAll();

                this.removeIngFromFoodComp();

                // this.foodCategory.meatIngredients = this.handleArrayService.getMeats();
                // this.foodCategory.dairyIngredients = this.handleArrayService.getDairy();
                // this.foodCategory.veggiesIngredients = this.handleArrayService.getVeggies();
                // this.foodCategory.spicesIngredients = this.handleArrayService.getSpices();
                // this.foodCategory.fruitsIngredients = this.handleArrayService.getFruits();
                // this.foodCategory.starchesIngredients = this.handleArrayService.getStarches();

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

                if (data2 != null) {

                  // MAKING A PANTRY FOR NEW USER
                  this.authService.registerUserPantry(
                    this.newUsername
                  ).subscribe(
                    data3 => {
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
    // this.foodCategory.meatIngredients = this.handleArrayService.getMeats();
    // this.foodCategory.dairyIngredients = this.handleArrayService.getDairy();
    // this.foodCategory.veggiesIngredients = this.handleArrayService.getVeggies();
    // this.foodCategory.spicesIngredients = this.handleArrayService.getSpices();
    // this.foodCategory.fruitsIngredients = this.handleArrayService.getFruits();
    // this.foodCategory.starchesIngredients = this.handleArrayService.getStarches();


    this.authService.login(this.username, this.password).subscribe(
      data => {
        this.authService.loggedInUser = data;

        if (data != null) {
          this.authService.isLoggedIn = true;
        }
      }
    );
  }

  reload(link: string) {
    this.router.navigate(['/'], { skipLocationChange: true }).then(() => { this.router.navigate([link]); });
  }

  removeIngFromFoodComp(){
 

    for(let ing of this.pantryService.ingredient){
      
    let cat = ing.category
      if (cat == "meats") {
        
        // this.foodCategory.meatIngredients.splice(this.foodCategory.meatIngredients.indexOf(ing, 0), 1);
        // console.log(ing);
        for(let i = 0; i < this.foodCategory.meatIngredients.length; i ++) {
          if( ing.id == this.foodCategory.meatIngredients[i].id){
            this.foodCategory.meatIngredients.splice(i,1)
          }
        }
      }
      if (cat == "dairy") {
        // this.foodCategory.dairyIngredients.splice(this.foodCategory.dairyIngredients.indexOf(ing, 0), 1);
        // console.log(ing);
        for(let i = 0; i < this.foodCategory.dairyIngredients.length; i ++) {
          if( ing.id === this.foodCategory.dairyIngredients[i].id){
            this.foodCategory.dairyIngredients.splice(i,1)
          }
        }
      }
      if (cat == "spices") {
        // this.foodCategory.spicesIngredients.splice(this.foodCategory.spicesIngredients.indexOf(ing, 0), 1);
        // console.log(ing);
        for(let i = 0; i < this.foodCategory.spicesIngredients.length; i ++) {
          if( ing.id === this.foodCategory.spicesIngredients[i].id){
            this.foodCategory.spicesIngredients.splice(i,1)
          }
        }
      }
      if (cat == "fruits") {
        // this.foodCategory.fruitsIngredients.splice(this.foodCategory.fruitsIngredients.indexOf(ing, 0), 1);
        // console.log(ing);

        for(let i = 0; i < this.foodCategory.fruitsIngredients.length; i ++) {
          if( ing.id === this.foodCategory.fruitsIngredients[i].id){
            this.foodCategory.fruitsIngredients.splice(i,1)
          }
        }
      }
      if (cat == "grains") {
        // console.log("zzzzzzzzzzz")
        // console.log(this.foodCategory.starchesIngredients.splice(this.foodCategory.starchesIngredients.indexOf(ing, 0), 1))
        // console.log("zzzzzzzzzzzz")
        // // this.foodCategory.starchesIngredients.splice(this.foodCategory.starchesIngredients.indexOf(ing, 0), 1);
        // console.log(ing);

        for(let i = 0; i < this.foodCategory.starchesIngredients.length; i ++) {
          if( ing.id === this.foodCategory.starchesIngredients[i].id){
            this.foodCategory.starchesIngredients.splice(i,1)
          }
        }

      }
      if (cat == "veggies") {
        // this.foodCategory.veggiesIngredients.splice(this.foodCategory.veggiesIngredients.indexOf(ing, 0), 1);
        // console.log(ing);
        for(let i = 0; i < this.foodCategory.veggiesIngredients.length; i ++) {
          if( ing.id === this.foodCategory.veggiesIngredients[i].id){
            this.foodCategory.veggiesIngredients.splice(i,1)
          }
        }
      }
      
  }
  
  
}
}
