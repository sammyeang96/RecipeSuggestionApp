import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../../models/Ingredient.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  ingredients: Ingredient[];

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  usersPantryItems() {

  // this.authService.getUsersPantryItems().subscribe(
  //   data => {
  //     if (data != null) {
  //       console.log(data);
  //       this.authService.allPantryItems = data;
  //       this.ingredients = this.authService.allPantryItems;
  //       console.log('loaded ingredients');
  //     }
  //     else {
  //       console.error('Error loading ingredients');
  //     }
  //   }
  // );
}

}
