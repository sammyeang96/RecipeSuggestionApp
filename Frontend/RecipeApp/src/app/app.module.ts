import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { AppRoutingModule } from './/app-routing.module';
import { PopularComponent } from './components/popular/popular.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import {AuthService} from './service/auth.service';
import { AboutComponent } from './components/about/about.component';
import {SlideshowModule} from 'ng-simple-slideshow';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PopularComponent,
    UserInfoComponent,
    HomeComponent,
    LoginComponent,
    AboutComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    SlideshowModule

  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
