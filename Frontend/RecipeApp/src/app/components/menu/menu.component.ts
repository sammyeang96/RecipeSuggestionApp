import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
 private search: string;
  constructor(private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
  }

  searchRecipe() {
    this.authService.searchRecipes(this.search).subscribe(
      data => {
        this.authService.recipe = data;
        console.log(data);
      }
    );
  }

}
