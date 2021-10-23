import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MenuComponent } from './menu/menu.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'super-hero-world';
  constructor(
    public dialog: MatDialog) { }

  openMenu() {
    const dialogRef = this.dialog.open(MenuComponent, {
      width: '100vw',
      // data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log('The dialog was closed');
      // this.animal = result;
    });
  }
}
