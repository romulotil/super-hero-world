import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DarknessRealmComponent } from './darkness-realm.component';

describe('DarknessRealmComponent', () => {
  let component: DarknessRealmComponent;
  let fixture: ComponentFixture<DarknessRealmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DarknessRealmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DarknessRealmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
