import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { provideAnimations } from '@angular/platform-browser/animations';
import { MealsComponent } from './app/pages/meals/meals.component';
import { RestaurantsPageComponent } from './app/pages/restaurants/restaurants-page/restaurants-page.component';
import { AboutComponent } from './app/pages/about/about/about.component';
import { HomePageComponent } from './app/pages/home/home-page/home-page.component';
import { provideRouter, Routes } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app/app-routing.module';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'about', component: AboutComponent },
  { path: 'restaurants', component: RestaurantsPageComponent },
  { path: 'meals', component: MealsComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];



bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(BrowserModule, AppRoutingModule, FontAwesomeModule, FormsModule, NgOptimizedImage),
        provideHttpClient(withInterceptorsFromDi()),
        provideRouter(routes),
        provideAnimations()
    ]
})
  .catch((err) => console.error(err));
