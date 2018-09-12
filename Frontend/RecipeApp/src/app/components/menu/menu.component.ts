import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginRegisterComponent } from '../login-register/login-register.component';
import { SearchResultsComponent } from '../search-results/search-results.component';
import { BehaviorSubject } from 'rxjs';
import { RecipeData } from '../../models/recipe-data';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  private search: string;
  hiddenUntilLoggedIn = true;

  constructor(
    private modalService: NgbModal,
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit() {
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
  }
reload(link: string) {
  this.router.navigate(['/'], {skipLocationChange: true}).then(() => { this.router.navigate([link]); });
}
  open() {
    const modalRef = this.modalService.open(LoginComponent);
  }

  openLoginRegisterModal() {
    return this.modalService.open(LoginRegisterComponent);
  }

}
