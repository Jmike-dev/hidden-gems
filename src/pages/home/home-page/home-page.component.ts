// import { AnimationOptions } from '@angular/animations';
import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { FooterComponent } from '../../../layout/footer/footer.component';
import { Router, RouterLink } from '@angular/router';
import { ButtonComponent } from 'src/components/button/button.component';

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    standalone: true,
    imports: [NgOptimizedImage, RouterLink, FooterComponent,ButtonComponent],
})
export class HomePageComponent {
    constructor(private router:Router ) {}
    onCLick = () =>{
        this.router.navigateByUrl('/meals')
    }
}
