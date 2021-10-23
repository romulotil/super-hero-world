import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroSchoolComponent } from './hero-school.component';

describe('HeroSchoolComponent', () => {
  let component: HeroSchoolComponent;
  let fixture: ComponentFixture<HeroSchoolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroSchoolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroSchoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
