import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { AppRoutingModule } from './/app-routing.module';
import { PopularComponent } from './components/popular/popular.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import {AuthService} from './services/auth.service';
import { AboutComponent } from './components/about/about.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { ResultsModalComponent } from './components/results-modal/results-modal.component';
import { LoginRegisterComponent } from './components/login-register/login-register.component';
import { FoodCategoryComponent } from './components/food-category/food-category.component';
import { PantryComponent } from './components/pantry/pantry.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Browser } from 'protractor';
import { FeatureResultsComponent } from './components/feature-results/feature-results.component';
import { FeatureInstructionsComponent } from './components/feature-instructions/feature-instructions.component';
// import { ScrollSpyModule } from 'ngx-scrollspy';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PopularComponent,
    UserInfoComponent,
    HomeComponent,
    LoginComponent,
    AboutComponent,
    SearchResultsComponent,
    ResultsModalComponent,
    LoginRegisterComponent,
    FoodCategoryComponent,
    PantryComponent,
    FeatureResultsComponent,
    FeatureInstructionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule
    // ScrollSpyModule.forRoot()

  ],
  providers: [AuthService],
  bootstrap: [AppComponent],

  entryComponents: [
    SearchResultsComponent,
    ResultsModalComponent,
    LoginRegisterComponent,
    FeatureResultsComponent,
    FeatureInstructionsComponent
  ]
})
export class AppModule { }
