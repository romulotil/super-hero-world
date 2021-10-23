import { Component, OnInit, Inject } from '@angular/core';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(//private _bottomSheetRef: MatBottomSheetRef<AppComponent>,
    public dialogRef: MatDialogRef<MenuComponent>) { }

  ngOnInit(): void {
  }

  openItem(event: MouseEvent): void {
    // this._bottomSheetRef.dismiss();
    this.dialogRef.close();
    event.preventDefault();
  }
}
