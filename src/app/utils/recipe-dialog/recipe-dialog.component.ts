import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-recipe-dialog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recipe-dialog.component.html'
})
export class RecipeDialogComponent {
  visible:boolean = false;

  showDialog(){
    this.visible = true;
  }

}
