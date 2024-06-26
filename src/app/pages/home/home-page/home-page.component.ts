// import { AnimationOptions } from '@angular/animations';
import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { FooterComponent } from '../../../layout/footer/footer.component';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    standalone: true,
    imports: [
        NgOptimizedImage,
        RouterLink,
        FooterComponent,
    ],
})
export class HomePageComponent {
 
  constructor() {}


}
