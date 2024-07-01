import {ChangeDetectionStrategy, Component} from '@angular/core';
import {
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
} from '@angular/material/dialog';

@Component({
    selector: 'app-app-dialog',
    standalone: true,

    templateUrl: './app-dialog.component.html',
    imports: [
        MatDialogTitle,
        MatDialogContent,
        MatDialogActions,
        MatDialogClose,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppDialogComponent {}
