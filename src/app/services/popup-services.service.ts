import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
//component we just created
import { AppPopupComponent } from '../utils/app-popup/app-popup.component';
@Injectable()
export class PopupService {
  constructor(private dialog: MatDialog) {}

  open(data: any) {
    return this.dialog.open(AppPopupComponent, {
      data: data,
    });
  }
}
