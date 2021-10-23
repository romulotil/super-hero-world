import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LightTowerComponent } from './light-tower.component';

describe('LightTowerComponent', () => {
  let component: LightTowerComponent;
  let fixture: ComponentFixture<LightTowerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LightTowerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LightTowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
