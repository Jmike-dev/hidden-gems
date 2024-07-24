import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-restaurants-page',
    templateUrl: './restaurants-page.component.html',
    standalone: true,
    imports: [RouterLink],
})
export class RestaurantsPageComponent {}
