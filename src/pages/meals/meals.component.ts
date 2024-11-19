import { Component } from '@angular/core';
import { FoodsService } from 'src/services/foods.service';
import { RecipeInstance } from 'src/models/RecipeItems';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RestaurantsPageComponent } from '../restaurants/restaurants-page/restaurants-page.component';
import { MealInfoCardComponent } from 'src/components/meal-info-card/meal-info-card.component';
@Component({
    selector: 'app-meals',
    templateUrl: './meals.component.html',
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RestaurantsPageComponent,
        MealInfoCardComponent,
    ],
    standalone: true,
})
export class MealsComponent {
    constructor(private foodService: FoodsService) {}
    appForm = new FormGroup({
        mealInput: new FormControl(''),
    });
    meals: RecipeInstance[] | undefined;

    searchRecipe() {
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
