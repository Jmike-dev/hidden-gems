import { Component } from '@angular/core';
import { FoodsService } from 'src/app/services/foods.service';
@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.css'],
})
export class MealsComponent {
  constructor(private foodService: FoodsService) {}

  mealInput!: string;

  search() {
    this.foodService.searchMeals(this.mealInput).subscribe(data => console.log(data));
  }
}
