import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcademyPageComponent } from './academy-page/academy-page.component';
import { DarknessRealmComponent } from './darkness-realm/darkness-realm.component';
import { EvilCommandersComponent } from './evil-commanders/evil-commanders.component';
import { EvilPartyComponent } from './evil-party/evil-party.component';
import { EvilShopComponent } from './evil-shop/evil-shop.component';
import { FortressPageComponent } from './fortress-page/fortress-page.component';
import { HeadquarterComponent } from './headquarter/headquarter.component';
import { HeroSchoolComponent } from './hero-school/hero-school.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LightTowerComponent } from './light-tower/light-tower.component';
import { MinionLabComponent } from './minion-lab/minion-lab.component';
import { MonsterLabComponent } from './monster-lab/monster-lab.component';
import { TeamMakerComponent } from './team-maker/team-maker.component';
import { TechLabComponent } from './tech-lab/tech-lab.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { 
    path: 'academy', component: AcademyPageComponent,
    children: [
      { path: '', pathMatch:'full', redirectTo: 'light-tower' },
      { path: 'light-tower', component: LightTowerComponent },
      { path: 'tech-lab', component: TechLabComponent },
      { path: 'headquarter', component: HeadquarterComponent },
      { path: 'team-maker', component: TeamMakerComponent },
      { path: 'school', component: HeroSchoolComponent }
    ]
  },
  {
    path: 'fortress', component: FortressPageComponent,
    children: [
      { path: '', pathMatch:'full', redirectTo: 'dark-realm' },
      { path: 'dark-realm', component: DarknessRealmComponent },
      { path: 'commanders', component: EvilCommandersComponent },
      { path: 'party', component: EvilPartyComponent },
      { path: 'shop', component: EvilShopComponent },
      { path: 'labs', component: MinionLabComponent },
      { path: 'monsters', component: MonsterLabComponent }
    ]
  },
  // { path: '**', pathMatch:'full', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
