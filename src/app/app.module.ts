import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet'
import { MatListModule } from '@angular/material/list';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { HomePageComponent } from './home-page/home-page.component'
import { MenuComponent } from './menu/menu.component';
import { AcademyPageComponent } from './academy-page/academy-page.component';
import { FortressPageComponent } from './fortress-page/fortress-page.component';
import { MinionLabComponent } from './minion-lab/minion-lab.component';
import { EvilShopComponent } from './evil-shop/evil-shop.component';
import { MonsterLabComponent } from './monster-lab/monster-lab.component';
import { EvilCommandersComponent } from './evil-commanders/evil-commanders.component';
import { EvilPartyComponent } from './evil-party/evil-party.component';
import { DarknessRealmComponent } from './darkness-realm/darkness-realm.component';
import { HeroSchoolComponent } from './hero-school/hero-school.component';
import { TeamMakerComponent } from './team-maker/team-maker.component';
import { HeadquarterComponent } from './headquarter/headquarter.component';
import { TechLabComponent } from './tech-lab/tech-lab.component';
import { LightTowerComponent } from './light-tower/light-tower.component'

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    MenuComponent,
    AcademyPageComponent,
    FortressPageComponent,
    MinionLabComponent,
    EvilShopComponent,
    MonsterLabComponent,
    EvilCommandersComponent,
    EvilPartyComponent,
    DarknessRealmComponent,
    HeroSchoolComponent,
    TeamMakerComponent,
    HeadquarterComponent,
    TechLabComponent,
    LightTowerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatDialogModule,
    MatBottomSheetModule,
    MatListModule,
    MatIconModule
  ],
  providers: [
    {
      provide: MatDialogRef,
      useValue: {}
    }
  ],
  entryComponents: [
    MenuComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
