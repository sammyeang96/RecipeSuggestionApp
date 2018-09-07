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
import {AuthService} from './service/auth.service';
import { AboutComponent } from './components/about/about.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { ResultsModalComponent } from './components/results-modal/results-modal.component';
// import { RegisterComponent } from './components/register/register.component';


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
    ResultsModalComponent
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule.forRoot()

  ],
  providers: [AuthService],
  bootstrap: [AppComponent],

  entryComponents: [
    LoginComponent,
    SearchResultsComponent
  ]
})
export class AppModule { }
