import { Component } from '@angular/core';
import { PopupService } from 'src/app/services/popup-services.service';

@Component({
  selector: 'app-app-popup',
  templateUrl: './app-popup.component.html',
})
export class AppPopupComponent {
  constructor(private _dialog: PopupService) {
    //open the dialog
    let ref = this._dialog.open({ name: 'First Last' });
    //close the dialog
    ref.close();
  }
  
  
}
