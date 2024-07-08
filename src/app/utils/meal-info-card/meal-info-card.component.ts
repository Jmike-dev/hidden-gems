import { ChangeDetectionStrategy, Component, inject, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AppDialogComponent } from '../app-dialog/app-dialog.component';

@Component({
    selector: 'app-meal-info-card',
    standalone: true,
    imports: [AppDialogComponent],
    templateUrl: './meal-info-card.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MealInfoCardComponent {
    @Input() MealImage = '';
    @Input() MealTitle = '';
    @Input() MealId = 0;

    readonly dialog = inject(MatDialog);
    openRecipeDialog() {
        this.dialog.open(AppDialogComponent);
    }
}
