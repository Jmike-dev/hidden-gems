import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AppDialogComponent } from '../app-dialog/app-dialog.component';
import { IngredientsInstance } from 'src/interfaces/RecipeItems';
import { FoodsService } from 'src/app/services/foods.service';

@Component({
    selector: 'app-meal-info-card',
    standalone: true,
    imports: [],
    templateUrl: './meal-info-card.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MealInfoCardComponent {
    constructor(
        private foodService: FoodsService,
        public dialog: MatDialog
    ) {}
    @Input() MealImage = '';
    @Input() MealTitle = '';
    @Input() MealId = 0;

    ingredientInfo: IngredientsInstance[] | undefined;

    openRecipeDialog(
        recipeTitle: string,
        recipeInstructions: string,
        enterAnimationDuration: string,
        exitAnimationDuration: string
    ) {
        this.dialog.open(AppDialogComponent, {
            data: {
                recipeTitle: recipeTitle,
                recipeInstructions: recipeInstructions,
            },
            enterAnimationDuration,
            exitAnimationDuration,
        });
    }
    showData() {
        this.foodService.searchIngredients(this.MealId).subscribe((data) => {
            this.ingredientInfo = data.extendedIngredients;
            console.log(data.instructions);
            this.openRecipeDialog(
                data.title,
                data.instructions,
                '400ms',
                '400ms'
            );
        });
    }
}
