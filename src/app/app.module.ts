// modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
// import { LottieModule } from 'ngx-lottie';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// import player from 'lottie-web';
//  components
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home/home-page/home-page.component';
import { RestaurantsPageComponent } from './pages/restaurants/restaurants-page/restaurants-page.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { AboutComponent } from './pages/about/about/about.component';
import { MealsComponent } from './pages/meals/meals.component';
import { FooterComponent } from './layout/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// defining routes
const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'about', component: AboutComponent },
  { path: 'restaurants', component: RestaurantsPageComponent },
  { path: 'meals', component: MealsComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];
// setting up lottie
// export function playerFactory() {
//   return player;
// }
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    RestaurantsPageComponent,
    NavbarComponent,
    AboutComponent,
    MealsComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    RouterModule.forRoot(routes),
    // LottieModule.forRoot({ player: playerFactory }),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
