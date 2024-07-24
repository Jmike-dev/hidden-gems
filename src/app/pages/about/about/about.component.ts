import { Component } from '@angular/core';
import { FooterComponent } from '../../../layout/footer/footer.component';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    standalone: true,
    imports: [FooterComponent],
})
export class AboutComponent {}
