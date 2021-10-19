import { Component } from '@angular/core';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';
import { MenuComponent } from './menu/menu.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'super-hero-world';
  constructor(private _bottomSheet: MatBottomSheet) {}

  openMenu() {
    this._bottomSheet.open(MenuComponent);
  }
}
