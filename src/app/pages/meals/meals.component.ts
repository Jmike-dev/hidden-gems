import {Component, inject, ChangeDetectionStrategy} from '@angular/core';
import {FoodsService} from 'src/app/services/foods.service';
import {RecipeInstance} from 'src/interfaces/RecipeItems';
import {CommonModule} from '@angular/common';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import {RestaurantsPageComponent} from '../restaurants/restaurants-page/restaurants-page.component';
import {AppDialogComponent} from 'src/app/utils/app-dialog/app-dialog.component';
@Component({
    selector: 'app-meals',
    templateUrl: './meals.component.html',
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RestaurantsPageComponent,
        AppDialogComponent,
    ],
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MealsComponent {
    readonly dialog = inject(MatDialog);
    openRecipeDialog() {
        this.dialog.open(AppDialogComponent);
    }
    constructor(private foodService: FoodsService) {}
    appForm = new FormGroup({
        mealInput: new FormControl(''),
    });
    meals: RecipeInstance[] | undefined;

    searchMeal() {
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
