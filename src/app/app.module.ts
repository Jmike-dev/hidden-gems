import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home/home-page/home-page.component';
import { RestaurantsPageComponent } from './pages/restaurants/restaurants-page/restaurants-page.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { AboutComponent } from './pages/about/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    RestaurantsPageComponent,
    NavbarComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
