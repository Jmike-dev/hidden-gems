// import { AnimationOptions } from '@angular/animations';
import { Component } from '@angular/core';
// import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie/lib/symbols';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {
  // This is the option that uses the package's AnimationOption interface
  options: AnimationOptions = {
    path: '../../../../assets/lottie/right-arrow.json',
  };

  constructor() {}


}
