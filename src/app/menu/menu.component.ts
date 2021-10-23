import { Component, OnInit, Inject } from '@angular/core';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(//private _bottomSheetRef: MatBottomSheetRef<AppComponent>,
    private route: ActivatedRoute,
    private router: Router,
    private dialogRef: MatDialogRef<MenuComponent>) { }

  ngOnInit(): void {
  }

  openItem(event: MouseEvent): void {
    // this._bottomSheetRef.dismiss();
    this.dialogRef.close();
    event.preventDefault();
  }
}
