import { Component } from '@angular/core';
import { FoodsService } from 'src/app/services/foods.service';
import { ResultInstance } from 'src/interfaces/MenuItems';
@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.css'],
})
export class MealsComponent {
  constructor(private foodService: FoodsService) {}

  mealInput!: string;
  meals: ResultInstance[] | undefined ;


  search(){
    if(!this.mealInput){
      alert('pleas enter something');
      return;
    }
    this.foodService.searchMeals(this.mealInput).subscribe((data) => {this.meals = data.results;})
  }
}
