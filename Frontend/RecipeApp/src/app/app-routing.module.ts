import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PopularComponent } from './components/popular/popular.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { AboutComponent } from './components/about/about.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { FoodCategoryComponent } from './components/food-category/food-category.component';
import { PantryComponent } from './components/pantry/pantry.component';
import { FeatureResultsComponent } from './components/feature-results/feature-results.component';


export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'about', component: AboutComponent },
  { path: 'popular', component: PopularComponent},
  { path: 'login', component: LoginComponent },
  { path: 'userInfo', component: UserInfoComponent },
  { path: 'home', component: HomeComponent },
  { path: 'search', component: SearchResultsComponent },
  { path: 'categories', component: FoodCategoryComponent },
  {path: 'pantry', component: PantryComponent},
  {path: 'feature', component: FeatureResultsComponent }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
