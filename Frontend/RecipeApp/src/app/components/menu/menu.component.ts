import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginRegisterComponent } from '../login-register/login-register.component';
import { SearchResultsComponent } from '../search-results/search-results.component';
import { BehaviorSubject } from 'rxjs';
import { RecipeData } from '../../models/recipe-data';
import { PantryService } from '../../services/pantry.service';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  private search: string;
  public loggedIn: boolean = this.authService.isLoggedIn;

  constructor(
    private modalService: NgbModal,
    private authService: AuthService,
    private pantryService: PantryService,
    private router: Router
  ) { }

  //dummy logout
  logout1(){
    this.authService.logout1();
    this.authService.notLoggedIn = true;
    this.pantryService.ingredient = [];

    this.reload("categories");
    this.reload("home");
  }

  ngOnInit() {
    console.log(this.loggedIn + " IN MENU COMPONENT");
  }

  searchRecipe() {
    if (this.search !== undefined) {
      this.authService.searchRecipes(this.search).subscribe(
        data => {
          this.authService.recipe = data;
          // this.router.navigate(['search']);
          this.reload('search');
        }
      );
    }
    this.clearData();
  }
  reload(link: string) {
    this.router.navigate(['/'], { skipLocationChange: true }).then(() => { this.router.navigate([link]); });
  }

  clearData() {
    
  this.search = '';
  }

  open() {
    const modalRef = this.modalService.open(LoginComponent);
  }

  openLoginRegisterModal() {
    return this.modalService.open(LoginRegisterComponent);
  }

}
