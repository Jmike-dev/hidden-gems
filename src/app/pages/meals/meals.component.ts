import { Component, input } from '@angular/core';
import { FoodsService } from 'src/app/services/foods.service';
import { ResultInstance } from 'src/interfaces/MenuItems';
import { RecipeDialogComponent } from 'src/app/utils/recipe-dialog/recipe-dialog.component';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.css'],
  imports: [RecipeDialogComponent, CommonModule, ReactiveFormsModule],
  standalone: true,
})
export class MealsComponent {
  constructor(private foodService: FoodsService) {}
  appForm = new FormGroup({
    mealInput: new FormControl(''),
  });
  meals: ResultInstance[] | undefined;

  search() {
    if (!this.appForm.value.mealInput) {
      alert('kindly Type In One Ingrident');
      return;
    }
    this.foodService
      .searchMeals(this.appForm.value.mealInput)
      .subscribe((data) => {
        this.meals = data.results;
      });
  }
}
